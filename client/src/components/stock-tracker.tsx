"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Stock {
  symbol: string;
  price: number;
}

const StockTracker = () => {
  const [stocks, setStocks] = useState<[Stock] | []>([]);
  const [selectedStock, setSelectedStock] = useState("");
  const [selectedPrice, setSelectedPrice] = useState<number | null | undefined>(
    null
  );
  async function fetchStocks() {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ROUTE}/stocks/all`
    );
    setStocks(response.data.stocks);
  }

  async function fetchUpdatedStockPrice() {
    const updatedStocks = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ROUTE}/stocks/update-stocks`
    );
    const stock = updatedStocks.data.stocks.filter(
      (stock: any) => stock.symbol === selectedStock
    );
    setSelectedPrice(stock[0].price);
  }
  useEffect(() => {
    fetchStocks();
  }, []);

  useEffect(() => {
    let id: NodeJS.Timeout | undefined;
    if (selectedStock === "") {
      if (id) clearInterval(id);
      setSelectedPrice(null);
      return;
    } else {
      // Clear the previous interval if it exists
      if (id) clearInterval(id);
      // Fetch and set the selected stock price immediately
      fetchUpdatedStockPrice();
      // update the value every 60 seconds (polling every 60 secs)
      id = setInterval(fetchUpdatedStockPrice, 60000);
    }

    return () => {
      clearInterval(id);
    };
  }, [selectedStock, stocks]);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h2>Price Updates every 60 seconds</h2>
      <select
        name="stocks"
        id="stocks"
        className="w-56"
        onChange={(e) => setSelectedStock(e.target.value)}
      >
        <option value="">Select a stock from the list</option>
        {stocks.map((stock) => (
          <option value={stock.symbol} key={stock.symbol}>
            {stock.symbol}
          </option>
        ))}
      </select>
      {selectedStock && (
        <p>
          Current Price of {selectedStock}: {selectedPrice}
        </p>
      )}
    </div>
  );
};

export default StockTracker;

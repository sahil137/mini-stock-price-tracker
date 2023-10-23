# Mini Stock Price Tracker

A mini stock price tracker is a web application that allows users to monitor the prices of their favorite stocks in real-time. This project is built using the MERN (MongoDB, Express, React, Node.js) stack.

## Technologies Used

Frontend:
React: A JavaScript library for building user interfaces.
React-Router: For client-side routing.
React-Chartjs-2: A React wrapper for Chart.js to display stock price history.
Axios: A promise-based HTTP client for making API requests.
Backend:
Node.js: A JavaScript runtime for building server-side applications.
Express: A web application framework for Node.js.
MongoDB: A NoSQL database for storing stock data.
Mongoose: An Object Data Modeling (ODM) library for MongoDB

## Installation

    Clone the Repository:
    git clone https://github.com/sahil137/mini-stock-price-tracker.git
    cd mini-stock-price-tracker

    Install dependencies by traversing to client and server and run the following command:
    npm install

    In the server folder create a .env file and add MONGO_URI and add a link to your mongodb database.
    Before starting the project navigate to scripts folder and add your mongodb link on line 20 and run node addStockData.js to add data to the db.

    Add .env.local file in client folder and add variable NEXT_PUBLIC_API_ROUTE with link to backend base url

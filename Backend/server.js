const express = require("express");
const cors = require("cors");

const app = express();


// Allow frontend to communicate with backend
app.use(cors());


// Read JSON data
app.use(express.json());


// Home route
app.get("/", (req, res) => {

    res.json({
        message: "MegaStore Backend is Running Successfully!"
    });

});


// Message API
app.get("/api/message", (req, res) => {

    res.json({
        message:
        "Hello from MegaStore Backend! Your frontend is connected successfully."
    });

});


// Product API
app.get("/api/products", (req, res) => {

    const products = [

        {
            id: 1,
            name: "Smart Watch",
            price: 2999
        },

        {
            id: 2,
            name: "Wireless Headphones",
            price: 1999
        },

        {
            id: 3,
            name: "Bluetooth Speaker",
            price: 1499
        }

    ];

    res.json(products);

});


// Server port
const PORT =
    process.env.PORT || 5000;


// Start server
app.listen(PORT, "0.0.0.0", () => {

    console.log(
        `Server running on port ${PORT}`
    );

});

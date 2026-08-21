const express = require("express");
const cors = require("cors");

const app = express();


// Allow frontend to connect
app.use(cors());


// Allow JSON data
app.use(express.json());


// Home API
app.get("/", (req, res) => {

    res.json({
        message:
        "MegaStore Backend is Running Successfully!"
    });

});


// Message API
app.get("/api/message", (req, res) => {

    res.json({

        message:
        "Hello from MegaStore Backend! Frontend connected successfully."

    });

});


// Products API
app.get("/api/products", (req, res) => {

    res.json([

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

    ]);

});


// Port
const PORT =
    process.env.PORT || 5000;


// Start server
app.listen(PORT, () => {

    console.log(
        "MegaStore Backend running on port "
        + PORT
    );

});

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors')
const userRoutes = require("./routes/users");

const app = express();

const port = process.env.PORT || 9000;

// ROUTES

app.get("/", cors(), async (req, res) => {
 console.log('api call succesfull')
 res.send("Welcome to my api");
});

// MIDDLEWARES

app.use(express.json())
app.use("/api", userRoutes);
app.use(cors())

// MONGODB CONNECTION

mongoose
 .connect(process.env.MONGODB_URI)
 .then(() => console.log("Connected to MongoDB Atlas"))
 .catch((err) => console.error(err));

app.listen(port, () => {
 console.log(`Server listening on port ${port}`);
});

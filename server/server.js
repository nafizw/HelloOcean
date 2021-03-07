const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.get("/api", (req, res) => {
    res.send("API is running...from api route");
});
app.get("/api/test", (req, res) => {
    res.send("API is running.. test route");
});
app.get("/api/xxx", (req, res) => {
    res.send("xxx xxx xxx");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});

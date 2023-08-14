const express = require('express');
const app = express();

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
        "statusCode": res.statusCode,
        "Content-Type": "text/json"
    });
});

app.get("/api", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
        "statusCode": res.statusCode,
        "Content-Type": "text/json"
    });
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
const express = require("express");
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome to the Scraper API");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

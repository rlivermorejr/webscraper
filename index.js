const express = require("express");
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = "b8db8f63baa02f5383c2e9dee8cf8be0";
const BASE_URL = `http://api.scraperapi.com?api_key=${API_KEY}&autoparse=true`;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome to the Scraper API");
});

// Get Product Details
app.get("/products/:productId", async (req, res) => {
	const { productId } = req.params;

	try {
		const response = await request(`${BASE_URL}&url=https://www.amazon.com/dp/${productId}`);
		res.json(JSON.parse(response));
	} catch (error) {
		res.json(error);
	}
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

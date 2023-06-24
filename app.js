/** @format */

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("¡Hello world!");
});

app.listen(port, () => {
	console.log(`The server is listening on the port ${port}`);
});

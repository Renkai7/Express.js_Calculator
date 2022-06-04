const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// home page
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

// Handles posts from home page
app.post("/", function (req, res) {
	// values were stored using body-parser
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);

	var result = num1 + num2;

	res.send("Result: " + result);
});

app.listen(3000, function () {
	console.log("Server started on port 3000");
});

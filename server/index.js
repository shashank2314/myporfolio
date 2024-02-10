
const Contact = require("./routes/Contact")
const { dbconnect }=require("./config/database");
const cors = require("cors");

const express = require("express");
const app = express();


dbconnect();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(
	cors({
		origin:"*",
		credentials:true,
	})
)

app.use("/api/v1",Contact)


app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});


app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

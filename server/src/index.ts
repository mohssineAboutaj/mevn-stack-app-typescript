// import some modules
import express, { Application, Router } from "express";
const cors = require("cors");
import { urlencoded, json } from "body-parser";

// init the app
const app: Application = express();

// use & init some middleware
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

// define some important variables
const port: number = Number(process.env.PORT) || 7800;

// import custom modules
const posts: Router = require("./routes/posts");

app.use("/api/posts", posts);

app.listen(port, () => {
	console.log(`App is running on port ${port}`);
});

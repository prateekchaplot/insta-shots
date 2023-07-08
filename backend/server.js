import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

// App config
const app = express();
dotenv.config();

const port = process.env.port || 9000;
const connection_url = process.env.CONNECTION_URL;

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.status(200).send("Hello world"));

app.listen(port, () => console.log(`Listening on localhost:${port}`));

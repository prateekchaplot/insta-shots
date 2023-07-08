import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import Videos from "./dbModel.js";
import Cors from "cors";

// App config
const app = express();
dotenv.config();

const port = process.env.port || 9000;
const connection_url = process.env.CONNECTION_URL;

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(Cors());

app.get("/", (req, res) => res.status(200).send("Hello world"));

app.post("/v2/posts", (req, res) => {
  const videos = req.body;
  Videos.insertMany(videos)
    .then((data) => res.status(201).send(data))
    .catch((err) => res.status(500).send(err));
});

app.get("/v2/posts", (req, res) => {
  Videos.find()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => console.log(`Listening on localhost:${port}`));

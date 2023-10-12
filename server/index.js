import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import connectDB from "./config/db.js";

import users from "./routes/apis/users.js";
import exchange from "./routes/apis/exchanges.js";

const app = express();
const port = 3000;

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use(cors());

// connect database
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", users);
app.use("/api/exchange", exchange);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

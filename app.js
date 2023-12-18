const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./Routes/AuthRoutes");

dotenv.config({ path: "./config.env" });
const app = express();
const cookieParser = require("cookie-parser");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.unsubscribe(cookieParser());
app.use(express.json());
app.use("/", authRoute);

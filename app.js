require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const menuItemRouter = require("./routes/menu_item_routes");
const app = express();
const port = process.env.PORT || 3000;

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const rateLimiter = require("express-rate-limit");

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests
    message: "Too many requests, please try again later.",
  }),
);
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/v1/menu-items", menuItemRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();

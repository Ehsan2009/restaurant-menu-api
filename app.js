require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const menuItemRouter = require("./routes/menu_item_routes")
const app = express();
const port = process.env.PORT || 3000;

app.use("/api/v1/menu-items", menuItemRouter)

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

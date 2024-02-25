const express = require("express");
const cors = require("cors");
const app = express();
const { PORT } = require("dotenv").config().parsed;

require("./config/connection");

app.use(express.json());
app.use(cors());

//Routes
const categoryRouter = require("./routes/categoryRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const imageRouter = require("./routes/imageRouter");

app.use("/api/categorys", categoryRouter);
app.use("/api/products", productRouter);
app.use("/api/users",userRouter);
app.use("/api/images",imageRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import router from "./routes/petRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());
/* app.use(morgan("combined")); */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use("/", router);

app.use((req, res, next) => {
  const error = new Error(`${req.url} not found in this server`);
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ erro: error.message });
});

export default app;

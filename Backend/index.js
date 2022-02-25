import express from "express";
import dovenv from "dotenv/config";
import Color from "colors";
import apiEmp from "./Routes/employerRouter.js";
import apiCli from "./Routes/clientsRouter.js";
import apiArt from "./Routes/articlesRouter.js";
import apiSdl from "./Routes/slideRouter.js";
import apiSrv from "./Routes/servicesRouter.js";
import errorHandler from "./Middleware/errorMiddleware.js";
import connectDB from "./Config/database.js";
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", apiEmp);
app.use("/api/employers", apiEmp);
app.use("/api/articles", apiArt);
app.use("/api/slides", apiSdl);
app.use("/api/services", apiSrv);
app.use("/api/clients", apiCli);
app.use(errorHandler);
//port listen
app.listen(port);

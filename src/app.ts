import hbs from "hbs";
import "./db/mongoose";
import path from "path";
import express from "express";
import linkRouter from "./routers/link";

const app = express();

const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

app.use(express.json());
app.use(linkRouter);

export default app;

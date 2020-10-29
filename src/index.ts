import express, { Application, Request, Response } from "express";
import { JoiValidationExample } from "./middlewares";

const app: Application = express();
const port: number = 8080;

app.post("/", JoiValidationExample, (_req: Request, res: Response) => {
  res.json({ hello: "world" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

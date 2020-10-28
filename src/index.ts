import * as express from "express";

const app: express.Application = express();
const port: number = 8080;

app.post("/", (_req: express.Request, res: express.Response) => {
  res.json({ hello: "world" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

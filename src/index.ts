import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import { JoiValidationExample, JoiValidationExample2 } from "./middlewares";
import {
  validateCreateTransaction,
  CreateTransactionSchema,
} from "./validationSchemas/joi";

const app: Application = express();
const port: number = 8080;

app.use(bodyParser.json());

app.post(
  "/joi-example-1",
  JoiValidationExample(validateCreateTransaction),
  (_req: Request, res: Response) => {
    res.json({ hello: "world" });
  }
);

app.post(
  "/joi-example-2",
  JoiValidationExample2(CreateTransactionSchema),
  (_req: Request, res: Response) => {
    res.json({ hello: "world" });
  }
);

app.use((err, _req: Request, res: Response) => {
  if (err) {
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

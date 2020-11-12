import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import { JoiValidationExample, JoiValidationExample2 } from "./middlewares";
import {
  validateCreateRequest,
  CreateRequestSchema,
} from "./validationSchemas/joi";

const app: Application = express();
const port: number = 8080;

app.use(bodyParser.json());

app.post(
  "/joi-example-1",
  JoiValidationExample(validateCreateRequest),
  (_req: Request, res: Response) => {
    res.json({ isValid: true });
  }
);

app.post(
  "/joi-example-2",
  JoiValidationExample2(CreateRequestSchema),
  (_req: Request, res: Response) => {
    res.json({ isValid: true });
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

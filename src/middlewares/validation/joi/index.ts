import { Request, Response, NextFunction } from "express";
import { Schema as JoiSchema } from "joi";
import joiErrorHelper from "../../../helpers/joiErrorHelper";

const JoiValidationExample = (validateFn: Function) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("joiValidationExample called");
  const isValid = await validateFn(req.body);
  if (isValid) {
    next();
  } else {
    return res.status(500).json({
      isValid: false,
      message: "Something went wrong",
    });
  }
};

const JoiValidationExample2 = (schema: JoiSchema) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("joiValidationExample2 called");
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (e) {
    const { httpStatus, errors } = joiErrorHelper(e);

    return res.status(httpStatus).json({
      isValid: false,
      errors,
    });
  }
};

export { JoiValidationExample, JoiValidationExample2 };

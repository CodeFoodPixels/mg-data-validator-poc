import { Request, Response, NextFunction } from "express";

const ValidatorjsValidationExample = (schema: JoiSchema) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("ValidatorjsValidationExample2 called");
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (e) {
    // const { httpStatus, errors } = joiErrorHelper(e);

    // return res.status(httpStatus).json({
    //   success: false,
    //   errors,
    // });
  }
};

export default ValidatorjsValidationExample;

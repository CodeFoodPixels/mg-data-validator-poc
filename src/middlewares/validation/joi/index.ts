import { Request, Response, NextFunction } from "express";

const JoiValidationExample = async (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  console.log("joiValidationExample called");
  
  next();
};

export default JoiValidationExample;

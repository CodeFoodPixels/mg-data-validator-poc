import { Request, Response, NextFunction } from "express";

const ValidatejsValidationExample = async (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  console.log("ValidatejsValidationExample called");
  
  next();
};

export default ValidatejsValidationExample;

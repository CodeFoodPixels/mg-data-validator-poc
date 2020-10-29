import { ValidationError } from "joi";

// using a function like this, we can properly break down the joi errors and generate an array of specific errors
const joiErrorHelper = (error: ValidationError) => {
  const errors = error.details.map((e, i) => {
    return {
      code: i + 1,
      message: e.message,
    };
  });

  return {
    httpStatus: 500,
    errors,
  };
};

export default joiErrorHelper;

import { ValidationError } from "joi";

// using a function like this, we can properly break down the joi errors and generate an array of specific errors
const joiErrorHelper = (error: ValidationError) => {
  const errors = error.details.map((e, i) => {
    const errorCode = i + 1;

    // this message is just purely for demonstaration. using the switch cases below, we can easily just have custom error classes or anything else.
    let message = "";

    switch (e.context?.label) {
      // label is the name of the object property. the label of a field can be changed by using the 'label' method on the schema. see 'dateTimeCreated' in the CreateTransaction schema.
      case "code":
        message = "I dont like the code that you have provided.";
        break;

      case "createdAt":
        // more complex example where a field can have multiple errors. all possible error types can be found here: https://github.com/sideway/joi/blob/master/API.md#list-of-errors
        switch (e.type) {
          case "date.format":
            message = "The date format you have provided is incorrect";
            break;
          case "date.min":
            message = "Please provide a date that is today or before.";
          default:
            message = "I dont like the creation date time you have provided.";
            break;
        }
        break;

      default:
        message = "Something went wrong";
        break;
    }

    return {
      code: errorCode,
      message: message || e.message,
      fieldName: e.context?.label,
    };
  });

  return {
    httpStatus: 500,
    errors,
  };
};

export default joiErrorHelper;

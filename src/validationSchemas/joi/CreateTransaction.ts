import Joi from "joi";

import {
  IsValidInterface,
  CreateRequest,
  Address,
  LineItem,
  // OrderTaxRecordType
} from "../../types";

export const ShippingAddressSchema = Joi.object<Address>({
  line1: Joi.string(),
  line2: Joi.string(),
  city: Joi.string(),
  country: Joi.string(),
  postcode: Joi.string(),
  region: Joi.string()
})

export const LineItemSchema = Joi.object<LineItem>({
  quantity: Joi.number().required(),
  amount: Joi.number().when('....type', {
    switch: [
      { is: "SalesInvoice", then: Joi.number().positive() },
      { is: "ReturnInvoice", then: Joi.number().negative() },
    ],
  }).required(),
  itemCode: Joi.string().required()
})

export const CreateRequestSchema = Joi.object<CreateRequest>({
  shippingAmount: Joi.number().required(),
  currencyCode: Joi.string().required(),
  date: Joi.date().iso().max("now").required(),
  lineItems: Joi.array().items(LineItemSchema),
  shipTo: ShippingAddressSchema,
  type: Joi.string().valid("SalesInvoice", "ReturnInvoice").required()
});

const validateCreateRequest: IsValidInterface<CreateRequest> = async (
  data
) => {
  try {
    await CreateRequestSchema.validateAsync(data, { abortEarly: false });
    return true;
  } catch (e) {
    console.log("joi validation error", JSON.stringify(e, null, 2));
    return false;
  }
};

export default validateCreateRequest;

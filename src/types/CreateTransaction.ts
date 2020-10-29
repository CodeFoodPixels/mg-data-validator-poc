import Addresses from "./Addresses";

export interface FooBar {
  foo: string;
  bar: number;
}

export default interface CreateTransaction {
  id: number;
  code: string;
  dateTimeCreated: Date;
  dateTimeCompleted: Date;
  addresses: Array<Addresses>;
  stringOrNumberOrObj: string | number | FooBar;
}

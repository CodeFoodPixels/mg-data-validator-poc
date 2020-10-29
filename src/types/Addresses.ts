import AddressLocationInfo from "./AddressLocationInfo";

export default interface Addresses {
  shipFrom?: AddressLocationInfo;
  shipTo?: AddressLocationInfo;
}

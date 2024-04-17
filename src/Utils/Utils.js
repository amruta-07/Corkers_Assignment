import { Constants } from "./Constants";

export const validateData = (data) => {
  const nameRegex = /^[A-Za-z\s]+$/;
  const addressRegex = /^[A-Za-z0-9\s\.,-]+$/;
  const pincodeRegex = /^[0-9]{6}$/;
  const mobileNumberRegex = /^[0-9]{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const websiteRegex = /^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/;

  if (!data.name.trim()) {
    alert(Constants.EMPTY_NAME);
    return false;
  }
  if (!data.address.trim()) {
    alert(Constants.EMPTY_ADDRESS);
    return false;
  }
  if (!data.pincode.trim()) {
    alert(Constants.EMPTY_PINCODE);
    return false;
  }
  if (!data.mobileNumber.trim()) {
    alert(Constants.EMPTY_MOBILE_NUMBER);
    return false;
  }
  if (!data.email.trim()) {
    alert(Constants.EMPTY_EMAIL);
    return false;
  }
  if (!data.website.trim()) {
    alert(Constants.EMPTY_WEBSITE);
    return false;
  }

  if (!nameRegex.test(data.name)) {
    alert(Constants.INVALID_NAME);
    return false;
  }
  if (!addressRegex.test(data.address)) {
    alert(Constants.INVALID_ADDRESS);
    return false;
  }
  if (!pincodeRegex.test(data.pincode)) {
    alert(Constants.INVALID_PINCODE);
    return false;
  }
  if (!mobileNumberRegex.test(data.mobileNumber)) {
    alert(Constants.INVALID_MOBILE_NUMBER);
    return false;
  }
  if (!emailRegex.test(data.email)) {
    alert(Constants.INVALID_EMAIL);
    return false;
  }
  if (!websiteRegex.test(data.website)) {
    alert(Constants.INVALID_WEBSITE);
    return false;
  }

  return true; // Validation passed
};

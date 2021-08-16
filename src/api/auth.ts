import axios from "axios";
import Config from "./config";

export const requestOtp = async (mobileNumber: string) =>
  await axios.post(
    `https://${Config.hostUrl}/${Config.version}/volunteers/otp/request`,
    { telephone: mobileNumber },
    { headers: { "Content-Type": "application/json" } }
  );

export const verifyOtp = async (
  otp: number,
  requestId: string,
  mobileNumber: string
) =>
  await axios.post(
    `https://${Config.hostUrl}/${Config.version}/volunteers/otp/verify`,
    {
      requestId,
      telephone: mobileNumber,
      code: `${otp}`,
    },
    { headers: { "Content-Type": "application/json" } }
  );

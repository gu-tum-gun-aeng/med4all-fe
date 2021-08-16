import { writable } from "svelte/store";

const requestId = writable("");
const mobileNumber = writable("");

export const setRequestId = (reqId: string) => requestId.set(reqId);
export const getRequestIdSubscription = () => requestId.subscribe;

export const setMobileNumber = (mobileNum: string) =>
  mobileNumber.set(mobileNum);
export const getMobileNumberSubscription = () => mobileNumber.subscribe;

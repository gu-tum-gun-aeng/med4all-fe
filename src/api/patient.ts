import axios from "axios";
import Config from "./config";

export const uploadImage = async (formData) =>
  await axios.post(
    `https://${Config.hostUrl}/${Config.version}/patients/upload`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );

export const submitForm = async (formData, token) =>
  await axios.post(
    `https://${Config.hostUrl}/${Config.version}/patients`,
    formData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

type S3Image = {
  key: string;
  url: string;
};

export type UploadImageSuccessResponseData = {
  results: S3Image[];
};

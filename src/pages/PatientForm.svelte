<script lang="ts">
  import { Form, Button } from "carbon-components-svelte";
  import { uploadImage } from "../api/patient";
  import type { UploadImageSuccessResponseData } from "../api/patient";
  import ImageUploader from "../components/ImageUploader.svelte";
  import InfoForm from "../components/InfoForm.svelte";
  import LocationForm from "../components/LocationForm.svelte";
  import LabForm from "../components/LabForm.svelte";
  import Questionnaire from "../components/Questionnaire.svelte";
  import VaccineHistoryForm from "../components/VaccineHistoryForm.svelte";

  let imageUrl = {
    uploadedNationalIdCard: "",
    uploadedAntigenTesting: "",
  } as const;

  let nationalIdCardUploadStatus: "complete" | "edit" | "uploading" =
    "complete";

  const handleOnSubmit = () => {
    console.log(imageUrl);
  };

  const handleFileUpload = async (file: File, uploadedUrl: string) => {
    nationalIdCardUploadStatus = "uploading";
    if (!file) {
      nationalIdCardUploadStatus = "complete";
      return;
    }
    const formData = new FormData();
    formData.append(file.name, file);
    const response = await uploadImage(formData);
    const data: UploadImageSuccessResponseData = response.data;
    const [{ url }] = data.results;
    imageUrl[uploadedUrl] = url;
    nationalIdCardUploadStatus = "complete";
  };
</script>

<main>
  <h1>กรอกฟอร์มหน่อยจ้าแฮะๆ</h1>
  <div class="patient-form">
    <div class="file-uploader">
      <ImageUploader
        uploadCallback={(image) =>
          handleFileUpload(image, "uploadedNationalIdCard")}
        labelTitle="อัพโหลดรูปบัตรประชาชน"
        accept=".jpg,.jpeg,.png"
        buttonLabel="อัพโหลดรูปบัตรประชาชน"
        labelDescription="ขอนามสกุลไฟล์เป็น .jpg และ .png  ขนาดไม่เกิน 10mb"
      />
    </div>
    <div class="file-uploader">
      <ImageUploader
        uploadCallback={(image) =>
          handleFileUpload(image, "uploadedAntigenTesting")}
        labelTitle="อัพโหลดรูปทดสอบแอนติเจน"
        accept=".jpg,.jpeg,.png"
        buttonLabel="อัพโหลดรูปทดสอบแอนติเจน"
        labelDescription="ขอนามสกุลไฟล์เป็น .jpg และ .png  ขนาดไม่เกิน 10mb"
      />
    </div>
    <Form on:submit={handleOnSubmit}>
      <InfoForm />
      <LocationForm />
      <LabForm />
      <VaccineHistoryForm />
      <Questionnaire />
      <div class="submit-button-container">
        <Button type="submit">ส่งข้อมูล</Button>
      </div>
    </Form>
  </div>
</main>

<style scoped>
  main {
    padding: 40px;
  }

  .patient-form {
    margin-top: 30px;
  }

  .file-uploader {
    margin-bottom: 30px;
  }

  h1 {
    color: black;
    font-size: 40px;
    font-family: "IBM Plex Sans Thai";
    font-weight: 400;
  }

  .submit-button-container {
    margin-top: 100px;
  }
</style>

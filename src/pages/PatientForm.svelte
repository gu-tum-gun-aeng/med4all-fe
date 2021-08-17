<script lang="ts">
  import {
    TextInput,
    Form,
    NumberInput,
    Button,
    Row,
    Column,
  } from "carbon-components-svelte";
  import { uploadImage } from "../api/patient";
  import type { UploadImageSuccessResponseData } from "../api/patient";
  import ImageUploader from "../components/ImageUploader.svelte";
  import Questionnaire from "../components/Questionnaire.svelte";
  import LocationForm from "../components/LocationForm.svelte";
  import LabForm from "../components/LabForm.svelte";

  let patientPhone = "";
  let custodiaPhone = "";

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
      <div class="form-basic-info">
        <TextInput
          labelText="เลขบัตรประชาชน หรือ รหัสประจำตัวคนต่างด้าว หรือ เลขpassport"
          placeholder=""
        />
        <Row>
          <Column>
            <TextInput labelText="ชื่อจริง" placeholder="" />
          </Column>
          <Column>
            <TextInput labelText="นามสกุล" placeholder="" />
          </Column>
        </Row>
        <NumberInput max={150} min={15} value={15} label="อายุ" />
        <TextInput
          labelText="เบอร์โทรศัพท์ติดต่อผู้ป่วย"
          placeholder=""
          bind:value={patientPhone}
        />
        <TextInput
          labelText="เบอร์โทรศัพท์ญาติผู้ป่วย"
          placeholder=""
          bind:value={custodiaPhone}
        />
      </div>
      <LocationForm />
      <LabForm />
      <Questionnaire />
      <Button type="submit">ส่งข้อมูล</Button>
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

  .form-basic-info {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h1 {
    color: black;
    font-size: 40px;
    font-family: "IBM Plex Sans Thai";
    font-weight: 400;
  }
</style>

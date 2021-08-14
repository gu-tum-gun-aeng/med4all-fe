<script lang="ts">
  import {
    TextInput,
    Form,
    NumberInput,
    Button,
    Select,
    SelectItem,
  } from "carbon-components-svelte";
  import { uploadImage } from "../api/patient";
  import type { UploadImageSuccessResponseData } from "../api/patient";
  import ImageUploader from "../components/ImageUploader.svelte";
  import { searchAddressByZipcode } from "thai-address-database";
  import type { Addresses, AddressItem } from "../types/address";
  import Questionnaire from "../components/Questionnaire.svelte";

  let nationalIdCardImages: File[] = [];
  let antigenTestingImages: File[] = [];

  let zipcode: string = "";
  let addressItems: Addresses = [];
  $: {
    if (zipcode.length === 5) {
      addressItems = searchAddressByZipcode(zipcode);
    } else {
      addressItems = [];
    }
  }
  let district: string = "";
  let amphoe: string = "";
  let province: string = "";
  let subAddressItems: Addresses = [];
  $: {
    subAddressItems = addressItems.filter(
      (addressItem: AddressItem) => addressItem.district === district
    );
    if (subAddressItems.length > 0) {
      amphoe = subAddressItems[0].amphoe;
      province = subAddressItems[0].province;
    } else {
      amphoe = "";
      province = "";
    }
  }

  let imageUrl = {
    uploadedNationalIdCard: "",
    uploadedAntigenTesting: "",
  } as const;

  let nationalIdCardUploadStatus: "complete" | "edit" | "uploading" =
    "complete";

  const handleOnSubmit = (event) => {
    console.log(imageUrl);
  };

  const handleFileUpload = async (files: File[], uploadedUrl: string) => {
    nationalIdCardUploadStatus = "uploading";
    const [file] = files;
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
        labelTitle="อัพโหลดรูปบัตรประชาชน"
        accept=".jpg,.jpeg,.png"
        buttonLabel="อัพโหลดรูปบัตรประชาชน"
        labelDescription="ขอนามสกุลไฟล์เป็น .jpg และ .png  ขนาดไม่เกิน 10mb"
      />
    </div>
    <div class="file-uploader">
      <ImageUploader
        labelTitle="อัพโหลดรูปทดสอบแอนติเจน"
        accept=".jpg,.jpeg,.png"
        buttonLabel="อัพโหลดรูปทดสอบแอนติเจน"
        labelDescription="ขอนามสกุลไฟล์เป็น .jpg และ .png  ขนาดไม่เกิน 10mb"
      />
    </div>
    <Form on:submit={handleOnSubmit}>
      <div class="form-basic-info">
        <TextInput labelText="เลขบัตรประชาชน" placeholder="" />
        <TextInput labelText="ชื่อจริง" placeholder="" />
        <TextInput labelText="นามสกุล" placeholder="" />
        <NumberInput max={150} min={15} value={15} label="อายุ" />
      </div>
      <div class="form-address">
        <h2>ที่อยู่อาศัย</h2>
        <TextInput labelText="ที่อยู่" placeholder="" />
        <TextInput
          labelText="รหัสไปรษณีย์"
          placeholder=""
          bind:value={zipcode}
        />
        <Select
          labelText="ตำบล"
          disabled={addressItems.length === 0}
          bind:selected={district}
        >
          <SelectItem value={""} text={"กรุณาเลือกตำบลให้หน่อย"} />
          {#each addressItems as addressItem}
            <SelectItem
              value={addressItem.district}
              text={addressItem.district}
            />
          {/each}
        </Select>
        <TextInput
          disabled={subAddressItems.length === 0}
          bind:value={amphoe}
          readonly
          labelText="อำเภอ"
        />
        <TextInput
          disabled={subAddressItems.length === 0}
          bind:value={province}
          readonly
          labelText="จังหวัด"
        />
      </div>
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

  .form-address {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .form-medical-info {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  h1 {
    color: black;
    font-size: 40px;
    font-family: "IBM Plex Sans Thai";
    font-weight: 400;
  }

  h2 {
    color: black;
    font-size: 20px;
    font-family: "IBM Plex Sans Thai";
    font-weight: 400;
    margin-bottom: 20px;
  }
</style>

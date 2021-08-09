<script lang="ts">
    import {
        TextInput,
        Form,
        NumberInput,
        FileUploader,
        Button,
        Row,
        Column
    } from "carbon-components-svelte";
    import { uploadImage, } from "../api/patient"
    import type { UploadImageSuccessResponseData } from "../api/patient"
    import InputTags from "../components/InputTags.svelte";
    import ImageUploader from "../components/ImageUploader.svelte";

    let nationalIdCardImages: File[] = []
    let antigenTestingImages: File[] = []

    let imageUrl = {
        uploadedNationalIdCard: "",
        uploadedAntigenTesting: ""
    } as const

    let nationalIdCardUploadStatus: "complete" | "edit" | "uploading" = "complete"

    const handleOnSubmit = (event) => {
        console.log(imageUrl)
	}

    const handleFileUpload = async (files: File[], uploadedUrl: string) => {
        nationalIdCardUploadStatus = "uploading"
        const [file] = files;
        if (!file) {
            nationalIdCardUploadStatus = "complete"
            return
        }
        const formData = new FormData()
        formData.append(file.name, file)
        const response = await uploadImage(formData)
        const data: UploadImageSuccessResponseData = response.data
        const [{ url }] = data.results
        imageUrl[uploadedUrl] = url
        nationalIdCardUploadStatus = "complete"
    }
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
                <TextInput labelText="ตำบล" placeholder="" />
                <TextInput labelText="อำเภอ" placeholder="" />
                <TextInput labelText="จังหวัด" placeholder="" />
                <TextInput labelText="รหัสไปรษณีย์" placeholder="" />
            </div>
            <div class="form-medical-info">
                <h2>ข้อมูลทางการแพทย์</h2>
                <Row>
                    <Column>
                        <NumberInput max={1000} min={0} label="น้ำหนัก (หน่วยกิโลกรัม, kg)" />
                    </Column>
                    <Column>
                        <NumberInput max={1000} min={0} label="ส่วนสูง (หน่วยเซนติเมตร, cm)" />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <InputTags />
                    </Column>
                </Row>
            </div>
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
        font-family: 'IBM Plex Sans Thai';
		font-weight: 400;
	}

    h2 {
        color: black;
		font-size: 20px;
        font-family: 'IBM Plex Sans Thai';
		font-weight: 400;
        margin-bottom: 20px;
    }
</style>
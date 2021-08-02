<script lang="ts">
    import { TextInput, Form, FormGroup, NumberInput, FileUploader } from "carbon-components-svelte";
</script>

<main>
	<h1>กรอกฟอร์มหน่อยจ้าแฮะๆ</h1>
    <div class="patient-form">
        <Form on:submit>
            <div class="form-basic-info">
                <div class="file-uploader">
                    <FileUploader
                        labelTitle="อัพโหลดรูปบัตรประชาชน"
                        buttonLabel="อัพโหลดรูปบัตรประชาชน"
                        labelDescription="ขอนามสกุลไฟล์เป็น .jpg และ .png  ขนาดไม่เกิน 10mb"
                        accept={['.jpg', '.jpeg', 'png']}
                        status="complete"
                    />
                </div>
                <div class="file-uploader">
                    <FileUploader
                        labelTitle="อัพโหลดรูปทดสอบแอนติเจน"
                        buttonLabel="อัพโหลดรูปทดสอบแอนติเจน"
                        labelDescription="ขอนามสกุลไฟล์เป็น .jpg และ .png  ขนาดไม่เกิน 10mb"
                        accept={['.jpg', '.jpeg', 'png']}
                        status="complete"
                    />
                </div>
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
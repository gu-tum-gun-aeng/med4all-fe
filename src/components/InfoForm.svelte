<script lang="ts">
  import {
    TextInput,
    TextArea,
    NumberInput,
    Row,
    Column,
    DatePicker,
    DatePickerInput,
    Select,
    SelectItem,
  } from "carbon-components-svelte";
  import Validator from "../util/validator"

  let certificateId: string = "";
  let name: string = "";
  let surname: string = "";
  let patientPhone: string = "";
  let custodiaPhone: string = "";
  let checkInDate: string;
  let checkOutDate: string;
  let sexId;
  let lineId: string = "";
  let homeTown: string = "";
  let remark: string = "";

  export let infoForm = {};
  $: {
    infoForm = {
      certificateId,
      name,
      surname,
      patientPhone,
      custodiaPhone,
      checkInDate,
      checkOutDate,
      sexId,
      lineId,
      homeTown,
      remark,
    };
  }

  type FormError = {
    [key: string]: string | boolean
  }

  let formError: FormError = {
    certificateId: false,
    name: false,
    surname: false
  };

  const onBlurRequired = (key: string) => {
    formError[key] = Validator.requiredValue(infoForm[key])
  }
</script>

<div class="form-basic-info">
  <Row>
    <Column>
      <TextInput
        labelText="เลขบัตรประชาชน หรือ รหัสประจำตัวคนต่างด้าว หรือ เลขpassport"
        placeholder=""
        bind:value={certificateId}
        on:blur={() => onBlurRequired("certificateId")}
        invalid={!!formError.certificateId}
        invalidText={`${formError.certificateId}`}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <TextInput
        labelText="ชื่อจริง (first name)"
        placeholder=""
        bind:value={name}
        on:blur={() => onBlurRequired("name")}
        invalid={!!formError.name}
        invalidText={`${formError.name}`}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <TextInput
        labelText="นามสกุล (last name)"
        placeholder=""
        bind:value={surname}
        on:blur={() => onBlurRequired("surname")}
        invalid={!!formError.surname}
        invalidText={`${formError.surname}`}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <Select helperText="" labelText="เพศตามบัตรประชาขน" bind:selected={sexId}>
        <SelectItem value="0" text="กรุณาเลือก" />
        <SelectItem value="1" text="ชาย" />
        <SelectItem value="2" text="หญิง" />
      </Select>
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
  <Row>
    <Column>
      <TextInput labelText="Line ID" placeholder="" bind:value={lineId} />
    </Column>
  </Row>
  <Row>
    <Column>
      <TextInput labelText="ภูมิลำเนา" placeholder="" bind:value={homeTown} />
    </Column>
  </Row>
  <DatePicker datePickerType="single" on:change bind:value={checkInDate}>
    <DatePickerInput
      labelText="วันที่เข้าสู่ระบบ (ระบบที่นิยามไว้) "
      placeholder="mm/dd/yyyy"
    />
  </DatePicker>
  <DatePicker datePickerType="single" on:change bind:value={checkOutDate}>
    <DatePickerInput
      labelText="วันที่ออกจากระบบ (ระบบที่นิยามไว้) "
      placeholder="mm/dd/yyyy"
    />
  </DatePicker>
  <Row>
    <Column>
      <TextArea labelText="หมายเหตุ" placeholder="" bind:value={remark} />
    </Column>
  </Row>
</div>

<style scoped>
  .form-basic-info {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>

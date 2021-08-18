<script lang="ts">
  import {
    TextInput,
    NumberInput,
    Row,
    Column,
    DatePicker,
    DatePickerInput,
    Select,
    SelectItem,
  } from "carbon-components-svelte";

  let certificateId: string = "";
  let name: string = "";
  let surname: string = "";
  let patientPhone: string = "";
  let custodiaPhone: string = "";
  let checkInDate: string;
  let checkOutDate: string;
  let sexId;
</script>

<div class="form-basic-info">
  <Row>
    <Column>
      <TextInput
        labelText="เลขบัตรประชาชน หรือ รหัสประจำตัวคนต่างด้าว หรือ เลขpassport"
        placeholder=""
        bind:value={certificateId}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <TextInput labelText="ชื่อจริง" placeholder="" bind:value={name} />
    </Column>
    <Column>
      <TextInput labelText="นามสกุล" placeholder="" bind:value={surname} />
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
  <DatePicker datePickerType="single" on:change>
    <DatePickerInput
      labelText="วันที่เข้าสู่ระบบ (ระบบที่นิยามไว้) "
      placeholder="mm/dd/yyyy"
      bind:value={checkInDate}
    />
  </DatePicker>
  <DatePicker datePickerType="single" on:change>
    <DatePickerInput
      labelText="วันที่ออกจากระบบ (ระบบที่นิยามไว้) "
      placeholder="mm/dd/yyyy"
      bind:value={checkOutDate}
    />
  </DatePicker>
</div>

<style scoped>
  .form-basic-info {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>

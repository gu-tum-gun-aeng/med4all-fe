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
      <TextInput
        labelText="ชื่อจริง (first name)"
        placeholder=""
        bind:value={name}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <TextInput
        labelText="นามสกุล (last name)"
        placeholder=""
        bind:value={surname}
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

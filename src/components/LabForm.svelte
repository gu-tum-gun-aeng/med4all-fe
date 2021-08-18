<script lang="ts">
  import {
    Row,
    Column,
    Checkbox,
    DatePicker,
    DatePickerInput,
  } from "carbon-components-svelte";

  let isAtkPositive: boolean = false;
  let isRtPcrPositive: boolean = false;
  let labTestWhen: string = "";
  let isFavipiravirReceived: boolean = false;
  let receivedFavipiravirWhen: string = "";
</script>

<div class="form-lab">
  <h2>ข้อมูลการตรวจ</h2>
  <Row>
    <Column>
      <Checkbox labelText="มีผลการตรวจ ATK" bind:checked={isAtkPositive} />
    </Column>
  </Row>
  <Row>
    <Column>
      <Checkbox labelText="มีผลการตรวจ RT-PCR" bind:checked={isRtPcrPositive} />
    </Column>
  </Row>
  <Row>
    <Column>
      <DatePicker datePickerType="single" on:change>
        <DatePickerInput
          labelText="วันที่ทราบผลการตรวจ"
          placeholder="mm/dd/yyyy"
          bind:value={labTestWhen}
        />
      </DatePicker>
    </Column>
  </Row>
  <Row>
    <Column>
      <Checkbox
        labelText="ได้รับยาฟาวิพิราเวียร์ (Favipiravir)"
        bind:checked={isFavipiravirReceived}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <DatePicker datePickerType="single" on:change>
        <DatePickerInput
          labelText="วันที่ได้รับยา Favipiravir"
          placeholder="mm/dd/yyyy"
          bind:value={receivedFavipiravirWhen}
        />
      </DatePicker>
    </Column>
  </Row>
</div>

<style scoped>
  .form-lab {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h2 {
    color: black;
    font-size: 20px;
    font-family: "IBM Plex Sans Thai";
    font-weight: 400;
    margin-bottom: 20px;
  }
</style>

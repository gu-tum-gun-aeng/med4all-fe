<script lang="ts">
  import {
    Row,
    Column,
    Checkbox,
    DatePicker,
    DatePickerInput,
  } from "carbon-components-svelte";

  export let labForm;

  let isAtkPositive: boolean = false;
  let isRtPcrPositive: boolean = false;
  let labTestWhen: string = "";
  let isFavipiravirReceived: boolean = false;
  let receivedFavipiravirWhen: string = "";

  $: {
    labForm = {
      isAtkPositive,
      isRtPcrPositive,
      labTestWhen,
      isFavipiravirReceived,
      receivedFavipiravirWhen,
    };
  }
</script>

<div class="form-lab">
  <h2>ข้อมูลการตรวจ</h2>
  <h3>ผลการตรวจ</h3>
  <Row>
    <Column>
      <Checkbox
        labelText="ผลการตรวจ ATK เป็นบวก"
        bind:checked={isAtkPositive}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <Checkbox
        labelText="ผลการตรวจ RT-PCR เป็นบวก"
        bind:checked={isRtPcrPositive}
      />
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
  <h3>การได้รับยา</h3>
  <Row>
    <Column>
      <Checkbox
        labelText="ได้รับยาฟาวิพิราเวียร์ (Favipiravir)"
        bind:checked={isFavipiravirReceived}
      />
    </Column>
  </Row>
  {#if isFavipiravirReceived}
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
  {/if}
</div>

<style scoped>
  .form-lab {
    margin-top: 80px;
    margin-bottom: 20px;
  }

  h2 {
    color: black;
    font-size: 20px;
    font-family: "IBM Plex Sans Thai";
    font-weight: 400;
    margin-bottom: 20px;
  }

  h3 {
    color: #525252;
    font-size: 16px;
    font-family: "IBM Plex Sans Thai";
    font-weight: 400;
    margin-top: 40px;
    margin-bottom: 10px;
  }
</style>

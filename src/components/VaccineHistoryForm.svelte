<script lang="ts">
  import {
    Row,
    Column,
    DatePicker,
    DatePickerInput,
    RadioButtonGroup,
    RadioButton,
  } from "carbon-components-svelte";

  let vaccinationRecords: string = "noVaccinated";
  let firstVaccinedDate: string;
  let secondVaccinedDate: string;

  $: {
    if (vaccinationRecords === "noVaccinated") {
      firstVaccinedDate = "";
      secondVaccinedDate = "";
    } else if (vaccinationRecords === "oneVaccinated") {
      secondVaccinedDate = "";
    }
  }
</script>

<div class="form-vaccine-history">
  <h2>ประวัติการฉีดวัคซีน</h2>
  <Row>
    <Column>
      <RadioButtonGroup bind:selected={vaccinationRecords}>
        <RadioButton labelText="ยังไม่ได้ฉีดวัคซีน" value="noVaccinated" />
        <RadioButton labelText="ฉีดไปแล้ว 1 เข็ม" value="oneVaccinated" />
        <RadioButton labelText="ฉีดไปแล้ว 2 เข็ม" value="twoVaccinated" />
      </RadioButtonGroup>
    </Column>
  </Row>
  {#if vaccinationRecords === "oneVaccinated" || vaccinationRecords === "twoVaccinated"}
    <Row>
      <Column>
        <DatePicker datePickerType="single" on:change>
          <DatePickerInput
            labelText="วันที่ได้รับวัคซีน เข็มที่ 1"
            placeholder="mm/dd/yyyy"
            bind:value={firstVaccinedDate}
          />
        </DatePicker>
      </Column>
    </Row>
  {/if}
  {#if vaccinationRecords === "twoVaccinated"}
    <Row>
      <Column>
        <DatePicker datePickerType="single" on:change>
          <DatePickerInput
            labelText="วันที่ได้รับวัคซีน เข็มที่ 2"
            placeholder="mm/dd/yyyy"
            bind:value={secondVaccinedDate}
          />
        </DatePicker>
      </Column>
    </Row>
  {/if}
</div>

<style scoped>
  .form-vaccine-history {
    margin-top: 50px;
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

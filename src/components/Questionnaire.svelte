<script lang="ts">
  import {
    Row,
    Column,
    NumberInput,
    Checkbox,
    MultiSelect,
    TextArea,
    DatePickerInput,
    DatePicker,
    Toggle,
  } from "carbon-components-svelte";
  import ModifiedSelectableTile from "./ModifiedSelectableTile.svelte";
  import InputTags from "./InputTags.svelte";
  import underlyingDiseases from "../formData/underlyingDiseases";
  import symptomsList from "../formData/symptoms";

  export let questionnaire;

  let weight: number = 0;
  let height: number = 0;
  let bodyTemperatureCelcius: number;
  let pulseRateBpm: number;
  let oxygenSaturation: number;
  let oxygenSaturationAfterExercise: number;
  let oxygenSaturationDifference: number;
  let systolic: number;
  let diastolic: number;
  let inspirationRate: number;
  let isPregnant: boolean = false;
  let pregnancyWeeks: number | null = null;
  let isBedridden: boolean = false;
  let symptoms: string = "";
  let firstDateOfSymtom: string;
  let allergyToDrugs: string[] = [];
  let allergyToFoods: string[] = [];

  let hasUnderlyingDisease = false;

  let selectedUnderlyingDiseases: string[] = [];
  $: {
    if (!hasUnderlyingDisease) {
      selectedUnderlyingDiseases = [];
    }
  }

  $: {
    if (!isPregnant) {
      pregnancyWeeks = null;
    }
  }

  let selectedSymptoms: any[] = [];
  let selectedSymptomsDisplay = "";

  $: {
    selectedSymptomsDisplay = selectedSymptoms
      .map(
        (selectedSymptom) =>
          symptomsList.find((symptom) => symptom.value === selectedSymptom)[
            "text"
          ]
      )
      .join(", ");
  }

  $: {
    questionnaire = {
      weight,
      height,
      bodyTemperatureCelcius,
      pulseRateBpm,
      oxygenSaturation,
      oxygenSaturationAfterExercise,
      oxygenSaturationDifference,
      systolic,
      diastolic,
      inspirationRate,
      isPregnant,
      pregnancyWeeks,
      isBedridden,
      symptoms,
      firstDateOfSymtom,
      allergyToDrugs,
      allergyToFoods,
    };
  }
</script>

<div class="form-questionnaire">
  <h2>ข้อมูลการประเมิน</h2>
  <Row>
    <Column>
      <NumberInput
        max={1000}
        min={0}
        label="น้ำหนัก (หน่วยกิโลกรัม, kg)"
        bind:value={weight}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <NumberInput
        max={1000}
        min={0}
        label="ส่วนสูง (หน่วยเซนติเมตร, cm)"
        bind:value={height}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <NumberInput
        bind:value={bodyTemperatureCelcius}
        label="อุณหภูมิล่าสุด"
        max={100}
        min={0}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <NumberInput
        bind:value={pulseRateBpm}
        label="ชีพจรล่าสุด"
        max={1000}
        min={0}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <NumberInput
        bind:value={oxygenSaturation}
        label="ค่าออกซิเจนขณะพักล่าสุด"
        max={1000}
        min={0}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <NumberInput
        bind:value={oxygenSaturationAfterExercise}
        label="ค่าออกซิเจนหลังออกกำลังล่าสุด"
        max={1000}
        min={0}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <NumberInput
        bind:value={oxygenSaturationDifference}
        label="ค่าความแตกต่างของออกซิเจน"
        max={1000}
        min={0}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <NumberInput
        bind:value={systolic}
        label="ค่าความดันโลหิตตัวบนล่าสุด"
        max={1000}
        min={0}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <NumberInput
        bind:value={diastolic}
        label="ค่าความดันโลหิตตัวล่างล่าสุด"
        max={1000}
        min={0}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <NumberInput
        bind:value={inspirationRate}
        label="อัตราการหายใจล่าสุด"
        max={1000}
        min={0}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <div class="checkbox-container">
        <Checkbox labelText="เป็นผู้ป่วยติดเตียง" bind:checked={isBedridden} />
      </div>
    </Column>
  </Row>
  <Row>
    <Column>
      <Toggle
        labelText="มีการตั้งครรภ์"
        bind:toggled={isPregnant}
        labelA="ไม่มี"
        labelB="มี"
      />
    </Column>
  </Row>
  {#if isPregnant}
    <Row>
      <Column>
        <NumberInput
          label="จำนวนสัปดาห์ที่ตั้งครรภ์"
          bind:value={pregnancyWeeks}
          max={1000}
          min={0}
        />
      </Column>
    </Row>
  {/if}
  <Row>
    <Column>
      <TextArea labelText="อาการทั่วไปล่าสุด" bind:value={symptoms} />
    </Column>
  </Row>
  <Row>
    <Column>
      <InputTags
        labelText="การแพ้ยา"
        placeholder="กรุณากรอกและกด enter"
        bind:tags={allergyToDrugs}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <InputTags
        labelText="การแพ้อาหาร"
        placeholder="กรุณากรอกและกด enter"
        bind:tags={allergyToFoods}
      />
    </Column>
  </Row>
  <Row>
    <Column>
      <Toggle
        labelText="มีโรคประจำตัว"
        bind:toggled={hasUnderlyingDisease}
        labelA="ไม่มี"
        labelB="มี"
      />
    </Column>
  </Row>
  {#if hasUnderlyingDisease === true}
    <Row>
      <Column>
        <p>กรุณาคลิกเลือกโรคประจำตัวที่มี</p>
        {#each underlyingDiseases as underlyingDisease}
          <ModifiedSelectableTile
            bind:group={selectedUnderlyingDiseases}
            name="underlyingDiseases"
            value={underlyingDisease.value}
          >
            {underlyingDisease.text}
          </ModifiedSelectableTile>
        {/each}
      </Column>
    </Row>
  {/if}
  <Row>
    <Column>
      <h3>อาการที่แสดงออก</h3>
    </Column>
  </Row>
  <Row>
    <Column>
      <p />
      <MultiSelect
        titleText=""
        label="กรุณาคลิกเพื่อเลือกอาการที่พบ"
        items={symptomsList.map((symptom) => ({
          ...symptom,
          id: symptom.value,
        }))}
        value={"test"}
        bind:selectedIds={selectedSymptoms}
      />
      {#if selectedSymptoms.length > 0}
        <p>
          อาการที่คลิกเลือก {selectedSymptoms.length} อาการ: {selectedSymptomsDisplay}
        </p>
      {/if}
    </Column>
  </Row>
  <Row>
    <Column>
      <DatePicker datePickerType="single" on:change>
        <DatePickerInput
          labelText="วันที่เริ่มมีอาการ"
          placeholder="mm/dd/yyyy"
          bind:value={firstDateOfSymtom}
        />
      </DatePicker>
    </Column>
  </Row>
</div>

<style scoped>
  .form-questionnaire {
    margin-top: 80px;
    margin-bottom: 20px;
  }

  .checkbox-container {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h2 {
    color: white;
    font-size: 20px;
    font-family: "IBM Plex Sans Thai";
    font-weight: 400;
  }

  h3 {
    color: rgb(206, 206, 206);
    font-size: 15px;
    font-family: "IBM Plex Sans Thai";
    font-weight: 400;
    margin-top: 30px;
  }

  p {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: "IBM Plex Sans Thai";
    font-size: 14px;
  }
</style>

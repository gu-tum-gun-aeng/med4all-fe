<script lang="ts">
  import {
    Row,
    Column,
    NumberInput,
    Checkbox,
    MultiSelect,
  } from "carbon-components-svelte";
  import ModifiedSelectableTile from "./ModifiedSelectableTile.svelte";
  import underlyingDiseases from "../formData/underlyingDiseases";
  import symptoms from "../formData/symptoms";

  let weight: number = 0;
  let height: number = 0;

  let hasUnderlyingDisease = false;

  let selectedUnderlyingDiseases: string[] = [];
  $: {
    if (!hasUnderlyingDisease) {
      selectedUnderlyingDiseases = [];
    }
  }

  let selectedSymptoms: any[] = [];
  let selectedSymptomsDisplay = "";

  $: {
    selectedSymptomsDisplay = selectedSymptoms
      .map(
        (selectedSymptom) =>
          symptoms.find((symptom) => symptom.value === selectedSymptom)["text"]
      )
      .join(", ");
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
      <h3>มีโรคประจำตัวไหม</h3>
      <Checkbox labelText="มี" bind:checked={hasUnderlyingDisease} />
    </Column>
  </Row>
  {#if hasUnderlyingDisease === true}
    <Row>
      <Column>
        <p>กรุณาคลิกเพื่อเพิ่มโรคประจำตัว</p>
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
        items={symptoms.map((symptom) => ({ ...symptom, id: symptom.value }))}
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
</div>

<style scoped>
  .form-questionnaire {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h2 {
    color: black;
    font-size: 20px;
    font-family: "IBM Plex Sans Thai";
    font-weight: 400;
  }

  h3 {
    color: black;
    font-size: 16px;
    font-family: "IBM Plex Sans Thai";
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  p {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: "IBM Plex Sans Thai";
    font-size: 14px;
  }
</style>

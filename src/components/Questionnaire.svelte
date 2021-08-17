<script lang="ts">
  import { Row, Column, NumberInput, Checkbox } from "carbon-components-svelte";
  import ModifiedSelectableTile from "./ModifiedSelectableTile.svelte";
  import underlyingDiseases from "../formData/underlyingDiseases";
  import symptoms from "../formData/symptoms"

  let hasUnderlyingDisease = false;

  let selectedUnderlyingDiseases: string[] = [];
  $: {
    if (!hasUnderlyingDisease) {
      selectedUnderlyingDiseases = [];
    }
  }

  let hasSymptom = false;

  let selectedSymptoms: string[] = [];
  $: {
    console.log(selectedSymptoms);
    if (!hasSymptom) {
      selectedSymptoms = [];
    }
  }
</script>

<div class="form-questionnaire">
  <h2>ข้อมูลการประเมิน</h2>
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
      <h3>มีอาการแสดงออกหรือไม่</h3>
      <Checkbox labelText="มี" bind:checked={hasSymptom} />
    </Column>
  </Row>
  {#if hasSymptom === true}
    <Row>
      <Column>
        <p>กรุณาคลิกเพื่อเลือกอาการที่พบ</p>
        {#each symptoms as symptom}
          <ModifiedSelectableTile
            bind:group={selectedSymptoms}
            name="underlyingDiseases"
            value={symptom.value}
          >
            {symptom.text}
          </ModifiedSelectableTile>
        {/each}
      </Column>
    </Row>
  {/if}
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
  }

  p {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: "IBM Plex Sans Thai";
    font-size: 14px;
  }
</style>

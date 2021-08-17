<script lang="ts">
  import { Row, Column, NumberInput, Checkbox } from "carbon-components-svelte";
  import ModifiedSelectableTile from "./ModifiedSelectableTile.svelte";
  import underlyingDiseases from "../formData/underlyingDiseases"

  let hasUnderlyingDisease = false;

  let selectedUnderlyingDiseases: string[] = [];
  $: {
    console.log(selectedUnderlyingDiseases);
    if (!hasUnderlyingDisease) {
      selectedUnderlyingDiseases = [];
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

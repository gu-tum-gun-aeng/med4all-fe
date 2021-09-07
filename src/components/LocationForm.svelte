<script lang="ts">
  import { TextInput, Select, SelectItem } from "carbon-components-svelte";
  import { searchAddressByZipcode } from "thai-address-database";
  import type { Addresses, AddressItem } from "../types/address";

  export let locationForm;

  let location: string = "";
  let zipcode: string = "";
  let addressItems: Addresses = [];
  $: {
    if (zipcode.length === 5) {
      addressItems = searchAddressByZipcode(zipcode);
    } else {
      addressItems = [];
    }
  }
  let district = "";
  let amphoe = "";
  let province = "";
  let subAddressItems: Addresses = [];
  $: {
    subAddressItems = addressItems.filter(
      (addressItem: AddressItem) => addressItem.district === district
    );
    if (subAddressItems.length > 0) {
      amphoe = subAddressItems[0].amphoe;
      province = subAddressItems[0].province;
    } else {
      amphoe = "";
      province = "";
    }
  }

  $: {
    locationForm = {
      zipcode,
      district,
      amphoe,
      province,
    };
  }
</script>

<div class="form-address">
  <h2>ที่อยู่อาศัย</h2>
  <TextInput labelText="ที่อยู่" placeholder="" bind:value={location} />
  <TextInput labelText="รหัสไปรษณีย์" placeholder="" bind:value={zipcode} />
  <Select
    labelText="ตำบล"
    disabled={addressItems.length === 0}
    bind:selected={district}
  >
    <SelectItem value={""} text={"กรุณาเลือกตำบลให้หน่อย"} />
    {#each addressItems as addressItem}
      <SelectItem value={addressItem.district} text={addressItem.district} />
    {/each}
  </Select>
  <TextInput
    disabled={subAddressItems.length === 0}
    bind:value={amphoe}
    readonly
    labelText="อำเภอ"
  />
  <TextInput
    disabled={subAddressItems.length === 0}
    bind:value={province}
    readonly
    labelText="จังหวัด"
  />
</div>

<style scoped>
  .form-address {
    margin-top: 80px;
    margin-bottom: 40px;
  }

  h2 {
    color: white;
    font-size: 20px;
    font-family: "IBM Plex Sans Thai";
    font-weight: 400;
    margin-bottom: 20px;
  }
</style>

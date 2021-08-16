<script lang="ts">
  import { Route } from "tinro";
  import Login from "./pages/Login.svelte";
  import PatientForm from "./pages/PatientForm.svelte";
</script>

<Route>
  <Route path="/"><Login /></Route>
  <Route path="/login"><PatientForm /></Route>
</Route>

<style>
  @font-face {
    font-family: "IBM Plex Sans Thai";
    src: url("/fonts/IBMPlexSansThai-Medium.woff") format("woff");
    font-style: 400;
  }
</style>

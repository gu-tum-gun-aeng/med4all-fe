<script lang="ts">
  import { Route } from "tinro";
  import Login from "./pages/Login.svelte";
  import PatientForm from "./pages/PatientForm.svelte";
  import VerifyOTP from "./pages/VerifyOTP.svelte";
</script>

<Route>
  <Route path="/"><Login /></Route>
  <Route path="/form"><PatientForm /></Route>
  <Route path="/verifyotp"><VerifyOTP /></Route>
</Route>

<style>
  @font-face {
    font-family: "IBM Plex Sans Thai";
    src: url("/fonts/IBMPlexSansThai-Medium.woff") format("woff");
    font-style: 400;
  }
</style>

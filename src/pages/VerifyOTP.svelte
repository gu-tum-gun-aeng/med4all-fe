<script lang="ts">
  import { TextInput, Button } from "carbon-components-svelte";
  import { verifyOtp } from "../api/auth";
  import {
    getRequestIdSubscription,
    getMobileNumberSubscription,
  } from "../store/otp";
  import { setIsAuthenticated } from "../store/auth";
  import { router } from "tinro";

  let otp: string = "";
  let requestId: string = "";
  let mobileNumber: string = "";

  const requestIdSubscription = getRequestIdSubscription();
  requestIdSubscription((value) => {
    requestId = value;
  });
  const mobileNumberSubscription = getMobileNumberSubscription();
  mobileNumberSubscription((value) => {
    mobileNumber = value;
  });

  const handleLoginClick = async () => {
    try {
      const numberOtp = Number.parseInt(otp);
      const result = await verifyOtp(numberOtp, requestId, mobileNumber);

      console.log(result);

      setIsAuthenticated(true);
      router.goto("/form");
    } catch (error) {
      console.log(error);
    }
  };
</script>

<div class="login-container">
  <h1>ยืนยัน OTP</h1>
  <div class="login-form">
    <TextInput
      labelText="กรุณากรอก OTP"
      placeholder="ตัวอย่าง 1234"
      bind:value={otp}
    />
  </div>
  <div class="login-button">
    <Button on:click={handleLoginClick}>Login</Button>
  </div>
</div>

<style scoped>
  .login-container {
    padding: 32px;
    padding-top: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: black;
    font-size: 32px;
    font-weight: 400;
    font-family: "IBM Plex Sans Thai";
  }

  .login-form {
    width: 330px;
    margin-top: 30px;
  }

  .login-button {
    margin-top: 100px;
  }
</style>

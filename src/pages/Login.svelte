<script lang="ts">
  import { TextInput, Button } from "carbon-components-svelte";
  import { requestOtp } from "../api/auth";
  import { router } from "tinro";
  import { setRequestId, setMobileNumber } from "../stores/otp";

  let mobileNumber: string = "";

  const handleLoginClick = async () => {
    try {
      const response = await requestOtp(mobileNumber);
      setMobileNumber(mobileNumber);
      setRequestId(response.data.results.requestId);
      router.goto("/verifyotp");
    } catch (error) {
      console.log(error);
    }
  };
</script>

<div class="login-container">
  <h1>เข้าสู่ระบบ</h1>
  <div class="login-form">
    <TextInput
      labelText="เบอร์โทรศัพท์"
      placeholder="ตัวอย่าง 08xyyyzzzz"
      bind:value={mobileNumber}
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

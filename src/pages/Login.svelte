<script lang="ts">
  import { TextInput, Button } from "carbon-components-svelte";
  import { requestOtp } from "../api/auth";
  import { router } from "tinro";
  import { setRequestId, setMobileNumber } from "../stores/otp";
  import Errors from "../errors";

  let mobileNumber: string = "";
  let errorDisplay: string = "";

  const handleLoginClick = async () => {
    try {
      const response = await requestOtp(mobileNumber);

      setMobileNumber(mobileNumber);
      setRequestId(response.data.results.requestId);
      router.goto("/verifyotp");
    } catch (err) {
      if (err.response.data.status === 500) {
        const errorResponse = Errors.find(
          (error) => error.name === err.response.data.name
        );
        errorDisplay = errorResponse.displayText;
      }
    }
  };
</script>

<div class="login-container">
  <h1>เข้าสู่ระบบ</h1>
  <div class="login-form">
    <TextInput
      labelText="เบอร์โทรศัพท์"
      placeholder="ตัวอย่าง 08xyyyzzzz"
      invalid={errorDisplay.length > 0}
      invalidText={errorDisplay}
      bind:value={mobileNumber}
      on:change={() => {
        errorDisplay = "";
      }}
      on:focus={() => {
        errorDisplay = "";
      }}
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

  .noti-container {
    position: absolute;
    bottom: 100px;
  }
</style>

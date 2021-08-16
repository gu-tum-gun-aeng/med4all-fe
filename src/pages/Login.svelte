<script lang="ts">
  import { TextInput, Button } from "carbon-components-svelte";
  import { requestOtp } from "../api/patient";

  let mobileNumber: string = ""

  const handleLoginClick = async () => {
    const result = await requestOtp(mobileNumber)
    console.log(result)
  }
</script>

<div class="login-container">
  <h1>เข้าสู่ระบบ</h1>
  <div class="login-form">
    <TextInput labelText="เบอร์โทรศัพท์" placeholder="ตัวอย่าง 08xyyyzzzz" bind:value={mobileNumber}/>
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
    margin-top: 150px;
  }
</style>

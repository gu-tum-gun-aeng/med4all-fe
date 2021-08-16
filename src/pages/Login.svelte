<script lang="ts">
  import { TextInput, Button } from "carbon-components-svelte";
</script>

<div class="login-container">
  <h1>เข้าสู่ระบบ</h1>
  <div class="login-form">
    <TextInput labelText="Username" placeholder="" />
    <TextInput labelText="Password" type="password" placeholder="" />
  </div>
  <div class="login-button">
    <Button>Login</Button>
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

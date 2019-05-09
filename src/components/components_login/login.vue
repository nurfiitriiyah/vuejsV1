<template>
  <div class="hello">
    <prep-header></prep-header>
    Here we go
    <form method="post" id="form_login">
      <table>
        <tr>
          <td>Username</td>
          <td><input type="text" name="login_username" id="login_username"/></td>
        </tr>
        <tr>
          <td>Password</td>
          <td><input type="password" name="login_username" id="login_password"/></td>
        </tr>
        <tr>
          <td colspan="2"><input type="submit" name="login_submit" id="login_submit"/></td>
        </tr>
      </table>
    </form>
    <prep-footer></prep-footer>
  </div>
</template>

<script>
  import prepHeader from "../componens_layout/prep_header";
  import prepFooter from "../componens_layout/prep_footer";
  export default {
    name: 'login',
    components: {
      "prepHeader": prepHeader,
      "prepFooter": prepFooter
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>

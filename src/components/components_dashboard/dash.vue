<template>
  <div id="navbar">
    <prep-header></prep-header>
    disini dash

    <prep-footer></prep-footer>
  </div>
</template>

<script>
  const axios = require('axios');
  const API_URL = 'http://localhost:10002/login';
  import router from '../../router'

  import prepHeader from "../componens_layout/prep_header";
  import prepFooter from "../componens_layout/prep_footer";
  export default {
    name: 'dash',
    data() {
      return {
        showError: false,
        todo: {}
      };
    },
    components: {
      "prepHeader": prepHeader,
      "prepFooter": prepFooter
    }
  }
</script>

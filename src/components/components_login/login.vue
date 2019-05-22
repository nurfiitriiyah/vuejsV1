<template>
  <div class="main-wrapper">
    <section class="section">
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div class="login-brand">
              <img src="../../../src/assets/img/stisla-fill.svg" alt="logo" width="100"
                   class="shadow-light rounded-circle">
            </div>
            <div class="card card-primary">
              <div class="card-header"><h4>Login</h4></div>

              <div class="card-body">
                <form method="POST" action="#" class="needs-validation" novalidate="" onsubmit="return false;">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input v-model="todo.Username" id="email" type="email" class="form-control" name="email"
                           tabindex="1" required autofocus>
                    <div class="invalid-feedback">
                      Please fill in your email
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="d-block">
                      <label for="password" class="control-label">Password</label>
                      <div class="float-right">
                      </div>
                    </div>
                    <input v-model="todo.Password" id="password" type="password" class="form-control" name="password"
                           tabindex="2" required>
                    <div class="invalid-feedback">
                      please fill in your password
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" name="remember" class="custom-control-input" tabindex="3" id="remember-me">
                    </div>
                  </div>

                  <div class="form-group">
                    <button type="submit" class="btn btn-danger btn-lg btn-block" tabindex="4" @click="login()">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div class="simple-footer">
              Copyright &copy; Stisla 2018
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  const axios = require('axios');
  const API_URL = 'http://localhost:10005/login';

  export default {
    name: 'login',
    data() {
      return {
        showError: false,
        todo: {}
      };
    },
    transitionName: 'fade',
    methods: {
      async login() {
        try {
          axios.post(API_URL, this.todo).then((response) => {
              document.cookie = "token="+response.data.token;
              this.$router.push('/dash');
            },
            (error) => {
              this.$swal("Failed !","Please Check Username and Password","error");
            })
        } catch (e) {
          this.$swal("Failed",e,"error");
        }
      },
    },
  }
</script>

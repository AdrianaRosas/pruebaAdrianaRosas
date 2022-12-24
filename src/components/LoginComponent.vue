<template>
  <v-container class="login-container d-flex justify-center align-center">
    <v-card class="d-flex flex-column align-center">
      <h1>Bienvenido</h1>
      <v-card
        class="d-flex flex-column align-center justify-center pa-5"
        width="500px"
      >
        <v-form v-model="valid" ref="loginForm" lazy-validation>
          <v-text-field
            label="username"
            v-model="loginForm.username"
          ></v-text-field>
          <v-text-field
            label="password"
            type="password"
            v-model="loginForm.password"
          ></v-text-field>
          <v-card-actions>
            <v-btn
              :disabled="!valid"
              color="teal text-capitalize"
              style="color: #fff"
              @click="handleLogin"
              >Entrar</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "LoginComponent",

  data: () => ({
    loginForm: {
      username: "",
      password: "",
      valid: false,
    },
  }),
  methods: {
    handleLogin() {
      const isValid = this.$refs.loginForm.validate();
      if (isValid) {
        let username = this.loginForm.username;
        let password = this.loginForm.password;
        if (username !== "" && password !== "") {
          this.$store.dispatch("setToken", "ycEVyHuxT383EGv1oxBtcg");
          this.$router.push("/content");
        } else {
          alert("Debes ingresar usuario y clave");
        }
      }
    },
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
  },
};
</script>

<style>
.login-container {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>

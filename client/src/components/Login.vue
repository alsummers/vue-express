<template>
  <panel title="Login">
          <v-text-field
            label="email"
            v-model="email"
            placeholder="email"
            solo
          ></v-text-field>
        <br>
        <v-text-field type="password" label="password" v-model="password" placeholder="password" solo></v-text-field>
        <br>
        <div class="error" v-html="error"/>
        <br>
        <v-btn class="cyan darken-2" @click="login" dark>Login</v-btn>
  </panel>
</template>

<script>
import Panel from "@/components/Panel";
import Authentication from "@/services/Authentication";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  //   watch: {
  //       email (value) {
  //           console.log("value has changed", value)
  //       },
  //       password(value){
  //           console.log( "password has changed", value)
  //       }
  //   },
  methods: {
    async login() {
      try {
        const response = await Authentication.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },
  components: {
    Panel
  },
  mounted() {
    // setTimeout(() => {
    //   this.email = "test@email.com"
    // }, 2000)
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
<template>
  <v-layout column >
    <v-flex class="container">
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
      </div>
      <div class="pl-4 pr-4 pb-2 pt-4">
        <input type="email" name="email" v-model="email" placeholder="email">
        <br>
        <input type="password" name="password" v-model="password" placeholder="password">
        <br>
        <div class="error" v-html="error"/>
        <br>
        <button @click="register">Register</button>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
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
    async register() {
      try {
        await Authentication.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.email = "hello user";
    }, 2000);
  }
};
</script>

<style scoped>
.error {
  color: red;
}
.container {
}
.layout.column>.flex{
  max-width: 50%;
}
</style>
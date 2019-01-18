<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <v-card>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan darken-2" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
      </div>
      <div class="pl-4 pr-4 pb-2 pt-4">
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
      </div>
      </v-card>
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
    async login() {
      try {
        await Authentication.login({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
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
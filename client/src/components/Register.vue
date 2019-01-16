<template>
  <div>
    <h1>Register Page</h1>
    <input type="email" name="email" v-model="email" placeholder="email">
    <br>
    <input type="password" name="password" v-model="password" placeholder="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>

import Authentication from '@/services/Authentication'
export default {
  data() {
    return {
        email: '',
        password: ''
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
      async register(){
          const response = await Authentication.register({
              email: this.email,
              password: this.password
          })
        console.log(response.data)
      }
  },
  mounted (){
      setTimeout(() => {
        this.email = 'hello user'
      }, 2000)
  }
};
</script>

<style scoped>
</style>
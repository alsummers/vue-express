<template>
  <div id="app">
    <v-app>
      <v-content>
        <site-header/>
        <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import SiteHeader from "@/components/Header.vue";
export default {
  name: "app",
  components: {
    SiteHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

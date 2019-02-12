<template>
  <v-toolbar fixed class="cyan darken-2" dark>
    <v-toolbar-title class="mr-4">
      <router-link class="titleRoute" to="/songs">
        <span class="white--text">Vue Music Tracker</span>
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn to="/songs" class="btn" flat dark>Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn" to="/login" class="btn" flat dark>Login</v-btn>
        <v-btn v-if="!$store.state.isUserLoggedIn" to="/register" class="btn" flat dark>Sign Up</v-btn>
        <v-btn @click="logout" v-if="$store.state.isUserLoggedIn" flat dark>Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
    methods: {
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            // redirect to home
            this.$router.push('/songs')
        }
    }
};
</script>

<style scoped>
.titleRoute {
  text-decoration: none;
}
</style>
<template>
  <v-toolbar fixed class="cyan darken-2" dark>
    <v-toolbar-title class="mr-4">
      <router-link class="titleRoute" to="/">
        <span class="white--text">Vue Music Tracker</span>
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items class="mt-3">
      <router-link class="route" to="/songs"><v-btn class="btn" flat dark>Browse</v-btn></router-link>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items class="mt-3">
      <router-link class="route" to="/login">
        <v-btn v-if="!$store.state.isUserLoggedIn" class="btn" flat dark>Login</v-btn>
      </router-link>
      <router-link class="route" to="/register">
        <v-btn v-if="!$store.state.isUserLoggedIn" class="btn" flat dark>Sign Up</v-btn>
      </router-link>
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
            this.$router.push('/')
        }
    }
};
</script>

<style scoped>
.titleRoute {
  text-decoration: none;
}
.route {
  text-decoration: none;
}
.btn {
  padding: 1rem;
}
</style>
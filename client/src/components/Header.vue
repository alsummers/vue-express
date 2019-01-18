<template>
    <v-toolbar fixed class="cyan darken-2" dark>
        <v-toolbar-title class="mr-4">
            <router-link class="titleRoute" to="/"><span class="white--text">Vue Music Tracker</span></router-link>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

    <v-toolbar-items>
        <router-link class="route" to="/login"><v-btn class="btn" flat dark>
            Login
        </v-btn></router-link>
        <router-link class="route" to="/register"><v-btn class="btn" flat dark>
            Sign Up
        </v-btn></router-link>
    </v-toolbar-items>
    </v-toolbar>
</template>

<script>

export default {  

};
</script>

<style scoped>
.titleRoute {
    text-decoration: none;
}
.route{
    text-decoration: none;
}
.btn{
    padding: 1rem;
}
</style>
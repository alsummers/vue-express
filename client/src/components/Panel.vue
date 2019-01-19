<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <v-card>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan darken-2" dark>
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
      </div>
      <div class="pl-4 pr-4 pb-2 pt-4">
        <slot >
            No slot content.
        </slot>

      </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
    props: [
        'title'
    ]
}

</script>
<style scoped>
</style>
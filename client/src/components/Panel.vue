<template>
      <v-card>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan darken-2" dark>
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <slot name="action" />



        </v-toolbar>
     
      <div class="pl-4 pr-4 pb-2 pt-4">
        <slot >
            No slot content.
        </slot>

      </div>
       </div>
      </v-card>
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
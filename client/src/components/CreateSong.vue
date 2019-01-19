<template>
  <v-layout row wrap>
    <v-flex xs4>
      <panel title="Song Metadata" >
        <v-text-field label="title" v-model="title" solo></v-text-field>
        <v-text-field label="artist" v-model="artist" solo></v-text-field>
        <v-text-field label="genre" v-model="genre" solo></v-text-field>
        <v-text-field label="album" v-model="album" solo></v-text-field>
        <v-text-field label="album image" v-model="albumImage" solo></v-text-field>
        <v-text-field label="youtubeId" v-model="youtubeId" solo></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Details" class="ml-2">
        <v-text-field label="lyrics" multi-line v-model="lyrics" solo></v-text-field>
        <v-text-field label="tab" multi-line v-model="tab" solo></v-text-field>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "@/components/Panel";
export default {
  data() {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImage: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    };
  },
  components: {
    Panel
  }
};
</script>

<style>
</style>

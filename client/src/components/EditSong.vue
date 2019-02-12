<template>
  <v-layout row wrap>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field :rules="[required]" label="title" v-model="song.title" solo></v-text-field>
        <v-text-field :rules="[required]" label="artist" v-model="song.artist" solo></v-text-field>
        <v-text-field :rules="[required]" label="genre" v-model="song.genre" solo></v-text-field>
        <v-text-field :rules="[required]" label="album" v-model="song.album" solo></v-text-field>
        <v-text-field :rules="[required]" label="album image" v-model="song.albumImage" solo></v-text-field>
        <v-text-field :rules="[required]" label="youtubeId" v-model="song.youtubeId" solo></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Details" class="ml-2">
        <v-textarea :rules="[required]" label="lyrics" v-model="song.lyrics" solo></v-textarea>
        <v-textarea :rules="[required]" label="tab" v-model="song.tab" solo></v-textarea>
      </panel>
      <v-alert class="ml-2" :value="error" transition="scale-transition" error>{{error}}</v-alert>
      <v-btn dark class="cyan darken-2" @click="save">Save Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from "@/services/SongService";
export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: value => !!value || "Required"
    };
  },
  methods: {
    async save() {
      this.error = null;
      const allFields = Object.keys(this.song).every(key => !!this.song[key]);
      if (!allFields) {
        this.error = "Please fill in all fields";
        return;
      }
      const songId = this.$store.state.route.params.songId;
      try{
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch {
        this.error = "failed to update song"
      }
    }
  },
  async mounted (){
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongsService.show(songId)).data;
  },

};
</script>

<style>
</style>

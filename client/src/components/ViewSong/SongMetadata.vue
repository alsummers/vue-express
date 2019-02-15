<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">{{song.title}}</div>
        <div class="song-artist">{{song.artist}}</div>
        <div class="song-genre">{{song.genre}}</div>
        <v-btn
          dark
          class="cyan darken-2"
          :to="{name: 'song-edit', params() { return {songId: song.id}}}"
        >Edit</v-btn>
        <v-btn v-if="isUserLoggedIn && !bookmark" dark class="cyan darken-2" @click="setBookmark">Bookmark</v-btn>
        <v-btn v-if="isUserLoggedIn && bookmark" dark class="cyan darken-2" @click="unbookmark">Unbookmark</v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="album-image" :src="song.albumImage">
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "@/services/BookmarksService";
export default {
  data() {
    return {
      bookmark: null
    };
  },
  props: ["song"],
  // replaces $store.state in line
   computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  
};
</script>

<style>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>

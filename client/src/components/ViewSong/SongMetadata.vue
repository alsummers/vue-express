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
    ...mapState(["isUserLoggedIn"])
  },
  watch: {
    async song (){
      if(!this.isUserLoggedIn) {
      return
    }
    try {
    this.bookmark = (await BookmarksService.index({
      songId: this.song.id,
      userId: this.$store.state.user.id
    })).data;
 // !!bookmark turns variable into false boolean
    } catch (err) {
      console.log(err)
      return
    }
    }
  },
  methods: {
    async setBookmark() {
      try {
        this.bookmark = (await BookmarksService.post({
          SongId: this.song.id,
          UserId: this.$store.state.user.id
        })).data;
      } catch (err) {
        console.log(err)
        return;
      }
    },
    async unbookmark() {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
        return;
      }
    }
  }
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

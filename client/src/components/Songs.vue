<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn
          to="/songs/create"
          slot="action"
          class="cyan accent-1"
          fab
          light
          medium
          absolute
          right
          middle
        >
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song.id" class="song">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">{{song.title}}</div>
              <div class="song-artist">{{song.artist}}</div>
              <div class="song-genre">{{song.genre}}</div>
              <v-btn dark class="cyan darken-2" :to="{name: 'song', params: {songId: song.id}}">
              View
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" :src="song.albumImage" />
          

            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from "@/services/SongService";
import Panel from "@/components/Panel";
export default {
  components: {
    Panel
  },
  data() {
    return {
      songs: null
    };
  },
  async mounted() {
    this.songs = (await SongService.songIndex()).data;
    // request for all songs
  }
};
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px
}
.song-artist {
  font-size: 24px
}
.song-genre {
  font-size: 18px;
}
.album-image{
  width: 70%;
  margin: 0 auto;
}
</style>
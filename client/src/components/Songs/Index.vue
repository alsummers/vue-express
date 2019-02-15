<template>
  <v-layout>
    <v-flex xs6>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <song-search-panel />
      <song-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongPanel from './SongPanel'
import SongSearchPanel from './SongSearchPanel'
import SongService from "@/services/SongService"
export default {
  components: {
    SongPanel,
    SongSearchPanel,
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
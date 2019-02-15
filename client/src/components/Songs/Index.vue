<template>
  <v-layout>
    <v-flex xs6>
      <song-bookmarks />
      <recent-songs class="mt-2"/>
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
import SongBookmarks from './SongBookmarks'
import RecentSongs from './RecentSongs'

export default {
  components: {
    SongPanel,
    SongSearchPanel,
    SongBookmarks,
    RecentSongs
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
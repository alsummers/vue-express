<template>
<div>
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song"/>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <you-tube-panel :youtubeId="song.youtubeId" />
      </v-flex>
  </v-layout>
  <v-layout class="mt-2">
    <v-flex xs6>
      <tabs :tab="song.tab" />
    </v-flex>
    <v-flex xs6 class="ml-2">
      <lyrics :lyrics="song.lyrics" />
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import SongService from "@/services/SongService";
import SongMetadata from './SongMetadata'
import YouTubePanel from './Youtube'
import Lyrics from './Lyrics'
import Tabs from './Tabs'
import HistoryService from '@/services/HistoryService'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      song: {}
    };
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted() {
    const songId = this.route.params.songId;
    this.song = (await SongService.show(songId)).data;

    if (this.isUserLoggedIn) {
      HistoryService.post({
        songId: songId,
      })
    }
  },
  components: {
    SongMetadata,
    YouTubePanel,
    Lyrics,
    Tabs
  }
};
</script>

<style>

textarea{
    width: 80%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 20px;
}

</style>

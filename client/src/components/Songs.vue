<template>
  <panel title="Songs">
    <div v-for="song in songs" :key="song.id">
        {{song.title}} -
        {{song.artist}} -
        {{song.album}}
    </div>
  </panel>
</template>

<script>
import SongService from '@/services/SongService'
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
  async mounted(){
      this.songs = (await SongService.songIndex()).data
      // request for all songs
  }
};
</script>

<style scoped>
</style>
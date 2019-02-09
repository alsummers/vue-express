<template>
    <panel title="YouTube Video">
        <youtube :video-id="youtubeId" :player-width="800" :player-height="330">
            </youtube>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'
import YouTube from 'vue-youtube-embed'
import Vue from 'vue'
Vue.use(YouTube)
export default {
    props: [
        'youtubeId'
    ],
    components: {
        Panel,
    }
}
</script>

<style>

</style>

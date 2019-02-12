<template>

        <panel title="Lyrics">
            <textarea readonly v-model="lyrics">

            </textarea>
        </panel>

</template>

<script>
export default {
  props: [
      'lyrics'
  ],

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

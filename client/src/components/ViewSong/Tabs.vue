<template>

        <panel title="Tabs">
            <textarea readonly v-model="tab">

            </textarea>
        </panel>

</template>

<script>
import Panel from "@/components/Panel";
export default {
  props: [
      'tab'
  ],
  components: {
    Panel,
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

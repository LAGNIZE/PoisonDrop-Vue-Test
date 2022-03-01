<template>
  <div id="app">
    <Section_1 v-if="step == 1" />
    <Section_2 v-if="step == 2" />
    <Section_3 v-if="step == 3" />
    <Section_4 v-if="step == 4" />
    <button v-on:click="nextStep" v-if="step != totalSteps">Next Step</button>
    <button v-on:click="prevStep" v-if="step != 1">Prev Step</button>
  </div>
</template>

<script>
import Section_1 from "./components/Section_1.vue";
import Section_2 from "./components/Section_2.vue";
import Section_3 from "./components/Section_3.vue";
import Section_4 from "./components/Section_4.vue";

export default {
  data() {
    return {
      step: 1,
      totalSteps: 4
    };
  },
  name: "App",
  components: {
    Section_1,
    Section_2,
    Section_3,
    Section_4
  },
  methods: {
    nextStep: function() {
      this.step++;
    },
    prevStep: function() {
      this.step--;
    }
  }
};
</script>

<style></style>

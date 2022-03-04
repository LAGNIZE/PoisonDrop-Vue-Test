<template>
  <div id="app">
    <Section_1 v-if="getSteps.step == 1" />
    <Section_2 v-if="getSteps.step == 2" />
    <Section_3 v-if="getSteps.step == 3" />
    <Section_4 v-if="getSteps.step == 4" />
    <button
      class="nextStep"
      v-on:click="nextStep"
      v-if="getSteps.step != getSteps.totalSteps"
    >
      Next Step
    </button>
    <button class="prevStep" v-on:click="prevStep" v-if="getSteps.step != 1">
      Prev Step
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Section_1 from "./components/Section_1.vue";
import Section_2 from "./components/Section_2.vue";
import Section_3 from "./components/Section_3.vue";
import Section_4 from "./components/Section_4.vue";

export default {
  computed: mapGetters(["getSteps"]),
  name: "App",
  components: {
    Section_1,
    Section_2,
    Section_3,
    Section_4
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    nextStep: function() {
      this.increment();
    },
    prevStep: function() {
      this.decrement();
    }
  }
};
</script>

<style>
#app {
  text-align: center;
}

.nextStep {
  position: absolute;
  top: 250px;
  left: 50%;
}

.prevStep {
  position: absolute;
  top: 250px;
  left: 43%;
}
</style>

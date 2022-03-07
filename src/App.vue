<template>
  <div id="app">
    <div class="wrapApp">
      <form @submit.prevent="submitHandler">
        <Section_1 v-if="getSteps.step == 1" ref="section1" />
        <Section_2 v-if="getSteps.step == 2" ref="section2" />
        <Section_3 v-if="getSteps.step == 3" ref="section3" />
        <Section_4 v-if="getSteps.step == 4" ref="section4" />
        <button
          class="nextStep"
          type="submit"
          v-if="getSteps.step != getSteps.totalSteps"
        >
          Next Step
        </button>
        <p class="true" v-if="getSubmitStatus === 'OK'">
          Correct!
        </p>
        <p class="false" v-if="getSubmitStatus === 'ERROR'">
          Please fill the form correctly.
        </p>
      </form>
      <button class="prevStep" v-on:click="prevStep" v-if="getSteps.step != 1">
        Prev Step
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Section_1 from "./components/Section_1.vue";
import Section_2 from "./components/Section_2.vue";
import Section_3 from "./components/Section_3.vue";
import Section_4 from "./components/Section_4.vue";

export default {
  computed: {
    getSteps: {
      get() {
        return this.$store.state.steps;
      }
    },
    getSubmitStatus: {
      get() {
        return this.$store.state.submitStatus;
      },
      set(getSubmitStatus) {
        this.$store.commit("updateSubmitStatus", getSubmitStatus);
      }
    }
  },
  name: "App",
  components: {
    Section_1,
    Section_2,
    Section_3,
    Section_4
  },
  methods: {
    ...mapMutations(["increment", "decrement"]),
    prevStep() {
      this.decrement();
    },
    submitHandler() {
      if (this.getSteps.step == 1) {
        this.$refs.section1.$v.$touch();
        if (this.$refs.section1.$v.$invalid) {
          this.getSubmitStatus = "ERROR";
        } else {
          this.getSubmitStatus = "OK";
          setTimeout(() => {
            this.increment();
            this.getSubmitStatus = null;
          }, 500);
        }
      } else if (this.getSteps.step == 2) {
        this.$refs.section2.$v.$touch();
        if (this.$refs.section2.$v.$invalid) {
          this.getSubmitStatus = "ERROR";
        } else {
          this.getSubmitStatus = "OK";
          setTimeout(() => {
            this.increment();
            this.getSubmitStatus = null;
          }, 500);
        }
      } else if (this.getSteps.step == 3) {
        this.increment();
      }
    }
  }
};
</script>

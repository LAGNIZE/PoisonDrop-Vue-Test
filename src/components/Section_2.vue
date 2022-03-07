<template>
  <div class="wrapSec">
    Step 2
    <div>
      <label>Choose your educational level:</label>
      <select v-model.trim="$v.getEducation.$model">
        <option v-for="(list, idx) in getEdLevel" v-bind:key="idx">{{
          list
        }}</option>
      </select>
      <div
        class="false"
        v-if="!$v.getEducation.required && $v.getEducation.$dirty"
      >
        *Field is required
      </div>
    </div>
    <div>
      <multiselect
        v-model="getFrameworks"
        :options="getFrameOptions"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        :preserve-search="true"
        placeholder="Pick your frameworks"
        :preselect-first="false"
      >
      </multiselect>
    </div>
    <div>
      <label>SMS notification:</label>
      <label for="yes">Yes</label>
      <input type="radio" value="yes" id="yes" v-model="getSMS" name="sms" />
      <label for="no">No</label>
      <input type="radio" value="no" id="yes" v-model="getSMS" name="sms" />
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { required } from "vuelidate/lib/validators";

export default {
  components: {
    Multiselect
  },
  name: "Section_2",
  validations: {
    getEducation: { required }
  },
  computed: {
    getEdLevel: {
      get() {
        return this.$store.state.edLevel;
      }
    },
    getFrameOptions: {
      get() {
        return this.$store.state.frameOptions;
      }
    },
    getEducation: {
      get() {
        return this.$store.state.form.education;
      },
      set(getEducation) {
        this.$store.commit("updateEducation", getEducation);
      }
    },
    getFrameworks: {
      get() {
        return this.$store.state.form.frameworks;
      },
      set(getFrameworks) {
        this.$store.commit("updateFrameworks", getFrameworks);
      }
    },
    getSMS: {
      get() {
        return this.$store.state.form.sms;
      },
      set(getSMS) {
        this.$store.commit("updateSMS", getSMS);
      }
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
.wrapper div {
  margin-top: 10px;
}
</style>

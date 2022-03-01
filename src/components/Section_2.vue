<template>
  <div>
    Step 2
    <label>Graduation</label>
    <select v-model="form.graduation">
      <option v-for="id in graduations">{{ id }}</option>
    </select>
    <label>Frameworks</label>
    <multiselect
      v-model="form.frameworks"
      :options="options"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Pick your frameworks"
      :preselect-first="false"
    >
    </multiselect>
    <div>
      <label>SMS оповещение</label>
      <label for="yes">Yes</label>
      <input type="radio" value="yes" id="yes" v-model="form.sms" name="sms" />
      <label for="no">No</label>
      <input type="radio" value="no" id="yes" v-model="form.sms" name="sms" />
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect
  },
  name: "Section_2",
  data() {
    return {
      form: {
        graduation: "",
        frameworks: "",
        sms: null
      },
      graduations: [
        "Среднее",
        "Средне-специальное",
        "Неоконченное высшее",
        "Бакалавр",
        "Магистрант",
        "Аспирант"
      ],
      options: ["Vue.js", "React", "Angular", "Svelte", "Ember,js"]
    };
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

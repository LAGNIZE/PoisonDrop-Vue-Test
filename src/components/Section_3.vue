<template>
  <div>
    Step 3
    <label>Опыт работы</label>
    <input
      type="text"
      v-for="item in form.jobs"
      v-model="item.value"
      placeholder="What is your job?"
    />
    <button v-on:click="addItem">Добавить опыт</button>
  </div>
</template>

<script>
export default {
  name: "Section_3",
  data() {
    return {
      form: {
        jobs: []
      }
    };
  },
  methods: {
    addItem() {
      this.form.jobs.push({
        value: ""
      });
    }
  },
  mounted() {
    this.addItem();
  }
};
</script>

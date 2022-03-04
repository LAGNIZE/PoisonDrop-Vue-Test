<template>
  <div class="wrapper">
    Step 3
    <div>
      <label>Опыт работы:</label>
      <input
        type="text"
        v-for="(item, idx) in getWorkExp"
        v-bind:key="idx"
        v-model="getWorkExp[idx]"
      />
    </div>
    <div>
      <button v-on:click="addItem()">Добавить опыт</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section_3",
  computed: {
    getWorkExp: {
      get() {
        return this.$store.state.form.workExp;
      },
      set(getWorkExp) {
        this.$store.commit("updateWorkExp", getWorkExp[idx]);
      }
    }
  },
  methods: {
    addItem() {
      this.$store.state.form.workExp.push("");
    }
  }
};
</script>
<style>
.wrapper input {
  margin-right: 10px;
}
</style>

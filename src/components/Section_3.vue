<template>
  <div class="wrapSec">
    Step 3
    <div>
      <label>Work experience:</label>
      <input
        class="workExp"
        type="text"
        v-for="(item, idx) in getWorkExp"
        v-bind:key="idx"
        v-model="getWorkExp[idx]"
      />
    </div>
    <div>
      <button type="button" v-on:click="addItem()">Add line</button>
    </div>
    <div>
      <button type="button" v-on:click="clearItem()">Clear</button>
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
      set(ctx) {
        this.$store.commit("updateWorkExp", ctx.getters.getWorkExp);
      }
    }
  },
  methods: {
    addItem() {
      this.$store.state.form.workExp.push("");
    },
    clearItem() {
      this.$store.state.form.workExp.length = 0;
      return this.$store.state.form.workExp;
    }
  }
};
</script>
<style></style>

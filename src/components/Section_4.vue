<template>
  <div>
    Step 4
    <input
      type="text"
      v-model="form.login"
      placeholder="What is your GitHub login?"
    />
    <button v-on:click="findUser">Find</button>
    <div v-model="totalInfo">
      {{ totalInfo.login }}
      {{ totalInfo.id }}
      {{ totalInfo.url }}
      {{ totalInfo.name }}
      {{ totalInfo.location }}
      {{ totalInfo.public_repos }}
      {{ totalInfo.followers }}
      {{ totalInfo.following }}
    </div>
    <button v-on:click="sendData">Send Data</button>
  </div>
</template>

<script>
export default {
  name: "Section_4",
  data() {
    return {
      totalInfo: "",
      form: {
        login: null
      }
    };
  },
  methods: {
    async findUser() {
      const response = await fetch(
        "https://api.github.com/users/" + this.form.login
      );
      const data = await response.json();
      this.totalInfo = data;
      console.log(this.totalInfo.name);
    },
    sendData: function() {
      console.log(this.totalInfo.name);
    }
  }
};
</script>

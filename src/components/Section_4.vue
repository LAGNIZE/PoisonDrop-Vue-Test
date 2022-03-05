<template>
  <div class="wrapper">
    Step 4
    <div class="login">
      <input
        type="text"
        v-model="getLogin"
        placeholder="What is your GitHub login?"
      />
      <button>Find</button>
    </div>
    <div class="info">
      <div>Login: {{ posts.name }} </div>
      <div>ID:</div>
      <div>URL:</div>
      <div>Name:</div>
      <div>Location:</div>
      <div>Public repos:</div>
      <div>Followers:</div>
      <div>Following:</div>
    </div>
    <button class="sendData">Send Data</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      login: "LAGNIZE"
    }
  },
  name: "Section_4",
  async mounted () {
    const res = await fetch('https://api.github.com/users/' + this.login)
    const posts = await res.json()
    this.posts = posts
  },
  computed: {
    getLogin: {
      get() {
        return this.$store.state.form.login;
      },
      set(getLogin) {
        this.$store.commit("updateLogin", getLogin);
      }
    }
  }
};
</script>
<style>
.sendData {
  position: absolute;
  top: 250px;
  left: 50%;
}

.login {
  margin-top: 10px;
}

.info div {
  width: fit-content;
  margin: 0 auto 2px auto;
}
</style>

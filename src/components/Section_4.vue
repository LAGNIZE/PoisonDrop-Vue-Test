<template>
  <div class="wrapSec">
    Step 4
    <div class="login">
      <input
        type="text"
        v-model="getLogin"
        placeholder="What is your GitHub login?"
      />
      <button v-on:click="findUser">Find</button>
    </div>
    <div class="info">
      <div>Login: {{ allposts.login }}</div>
      <div>ID: {{ allposts.id }}</div>
      <div>URL: {{ allposts.url }}</div>
      <div>Name: {{ allposts.name }}</div>
      <div>Location: {{ allposts.location }}</div>
      <div>Public repos: {{ allposts.public_repos }}</div>
      <div>Followers: {{ allposts.followers }}</div>
      <div>Following: {{ allposts.following }}</div>
    </div>
    <button class="sendData" v-on:click="sendData">Send Data</button>
    <p class="true" v-if="userExist">
      User created.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userExist: false
    };
  },
  name: "Section_4",
  computed: {
    allposts() {
      return this.$store.getters.getGitInfo;
    },
    getLogin: {
      get() {
        return this.$store.state.form.login;
      },
      set(getLogin) {
        this.$store.commit("updateLogin", getLogin);
      }
    }
  },
  methods: {
    findUser: function() {
      this.$store.dispatch("fetchGitInfo");
    },
    sendData: function() {
      console.log(
        "Surname: " + this.$store.state.form.surname,
        "\n",
        "Name: " + this.$store.state.form.name,
        "\n",
        "Email: " + this.$store.state.form.email,
        "\n",
        "Phone: " + this.$store.state.form.phone,
        "\n",
        "Date of birth: " + this.$store.state.form.birth,
        "\n",
        "Gender: " + this.$store.state.form.gender,
        "\n",
        "Education level: " + this.$store.state.form.education,
        "\n",
        "Frameworks: " + this.$store.state.form.frameworks,
        "\n",
        "SMS: " + this.$store.state.form.sms,
        "\n",
        "Work experience: " + this.$store.state.form.workExp,
        "\n",
        "GitHub Login: " + this.$store.state.form.login,
        "\n",
        "GitHub ID: " + this.$store.state.gitInfo.id,
        "\n",
        "GitHub URL: " + this.$store.state.gitInfo.url,
        "\n",
        "GitHub Name: " + this.$store.state.gitInfo.name,
        "\n",
        "GitHub location: " + this.$store.state.gitInfo.location,
        "\n",
        "GitHub public repos: " + this.$store.state.gitInfo.public_repos,
        "\n",
        "GitHub followers: " + this.$store.state.gitInfo.followers,
        "\n",
        "GitHub following: " + this.$store.state.gitInfo.following,
        "\n"
      );
      this.userExist = true;
    }
  }
};
</script>
<style></style>

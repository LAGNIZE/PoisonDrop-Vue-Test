<template>
  <div class="wrapper">
    Step 1
    <div>
      <input type="text" v-model="getName" placeholder="What is your name?" />
    </div>
    <div>
      <input type="email" v-model="getEmail" placeholder="Type your email" />
    </div>
    <div>
      <input
        type="tel"
        v-model="getPhone"
        placeholder="Type your phone number"
      />
    </div>
    <div>
      <input
        type="text"
        v-model="getBirth"
        placeholder="Type your date of birth"
      />
    </div>
    <div>
      <label>Select your gender:</label>
      <label for="men">Men</label>
      <input
        type="radio"
        value="men"
        id="men"
        v-model="getGender"
        name="gender"
      />
      <label for="women">Women</label>
      <input
        type="radio"
        value="women"
        id="women"
        v-model="getGender"
        name="gender"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Section_1",
  computed: {
    getName: {
      get() {
        return this.$store.state.form.name;
      },
      set(getName) {
        this.$store.commit("updateName", getName);
      }
    },
    getEmail: {
      get() {
        return this.$store.state.form.email;
      },
      set(getEmail) {
        this.$store.commit("updateEmail", getEmail);
      }
    },
    getPhone: {
      get() {
        return this.$store.state.form.phone;
      },
      set(getPhone) {
        this.$store.commit("updatePhone", getPhone);
      }
    },
    getBirth: {
      get() {
        return this.$store.state.form.birth;
      },
      set(getBirth) {
        this.$store.commit("updateBirth", getBirth);
      }
    },
    getGender: {
      get() {
        return this.$store.state.form.gender;
      },
      set(getGender) {
        this.$store.commit("updateGender", getGender);
      }
    }
  }
};
</script>
<style>
.wrapper div {
  margin-top: 10px;
}
</style>

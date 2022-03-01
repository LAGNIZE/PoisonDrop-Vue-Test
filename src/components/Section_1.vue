<template>
  <div>
    Step 1
    <input type="text" v-model="form.name" placeholder="What is your name?" />
    <input type="email" v-model="form.email" placeholder="Type your email?" />
    <input
      type="tel"
      v-model="form.phone"
      placeholder="What is your phone number?"
    />
    <input
      type="text"
      v-model="form.birth"
      placeholder="Type your date of birth?"
    />
    <div>
      <label for="men">Men</label>
      <input
        type="radio"
        value="men"
        id="men"
        v-model="form.gender"
        name="gender"
      />
      <label for="women">Women</label>
      <input
        type="radio"
        value="women"
        id="women"
        v-model="form.gender"
        name="gender"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Section_1",
  data() {
    return {
      form: {
        name: null,
        email: null,
        phone: null,
        birth: null,
        gender: null
      }
    };
  }
};
</script>

<template>
  <div class="wrapSec">
    Step 1
    <div>
      <input
        type="text"
        v-model.trim="$v.getSurname.$model"
        placeholder="What is your surname?"
      />
      <div class="false" v-if="!$v.getSurname.required && $v.getSurname.$dirty">
        *Field is required
      </div>
    </div>
    <div>
      <input
        type="text"
        v-model.trim="$v.getName.$model"
        placeholder="What is your name?"
      />
    </div>
    <div class="false" v-if="!$v.getName.required && $v.getName.$dirty">
      *Field is required
    </div>
    <div>
      <input
        type="email"
        v-model.trim="$v.getEmail.$model"
        placeholder="Type your email"
      />
    </div>
    <div>
      <input
        type="tel"
        v-model.trim="$v.getPhone.$model"
        placeholder="Phone: 7XXXXXXXXXX"
      />
    </div>
    <div class="false" v-if="!$v.getPhone.required && $v.getPhone.$dirty">
      *Field is required
    </div>
    <div>
      <input
        type="text"
        v-model.trim="$v.getBirth.$model"
        placeholder="Birthday: XX-XX-XXXX"
      />
    </div>
    <div class="false" v-if="!$v.getBirth.required && $v.getBirth.$dirty">
      *Field is required
    </div>
    <div>
      <label>Select your gender:</label>
      <label for="man">Man</label>
      <input
        type="radio"
        value="man"
        id="man"
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
import {
  email,
  required,
  maxLength,
  minLength
} from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";

const phone = helpers.regex("alpha", /^(7)[0-9]{10}/);
const date = helpers.regex("alpha", /[0-9]{2}-[0-9]{2}-[0-9]{4}/);

export default {
  name: "Section_1",
  validations: {
    getSurname: { required },
    getName: { required },
    getEmail: { email },
    getPhone: {
      required,
      phone,
      maxLength: maxLength(11),
      minLength: minLength(11)
    },
    getBirth: { required, date }
  },
  computed: {
    getSurname: {
      get() {
        return this.$store.state.form.surname;
      },
      set(getSurname) {
        this.$store.commit("updateSurname", getSurname);
      }
    },
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
<style></style>

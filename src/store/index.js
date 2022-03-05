import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    steps: {
      step: 1,
      totalSteps: 4
    },
    form: {
      name: null,
      email: null,
      phone: null,
      birth: null,
      gender: null,
      education: null,
      frameworks: null,
      sms: null,
      workExp: [""],
      login: ""
    },
    edLevel: [
      "Среднее",
      "Средне-специальное",
      "Неоконченное высшее",
      "Бакалавр",
      "Магистрант",
      "Аспирант"
    ],
    frameOptions: [
      "Vue.js", "React", "Angular", "Svelte", "Ember,js"
    ]
  },
  getters: {
    getSteps(state) {
      return state.steps;
    },
    getName(state) {
      return state.form.name;
    },
    getEmail(state) {
      return state.form.email;
    },
    getPhone(state) {
      return state.form.phone;
    },
    getBirth(state) {
      return state.form.birth;
    },
    getGender(state) {
      return state.form.gender;
    },
    getEducation(state) {
      return state.form.education;
    },
    getFrameworks(state) {
      return state.form.frameworks;
    },
    getSMS(state) {
      return state.form.sms;
    },
    getWorkExp(state) {
      return state.form.workExp;
    },
    getLogin(state) {
      return state.form.login;
    },
    getEdLevel(state) {
      return state.edLevel;
    },
    getFrameOptions(state) {
      return state.frameOptions;
    }
  },
  mutations: {
    increment(state) {
      state.steps.step++;
    },
    decrement(state) {
      state.steps.step--;
    },
    updateName(state, value) {
      state.form.name = value;
    },
    updateEmail(state, value) {
      state.form.email = value;
    },
    updatePhone(state, value) {
      state.form.phone = value;
    },
    updateBirth(state, value) {
      state.form.birth = value;
    },
    updateGender(state, value) {
      state.form.gender = value;
    },
    updateEducation(state, value) {
      state.form.education = value;
    },
    updateFrameworks(state, value) {
      state.form.frameworks = value;
    },
    updateSMS(state, value) {
      state.form.sms = value;
    },
    updateWorkExp(state, value) {
      state.form.workExp[value.index].push(value);
    },
    updateLogin(state, value) {
      state.form.login = value;
    }
  },
  actions: {}
});
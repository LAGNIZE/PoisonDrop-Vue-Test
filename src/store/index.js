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
      surname: "",
      name: "",
      email: "",
      phone: "",
      birth: "",
      gender: "",
      education: "",
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
    ],
    gitInfo: [],
    submitStatus: null
  },
  getters: {
    getSteps(state) {
      return state.steps;
    },
    getSurname(state) {
      return state.form.surname;
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
    },
    getGitInfo(state) {
      return state.gitInfo;
    },
    getSubmitStatus(state) {
      return state.submitStatus;
    },
  },
  mutations: {
    increment(state) {
      state.steps.step++;
    },
    decrement(state) {
      state.steps.step--;
    },
    updateSurname(state, value) {
      state.form.surname = value;
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
      state.form.workExp.push(value);
    },
    updateLogin(state, value) {
      state.form.login = value;
    },
    updategitInfo(state, posts) {
      state.gitInfo = posts;
    },
    updateSubmitStatus(state, value) {
      state.submitStatus = value;
    },
  },
  actions: {
    async fetchGitInfo(ctx) {
      const res = await fetch('https://api.github.com/users/' + ctx.getters.getLogin)
      const posts = await res.json()
      ctx.commit('updategitInfo', posts)
    }
  }
});
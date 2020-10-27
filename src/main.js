// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from "vuex";
import VueClipboard from "vue-clipboard2";
import VueScrollProgressBar from "@guillaumebriday/vue-scroll-progress-bar";
import BackToTop from "vue-backtotop";

import DefaultLayout from "~/layouts/Default.vue";

import "./assets/css/themes.css";

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex);
  Vue.use(VueClipboard);
  if (process.isClient) {
    Vue.use(VueScrollProgressBar);
    Vue.use(BackToTop);
  }

  appOptions.store = new Vuex.Store({
    state: {
      theme: "dracula",
      copy: false,
    },
    getters: {
      getTheme: (state) => {
        return state.theme;
      },
      getCopied: (state) => {
        return state.copied;
      },
    },
    mutations: {
      setTheme(state, theme) {
        state.theme = theme;
      },
      setCopy(state, value) {
        state.copy = value;
      },
    },
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}

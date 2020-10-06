// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from "vuex";
import VueClipboard from "vue-clipboard2";

import DefaultLayout from "~/layouts/Default.vue";

import "./assets/css/themes.css";

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex);
  Vue.use(VueClipboard);
  appOptions.store = new Vuex.Store({
    state: {
      theme: "dracula",
    },
    getters: {
      getTheme: (state) => {
        return state.theme;
      },
    },
    mutations: {
      setTheme(state, theme) {
        state.theme = theme;
      },
    },
  });

  if (process.isClient) {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", appOptions.store.state.theme);
    } else {
      appOptions.store.commit("setTheme", localStorage.getItem("theme"));
    }
  }

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}

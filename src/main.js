// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from "vuex";
import VueClipboard from "vue-clipboard2";

import DefaultLayout from "~/layouts/Default.vue";

import "./assets/css/themes.css";

export default function (Vue, { router, head, isClient, appOptions }) {
  // global metadata
  head.meta.push({
    key: "description",
    name: "description",
    content:
      "Raz.WORKS - Web Designer & Developer by day, Blender 3d ninja by night. I design keyboards stuff too",
  });
  head.meta.push({
    key: "author",
    name: "author",
    content: "Raz",
  });
  head.meta.push({
    key: "robots",
    content: "index,follow",
  });
  head.meta.push({
    key: "og:title",
    name: "og:title",
    content: "Raz.WORKS",
  });
  head.meta.push({
    key: "og:description",
    name: "og:description",
    content:
      "Raz.WORKS - Web Designer & Developer by day, Blender 3d ninja by night. I design keyboards stuff too",
  });
  head.meta.push({
    key: "og:image",
    name: "og:image",
    content: "./assets/images/m60_1.jpg",
  });
  head.meta.push({
    key: "twitter:title",
    name: "twitter:title",
    content: "Raz.WORKS",
  });
  head.meta.push({
    key: "twitter:description",
    name: "twitter:description",
    content:
      "Raz.WORKS - Web Designer & Developer by day, Blender 3d ninja by night. I design keyboards stuff too",
  });
  head.meta.push({
    key: "twitter:image",
    name: "twitter:image",
    content: "./assets/images/m60_1.jpg",
  });
  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: "og:url",
      name: "og:url",
      content: process.env.GRIDSOME_WEBSITE_URL + to.path,
    });
    next();
  });
  Vue.use(Vuex);
  Vue.use(VueClipboard);
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

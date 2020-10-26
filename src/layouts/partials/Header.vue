<template>
  <header class="w-full p-3 header">
    <nav class="rounded-lg bg-background-lighter">
      <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              class="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-md text-background-highlight hover:text-accent-var hover:bg-background-highlight focus:outline-none focus:bg-background-highlight focus:text-accent-class"
              aria-label="Main menu"
              aria-expanded="false"
              @click.stop="navMenu = !navMenu"
            >
              <svg
                v-if="navMenu === false"
                class="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                v-if="navMenu === true"
                class="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="">
              <img
                class="block w-auto h-10 lg:hidden"
                src="../../assets/images/razlogo.png"
                alt="Raz.WORKS logo"
              />
              <img
                class="hidden w-auto h-10 lg:block"
                src="../../assets/images/razlogo.png"
                alt="Raz.WORKS logo"
              />
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex">
                <g-link
                  to="/"
                  class="px-3 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded text-text-foreground focus:outline-none hover:bg-background-highlight"
                  >Home
                </g-link>
                <g-link
                  to="/about/"
                  class="px-3 py-2 ml-4 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md text-text-foreground hover:bg-background-highlight focus:outline-none focus:text-white focus:bg-gray-700"
                  >About
                </g-link>
                <g-link
                  to="/projects/"
                  class="px-3 py-2 ml-4 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md text-text-foreground hover:bg-background-highlight focus:outline-none focus:text-white focus:bg-gray-700"
                  >Projects
                </g-link>
              </div>
            </div>
          </div>
          <div
            class="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <!-- Theme dropdown -->
            <div class="relative z-50 ml-3">
              <div>
                <button
                  class="flex p-1 text-sm transition duration-150 ease-in-out border-2 rounded-full border-background-selection hover:bg-background-selection focus:outline-none focus:border-accent-class"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                  @click.stop="themeMenu = !themeMenu"
                >
                  <svg
                    class="w-6 h-6 ml-1 text-accent-var"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>
                  <span class="mx-1">{{
                    selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)
                  }}</span>
                </button>
              </div>

              <div
                v-if="themeMenu"
                class="absolute right-0 block w-48 mt-2 overflow-y-auto origin-top-right rounded-md shadow-lg max-h-400px"
                v-click-outside="hideTheme"
              >
                <div
                  class="py-1 rounded-md shadow-xs bg-background-selection"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <a
                    v-for="(theme, index) in themes"
                    :key="'theme-' + index"
                    @click.stop="setTheme(theme)"
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 transition duration-150 ease-in-out text-text-foreground hover:bg-background-highlight focus:outline-none focus:bg-background-highlight"
                    role="menuitem"
                    >{{ theme.charAt(0).toUpperCase() + theme.slice(1) }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="navMenu" v-click-outside="hideNav">
        <div class="px-2 pt-2 pb-3">
          <g-link
            to="/"
            class="block px-3 py-2 mt-1 text-base font-medium transition duration-150 ease-in-out rounded-md text-text-foreground hover:bg-background-highlight focus:outline-none"
            >Home
          </g-link>
          <g-link
            to="/about/"
            class="block px-3 py-2 mt-1 text-base font-medium transition duration-150 ease-in-out rounded-md text-text-foreground hover:bg-background-highlight focus:outline-none"
            >About
          </g-link>
          <g-link
            to="/projects/"
            class="block px-3 py-2 mt-1 text-base font-medium transition duration-150 ease-in-out rounded-md text-text-foreground hover:bg-background-highlight focus:outline-none"
            >Projects
          </g-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import ClickOutside from "vue-click-outside";
export default {
  data() {
    return {
      themes: [
        "dracula",
        "ocean",
        "onedark",
        "sakura",
        "rebecca",
        "nord",
        "palenight",
        "ashes",
        "solarized-dark",
        "solarized-light",
        "material",
        "vivid",
        "github",
        "green-screen",
        "icy",
        "monokai",
        "mocha",
        "fruit-soda",
        "codeschool",
        "cupertino",
        "flat",
        "brogrammer",
        "google-dark",
        "google-light",
        "bow",
        "wob",
      ],
      selectedTheme: "",
      themeMenu: false,
      navMenu: false,
    };
  },
  computed: {
    storeTheme() {
      return this.$store.state.theme;
    },
  },
  watch: {
    storeTheme() {
      this.selectedTheme = this.storeTheme;
    },
  },
  methods: {
    setTheme(theme) {
      this.$store.commit("setTheme", theme);
      localStorage.setItem("theme", theme);
      this.selectedTheme = theme;
    },
    hideTheme() {
      this.themeMenu = false;
    },
    hideNav() {
      this.navMenu = false;
    },
  },
  mounted() {
    this.themes.sort();
    this.selectedTheme = this.storeTheme;
  },

  directives: {
    ClickOutside,
  },
};
</script>
<style>
.active--exact {
  @apply bg-background-selection;
  @apply rounded;
  @apply font-bold;
}
</style>

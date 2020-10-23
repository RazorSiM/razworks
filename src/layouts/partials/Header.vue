<template>
  <header class="header w-full p-3">
    <div
      class="bg-background-lighter px-3 py-2 h-full sm:h-10 rounded-md flex flex-wrap items-center justify-between"
    >
      <div class="flex items-center">
        <strong class="mr-5 break-word">
          {{ $static.metadata.siteName }}
        </strong>
        <nav class="nav h-full flex items-center">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about">About</g-link>
          <g-link class="nav__link" to="/projects">Projects</g-link>
        </nav>
      </div>

      <div class="justify-self-end">
        <div
          class="dropdown inline-block relative"
          @mouseover="themeMenu = true"
          @mouseleave="themeMenu = false"
        >
          <button
            class="px-4 rounded inline-flex items-center bg-background-highlight"
          >
            <span class="mr-1">🐧 {{ selectedTheme }}</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </button>
          <ul
            class="dropdown-menu absolute pt-1 right-0 z-10"
            :class="{ hidden: !themeMenu }"
          >
            <li
              v-for="(theme, index) in themes"
              :key="'theme' + index"
              @click="setTheme(theme)"
              class="cursor-pointer"
            >
              <span
                class="bg-background-lighter hover:bg-background-selection py-2 px-4 block whitespace-no-wrap"
                href="#"
                >{{ theme }}</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
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
export default {
  data() {
    return {
      themes: ["dracula", "nord", "bow", "wob"],
      selectedTheme: "",
      themeMenu: false,
    };
  },
  mounted() {
    this.selectedTheme = this.$store.state.theme;
  },
  methods: {
    setTheme(theme) {
      this.$store.commit("setTheme", theme);
      localStorage.setItem("theme", theme);
      this.selectedTheme = theme;
    },
  },
};
</script>
<style>
.nav__link {
  @apply px-1;
  @apply transition-all;
  @apply duration-200;
  @apply block;
}
.nav__link:hover {
  @apply font-dankit;
  @apply text-accent-url;
  @apply underline;
}
.active--exact {
  @apply bg-background-selection;
  @apply rounded-sm;
  @apply font-bold;
}
</style>

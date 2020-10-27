<template>
  <div
    class="flex flex-col justify-between w-full transition-all duration-200 bg-background-base text-text-foreground layout font-dank"
    :class="theme"
  >
    <main-nav></main-nav>
    <transition name="fade" appear>
      <slot />
    </transition>
    <Footer class=""></Footer>
    <back-to-top>
      <button
        class="p-3 transition-all duration-100 transform rounded-full shadow-xl bg-background-highlight hover:scale-125 hover:bg-accent-class text-text-foreground hover:text-background-base focus:outline-none"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          ></path>
        </svg>
      </button>
    </back-to-top>
    <div
      v-if="copy"
      class="fixed bottom-0 right-0 w-full max-w-sm p-3 m-8 rounded-lg shadow-lg bg-background-lighter"
    >
      🤖 Item in your Clipboard
    </div>
  </div>
</template>

<script>
import MainNav from "./partials/Header";
import Footer from "./partials/Footer";

export default {
  components: {
    MainNav,
    Footer,
  },
  data() {
    return {
      theme: this.$store.state.theme,
      progress: 0,
    };
  },
  computed: {
    copy() {
      return this.$store.state.copy;
    },
    storeTheme() {
      return this.$store.state.theme;
    },
  },
  methods: {
    stopCopy() {
      this.$store.commit("setCopy", false);
    },
  },
  watch: {
    copy() {
      setTimeout(() => {
        this.stopCopy();
      }, 2000);
    },
    storeTheme() {
      this.theme = this.$store.state.theme;
    },
  },
  mounted() {
    if (!localStorage.getItem("theme")) {
      this.$store.commit("setTheme", "dracula");
      localStorage.setItem("theme", "dracula");
    } else {
      this.$store.commit("setTheme", localStorage.getItem("theme"));
      localStorage.setItem("theme", this.storeTheme);
    }
  },
};
</script>
<style>
.layout {
  min-height: 100vh;
}
.progress-bar {
  @apply bg-accent-var;
  @apply rounded-full;
}
a {
  @apply text-accent-url;
  @apply font-dankit;
  @apply transition-all;
  @apply duration-100;
}
a:hover {
  @apply underline;
  @apply text-accent-tag;
}
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>

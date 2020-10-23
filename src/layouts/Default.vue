<template>
  <div class="layout font-dank flex flex-col justify-between" :class="theme">
    <main-nav></main-nav>
    <transition name="fade" appear>
      <slot />
    </transition>
    <Footer class=""></Footer>
    <div
      v-if="copy"
      class="fixed bottom-0 right-0 m-8 p-3 w-full max-w-sm bg-background-lighter shadow-lg rounded-lg"
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
  computed: {
    theme() {
      return this.$store.state.theme;
    },
    copy() {
      return this.$store.state.copy;
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
  },
  mounted() {},
};
</script>
<style>
.layout {
  min-height: 100vh;
  @apply w-full;
  @apply bg-background-base;
  @apply text-text-foreground;
  @apply transition-all;
  @apply duration-200;
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

<template>
  <div class="layout font-dank" :class="theme">
    <Header></Header>
    <div class="container mx-auto px-4 md:px-16">
      <slot />
      <div
        v-if="copy"
        class="fixed bottom-0 right-0 m-8 p-3 w-full max-w-sm bg-background-lighter shadow-lg rounded-lg"
      >
        🤖 Item in your Clipboard
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./partials/Header";

export default {
  components: {
    Header,
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
  @apply h-full;
  @apply w-full;
  @apply fixed;
  @apply overflow-y-auto;
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
</style>

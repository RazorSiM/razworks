<template>
  <div class="layout font-dank" :class="theme">
    <Header></Header>
    <slot />
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  components: {
    Header,
  },
  computed: {
    theme() {
      return this.$store.state.theme;
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
</style>

<template>
  <header class="header">
    <strong>
      <g-link to="/" class="text-accent-var">{{
        $static.metadata.siteName
      }}</g-link>
    </strong>
    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/portfolio">Portfolio</g-link>
      <select class="theme-selector" v-model="selTheme">
        <option v-for="(theme, index) in themes" :key="index">
          {{ theme }}
        </option>
      </select>
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
export default {
  data() {
    return {
      themes: ["dracula", "nord"],
      selTheme: "",
    };
  },
  watch: {
    selTheme: function () {
      this.setTheme();
    },
  },
  mounted() {
    this.selTheme = this.$store.state.theme;
  },
  methods: {
    setTheme() {
      this.$store.commit("setTheme", this.selTheme);
      localStorage.setItem("theme", this.selTheme);
    },
  },
};
</script>
<style>
.header {
  @apply w-full;
  @apply flex;
  @apply items-center;
  @apply justify-around;
  @apply h-16;
}
.nav__link {
  @apply mx-2;
  @apply px-2;
  @apply transition-all;
  @apply duration-200;
}
.nav__link:hover {
  @apply font-dankit;
  @apply text-accent-url;
  @apply underline;
}
.theme-selector {
  @apply bg-background-base;
  @apply border-b-2;
  @apply border-text-foreground;
  @apply text-text-foreground;
  @apply transition-all;
  @apply duration-100;
}
.theme-selector:focus {
  @apply border-b-2;
  @apply border-accent-class;
  @apply outline-none;
}
</style>

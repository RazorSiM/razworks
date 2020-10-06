<template>
  <header class="header w-full p-3">
    <div
      class="bg-background-lighter px-3 h-10 rounded-md flex items-center justify-between"
    >
      <div class="flex items-center">
        <strong class="mr-5">
          <g-link to="/" class="text-accent-var">{{
            $static.metadata.siteName
          }}</g-link>
        </strong>
        <nav class="nav h-full flex items-center">
          <g-link
            class="nav__link"
            to="/"
            active-class="underline bg-background-highlight rounded-sm"
            >Home</g-link
          >
          <g-link
            class="nav__link"
            to="/portfolio"
            active-calss="underline bg-background-highlight"
            >Portfolio</g-link
          >
        </nav>
      </div>

      <div class="justify-self-end">
        <select
          class="border-b-2 bg-background-lighter outline-none focus:outline-none"
          v-model="selTheme"
        >
          <option v-for="(theme, index) in themes" :key="index">
            {{ theme }}
          </option>
        </select>
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
      themes: ["dracula", "nord", "avanguardia"],
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
</style>

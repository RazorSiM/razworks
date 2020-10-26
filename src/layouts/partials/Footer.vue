<template>
  <footer
    class="flex items-center justify-center w-full px-4 pt-32 pb-4 footer"
  >
    <div class="flex flex-col">
      <p class="text-center">
        Made by 👽 and 👾 with the help of
        <g-link to="/about/">myself</g-link> - this is built on
        <g-link to="https://vuejs.org">Vue</g-link> with
        <g-link to="https://gridsome.org">Gridsome</g-link> and
        <g-link to="https://tailwindcss.com">TailwindCSS</g-link> under the hood
        🐱‍👤
      </p>
      <div class="flex justify-center">
        <socials
          class="grid justify-center w-full grid-flow-col gap-4 my-5"
        ></socials>
      </div>
    </div>
  </footer>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Socials from "../../components/Socials";
export default {
  components: {
    Socials,
  },
  data() {
    return {
      themes: ["dracula", "nord"],
      selTheme: "",
    };
  },
};
</script>
<style></style>

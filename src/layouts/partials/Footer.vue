<template>
  <footer
    class="footer w-full flex items-center justify-center pt-32 pb-4 px-4"
  >
    <div class="flex flex-col">
      <p class="text-center">
        Made by 👽 and 👾 with the help of
        <g-link to="/about/">myself</g-link> - this website uses
        <g-link to="https://gridsome.org">Gridsome</g-link> under the hood!
      </p>
      <div class="flex justify-center">
        <socials
          class="my-5 w-full grid grid-flow-col gap-4 justify-center"
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

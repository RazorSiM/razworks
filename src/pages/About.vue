<template>
  <Layout>
    <div
      class="prose lg:prose-xl mx-auto"
      v-html="$page.about.edges[0].node.content"
    ></div>
    <div class="flex justify-center">
      <socials
        class="my-5 w-full grid grid-flow-col gap-4 justify-center"
      ></socials>
    </div>
  </Layout>
</template>
<page-query>
query {
  about: allAbout {
    edges {
      node {
        content
      }
    }
  }
}
</page-query>
<script>
import Socials from "../components/Socials";
export default {
  metaInfo: {
    title: "About",
    meta: [
      {
        key: "og:title",
        name: "og:title",
        content: "Raz.WORKS - About",
      },
      {
        key: "twitter:title",
        name: "twitter:title",
        content: "Raz.WORKS - About",
      },
      {
        key: "og:url",
        name: "og:url",
        content: "https://raz.works/about",
      },
    ],
  },
  components: {
    Socials,
  },
};
</script>

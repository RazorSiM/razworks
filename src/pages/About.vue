<template>
  <Layout>
    <div>
      <!-- <ClientOnly> -->
      <vue-scroll-progress-bar
        height="5px"
        :barClass="{ 'progress-bar': true }"
        backgroundColor=""
      />
      <!-- </ClientOnly> -->

      <div
        class="px-4 pt-24 mx-auto prose lg:prose-xl"
        v-html="$page.about.edges[0].node.content"
      ></div>
      <div class="flex justify-center">
        <socials
          class="grid justify-center w-full grid-flow-col gap-4 my-5"
        ></socials>
      </div>
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
<style></style>
<script>
import Socials from "../components/Socials";
export default {
  metaInfo: {
    title: "About Me",
    meta: [
      {
        key: "description",
        name: "description",
        content: "Raz.WORKS - Let's know something more about me 👽",
      },
      {
        key: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        key: "twitter:site",
        name: "twitter:site",
        content: "@Razor_SiM",
      },
      {
        key: "twitter:creator",
        name: "twitter:creator",
        content: "@Razor_SiM",
      },
      {
        key: "twitter:title",
        name: "twitter:title",
        content: "Raz.WORKS - Home",
      },
      {
        key: "twitter:description",
        name: "twitter:description",
        content: "Raz.WORKS - Let's know something more about me 👽",
      },
      {
        key: "twitter:url",
        name: "twitter:url",
        content: "https://raz.works/about",
      },
      {
        key: "twitter:image",
        name: "twitter:image",
        content: "https://raz.works/socialShare.jpg",
      },
      {
        key: "twitter:image:alt",
        name: "twitter:image:alt",
        content: "Raz.WORKS render",
      },
      {
        key: "og:type",
        name: "og:type",
        content: "article",
      },
      {
        key: "og:title",
        name: "og:title",
        content: "Raz.WORKS - About",
      },

      {
        key: "og:description",
        name: "og:description",
        content: "Raz.WORKS - Let's know something more about me 👽",
      },
      {
        key: "og:url",
        name: "og:url",
        content: "https://raz.works/about",
      },
      {
        key: "og:image",
        name: "og:image",
        content: "https://raz.works/socialShare.jpg",
      },
      {
        key: "og:image:alt",
        name: "og:image:alt",
        content: "Raz.WORKS render",
      },
    ],
  },
  components: {
    Socials,
  },
};
</script>

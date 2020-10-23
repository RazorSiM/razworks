<template>
  <Layout>
    <div class="projects px-4">
      <div class="prose mb-10 mx-auto">
        <h1 class="text-4xl font-bold">Projects</h1>
        <p>
          These are past and ongoing projects I worked on. Keep in mind not all
          these <strong>group buys</strong> and
          <strong>interest checks</strong> are run by me - if something is here
          it does means I made some render/graphic here and there 😎. You can
          check more inside every project!
        </p>
      </div>
      <div class="container mx-auto">
        <div
          class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <project-small
            v-for="edge in $page.keycaps.edges"
            :key="'keycap' + edge.node.id"
            :title="edge.node.title"
            :image="edge.node.featuredImage"
            :excerpt="edge.node.excerpt"
            :url="edge.node.path"
          ></project-small>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
   keycaps: allKeycap {
    edges {
      node {
        id,
        excerpt
        title
        featuredImage(quality: 40)
        path
      }
    }
  }
}

</page-query>
<script>
import ProjectSmall from "../../components/ProjectSmall";
export default {
  metaInfo: {
    title: "Projects",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Raz.WORKS - Here you are! My past and current projects are here!",
      },
      {
        key: "twitter:card",
        name: "twitter:card",
        content: "summary",
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
        content:
          "Raz.WORKS - Here you are! My past and current projects are here!",
      },
      {
        key: "twitter:url",
        name: "twitter:url",
        content: "https://raz.works/projects",
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
        key: "og:title",
        name: "og:title",
        content: "Raz.WORKS - Home",
      },

      {
        key: "og:description",
        name: "og:description",
        content:
          "Raz.WORKS - Here you are! My past and current projects are here!",
      },
      {
        key: "og:url",
        name: "og:url",
        content: "https://raz.works/projects",
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
    ProjectSmall,
  },
};
</script>

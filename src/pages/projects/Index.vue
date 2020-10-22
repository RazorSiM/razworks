<template>
  <Layout>
    <div class="projects">
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
        key: "og:title",
        name: "og:title",
        content: "Raz.WORKS - Projects",
      },
      {
        key: "twitter:title",
        name: "twitter:title",
        content: "Raz.WORKS - Projects",
      },
      {
        key: "description",
        name: "description",
        content: "Raz.WORKS - Checkout my past and ongoing projects!",
      },
      {
        key: "og:description",
        name: "og:description",
        content: "Raz.WORKS - Checkout my past and ongoing projects!",
      },
      {
        key: "twitter:description",
        name: "twitter:description",
        content: "Raz.WORKS - Checkout my past and ongoing projects!",
      },
    ],
  },
  components: {
    ProjectSmall,
  },
};
</script>

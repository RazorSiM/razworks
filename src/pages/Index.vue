<template>
  <Layout>
    <div class="container px-4 mx-auto index md:px-16">
      <div class="flex justify-center w-full my-20 intro md:my-32">
        <shell
          title="zsh"
          command="./init.sh"
          distroTitle="Arch Linux"
          :distroIcon="distroIcon"
          class="w-full border-2 shadow-xl border-background-lighter"
        >
          <command
            command="./intro.sh"
            :distroIcon="distroIcon"
            :distroTitle="distroTitle"
          ></command>
          <div class="printed">
            <ascii></ascii>
            <h2
              class="text-2xl font-normal leading-tight text-center md:text-4xl"
            >
              <span class="text-accent-fn font-dankit"
                >Web Designer & Developer</span
              >
              by day, <br /><span class="text-accent-fn font-dankit"
                >Blenderman</span
              >
              by night
            </h2>
          </div>
          <socials
            class="grid justify-center w-full grid-flow-col gap-4 my-10 socials"
          ></socials>
          <command
            command="bat about"
            :distroIcon="distroIcon"
            :distroTitle="distroTitle"
          ></command>

          <div class="mx-auto prose">
            <h3 class="">What, how and why</h3>
            <p class="">
              I am going to skip the presentations to go straight to the point:
              I like <strong>designing stuff</strong> and I love
              <strong>custom products</strong>. I started learning
              <strong>Blender</strong> during the 2020 March quarantine to try
              to make
              <a href="https://geekhack.org/index.php?topic=105981.0"
                >my custom keycaps design</a
              >
              real. I am
              <strong class=""
                >open to collaborations or simple commissions</strong
              >, just contact me! You can check my works here -
              <i class="f">minus the secret projects</i>
              👽
            </p>
            <p class="t">
              PS: the website is highly work in progress. It will definitely
              change during time and I promise I will try to update it with the
              GMK Avanguardia stuff 🐱‍👤
            </p>
          </div>
        </shell>
      </div>
      <div class="mb-16 latest-projects">
        <h2 class="mb-6 text-4xl font-bold">Latest Projects</h2>
        <div class="grid grid-flow-row grid-cols-1 gap-6 md:grid-cols-3">
          <project-small
            v-for="edge in $page.keycaps.edges"
            :key="'keycap' + edge.node.id"
            :title="edge.node.title"
            :image="edge.node.featuredImage"
            :excerpt="edge.node.excerpt"
            :url="edge.node.path"
          ></project-small>
        </div>
        <div class="flex justify-end w-full mt-10">
          <g-link class="text-2xl font-bold" to="/projects/">See all ⏩</g-link>
        </div>
      </div>

      <div class="featured-works">
        <h3 class="mb-4 text-2xl font-bold text-right">🌟Some of my works!</h3>
        <div
          class="grid grid-flow-col-dense grid-cols-4 grid-rows-3 gap-1 image-grid"
        >
          <template v-for="(img, index) in $page.home.edges[0].node.bestImages">
            <div
              :key="'' + index"
              class="bg-background-lighter"
              :class="{ 'col-span-3 row-span-3': index === activeIndex }"
              @click="activeIndex = index"
            >
              <g-image
                v-if="img.image !== null"
                :alt="img.name"
                :src="img.image"
                class="object-cover w-full h-full"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  keycaps: allKeycap(limit: 3, sortBy: "date") {
    edges {
      node {
        id
        excerpt
        title
        featuredImage(quality: 40)
        path
      }
    }
  }
  home: allHome {
    edges {
      node {
        bestImages {
          name
          image
        }
      }
    }
  }
}
</page-query>
<script>
import Shell from "../components/Shell";
import Command from "../components/Command";
import Socials from "../components/Socials";
import Ascii from "../components/Ascii";

import ProjectSmall from "../components/ProjectSmall";

export default {
  metaInfo: {
    title: "Home",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Raz.WORKS - Web Designer & Developer by day, Blender 3d ninja by night. I design keyboards stuff too",
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
        content:
          "Raz.WORKS - Web Designer & Developer by day, Blender 3d ninja by night. I design keyboards stuff too",
      },
      {
        key: "twitter:url",
        name: "twitter:url",
        content: "https://raz.works/",
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
        content: "Raz.WORKS - Home",
      },
      {
        key: "og:description",
        name: "og:description",
        content:
          "Raz.WORKS - Web Designer & Developer by day, Blender 3d ninja by night. I design keyboards stuff too",
      },
      {
        key: "og:url",
        name: "og:url",
        content: "https://raz.works/",
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
    Shell,
    Socials,
    Command,
    Ascii,
    ProjectSmall,
  },
  data() {
    return {
      activeIndex: 0,
      distroIcon:
        "M11.390232.60509C10.375655 3.09168 9.764285 4.7185 8.63513 7.13162c.692712.734695 1.542857 1.589214 2.923032 2.553937-1.484256-.610496-2.49621-1.223615-3.25277-1.859475-1.444897 3.015743-3.710204 7.311953-8.30554 15.568513 3.612246-2.08513 6.411955-3.36997 9.020993-3.861516-.111954-.48105-.175802-1.003208-.17143-1.54723l.0035-.115453c.057725-2.314286 1.261224-4.09417 2.68688-3.972595 1.425656.119825 2.53382 2.095627 2.477843 4.409038-.010496.43557-.06035.85452-.146064 1.242857 2.58105.504665 5.351895 1.78688 8.914286 3.844024-.702333-1.29271-1.329447-2.4586-1.928572-3.569387-.943732-.731196-1.926822-1.6828-3.933236-2.71312 1.3793.3586 2.366764.77143 3.136443 1.23411C13.970407 7.010922 13.478862 5.503924 11.390232.60509zM22.897813 21.360193v-.623615h-.233528v-.083965h.561516v.083965h-.2344v.623615h-.093587M23.322886 21.360193v-.70758h.14169l.167056.501166c.015744.04723.027114.082215.03411.10583.007873-.025365.020118-.06385.038485-.113703l.168805-.493294h.126822v.70758h-.090962v-.593003l-.206414.593003h-.083965l-.204665-.602624v.602623h-.090962",
      distroTitle: "Arch Linux",
    };
  },
  computed: {
    imagesOrder() {
      return this.images;
    },
  },
  methods: {
    makeFirst(index) {
      this.images.unshift(this.images[index]);
      this.images.splice(index + 1, 1);
    },
  },
};
</script>

<style></style>

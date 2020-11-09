<template>
  <Layout>
    <div class="px-4 pt-24 updates">
      <div class="justify-center mx-auto md:flex md:container">
        <div class="w-full md:w-2/6 md:pr-5">
          <shell
            title="Updates"
            distroTitle="Arch Linux"
            :distroIcon="distroIcon"
            class="w-full shadow-2xl"
          >
            <command
              command="cd updates && ls -l"
              :distroIcon="distroIcon"
              :distroTitle="distroTitle"
            ></command>
            <ul>
              <li
                class="py-2 border-b-2 border-base01"
                v-for="edge in $page.updates.edges"
                :key="`update-${edge.node.id}`"
              >
                <p class="text-sm text-tertiary">{{ edge.node.date }}</p>
                <a :href="`#${slugify(edge.node.title)}`">
                  {{ edge.node.title }}</a
                >
              </li>
            </ul>
            <div class="flex justify-center w-full">
              <pager class="py-5" :info="$page.updates.pageInfo"></pager>
            </div>
          </shell>
        </div>
        <div class="w-full mt-16 md:mt-0 md:w-4/6 md:pl-5">
          <shell
            title="Notes"
            distroTitle="Arch Linux"
            :distroIcon="distroIcon"
            class="w-full shadow-2xl"
          >
            <div
              class="mx-auto prose-sm prose md:prose lg:prose-lg xl:prose-xl"
              v-for="edge in $page.updates.edges"
              :key="`update-${edge.node.id}`"
            >
              <div class="relative pb-1/3" v-if="edge.node.featuredImage">
                <g-image
                  :src="edge.node.featuredImage"
                  class="absolute bottom-0 object-cover w-full h-full rounded-t-lg"
                ></g-image>
              </div>
              <div class="flex flex-col w-full pt-10">
                <span class="text-primary">{{ edge.node.date }} </span>
                <span class="text-secondary">
                  {{ edge.node.timeToRead }}
                  {{ edge.node.timeToRead > 1 ? "minutes" : "minute" }} read
                </span>
                <span
                  class="transition-all duration-200 cursor-pointer text-tertiary hover:text-primary"
                  @click="doCopy('https://raz.works' + edge.node.path)"
                >
                  <svg
                    class="inline w-6 h-6 fill-current"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    ></path>
                  </svg>
                  copy link to this article
                </span>
              </div>
              <article class="pt-5" v-html="edge.node.content"></article>
              <div class="w-full border border-base01"></div>
            </div>
          </shell>
        </div>
      </div>
      <div class="flex justify-center w-full mt-10">
        <pager class="py-5" :info="$page.updates.pageInfo"></pager>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($page:Int) {
  updates: allUpdate(perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        date(format: "MMMM DD, YYYY" )
        title
        timeToRead
        content
      }
    }
  }
}
</page-query>
<script>
import { Pager } from "gridsome";
import Shell from "../../components/Shell";
import Command from "../../components/Command";
export default {
  metaInfo: {
    title: "Updates",
    meta: [
      {
        key: "description",
        name: "description",
        content: "Raz.WORKS - Updates about my projects and future works",
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
        content: "Raz.WORKS - Updates",
      },
      {
        key: "twitter:description",
        name: "twitter:description",
        content: "Raz.WORKS - Updates about my projects and future works",
      },
      {
        key: "twitter:url",
        name: "twitter:url",
        content: "https://raz.works/updates",
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
        content: "Raz.WORKS - Updates",
      },
      {
        key: "og:description",
        name: "og:description",
        content: "Raz.WORKS - Updates about my projects and future works",
      },
      {
        key: "og:url",
        name: "og:url",
        content: "https://raz.works/updates",
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
    Pager,
    Shell,
    Command,
  },
  data() {
    return {
      distroIcon:
        "M11.390232.60509C10.375655 3.09168 9.764285 4.7185 8.63513 7.13162c.692712.734695 1.542857 1.589214 2.923032 2.553937-1.484256-.610496-2.49621-1.223615-3.25277-1.859475-1.444897 3.015743-3.710204 7.311953-8.30554 15.568513 3.612246-2.08513 6.411955-3.36997 9.020993-3.861516-.111954-.48105-.175802-1.003208-.17143-1.54723l.0035-.115453c.057725-2.314286 1.261224-4.09417 2.68688-3.972595 1.425656.119825 2.53382 2.095627 2.477843 4.409038-.010496.43557-.06035.85452-.146064 1.242857 2.58105.504665 5.351895 1.78688 8.914286 3.844024-.702333-1.29271-1.329447-2.4586-1.928572-3.569387-.943732-.731196-1.926822-1.6828-3.933236-2.71312 1.3793.3586 2.366764.77143 3.136443 1.23411C13.970407 7.010922 13.478862 5.503924 11.390232.60509zM22.897813 21.360193v-.623615h-.233528v-.083965h.561516v.083965h-.2344v.623615h-.093587M23.322886 21.360193v-.70758h.14169l.167056.501166c.015744.04723.027114.082215.03411.10583.007873-.025365.020118-.06385.038485-.113703l.168805-.493294h.126822v.70758h-.090962v-.593003l-.206414.593003h-.083965l-.204665-.602624v.602623h-.090962",
      distroTitle: "Arch Linux",
    };
  },
  methods: {
    slugify: function (value) {
      return value
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    },
    doCopy(value) {
      this.$copyText(value);
      this.$store.commit("setCopy", true);
    },
  },
};
</script>

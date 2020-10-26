<template>
  <Layout>
    <div class="mb-10 keycap">
      <div class="relative shadow-2xl hero">
        <g-image
          v-if="$page.keycap.featuredImage !== null"
          :src="$page.keycap.featuredImage"
          class="w-full h-auto"
          :alt="$page.keycap.title"
        ></g-image>
        <h1
          v-if="!$page.keycap.logo"
          class="absolute bottom-0 p-4 text-3xl font-bold"
        >
          {{ $page.keycap.title }}
        </h1>
        <g-image
          v-if="$page.keycap.logo !== null"
          class="absolute bottom-0 p-4"
          :src="$page.keycap.logo"
          :alt="$page.keycap.title + ' logo'"
        ></g-image>
      </div>
      <div class="flex flex-col items-center justify-center mt-10">
        <p class="text-accent-fn">{{ $page.keycap.date }}</p>
        <p class="text-background-highlight">
          {{ $page.keycap.timeToRead }}
          {{ $page.keycap.timeToRead > 1 ? "minutes" : "minute" }} read
        </p>
      </div>

      <article
        class="px-2 mx-auto mt-24 prose lg:prose-xl"
        v-html="$page.keycap.content"
      ></article>

      <div class="mt-20 kits" v-if="$page.keycap.kits.length !== 0">
        <div class="px-2 mx-auto prose lg:prose-xl">
          <h2>Kits</h2>
        </div>
        <div
          class="grid justify-center grid-flow-row grid-cols-1 gap-1 mt-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div v-for="(kit, index) in $page.keycap.kits" :key="'kit' + index">
            <g-image
              v-if="kit.image !== null"
              :src="kit.image"
              @click="
                lightboxImage = kit.image;
                showLightbox = true;
              "
              class="hover:cursor-pointer"
              :alt="$page.keycap.title + ' ' + kit.name"
            ></g-image>
          </div>
        </div>
      </div>
      <div class="mt-20 kits" v-if="$page.keycap.mousepads.length !== 0">
        <div class="px-2 mx-auto prose lg:prose-xl">
          <h2>Mousepads</h2>
        </div>
        <div class="grid grid-flow-row grid-cols-1 gap-1 mt-6 sm:grid-cols-2">
          <div
            v-for="(mousepad, index) in $page.keycap.mousepads"
            :key="'mousepad' + index"
          >
            <g-image
              v-if="mousepad.image !== null"
              :src="mousepad.image"
              @click="
                lightboxImage = mousepad.image;
                showLightbox = true;
              "
              class="hover:cursor-pointer"
              :alt="$page.keycap.title + ' ' + mousepad.name"
            ></g-image>
          </div>
        </div>
      </div>
      <div class="mt-20 renders" v-if="$page.keycap.renders.length !== 0">
        <div
          class="keeb-container"
          v-for="(render, index) in $page.keycap.renders"
          :key="'render' + index"
        >
          <div class="px-2 mx-auto mt-6 prose lg:prose-xl">
            <h3>{{ render.name }}</h3>
          </div>
          <div
            v-if="render.images.length > 1"
            class="grid grid-flow-row grid-cols-1 gap-1 mt-6 sm:grid-cols-2"
          >
            <div
              v-for="(image, index) in render.images"
              :key="render.name + index"
            >
              <g-image
                v-if="image !== null"
                :src="image"
                @click="
                  lightboxImage = image;
                  showLightbox = true;
                "
                class="hover:cursor-pointer"
                :alt="$page.keycap.title + ' ' + render.name"
              ></g-image>
            </div>
          </div>
          <template v-else>
            <div
              v-for="(image, index) in render.images"
              :key="render.name + index"
              class="container mx-auto"
            >
              <g-image
                v-if="image !== null"
                :src="image"
                @click="
                  lightboxImage = image;
                  showLightbox = true;
                "
                class="w-full h-auto mx-auto hover:cursor-pointer"
                :alt="$page.keycap.title + ' ' + render.name"
              ></g-image>
            </div>
          </template>
        </div>
      </div>
      <lightbox
        v-if="lightboxImage !== null"
        :image="lightboxImage"
        :showing="showLightbox"
        @close="showLightbox = false"
        :showClose="true"
      ></lightbox>
    </div>
  </Layout>
</template>
<page-query>
query ($id: ID!) {
  keycap(id: $id) {
    path
    title
    date (format: "MMMM DD, YYYY")
    logo (width: 250)
    featuredImage (quality: 100  fit: cover )
    excerpt
    timeToRead
    kits {
      image
      name
    }
    mousepads {
      image
      name
    }
    renders {
      name
      images
    }
    content
    
  }
}
</page-query>
<script>
import Lightbox from "../components/Lightbox";

export default {
  metaInfo() {
    return {
      title: this.$page.keycap.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.keycap.excerpt,
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
          content: "Raz.WORKS - " + this.$page.keycap.title,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.keycap.excerpt,
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: "https://raz.works" + this.$page.keycap.featuredImage.src,
        },
        {
          key: "twitter:image:alt",
          name: "twitter:image:alt",
          content: this.$page.keycap.title,
        },
        {
          key: "og:type",
          name: "og:type",
          content: "article",
        },
        {
          key: "og:title",
          name: "og:title",
          content: "Raz.WORKS - " + this.$page.keycap.title,
        },
        {
          key: "og:description",
          name: "og:description",
          content: this.$page.keycap.excerpt,
        },

        {
          key: "og:image:alt",
          name: "og:image:alt",
          content: this.$page.keycap.title,
        },
        {
          key: "og:image",
          name: "og:image",
          content: "https://raz.works" + this.$page.keycap.featuredImage.src,
        },
        {
          key: "og:url",
          name: "og:url",
          content: "https://raz.works" + this.$page.keycap.path,
        },
      ],
    };
  },
  components: {
    Lightbox,
  },
  data() {
    return {
      lightboxImage: null,
      showLightbox: false,
    };
  },
};
</script>
<style>
.prose img {
  @apply mx-auto;
  @apply block;
}
</style>

<template>
  <Layout>
    <div class="keycap mb-10">
      <div class="hero relative">
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

      <article
        class="prose lg:prose-xl mx-auto mt-24 px-2"
        v-html="$page.keycap.content"
      ></article>

      <div class="kits mt-20" v-if="$page.keycap.kits.length !== 0">
        <div class="prose lg:prose-xl mx-auto px-2">
          <h2>Kits</h2>
        </div>
        <div
          class="grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row mt-6 justify-center"
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
      <div class="kits mt-20" v-if="$page.keycap.mousepads.length !== 0">
        <div class="prose lg:prose-xl mx-auto px-2">
          <h2>Mousepads</h2>
        </div>
        <div class="grid gap-1 grid-cols-1 sm:grid-cols-2 grid-flow-row mt-6">
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
      <div class="renders mt-20" v-if="$page.keycap.renders.length !== 0">
        <div
          class="keeb-container"
          v-for="(render, index) in $page.keycap.renders"
          :key="'render' + index"
        >
          <div class="prose lg:prose-xl mx-auto px-2 mt-6">
            <h3>{{ render.name }}</h3>
          </div>
          <div
            v-if="render.images.length > 1"
            class="grid gap-1 grid-cols-1 sm:grid-cols-2 grid-flow-row mt-6"
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
                class="hover:cursor-pointer mx-auto w-full h-auto"
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
    date
    logo (width: 250)
    featuredImage (quality: 100  fit: cover )
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
          key: "og:title",
          name: "og:title",
          content: "Raz.WORKS - " + this.$page.keycap.title,
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: "Raz.WORKS - " + this.$page.keycap.title,
        },
        {
          key: "description",
          name: "description",
          content: this.$page.keycap.excerpt,
        },
        {
          key: "og:description",
          name: "og:description",
          content: this.$page.keycap.excerpt,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.keycap.excerpt,
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: this.$page.keycap.featuredImage,
        },
        {
          key: "og:image",
          name: "og:image",
          content: this.$page.keycap.featuredImage,
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

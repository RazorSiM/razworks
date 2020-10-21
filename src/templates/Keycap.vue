<template>
  <Layout>
    <div class="keycap mb-10">
      <div class="hero relative">
        <g-image
          :src="$page.keycap.featuredImage"
          class="w-full h-auto"
        ></g-image>
        <h1
          v-if="!$page.keycap.logo"
          class="absolute bottom-0 p-4 text-3xl font-bold"
        >
          {{ $page.keycap.title }}
        </h1>
        <g-image
          class="absolute bottom-0 p-4"
          v-else
          :src="$page.keycap.logo"
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
              :src="kit.image"
              @click="
                lightboxImage = kit.image;
                showLightbox = true;
              "
              class="hover:cursor-pointer"
            ></g-image>
          </div>
        </div>
      </div>
      <div class="kits mt-20" v-if="$page.keycap.mousepads.length !== 0">
        <div class="prose lg:prose-xl mx-auto px-2">
          <h2>Mousepads</h2>
        </div>
        <div class="grid gap-1 grid-col-1 sm:grid-flow-col grid-flow-row mt-6">
          <div
            v-for="(mousepad, index) in $page.keycap.mousepads"
            :key="'mousepad' + index"
          >
            <g-image
              :src="mousepad.image"
              @click="
                lightboxImage = mousepad.image;
                showLightbox = true;
              "
              class="hover:cursor-pointer"
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
            class="grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row mt-6"
          >
            <div
              v-for="(image, index) in render.images"
              :key="render.name + index"
            >
              <g-image
                :src="image"
                @click="
                  lightboxImage = image;
                  showLightbox = true;
                "
                class="hover:cursor-pointer"
              ></g-image>
            </div>
          </div>
          <template v-else>
            <div
              v-for="(image, index) in render.images"
              :key="render.name + index"
              class="prose mx-auto"
            >
              <g-image
                :src="image"
                @click="
                  lightboxImage = image;
                  showLightbox = true;
                "
                class="hover:cursor-pointer"
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
.prose p img {
  @apply mx-auto;
  @apply block;
}
</style>

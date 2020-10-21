<template>
  <Layout>
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
      class="prose lg:prose-xl mx-auto mt-24"
      v-html="$page.keycap.content"
    ></article>

    <div class="kits mt-20" v-if="$page.keycap.kits.length !== 0">
      <div class="prose lg:prose-xl mx-auto">
        <h2 class="text-3xl font-bold">Kits</h2>
      </div>
      <div class="grid gap-1 grid-cols-3 grid-flow-row mt-6">
        <div v-for="(kit, index) in $page.keycap.kits" :key="'kit' + index">
          <g-image :src="kit.image"></g-image>
        </div>
      </div>
    </div>
    <div class="renders mt-20" v-if="$page.keycap.renders.length !== 0">
      <div
        class="keeb-container"
        v-for="(render, index) in $page.keycap.renders"
        :key="'render' + index"
      >
        <div class="prose lg:prose-xl mx-auto mt-6">
          <h3>{{ render.name }}</h3>
        </div>
        <div class="grid gap-1 grid-cols-2 grid-flow-row mt-6">
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
            ></g-image>
          </div>
        </div>
      </div>
    </div>
    <lightbox
      :image="lightboxImage"
      :showing="showLightbox"
      @close="showLightbox = false"
      :showClose="true"
    ></lightbox>
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

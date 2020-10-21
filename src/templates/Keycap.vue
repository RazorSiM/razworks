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
    <div class="container mt-24 mx-auto px-4 md:px-16">
      <article
        class="prose lg:prose-xl mx-auto"
        v-html="$page.keycap.content"
      ></article>
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
    renders {
      name
      images
    }
    content
    
  }
}
</page-query>

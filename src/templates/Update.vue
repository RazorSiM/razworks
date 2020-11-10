<template>
  <Layout>
    <div class="mb-10 update">
      <vue-scroll-progress-bar
        height="5px"
        :barClass="{ 'progress-bar': true }"
        backgroundColor=""
      />

      <div class="px-4 pt-24 mx-auto prose mx auto lg:prose-xl md:px-0">
        <div class="relative pb-2/3" v-if="$page.update.featuredImage">
          <g-image
            :src="$page.update.featuredImage"
            class="absolute bottom-0 object-cover w-full h-full rounded-t-lg"
          ></g-image>
        </div>
        <div class="flex flex-col items-center justify-center w-full mt-10">
          <span class="my-0 text-primary">{{ $page.update.date }}</span>
          <span class="my-0 text-tertiary">
            {{ $page.update.timeToRead }}
            {{ $page.update.timeToRead > 1 ? "minutes" : "minute" }} read
          </span>
        </div>
        <article class="mt-10" v-html="$page.update.content"></article>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($id: ID!) {
  update(id: $id) {
    path
    title
    date (format: "MMMM DD, YYYY")
    timeToRead
    content
    featuredImage
  }
}
</page-query>
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.update.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.update.excerpt,
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
          content: "Raz.WORKS - " + this.$page.update.title,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.update.excerpt,
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content:
            "https://raz.works" + this.$page.update.featuredImage.src
              ? this.$page.update.featuredImage.src
              : "/socialShare.jpg",
        },
        {
          key: "twitter:image:alt",
          name: "twitter:image:alt",
          content: this.$page.update.title,
        },
        {
          key: "og:type",
          name: "og:type",
          content: "article",
        },
        {
          key: "og:title",
          name: "og:title",
          content: "Raz.WORKS - " + this.$page.update.title,
        },
        {
          key: "og:description",
          name: "og:description",
          content: this.$page.update.excerpt,
        },

        {
          key: "og:image:alt",
          name: "og:image:alt",
          content: this.$page.update.title,
        },
        {
          key: "og:image",
          name: "og:image",
          content:
            "https://raz.works" + this.$page.update.featuredImage.src
              ? this.$page.update.featuredImage.src
              : "/socialShare.jpg",
        },
        {
          key: "og:url",
          name: "og:url",
          content: "https://raz.works" + this.$page.update.path,
        },
      ],
    };
  },
};
</script>

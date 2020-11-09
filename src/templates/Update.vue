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
export default {};
</script>

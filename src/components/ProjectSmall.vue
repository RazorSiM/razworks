<template>
  <div class="shadow-xl flex flex-col">
    <h3 class="font-bold text-xl text-accent-string">{{ title }}</h3>
    <g-image :alt="title" :src="image" class=""></g-image>
    <div class="p-3 flex flex-col flex-1 justify-between">
      <p>{{ excerpt }}</p>

      <g-link
        class="mt-2 font-bold text-center block p-2 border border-background-lighter bg-background-selection hover:bg-background-highlight rounded shadow-lg"
        :to="url"
        >Checkout this project!</g-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectSmall",
  props: {
    title: String,
    image: Object,
    excerpt: String,
    url: String,
  },
};
</script>

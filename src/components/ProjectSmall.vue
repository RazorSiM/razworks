<template>
  <div class="shadow-xl">
    <h3 class="font-bold text-xl text-accent-string">{{ title }}</h3>
    <g-image :src="image" class=""></g-image>
    <div class="p-3">
      <p>{{ excerpt }}</p>
      <g-link :to="url">Checkout this project!</g-link>
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

<template>
  <div>
    <h3>{{ title }}</h3>
    <g-image :src="image"></g-image>
    <p>{{ excerpt }}</p>
    <g-link :to="url">Checkout this project!</g-link>
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

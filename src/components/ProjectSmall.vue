<template>
  <div>
    <h3>{{ title }}</h3>
    <g-image :src="image" width="40" height="50" fit="contain"></g-image>
    <p>{{ excerpt }}</p>
    <a :href="url"> Check out this project</a>
  </div>
</template>
<script>
export default {
  name: "ProjectSmall",
  props: {
    title: String,
    image: String,
    excerpt: String,
    url: String,
  },
};
</script>

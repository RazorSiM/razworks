<template>
  <div
    class="flex flex-col transition-all duration-100 transform rounded shadow-2xl project-card hover:scale-110 hover:z-50 bg-base00"
  >
    <h3 class="px-3 pt-3 text-xl font-bold text-primary">{{ title }}</h3>
    <div class="px-3 pb-3 text-sm">
      <span class="text-secondary">{{ date }} </span>
      <span class="text-tertiary"
        >{{ timetoread }} {{ timetoread > 1 ? "minutes" : "minute" }} read</span
      >
    </div>
    <g-link :to="url" class="relative project-card__img-container">
      <g-image :alt="title" :src="image" class="project-card__img"></g-image>
      <div
        class="absolute top-0 flex-col items-center justify-center hidden w-full h-full bg-transparent"
      >
        <svg
          class="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          ></path>
        </svg>
      </div>
    </g-link>
    <div class="flex flex-col justify-between flex-1 p-3">
      <p>{{ excerpt }}</p>

      <g-link
        class="block p-2 mt-2 font-bold text-center rounded shadow-lg bg-base01 hover:bg-base02"
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
    date: String,
    timetoread: Number,
  },
};
</script>
<style scoped>
.project-card:hover .project-card__img-container div {
  @apply flex;
  @apply bg-gray-900;
  @apply bg-opacity-75;
}
</style>

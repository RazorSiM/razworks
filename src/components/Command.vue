<template>
  <div class="my-3">
    <p class="text-left">
      <svg
        class="inline w-auto h-4 fill-current"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{{ distroTitle }}</title>
        <path :d="distroIcon"></path>
      </svg>
      <span class="font-bold text-accentone"> ~ </span>
      <span class="font-bold text-faccent">> </span>
      <span class="font-bold text-secondary font-dankit">{{ command }}</span>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    command: String,
    distroIcon: String,
    distroTitle: String,
  },
};
</script>

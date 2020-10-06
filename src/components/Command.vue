<template>
  <div class="shell__content__command my-3">
    <p class="text-left">
      <svg
        class="fill-current h-4 w-auto inline"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{{ distroTitle }}</title>
        <path :d="distroIcon"></path>
      </svg>
      <span class="text-accent-class font-bold"> ~ </span>
      <span class="font-bold">> </span>
      <span class="text-accent-string font-bold font-dankit">{{
        command
      }}</span>
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

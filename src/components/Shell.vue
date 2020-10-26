<template>
  <div class="shell rounded-xl">
    <div
      class="flex items-center justify-between h-8 shell__header bg-background-lighter rounded-t-xl"
    >
      <div class="mx-3 font-bold">{{ title }}</div>
      <div class="flex items-center justify-center">
        <div
          class="w-4 h-4 mx-2 border-4 border-solid rounded-full border-accent-var"
        ></div>
        <div
          class="w-4 h-4 mx-2 border-4 border-solid rounded-full border-accent-class"
        ></div>
        <div
          class="w-4 h-4 mx-2 border-4 border-solid rounded-full border-accent-string"
        ></div>
      </div>
    </div>
    <div class="px-3 py-3 md:px-6 md:py-6 shell__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    title: String,
  },
  data() {
    return {};
  },
};
</script>

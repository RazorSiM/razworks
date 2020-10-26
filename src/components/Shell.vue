<template>
  <div class="p-3 rounded-xl sm:p-5 md:p-8 xl:p-12 shell">
    <div
      class="flex items-center justify-between h-8 rounded-full shell__header bg-background-lighter"
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
    <div class="shell__content">
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

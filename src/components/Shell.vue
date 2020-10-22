<template>
  <div class="shell p-3 rounded-md">
    <div
      class="shell__header flex h-8 bg-background-lighter justify-between items-center rounded-md"
    >
      <div class="mx-3 font-bold">{{ title }}</div>
      <div class="flex justify-center items-center">
        <div
          class="h-4 w-4 rounded-md border-solid border-4 mx-2 border-accent-var"
        ></div>
        <div
          class="h-4 w-4 rounded-md border-solid border-4 mx-2 border-accent-class"
        ></div>
        <div
          class="h-4 w-4 rounded-md border-solid border-4 mx-2 border-accent-string"
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

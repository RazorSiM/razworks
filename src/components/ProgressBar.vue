<template>
  <div
    class="relative flex items-center justify-center w-full h-10 overflow-hidden"
  >
    <div
      class="absolute top-0 left-0 w-full h-full rounded-full bg-background-lighter"
      :style="{ transform: `translate3d(-${(1 - value) * 100}%, 0,0)` }"
    ></div>
    <div class="z-50 flex items-center h-full">
      <span> {{ percentage }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0.4,
    },
  },
  computed: {
    percentage() {
      return `${Math.round(this.value * 100)}%`;
    },
  },
};
</script>
<style scoped></style>

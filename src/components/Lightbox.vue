<template>
  <Transition name="fade">
    <div
      v-if="showing"
      class="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-smoke-800"
      @click.prevent="closeIfShown"
    >
      <div class="flex w-full max-h-screen shadow-lg max-w-screen">
        <div class="relative max-h-screen mx-auto overflow-auto">
          <button
            v-if="showClose"
            aria-label="close"
            class="absolute top-0 right-0 p-4 mx-10 my-2 text-4xl leading-5 text-gray-500"
            @click.prevent="close"
          >
            ×
          </button>
          <g-image :src="image" class="w-auto h-full mx-auto"></g-image>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    image: {
      required: true,
      type: Object,
    },
  },
  watch: {
    showing(value) {
      if (value) {
        return document.querySelector("body").classList.add("overflow-hidden");
      }
      return document.querySelector("body").classList.remove("overflow-hidden");
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    closeIfShown() {
      if (this.showClose) {
        this.close();
      }
    },
  },
  mounted: function () {
    if (this.showClose) {
      document.addEventListener("keydown", (e) => {
        if (e.keyCode == 27) {
          this.close();
        }
      });
    }
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

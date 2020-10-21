<template>
  <Transition name="fade">
    <div
      v-if="showing"
      class="fixed inset-0 w-screen h-screen flex items-center justify-center bg-smoke-800 z-50"
      @click.prevent="closeIfShown"
    >
      <div class="max-h-screen w-full max-w-screen shadow-lg flex">
        <div class="overflow-auto max-h-screen mx-auto relative">
          <button
            v-if="showClose"
            aria-label="close"
            class="absolute top-0 right-0 text-4xl leading-5 p-4 text-gray-500 my-2 mx-10"
            @click.prevent="close"
          >
            ×
          </button>
          <g-image :src="image" class="h-full w-auto mx-auto"></g-image>
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

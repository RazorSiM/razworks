<template>
  <div>
    <template v-for="(social, index) in $static.metadata.social">
      <a
        class="flex flex-col items-center justify-center transition-all duration-200"
        v-if="social.url"
        :href="social.url"
        :key="index"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          class="w-5 h-auto fill-current md:w-10"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>social.name</title>
          <path :d="social.icon"></path>
        </svg>
        <i class="text-sm font-dankit" @click="doCopy(social.title)">{{
          social.title
        }}</i>
      </a>
      <a
        v-else
        class="flex flex-col items-center justify-center transition-all duration-100"
        @click="doCopy(social.title)"
        :key="index"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          class="w-5 h-auto fill-current md:w-10"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>social.name</title>
          <path :d="social.icon"></path>
        </svg>
        <i class="text-sm font-dankit">{{ social.title }}</i>
      </a>
    </template>
  </div>
</template>
<static-query>
query {
  metadata {
    social {
      name,
      icon,
      url,
      title
    }
  }
}
</static-query>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    doCopy(value) {
      this.$copyText(value);
      this.$store.commit("setCopy", true);
    },
  },
};
</script>

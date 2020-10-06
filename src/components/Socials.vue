<template>
  <div>
    <template v-for="(social, index) in $static.metadata.social">
      <a class="social-icon" v-if="social.url" :href="social.url" :key="index">
        <svg
          class="fill-current w-5 md:w-10 h-auto block"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>social.name</title>
          <path :d="social.icon"></path>
        </svg>
        <i class="social-title">{{ social.title }}</i>
      </a>
      <a
        v-else
        class="social-icon"
        @click="$copyText(social.title)"
        :key="index"
      >
        <svg
          class="fill-current w-5 md:w-10 h-auto block"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>social.name</title>
          <path :d="social.icon"></path>
        </svg>
        <i class="social-title">{{ social.title }}</i>
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
export default {};
</script>
<style>
.social-icon {
  @apply flex;
  @apply flex-col;
  @apply justify-center;
  @apply items-center;
  @apply text-accent-url;
  @apply transition-all;
  @apply duration-100;
}
.social-icon:hover {
  @apply text-accent-tag;
  @apply cursor-pointer;
}
.social-title {
  @apply font-dankit;
  @apply not-italic;
  @apply text-sm;
}
</style>

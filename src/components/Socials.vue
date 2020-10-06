<template>
  <div>
    <template v-for="(social, index) in $static.metadata.social">
      <a
        class="social-icon flex flex-col justify-center items-center text-accent-url transition-all duration-100"
        v-if="social.url"
        :href="social.url"
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
        <i class="social-title font-dankit text-sm">{{ social.title }}</i>
      </a>
      <a
        v-else
        class="social-icon font-dankit text-sm"
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
<style></style>

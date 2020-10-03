<template>
  <header class="header">
    <strong>
      <g-link to="/" class="text-accent-var">{{
        $static.metadata.siteName
      }}</g-link>
    </strong>
    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
    </nav>
  </header>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
export default {};
</script>
<style>
.header {
  @apply w-full;
  @apply flex;
  @apply items-center;
  @apply justify-around;
  @apply bg-background-lighter;
  @apply h-16;
}
</style>

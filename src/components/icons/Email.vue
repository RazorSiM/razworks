<template>
  <a
    class="email-icon"
    :href="'mailto:' + $static.metadata.Email"
    ref="nofollow"
    target="_blank"
  >
    <svg
      class="fill-current w-5 md:w-10 h-auto"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Gmail icon</title>
      <path
        d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"
      ></path>
    </svg>
    <i class="font-dankit not-italic text-xs">info</i>
  </a>
</template>
<static-query>
query {
 metadata {
   Email
 } 
}
</static-query>
<style>
.email-icon {
  @apply block;
  @apply flex;
  @apply flex-col;
  @apply justify-center;
  @apply items-center;
  @apply text-accent-url;
  @apply transition-all;
  @apply duration-100;
}
.email-icon:hover {
  @apply text-accent-tag;
  @apply cursor-pointer;
}
</style>

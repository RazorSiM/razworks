<template>
  <a
    class="telegram-icon"
    :href="$static.metadata.Telegram"
    ref="nofollow"
    target="_blank"
  >
    <svg
      class="fill-current w-10 h-auto"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>Telegram icon</title>
      <path
        d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"
      ></path>
    </svg>
    <i class="font-dankit not-italic">RazorSiM</i>
  </a>
</template>
<static-query>
query {
 metadata {
   Telegram
 } 
}
</static-query>
<style>
.telegram-icon {
  @apply block;
  @apply flex;
  @apply flex-col;
  @apply justify-center;
  @apply items-center;
  @apply text-telegram;
  @apply transition-all;
  @apply duration-100;
}
.telegram-icon:hover {
  @apply text-accent-url;
  @apply cursor-pointer;
}
</style>

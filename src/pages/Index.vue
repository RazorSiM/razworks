<template>
  <Layout>
    <div class="index">
      <div class="container mx-auto">
        <div class="intro">
          <h1 class="text-6xl font-bold">
            Hey, I'm <span class="text-accent-class font-dankit">Raz</span>
          </h1>
          <h2 class="text-4xl font-normal text-center mt-2 leading-tight">
            <span class="text-accent-var font-dankit"
              >Web Designer & Developer</span
            >
            by day, <br /><span class="text-accent-var font-dankit"
              >Blenderman</span
            >
            by night
          </h2>
        </div>
        <div class="socials">
          <discord-icon></discord-icon>
          <telegram-icon></telegram-icon>
          <instagram-icon></instagram-icon>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import DiscordIcon from "../components/icons/Discord";
import TelegramIcon from "../components/icons/Telegram";
import InstagramIcon from "../components/icons/Instagram";
export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    DiscordIcon,
    TelegramIcon,
    InstagramIcon,
  },
};
</script>

<style>
.intro {
  @apply w-full;
  @apply text-center;
  @apply my-20;
}
.socials {
  @apply w-full;
  @apply my-20;
  @apply grid;
  @apply grid-flow-col;
  @apply gap-4;
  @apply justify-center;
}
</style>

<template>
  <Layout>
    <div class="index">
      <div class="container mx-auto px-3">
        <div class="intro my-20">
          <h1 class="text-4xl md:text-6xl font-bold">
            Hey, I'm <span class="text-accent-class font-dankit">Raz</span>
          </h1>
          <h2
            class="text-2xl md:text-4xl font-normal text-center mt-2 leading-tight"
          >
            <span class="text-accent-fn font-dankit"
              >Web Designer & Developer</span
            >
            by day, <br /><span class="text-accent-fn font-dankit"
              >Blenderman</span
            >
            by night
          </h2>
        </div>
        <div class="socials my-20">
          <discord-icon></discord-icon>
          <telegram-icon></telegram-icon>
          <instagram-icon></instagram-icon>
          <email-icon></email-icon>
        </div>
        <div class="about w-full">
          <h3 class="text-left text-2xl font-bold mb-4">What, how and why</h3>
          <p class="text-xl">
            I am going to skip the presentations to go straight to the point: I
            like <strong>designing stuff</strong> and I love
            <strong>custom products</strong>. I started learning
            <strong>Blender</strong> during the 2020 March quarantine to try to
            make
            <a href="https://geekhack.org/index.php?topic=105981.0"
              >my custom keycaps design</a
            >
            real. I am open to collaborations or simple commissions, just
            contact me! You can check my works here -
            <i class="font-dankit text-background-highlight"
              >minus the secret projects</i
            >
            👽
          </p>
          <p class="text-xs my-3 text-background-highlight">
            PS: the website is highly work in progress. It will definitely
            change during time and I promise I will try to update it with the
            GMK Avanguardia stuff 🐱‍👤
          </p>
        </div>
        <div class="featured-works">
          <h3 class="text-right text-2xl font-bold mb-4">🌟Starred Works</h3>
          <div class="image-grid">
            <template v-for="(img, index) in imagesOrder">
              <div
                :key="index"
                class="bg-background-lighter"
                :class="{ 'col-span-3 row-span-3': index === 0 }"
                @click="makeFirst(index)"
              >
                <img :src="img" class="object-cover w-full h-full" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import DiscordIcon from "../components/icons/Discord";
import TelegramIcon from "../components/icons/Telegram";
import InstagramIcon from "../components/icons/Instagram";
import EmailIcon from "../components/icons/Email";
export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    DiscordIcon,
    TelegramIcon,
    InstagramIcon,
    EmailIcon,
  },
  data() {
    return {
      images: [
        "https://i.imgur.com/ezwTF5F.jpg",
        "https://i.imgur.com/Ng3UT89.jpg",
        "https://i.imgur.com/qbQ1inB.png",
        "https://i.imgur.com/NKGrkPG.png",
      ],
    };
  },
  computed: {
    imagesOrder() {
      return this.images;
    },
  },
  methods: {
    makeFirst(index) {
      this.images.unshift(this.images[index]);
      this.images.splice(index + 1, 1);
    },
  },
};
</script>

<style>
.intro {
  @apply w-full;
  @apply text-center;
}
.socials {
  @apply w-full;
  @apply grid;
  @apply grid-flow-col;
  @apply gap-4;
  @apply justify-center;
}
.image-grid {
  @apply grid;
  @apply gap-1;
  @apply grid-cols-4;
  @apply grid-rows-3;
}
a {
  @apply text-accent-url;
  @apply font-dankit;
  @apply transition-all;
  @apply duration-100;
}
a:hover {
  @apply underline;
  @apply text-accent-tag;
}
</style>

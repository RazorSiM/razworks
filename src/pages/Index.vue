<template>
  <Layout>
    <div class="index">
      <div class="intro my-20 md:my-32 w-full text-center flex justify-center">
        <shell
          title="zsh"
          command="./init.sh"
          distroTitle="Arch Linux"
          :distroIcon="distroIcon"
          class="w-full shadow-xl border-2 border-background-lighter p-3"
        >
          <command
            command="./intro.sh"
            :distroIcon="distroIcon"
            :distroTitle="distroTitle"
          ></command>
          <div class="printed">
            <h1 class="text-4xl md:text-6xl font-bold">
              Hey, I'm <span class="text-accent-class font-dankit">Raz</span>
            </h1>
            <h2
              class="text-2xl md:text-4xl font-normal text-center leading-tight"
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
          <socials
            class="socials my-10 w-full grid grid-flow-col gap-4 justify-center"
          ></socials>
          <command
            command="bat about"
            :distroIcon="distroIcon"
            :distroTitle="distroTitle"
          ></command>

          <div class="w-full mx-auto text-left">
            <h3 class="text-left text-2xl font-bold mb-4 text-accent-fn">
              What, how and why
            </h3>
            <p class="text-xl">
              I am going to skip the presentations to go straight to the point:
              I like <strong>designing stuff</strong> and I love
              <strong>custom products</strong>. I started learning
              <strong>Blender</strong> during the 2020 March quarantine to try
              to make
              <a href="https://geekhack.org/index.php?topic=105981.0"
                >my custom keycaps design</a
              >
              real. I am
              <strong class=""
                >open to collaborations or simple commissions</strong
              >, just contact me! You can check my works here -
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
        </shell>
      </div>

      <div class="featured-works">
        <h3 class="text-right text-2xl font-bold mb-4">🌟Starred Works</h3>
        <div class="image-grid grid gap-1 grid-cols-4 grid-rows-3">
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
  </Layout>
</template>

<script>
import Shell from "../components/Shell";
import Command from "../components/Command";
import Socials from "../components/Socials";
export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    Shell,
    Socials,
    Command,
  },
  data() {
    return {
      images: [
        "https://i.imgur.com/ezwTF5F.jpg",
        "https://i.imgur.com/Ng3UT89.jpg",
        "https://i.imgur.com/qbQ1inB.png",
        "https://i.imgur.com/NKGrkPG.png",
      ],
      distroIcon:
        "M11.390232.60509C10.375655 3.09168 9.764285 4.7185 8.63513 7.13162c.692712.734695 1.542857 1.589214 2.923032 2.553937-1.484256-.610496-2.49621-1.223615-3.25277-1.859475-1.444897 3.015743-3.710204 7.311953-8.30554 15.568513 3.612246-2.08513 6.411955-3.36997 9.020993-3.861516-.111954-.48105-.175802-1.003208-.17143-1.54723l.0035-.115453c.057725-2.314286 1.261224-4.09417 2.68688-3.972595 1.425656.119825 2.53382 2.095627 2.477843 4.409038-.010496.43557-.06035.85452-.146064 1.242857 2.58105.504665 5.351895 1.78688 8.914286 3.844024-.702333-1.29271-1.329447-2.4586-1.928572-3.569387-.943732-.731196-1.926822-1.6828-3.933236-2.71312 1.3793.3586 2.366764.77143 3.136443 1.23411C13.970407 7.010922 13.478862 5.503924 11.390232.60509zM22.897813 21.360193v-.623615h-.233528v-.083965h.561516v.083965h-.2344v.623615h-.093587M23.322886 21.360193v-.70758h.14169l.167056.501166c.015744.04723.027114.082215.03411.10583.007873-.025365.020118-.06385.038485-.113703l.168805-.493294h.126822v.70758h-.090962v-.593003l-.206414.593003h-.083965l-.204665-.602624v.602623h-.090962",
      distroTitle: "Arch Linux",
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

<style></style>

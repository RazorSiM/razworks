// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Raz | Works",
  siteDescription: "Web Developer & Designer, Keyboard enthusiast, Blender fan",
  siteUrl: "https://raz.works",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Home",
        path: "./content/pages/home.md",
      },
    },
  ],
};

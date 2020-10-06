// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Raz | Works",
  siteDescription:
    "Web Developer & Designer, Keyboards enthusiast, Blender fan",
  siteUrl: "https://raz.works",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "gridsome-source-static-meta",
      options: {
        path: "./content/site/*.json",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Home",
        path: "./content/pages/home.md",
      },
    },
  ],
  transformers: {
    remark: {
      plugins: [
        // "externalLinksRel",
        // "externalLinksTarget",
        // ["autolinkClassName", {}],
      ],
    },
  },
};

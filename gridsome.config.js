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
      use: "gridsome-plugin-netlify-cms",
      opsiont: {
        publicPath: "/admin",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Home",
        path: "./content/pages/home.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/keycaps/*.md",
        typeName: "KeycapProject",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
  ],
  templates: {
    KeycapProject: [
      {
        name: "KeycapProject",
        path: "/projects/keycaps/:slug",
      },
    ],
  },
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
    },
  },
};

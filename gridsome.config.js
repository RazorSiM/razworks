// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Raz.WORKS",
  siteUrl: "https://raz.works",
  icon: "./src/assets/images/razlogo.png",
  plugins: [
    {
      use: "gridsome-plugin-robots-txt",
      options: {
        host: "http://raz.works",
        sitemap: "https://raz.works/sitemap.xml",
        policy: [
          {
            userAgent: "Googlebot",
            allow: "/",
            disallow: "/search",
            crawDelay: 2,
          },
          {
            userAgent: "*",
            allow: "/",
            disallow: "/search",
            crawlDelay: 10,
          },
        ],
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
    },
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
        path: "content/pages/home.md",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "About",
        path: "content/pages/about.md",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/keycaps/*.md",
        typeName: "Keycap",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/updates/*.md",
        typeName: "Update",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
  ],
  templates: {
    Keycap: [
      {
        path: "/projects/keycaps/:title",
      },
    ],
    Update: [
      {
        path: "/updates/:title",
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

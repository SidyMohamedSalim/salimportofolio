export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Salim",
  description: "portfolio de salim diallo.",
  email: "sidymamadousalim@gmail.com",
  mainNav: [
    {
      title: "HOME",
      href: "#home",
    },
  ],
  links: {
    twitter: "https://twitter.com/SalimDiallo201",
    github: "https://github.com/SidyMohamedSalim",
    afiaShopGithut: "https://github.com/SidyMohamedSalim/ecommerce",
    afiaShopLive: "https://afia-shop.netlify.app/",
    CuisineLive: "https://cookblog.netlify.app/",
    CuisineGithut: "https://github.com/SidyMohamedSalim/CookBlog",
  },
  dropMenu: [
    {
      title: "SKILLS",
      href: "#skill",
    },
    {
      title: "PROJECTS",
      href: "#project",
    },
    {
      title: "ABOUT ME",
      href: "#about",
    },
    {
      title: "CONTACT ME",
      href: "#contact",
    },
  ],
}

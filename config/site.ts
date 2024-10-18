export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Salim",
  description: "portfolio de salim diallo.",
  email: "sidymamadousalim@gmail.com",
  mainNav: [
    {
      title: "CV",
      href: "/cv",
    },
  ],
  links: {
    twitter: "https://x.com/salimdiallo01",
    github: "https://github.com/SidyMohamedSalim",
    linkedin: "https://www.linkedin.com/in/salim-diallo-855696264/",
  },
  dropMenu: [
    {
      title: "SKILLS",
      href: "#skills",
    },
    {
      title: "PROJECTS",
      href: "#projects",
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

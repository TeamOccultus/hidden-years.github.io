import { DefaultTheme } from "vitepress";

export const navbar: DefaultTheme.NavItem[] = [
  { text: "主页", link: "/" },
  {
    text: "教程",
    link: "/tutorial/",
  },
  {
    text: "Wiki",
    link: "/wiki/",
  },
  {
    text: "版本记录",
    link: "/version/",
  },
  {
    text: "关于",
    items: [
      { text: "关于我们", link: "/about/team" },
      { text: "贡献指南", link: "/about/contribute" },
      { text: "转载须知", link: "/about/republish" },
      { text: "许可协议", link: "/about/license" },
    ],
  },
];

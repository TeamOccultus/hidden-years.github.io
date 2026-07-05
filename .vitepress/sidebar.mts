import { DefaultTheme } from "vitepress";

export const sidebar:
  | DefaultTheme.SidebarItem[]
  | {
      [x: string]:
        | DefaultTheme.SidebarItem[]
        | {
            items?: DefaultTheme.SidebarItem[] | undefined;
            base?: string | undefined;
          }
        | undefined;
    } = {
  "/": [
    {
      text: "Examples",
      items: [
        { text: "Markdown Examples", link: "/markdown-examples" },
        { text: "Runtime API Examples", link: "/api-examples" },
      ],
    },
  ],
  "/version/": [
    {
        text: "概述",
        link: "/version/"
    },
    {
      text: "详细记录",
      items: [
        { text: "Alpha 测试", link: "/version/alpha" },
        { text: "隐藏之年", link: "/version/generation-1" },
        { text: "隐藏之年²", link: "/version/generation-2" },
        { text: "隐藏之年²：天边的迦万涅尔", link: "/version/generation-3" },
      ],
    },
  ],
  "/wiki/": [
    {
      text: "首页",
      link: "/wiki/"
    },
    {
      text: "材料",
      items: [
        { text: "基础材料", link: "/wiki/material/basic" },
        { text: "进阶材料", link: "/wiki/material/advanced" },
        { text: "终极材料", link: "/wiki/material/ultimate" },
      ],
      collapsed: true,
    },
    {
      text: "工具与武器",
      items: [
        { text: "工具与武器概览", link: "/wiki/tool/" },
        { text: "技能", link: "/wiki/tool/skill" },
        { text: "魔法攻击", link: "/wiki/tool/magic-attack" },
        { text: "锤子", link: "/wiki/tool/hammer" },
        { text: "撬棍", link: "/wiki/tool/crowbar" },
        { text: "锥子", link: "/wiki/tool/awl" },
        { text: "小刀", link: "/wiki/tool/knife" },
        { text: "匕首", link: "/wiki/tool/dagger" },
        { text: "宽刃剑", link: "/wiki/tool/boardsword" },
      ],
      collapsed: true,
    },
        {
      text: "游戏机制",
      items: [
        { text: "盔甲效果", link: "/wiki/gameplay/armor-effect" },
      ],
      collapsed: true,
    },
    {
      text: "BOSS",
      items: [
        { text: "BOSS 概览", link: "/wiki/boss/" },
        { text: "红宝石之王", link: "/wiki/boss/king-of-ruby" },
        { text: "法老之魂", link: "/wiki/boss/pharaohs-ghost" },
      ],
      collapsed: true,
    },
    {
      text: "物品",
      items: [
        { text: "药物", link: "/wiki/item/medicine" },
        { text: "燃料金属", link: "/wiki/item/fuel-metal" },
        { text: "矿物燃料", link: "/wiki/item/mineral-fuel" },
      ],
      collapsed: true,
    },
  ],
  "/tutorial/": [
    {
      text: "从这里开始",
      items: [
        { text: "什么是隐藏之年", link: "/tutorial/what-is-hy2" },
        { text: "快速开始", link: "/tutorial/start" },
        { text: "材料", link: "/tutorial/materials" },
        { text: "工具与武器", link: "/tutorial/tools-and-weapons" },
        { text: "拓展", link: "/tutorial/plugins" },
      ],
      collapsed: false,
    },
    {
      text: "高级教程",
      items: [
        { text: "手动导入", link: "/tutorial/manual-import" },
        { text: "获取内容日志", link: "/tutorial/get-content-log" },
      ],
      collapsed: false,
    },
  ],
  "/about/": [
    {
      text: "关于",
      items: [
        { text: "关于我们", link: "/about/team" },
        { text: "贡献指南", link: "/about/contribute" },
        { text: "转载须知", link: "/about/republish" },
        { text: "许可协议", link: "/about/license" },
        {text: "编者指南", link: "/about/markdown-examples" },
      ],
    },
  ],
};

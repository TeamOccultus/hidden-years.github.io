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
      link: "/version/",
    },
    {
      text: "开发阶段",
      items: [
        { text: "Alpha 测试", link: "/version/alpha" },
        { text: "隐藏之年", link: "/version/generation-1" },
        { text: "隐藏之年²", link: "/version/generation-2" },
        { text: "隐藏之年²：天边的迦万涅尔", link: "/version/generation-3" },
      ],
    },
    {
      text: "版本记录",
      items: [
        {
          text: "Generation-2（前期）",
          collapsed: true,
          items: [
            { text: "1.0.0", link: "/version/release/1.0.0" },
            { text: "1.0.1", link: "/version/release/1.0.1" },
            { text: "1.0.2", link: "/version/release/1.0.2" },
            { text: "1.1.0", link: "/version/release/1.1.0" },
            { text: "1.1.1", link: "/version/release/1.1.1" },
            { text: "1.4.0", link: "/version/release/1.4.0" },
            { text: "1.4.1", link: "/version/release/1.4.1" },
            { text: "1.4.2", link: "/version/release/1.4.2" },
            { text: "1.4.3", link: "/version/release/1.4.3" },
            { text: "1.4.4", link: "/version/release/1.4.4" },
            { text: "1.5.0", link: "/version/release/1.5.0" },
            { text: "1.6.1", link: "/version/release/1.6.1" },
            { text: "1.6.2", link: "/version/release/1.6.2" },
            { text: "1.7.1", link: "/version/release/1.7.1" },
            { text: "1.8.0", link: "/version/release/1.8.0" },
            { text: "1.8.1", link: "/version/release/1.8.1" },
            { text: "1.8.2", link: "/version/release/1.8.2" },
            { text: "1.8.3", link: "/version/release/1.8.3" },
            { text: "1.9.0", link: "/version/release/1.9.0" },
            { text: "1.9.1", link: "/version/release/1.9.1" },
            { text: "1.9.2", link: "/version/release/1.9.2" },
            { text: "1.10.0", link: "/version/release/1.10.0" },
            { text: "1.10.1", link: "/version/release/1.10.1" },
            { text: "1.10.2", link: "/version/release/1.10.2" },
            { text: "1.11.0", link: "/version/release/1.11.0" },
            { text: "1.11.1", link: "/version/release/1.11.1" },
            { text: "1.12.0", link: "/version/release/1.12.0" },
            { text: "1.13.0", link: "/version/release/1.13.0" },
            { text: "1.13.1", link: "/version/release/1.13.1" },
            { text: "1.13.2", link: "/version/release/1.13.2" },
            { text: "1.13.3", link: "/version/release/1.13.3" },
            { text: "1.13.4", link: "/version/release/1.13.4" },
            { text: "1.14.0", link: "/version/release/1.14.0" },
            { text: "1.14.1", link: "/version/release/1.14.1" },
            { text: "1.14.2", link: "/version/release/1.14.2" },
            { text: "1.15.0", link: "/version/release/1.15.0" },
          ],
        },
        {
          text: "Generation-2（后期）",
          collapsed: true,
          items: [
            { text: "2.0.1", link: "/version/release/2.0.1" },
            { text: "2.0.2", link: "/version/release/2.0.2" },
            { text: "2.0.3", link: "/version/release/2.0.3" },
            { text: "2.0.4", link: "/version/release/2.0.4" },
            { text: "2.0.5", link: "/version/release/2.0.5" },
            { text: "2.0.6", link: "/version/release/2.0.6" },
            { text: "2.0.7", link: "/version/release/2.0.7" },
            { text: "2.0.8", link: "/version/release/2.0.8" },
            { text: "2.1.0", link: "/version/release/2.1.0" },
            { text: "2.1.1", link: "/version/release/2.1.1" },
            { text: "2.1.2", link: "/version/release/2.1.2" },
            { text: "2.1.3", link: "/version/release/2.1.3" },
            { text: "2.1.4", link: "/version/release/2.1.4" },
            { text: "2.1.5", link: "/version/release/2.1.5" },
            { text: "2.1.6", link: "/version/release/2.1.6" },
            { text: "2.2.0", link: "/version/release/2.2.0" },
            { text: "2.2.1", link: "/version/release/2.2.1" },
            { text: "2.2.3", link: "/version/release/2.2.3" },
            { text: "2.4.11", link: "/version/release/2.4.11" },
          ],
        },
        {
          text: "Generation-3",
          collapsed: true,
          items: [
            { text: "3.0.0-alpha.4", link: "/version/release/3.0.0-alpha.4" },
            { text: "3.0.0-alpha.5", link: "/version/release/3.0.0-alpha.5" },
            { text: "3.0.0-alpha.6", link: "/version/release/3.0.0-alpha.6" },
            { text: "3.0.0-alpha.7", link: "/version/release/3.0.0-alpha.7" },
            { text: "3.0.0-alpha.8", link: "/version/release/3.0.0-alpha.8" },
            { text: "3.0.0-alpha.9", link: "/version/release/3.0.0-alpha.9" },
            { text: "3.0.0-alpha.10", link: "/version/release/3.0.0-alpha.10" },
            { text: "3.0.0-alpha.11", link: "/version/release/3.0.0-alpha.11" },
            { text: "3.0.0", link: "/version/release/3.0.0" },
            { text: "3.0.1", link: "/version/release/3.0.1" },
            { text: "3.0.5", link: "/version/release/3.0.5" },
            { text: "3.0.6", link: "/version/release/3.0.6" },
            { text: "3.0.7", link: "/version/release/3.0.7" },
          ],
        },
      ],
    },
  ],
  "/wiki/": [
    {
      text: "首页",
      link: "/wiki/",
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
      items: [{ text: "盔甲效果", link: "/wiki/gameplay/armor-effect" }],
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
        { text: "编者指南", link: "/about/markdown-examples" },
      ],
    },
  ],
};

import { defineConfig } from "vitepress";
import { navbar } from "./navbar.mjs";
import { sidebar } from "./sidebar.mjs";
import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
import { ImagePreviewPlugin } from "vitepress-plugin-image-preview";
import { execSync } from "child_process";
import { versionPlugin } from "./plugins/version.mjs";
import { versionLogPlugin } from "./plugins/versionLog.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config(md) {
      // 其他 markdown-it 配置...
      md.use(InlineLinkPreviewElementTransform);
    },
  },

  vite: {
    plugins: [ImagePreviewPlugin(), versionPlugin(), versionLogPlugin()],
    define: {},
    optimizeDeps: {
      exclude: [
        "@nolebase/vitepress-plugin-enhanced-readabilities/client",
        "vitepress",
        "@nolebase/ui",
        "@nolebase/vitepress-plugin-inline-link-preview/client",
      ],
    },
    ssr: {
      noExternal: [
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/ui",
        "@nolebase/vitepress-plugin-inline-link-preview",
      ],
    },
  },
  srcDir: "src",

  title: "Hidden Wiki",
  lang: "zh-CN",
  description: "A VitePress Site",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "link",
      {
        href: "https://fontsapi.zeoseven.com/521/main/result.css",
        rel: "stylesheet",
      },
    ],
  ],
  cleanUrls: true,

  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: navbar,

    sidebar: sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/TeamOccultus" },
      { icon: "codeberg", link: "https://codeberg.org/TeamOccultus" },
    ],
    footer: {
      message:
        "除有特殊说明，本网站内容采用「署名—相同方式共享 4.0 协议国际版」授权",
      copyright: "© 2023-2026 Team Occultus & 2018-2026 CTN STUDIO 星屹工作室",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
    },

    notFound: {
      title: "页面未找到",
      quote:
        "但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。",
      linkLabel: "前往首页",
      linkText: "带我回首页",
    },
    editLink: {
      pattern:
        "https://github.com/TeamOccultus/TeamOccultus.github.io/edit/main/src/:path",
      text: "在 GitHub 上编辑此页",
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: "跳转到内容",
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索",
              },
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "重置搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "没有结果",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "输入",
                  navigateText: "导航",
                  navigateUpKeyAriaLabel: "上箭头",
                  navigateDownKeyAriaLabel: "下箭头",
                  closeText: "关闭",
                  closeKeyAriaLabel: "Esc",
                },
              },
            },
          },
        },
      },
    },
  },
});

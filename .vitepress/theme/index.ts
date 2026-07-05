// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import { Gallery } from "@miletorix/vitepress-gallery"; // [!code ++]
import "@miletorix/vitepress-gallery/style.css"; // [!code ++]
import VPSwiper from "@cssnr/vitepress-swiper";
import "@cssnr/vitepress-swiper/style.css";
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";

import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";
import { NolebaseInlineLinkPreviewPlugin } from "@nolebase/vitepress-plugin-inline-link-preview/client";

import "@nolebase/vitepress-plugin-inline-link-preview/client/style.css";
import VersionDisplay from "./components/VersionDisplay.vue";
import Card from "./components/Card.vue";
import CardGrid from "./components/CardGrid.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 为较宽的屏幕的导航栏添加阅读增强菜单
      "nav-bar-content-after": () => h(NolebaseEnhancedReadabilitiesMenu),
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      "nav-screen-content-after": () =>
        h(NolebaseEnhancedReadabilitiesScreenMenu),
    });
  },
  enhanceApp(ctx) {
    ctx.app.component("Gallery", Gallery); // [!code ++]
    ctx.app.component("VPSwiper", VPSwiper);
    ctx.app.component("VersionDisplay", VersionDisplay);
    ctx.app.component("Card", Card);
    ctx.app.component("CardGrid", CardGrid);
    ctx.app.use(NolebaseInlineLinkPreviewPlugin);
  },
} satisfies Theme;

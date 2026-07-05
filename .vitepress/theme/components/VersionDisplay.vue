<script setup>
import latestVersion from 'virtual:version'
import body from 'virtual:log'
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

const cleanedBody = computed(() => {
  if (!body) return '暂无更新内容'
  return md.render(body)
})
</script>

<template>
<div class="version-display">
    <div class="version-header">
      <span>当前版本：<strong>{{ latestVersion }}</strong></span>
      <a 
        href="https://codeberg.org/TeamOccultus/HiddenYears2/releases/latest"
        target="_blank"
        rel="noopener noreferrer"
        class="download-link"
      >
        📦 下载
      </a>
    </div>

    <hr />

    <div class="changelog-body" v-html="cleanedBody" />
  </div>
</template>

<style scoped>
.version-display {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  padding: 20px 24px;
}

.version-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.version-header strong {
  color: var(--vp-c-brand-1);
  font-size: 1.2rem;
}

.download-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  padding: 6px 16px;
  border-radius: 6px;
  background: var(--vp-c-brand-soft);
  transition: opacity 0.2s;
}

.download-link:hover {
  opacity: 0.7;
}

hr {
  margin: 12px 0;
  border: none;
  border-top: 1px solid var(--vp-c-divider);
}

.changelog-body {
  font-size: 0.95rem;
  line-height: 1.7;
}

/* VMarkdown 渲染内容的样式 */
.changelog-body :deep(ul) {
  padding-left: 20px;
  margin: 6px 0;
}

.changelog-body :deep(li) {
  margin: 2px 0;
}

.changelog-body :deep(h1),
.changelog-body :deep(h2),
.changelog-body :deep(h3) {
  margin: 12px 0 6px 0;
  font-size: 1rem;
}

.changelog-body :deep(code) {
  background: var(--vp-c-bg-soft);
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 0.85em;
}

.changelog-body :deep(blockquote) {
  border-left: 4px solid var(--vp-c-brand-1);
  padding-left: 16px;
  margin: 8px 0;
  color: var(--vp-c-text-2);
}

.changelog-body :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.changelog-body :deep(a:hover) {
  text-decoration: underline;
}


</style>
<!-- docs/.vitepress/theme/components/ModCard.vue -->
<template>
  <div class="card">
    <!-- 可选的图标区域 -->
    <div v-if="icon" class="card-icon">{{ icon }}</div>
    
    <!-- 卡片主要内容 -->
    <h3>{{ title }}</h3>
    <p><slot /></p>
    
    <!-- 可选的链接 -->
    <a v-if="link" :href="link" class="card-link">
      了解更多 →
    </a>
  </div>
</template>

<script setup>
defineProps({
  // 卡片标题
  title: {
    type: String,
    required: true
  },
  // 卡片链接
  link: {
    type: String,
    default: ''
  },
  // 卡片图标（可以是 emoji 或 HTML）
  icon: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.card {
  padding: 20px 24px;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.25s, transform 0.2s;
  height: 100%; /* 保证卡片高度一致 */
}

.card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-4px);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.card h3 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.card p {
  margin: 0 0 12px 0;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.6;
}

.card-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
}

.card-link:hover {
  text-decoration: underline;
}
</style>
---
layout: doc
---

<script setup>
import { data as tools } from './tools.data.js'

function hideImage(event) {
  event.target.style.display = 'none'
}
</script>

# Tools

リンク集

## 📊 logs関連

::: details ログ分析、スキル回し

<div class="tool-grid">
  <a
    v-for="tool in tools.logs"
    :key="tool.url"
    class="tool-card"
    :href="tool.url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      v-if="tool.image"
      class="tool-card-preview"
      :src="tool.image"
      alt=""
      loading="lazy"
      @error="hideImage"
    >
    <span class="tool-card-title">
      {{ tool.title }}
      <span aria-hidden="true">↗</span>
    </span>
    <span v-if="tool.description" class="tool-card-description">
      {{ tool.description }}
    </span>
    <span class="tool-card-tag">{{ tool.site }}</span>
  </a>
</div>

:::

## 🏷 その他

::: details もろもろ

<div class="tool-grid">
  <a
    v-for="tool in tools.equipment"
    :key="tool.url"
    class="tool-card"
    :href="tool.url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      v-if="tool.image"
      class="tool-card-preview"
      :src="tool.image"
      alt=""
      loading="lazy"
      @error="hideImage"
    >
    <span class="tool-card-title">
      {{ tool.title }}
      <span aria-hidden="true">↗</span>
    </span>
    <span v-if="tool.description" class="tool-card-description">
      {{ tool.description }}
    </span>
    <span class="tool-card-tag">{{ tool.site }}</span>
  </a>
</div>

:::
# Markdown 扩展

此页面演示了 VitePress 和 Wiki 提供的一些内置 Markdown 扩展。

## 更新内容速览

该组件将会从 Codeberg 仓库上自动获取最新发行版以及其更新日志，并展示在页面上。

```md
<VersionDisplay />
```

<VersionDisplay />

## 卡片容器

`Card` 是一个独立的内容卡片，适合展示模组中的物品、生物、玩法等条目。

### 基本用法

在 Markdown 文件中直接使用 `<Card>` 标签：

```markdown
<Card title="武器系统" link="/items/weapons" icon="⚔️">
  模组新增了 20 种独特的武器，每种都有专属技能和合成配方。
</Card>
```

<Card title="武器系统" link="/items/weapons" icon="⚔️">
  模组新增了 20 种独特的武器，每种都有专属技能和合成配方。
</Card>

### 参数说明

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `title` | String | ✅ 是 | - | 卡片标题 |
| `link` | String | ❌ 否 | `''` | 点击“了解更多”跳转的链接 |
| `icon` | String | ❌ 否 | `''` | 卡片图标，支持 Emoji 或 HTML |

### 示例

**带图标和链接的卡片：**

```markdown
<Card title="新生物" link="/entities" icon="👾">
  探索模组中新增的 12 种生物及其独特习性。
</Card>
```

**不带链接的纯信息卡片：**

```markdown
<Card title="系统要求" icon="💻">
  本模组需要 Minecraft 基岩版 1.21.0 及以上版本。
</Card>
```

**使用 HTML 作为图标：**

```markdown
<Card title="合成配方" link="/recipes" icon="<span style='font-size:1.8rem;'>📜</span>">
  查看所有新增物品的合成配方。
</Card>
```

---

## 卡片网格容器

`CardGrid` 用于将多个 `Card` 排列成网格布局，自动适应屏幕宽度。

### 基本用法

用 `<CardGrid>` 标签包裹多个 `<Card>`：

```markdown
<CardGrid>
  <Card title="武器" link="/weapons" icon="⚔️">
    浏览所有新增武器。
  </Card>
  <Card title="生物" link="/entities" icon="👾">
    查看新生物及其习性。
  </Card>
  <Card title="方块" link="/blocks" icon="🧱">
    探索新方块和建筑功能。
  </Card>
  <Card title="配方" link="/recipes" icon="📜">
    学习所有合成配方。
  </Card>
</CardGrid>
```

<CardGrid>
  <Card title="武器" link="/weapons" icon="⚔️">
    浏览所有新增武器。
  </Card>
  <Card title="生物" link="/entities" icon="👾">
    查看新生物及其习性。
  </Card>
  <Card title="方块" link="/blocks" icon="🧱">
    探索新方块和建筑功能。
  </Card>
  <Card title="配方" link="/recipes" icon="📜">
    学习所有合成配方。
  </Card>
</CardGrid>

### 参数说明

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `cols` | Number | ❌ | 自动 | 指定列数（如 `cols="3"`），不指定则自动响应 |



```markdown
<CardGrid cols="3">
  <Card title="武器" link="/weapons" icon="⚔️">...</Card>
  <Card title="生物" link="/entities" icon="👾">...</Card>
  <Card title="方块" link="/blocks" icon="🧱">...</Card>
</CardGrid>
```



## 语法高亮

VitePress 提供由 [Shiki](https://github.com/shikijs/shiki) 驱动的语法高亮，并附带行高亮等额外功能：

**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

```md
::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险警告。
:::

::: details
这是一个详情折叠块。
:::
```


::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险警告。
:::

::: details
这是一个详情折叠块。
:::

## 更多

查看文档以了解 [完整的 Markdown 扩展列表](https://vitepress.dev/guide/markdown)。
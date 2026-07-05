---
title: 自定义战利品袋
createTime: 2024/09/29 16:10:55
permalink: /docs/wiki/dev/trophy-bundle
icon: clarity:bundle-solid
---
> [!IMPORTANT]
> 该教程仅适用于 2.4.10 及以上版本

## 基础设置
要将物品设置为战利品袋，你需要将其最大堆叠设置为1，否则将会出现不可预知的问题。

然后为其添加`hy:trophy_bundle`，将其设置为战利品袋。

## 设置战利品表
> [!TIP]
> 本节所提到的原始战利品表路径，均省略`loot_tables`文件夹和`.json`文件后缀

### 从标签设置
首先，向物品添加`hy:loot_from_tag`标签，然后将你的战利品表路径进行以下处理：

- 添加`loot:`命名空间
- 将路径中的`/`替换为`.`

如以下的战利品表：

```
entities/allay.json
```

处理后的路径应该是

```
loot:entities.allay
```

最后，将处理后的路径作为物品标签添加到物品即可。

### 从动态属性设置
首先，向物品添加`hy:loot_from_script`标签，然后将省略`loot_tables`文件夹和`.json`文件后缀的战利品表路径直接添加到`hy:loot_table`动态属性中。

如：

```ts
world.afterEvents.entityDie.subscribe((event) => {
  if (event.deadEntity.typeId === "minecraft:allay") {
    const item = new ItemStack("hy:trophy_bundle"); // 这里假定该物品添加了`hy:trophy_bundle`与`hy:loot_from_script`标签，并且最大堆叠为1
    item.setDynamicProperty("hy:loot_table", "entities/allay"); 
    event.deadEntity.dimension.spawnItem(item, event.deadEntity.location);
  }
});
```
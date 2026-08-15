# Gemini 中式食品词的画面翻译

::: info 来源
- 来源：Gemini Web（Google Gemini）现场问答
- 时间：2026-08-15
- 说明：本文为用户向 Gemini Web 提问拿到的回答，仅做排版整理，文字未做改写。内容由 Gemini 生成，未经 Google 官方文档逐一核实；涉及 Veo 对具体词汇的理解能力请以官方文档为准。
:::

> 提问：中式食品的「锅气」「酥脆」「金黄」「挂汁」「焦香」这类词，拆成英文时该怎么落成 Veo 能真正理解的画面描述，而不是直译？能不能给几个标准对照？

## 核心原则

Veo 无法直接理解「锅气」这类文化概念，但它擅长渲染**烟雾轨迹、液体黏度、微粒飞溅和高光反射**。

所以拆法不是翻译，而是**用物理运动 + 光影质感 + 物理材质 + 摄影语法去「还原现场」**——把抽象的词落成模型能「看见」的画面。

## 标准对照表

| 中文抽象词 | 直译误区（易忽略/变形） | 物理还原逻辑 | 英文标准 Prompt 模板 |
| --- | --- | --- | --- |
| 锅气 | `Wok hei` / `Wok flavor` | 热气升腾 + 冒烟 + 快速翻炒 + 油滴飞溅 | `Rising wisps of white steam, subtle smoke wafting, sizzling oil droplets, fast wok-tossing movement` |
| 酥脆 | `Crispy` / `Crunchy` | 碎屑飞溅 + 表面微孔裂纹 + 动态硬碰撞 | `Crumbles explosion in slow motion, crackling texture, micro-fractures on surface, light dust flying off` |
| 金黄 | `Golden yellow` | 焦糖色泽 + 边缘高光 + 侧逆光透光感 | `Deep golden-brown crust, backlit rim lighting, glistening amber tone, sun-kissed reflection` |
| 挂汁 | `Coated sauce` | 厚重液体慢速流动 + 粘稠包裹 + 镜面反光 | `Glossy thick sauce slowly dripping, velvety glaze clinging to the surface, mirror-like liquid sheen` |
| 焦香 | `Burnt fragrance` | 边缘微焦炭化 + 炙烤火苗 + 微微冒烟 | `Seared charred edges, caramelized golden crust, subtle flame kiss, light smoke rising` |

## 实战 Prompt 案例

**1. 蜂蜜黄油味薯条（突出「金黄 / 酥脆 / 挂汁」）**

```text
Extreme macro close-up, slow-motion 120fps. A crispy French fry with micro-cracks on its deep golden-brown crust. Melted honey-butter glaze clings velvet-smooth to the surface, dripping in slow motion. Fine amber sugar crystals and tiny butter droplets glisten under warm side-lighting. Soft cinematic focus, dark background.
```

解析：用 `micro-cracks`（微裂纹）替代 `crispy`；用 `velvet-smooth`（丝绒顺滑）和 `dripping in slow motion`（超慢速滴落）描绘挂汁的黏稠感。

**2. 茄汁膨化零食 / 薯片（突出「浓郁挂汁 / 酸甜鲜红 / 咔哧酥脆」）**

```text
Macro lens, 4K commercial style. A crunchy tomato-flavored snack chip breaks in mid-air in super slow-motion, sending a tiny cloud of rich red seasoning dust exploding outward. Glossy, thick tomato glaze clings to the textured surface, catching bright studio reflections. Dynamic phantom high-speed camera effect.
```

解析：动态炸裂（`breaks in mid-air`）配合粉末飞溅（`seasoning dust exploding`），能瞬间生成「极度酥脆」的视觉冲击。

## 三大黄金法则

1. **加词加在「动作」上**：动词（`dripping, exploding, sizzling, wafting`）比形容词（`yummy, delicious`）管用 100 倍。
2. **控制光影与材质**：善用 `backlit`（逆光）、`glossy`（镜面高光）、`amber tone`（琥珀色调），Veo 对光影关键词非常敏感。
3. **指定摄影参数**：加 `Macro lens`、`120fps slow-motion`、`Phantom camera effect`，Veo 会自动套用商业广告级别的镜头调性。

---

关联：语言选择的分工见 [中文还是英文](/tools/gemini-prompt-language)；这类「物理还原」词落地到材质一致性见 [食品材质不漂移](/tools/gemini-food-material) 的 Material Tokens 写法。
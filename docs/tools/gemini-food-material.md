# Gemini 锁定食品材质质感不漂移

::: info 来源
- 来源：Gemini Web（Google Gemini）现场问答
- 时间：2026-08-15
- 说明：本文为用户向 Gemini Web 提问拿到的回答，仅做排版整理，文字未做改写。内容由 Gemini 生成，未经官方文档逐一核实；涉及的工具与参数（Image Prompt、IP-Adapter、首尾帧等）请以官方文档为准。
:::

> 提问：怎么锁定食品材质（酥脆、油润、蒸汽、金黄油脂光泽）在不同镜头里不漂移，是写进每条 prompt，还是有更稳的做法？

## 问题本质

食品材质（酥脆断面、表面气泡、油脂光泽、微焦感）在多镜头中产生「漂移」，本质是因为视频模型对每段提示词**随机重新采样了材质微观结构**。

如果仅靠「把修饰词复制粘贴到每条 Prompt 里」，依然会产生严重漂移（比如上一个镜头还是蜂窝微孔脆皮，下一个镜头变成了油炸裹粉颗粒感）。

在商业广告级制作中，锁定食品材质最稳定的工业化做法是「**静态微距定标图（Anchor Keyframes） + 材质核心特征词模版（Material Tokens） + 统一光照环境约束（Lighting Match）**」三位一体的组合策略。

## 1. 核心底座：用 1 张微距「材质标准母图」做多镜头投喂（最稳做法）

不要让视频模型去「脑补」什么是酥脆，而是将材质固化在静态参考图里：

- **生成 / 拍摄 1 张极致微距的材质母图**：固定好薯条表面微小蜂窝孔隙、金黄脆皮边缘微焦、薄层透明油脂反光、细微晶盐颗粒疏密。
- **分镜生图阶段多图引导**：在为 8 个分镜分别生成起始静态帧时，将这张「材质母图」作为 Image Prompt / IP-Adapter / 风格参考源同步挂载输入，确保所有分镜的静态图在起跑线上材质物理结构 100% 相同。

## 2. 提示词层面：提炼固定的「材质特征基准块」（每条 Prompt 逐字不改）

将材质属性模块化为一段不可拆分、逐字一致的 Material Token 词组，强行嵌入每个镜头的 Prompt 末尾：

- 避免使用泛词（如 `delicious`、`golden`、`crispy` 等宽泛词，模型随机性极高）。
- 使用微观物理属性与光学词。

英文固定材质块范例：

```text
crispy micro-textured golden crust, tiny aerated blistered surface, thin translucent glossy oil sheen, controlled soft specular highlights, delicate fine salt crystals, authentic natural food imperfections, no synthetic plastic look, no grease smearing
```

## 3. 锁定打光与影棚物理参数（光影一致是材质不漂移的关键）

食品的「油润」「焦脆」「蒸汽」全靠光影反射呈现。如果一个镜头是侧逆光，另一个镜头是顶光泛光，同一种材质看起来也会完全不同：

- **固定主光角度与质感**：统一在提示词中加入 `cinematic soft rim light, 45-degree diffused studio key light, dark shadow falloff`（柔和轮廓光与 45 度侧漫射光）。
- **避免过曝破坏高光细节**：使用 `controlled highlight, non-wet matte-to-gloss sheen`，防止模型把「薄层油脂光泽」误生成为湿漉漉的水光。

## 4. 「蒸汽」与「动态碎裂」的专项控制技巧

**蒸汽（Steam）控制**：

- 不要在静态图里画死蒸汽（容易变成固态白烟）。
- 在 I2V 视频提示词中添加：`thin, delicate translucent rising steam catching soft rim light, subtle natural dissipation`（微弱半透明升腾、边缘吃光、自然消散），并确保背景对比度足够。

**酥脆断裂（Snap / Crunch）控制**：

- 使用首尾帧控制：首帧为完整受力弯曲微距，尾帧为瞬间脆断并伴随 `micro-shattering crisp crumbs, tiny golden fragments flying outward in ultra slow-motion`（超慢动作下飞溅的微小金黄脆屑）。

## 总结工作流对比

| 做法 | 材质一致性 | 漂移率 | 生产建议 |
| --- | --- | --- | --- |
| 仅在每条 Prompt 写泛词（crispy / golden） | 极低 | 80%+ | 易出现塑料感、不同镜头质感断层 |
| 复制固定微观物理词组 + 统一光照词 | 良好 | ~35% | 基础控制，纯文生视频时必用 |
| 微距材质母图定标 + 关键帧多图约束 + 统一光影（推荐） | 极高（广告级） | <10% | 商业级多镜头广告标准流程 |

---

关联：本文是 [跨镜头一致性](/tools/gemini-shot-consistency) 第一步「薯条 / 食品资产定标」的展开——先用那篇的四步工作流搭骨架，再用本文的「材质母图 + Material Tokens」把酥脆 / 油润 / 蒸汽这一层材质锁死。
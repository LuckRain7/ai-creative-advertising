# 04b · Gemini 执行表（四段精简版 v1）

> 阶段 4 · 执行 ｜ 2026-08-09 ｜ **内部工作文档，可直接粘贴使用**
>
> 20s = 4 × 5s，全片用 Gemini（Veo 3）生成。十镜完整版走 [04a · 即梦执行表](./04a-jimeng-v1)，镜头设计同源，见 [03 · 分镜](./03-storyboard) 与 [04 · Prompt 组](./04-prompts)。

## 这版是什么

快速出一版完整叙事的底料：内部过片、撬客户、或投抖音的短版。**不是十镜版的替代**——十镜版的因果链更完整（镜头 5 与 7 中间隔着工序），这版是压缩叙事。

::: warning 交付前自查
发客户前过一遍[字幕红线](./03-storyboard#字幕红线)：非油炸、更健康、低脂、0 负担、不含丙烯酰胺、与传统油炸的任何对比——**一律不出现**。
:::

## 与即梦版的三处工具差异

见 [04 · 换工具怎么办](./04-prompts#换工具怎么办)：

1. **英文更有效**——Prompt 全英文；
2. **音效直接写进 Prompt**——Veo 原生出音频，每段含 Audio 行；
3. **首尾帧改为起止状态的文字描述**——一镜到底，不上传帧图。

**取舍**：镜头 1–3 合为段 1；镜头 5+7+8 合为段 3；**离心脱油（镜头 6）不在本版**——2c 未确认，精简版里单段占比大、撤换成本高。确认后用文末备用 Prompt 插为第 5 段（25s 版）。

**不配参考图**：Veo 文生视频为主；产品外观（浅金 + 红色调味颗粒）靠段 3、段 4 的文本锁定。包装与 logo 同样只走合成通道，不生成。

| 段 | 对应原镜头 | 字幕落点 |
|---|---|---|
| 1 · 原薯鲜切 | 1+2+3 | 「原薯鲜切」可落段尾 |
| 2 · 低温真空 | 4 | 「80~90℃ 低温油炸」（钩子，待 2b） |
| 3 · 所以它是脆的 | 5+7+8 | 「所以它是脆的」 |
| 4 · 成品质感 | 9+10 | 主标题落版（包装后期合成，不生成） |

参数：5s/段、1080p、24fps（可选则选）；每段跑 3–4 条。

---

## 段 1 · 原薯鲜切

```
High-end food-ad macro cinematography, documentary realism, warm grade,
subtle film grain, natural food colors, no oversharpening, no oversaturation,
commercial lighting, photorealistic live-action look.

A whole fresh potato with thin soil on its skin falls onto a dark walnut
cutting board and bounces once. A heavy chef's knife cuts into it; the pale
cut face oozes starchy moisture. Freshly cut potato strips with rough,
irregular hand-cut edges tumble down in slow motion.

Macro, shallow depth of field, side backlight rimming the potato skin,
dark background, camera fixed.

Audio: a dull thud, one clean crisp knife cut, soft tapping of falling strips.

No text, no logos, no branding, no packaging, no Japanese or Chinese characters,
no cartoon, no 3D-render look.
```

**验收**：土豆条边缘必须有毛刺（「原薯鲜切」唯一的画面物证）；边缘规整即废。

---

## 段 2 · 低温真空

```
High-end food-ad macro cinematography, documentary realism, warm grade,
subtle film grain, natural food colors, no oversharpening, no oversaturation,
commercial lighting, photorealistic live-action look.

Inside a sealed stainless-steel vacuum chamber, pale golden oil stays almost
perfectly calm. Potato strips float suspended in the oil; only tiny fine
bubbles rise slowly to the surface and pop. No violent boiling, no white foam.

Medium close-up, shallow depth of field, single warm light from above,
dark surroundings, camera creeping in very slowly.

Audio: a low mechanical hum, near silence, faint tiny bubble pops.

No text, no logos, no branding, no packaging, no Japanese or Chinese characters,
no cartoon, no 3D-render look.
```

**验收**：油面平静是全片唯一的「不一样」证据；翻滚沸腾即废，重跑。

---

## 段 3 · 所以它是脆的

```
High-end food-ad macro cinematography, documentary realism, warm grade,
subtle film grain, natural food colors, no oversharpening, no oversaturation,
commercial lighting, photorealistic live-action look.

Extreme macro of a pale golden potato-crisp strip's cross-section on a dark
stone surface: dense pores gradually light up as strong backlight builds
behind it, the honeycomb structure glows. Then two fingertips snap the strip;
it breaks with a sharp crack, fine dry crumbs bursting outward in slow
motion. Surface dry and matte, no oil shine.

Extreme macro, shallow depth of field, pure black background, strong backlight,
camera creeping in.

Audio: quiet rising tension, then one loud crisp CRACK, fine crumb scatter.

No text, no logos, no branding, no packaging, no Japanese or Chinese characters,
no cartoon, no 3D-render look.
```

**验收**：先透光、后咔嚓，因果顺序不能反；只入画指尖，手部畸形即改跑无人版本（删第三、四行手指描述，改为 the strip snaps on its own）。

---

## 段 4 · 成品质感 + 留空

```
High-end food-ad macro cinematography, documentary realism, warm grade,
subtle film grain, natural food colors, no oversharpening, no oversaturation,
commercial lighting, photorealistic live-action look.

A pile of pale golden potato-crisp strips — light gold, NOT brown — on a dark
stone surface, dry matte texture, fine porous surface with tiny red seasoning
specks. More strips fall slowly from above, colliding and stacking. Camera
slowly pulls back, leaving clean empty space above the pile.

Close-up widening to medium, soft top light with a hard side rim,
dark background.

Audio: soft sandy rattling of strips colliding, gentle musical resolve.

No text, no logos, no branding, no packaging — the frame stays clean for
compositing. No Japanese or Chinese characters, no cartoon, no 3D-render look.
```

**验收**：浅金非深褐；上方留空是给包装合成与主标题的位置，**包装不生成**。片尾落版 logo 用 `images/refs/logo.jpg` 去背叠加，带不带 ® 等客户确认。

---

## 备用 · 离心脱油（2c 确认后插为第 5 段）

::: warning 前提未确认
物料清单 2c（本产品是否有脱油工序）未确认。**确认为否这条永久作废**，不做「看起来像脱油」的替代画面。
:::

```
High-end food-ad macro cinematography, documentary realism, warm grade,
subtle film grain, natural food colors, no oversharpening, no oversaturation,
commercial lighting, photorealistic live-action look.

Close-up of an industrial stainless-steel centrifuge drum lined with pale
golden potato strips. The drum spins up; strips press against the perforated
wall and fine oil droplets are flung outward through the holes in radial
streaks, natural motion blur.

Medium shot, cool white industrial light, hard metal reflections, camera fixed.

Audio: mechanical whir accelerating, faint oil spatter.

No text, no logos, no branding, no packaging, no Japanese or Chinese characters,
no cartoon, no 3D-render look.
```

## 生成日志

每段跑了几条、采用哪条、废的为什么废，**当场记进 [05 · 生成日志](./05-genlog)**，事后记不准。

---

**上一步** ← [04a · 即梦执行表](./04a-jimeng-v1) ｜ **下一步** → [05 · 生成日志](./05-genlog)

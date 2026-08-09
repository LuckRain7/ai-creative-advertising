# 04d · B 片 Gemini 执行表（开盖片 v1）

> 阶段 4 · 执行 ｜ 2026-08-09 ｜ **内部工作文档，可直接粘贴使用**
>
> B 片 = 开盖片：6–10 秒、9:16 竖屏、抖音/小红书信息流。定义见 [01 · 提案](./01-proposal)，即梦版见 [04c](./04c-b-jimeng-v1)，镜头设计同源，仅工具语法不同。
>
> 与即梦版差异同 [04b](./04b-gemini-v1#与即梦版的三处工具差异)：英文、音效写进 Prompt、一镜到底。

## 镜头表（8 秒）

| # | 时长 | 画面 | 来源 |
|---|---|---|---|
| **B1** | 2s | 第一帧即撕封口 | **实拍 / demo 占位**——不生成，清单见 [04c · B1](./04c-b-jimeng-v1#b1-撕封口-不生成) |
| **B2** | 1.5s | 杯口俯视露出 | 下方 Prompt 1 |
| **B3** | 2s | 掰断、碎屑炸开 | 下方 Prompt 2 |
| **B4** | 2.5s | 产品落版 + 主标题 | 下方 Prompt 3 生成背景 + 后期合成 |

---

## Prompt 1 · 杯口俯视露出

```
High-end food-ad macro cinematography, documentary realism, warm grade,
subtle film grain, natural food colors, no oversharpening, no oversaturation,
commercial lighting, photorealistic live-action look.

Vertical 9:16 top-down view looking straight into an opened snack cup:
a silver rolled rim, the cup filled with pale golden potato-crisp strips
with tiny red seasoning specks, dry matte surface, no oil shine.
The cup's outer wall shows only plain color, no print. Dark wooden desk
background. Camera creeps in very slowly toward the cup opening.

Overhead macro, shallow depth of field, soft top light with a hard side rim.

Audio: a faint foil crinkle just passed, then near silence, soft sandy rustle.

No text, no logos, no branding, no packaging print, no Japanese or Chinese
characters, no cartoon, no 3D-render look.
```

**验收**：杯口只有银色卷边与产品；杯身出现任何印刷即废。

---

## Prompt 2 · 掰断

```
High-end food-ad macro cinematography, documentary realism, warm grade,
subtle film grain, natural food colors, no oversharpening, no oversaturation,
commercial lighting, photorealistic live-action look.

Vertical 9:16 extreme macro, subject placed in the upper third of the frame:
two fingertips snap a pale golden potato-crisp strip; it breaks with a sharp
crack, fine dry crumbs burst outward in slow motion, porous cross-section
visible, surface dry and matte, no oil shine. Pure black background,
strong side light, camera fixed.

Audio: one loud crisp CRACK, fine crumb scatter — the loudest sound in the film.

No text, no logos, no branding, no packaging, no Japanese or Chinese characters,
no cartoon, no 3D-render look.
```

**验收**：主体在**上三分之一**（下三分之一留给字幕与账号信息区）；手部畸形即改跑无人版本（the strip snaps on its own）。

---

## Prompt 3 · 落版背景（产品不生成）

```
High-end food-ad macro cinematography, documentary realism, warm grade,
subtle film grain, natural food colors, no oversharpening, no oversaturation,
commercial lighting, photorealistic live-action look.

Vertical 9:16 clean studio backdrop: dark stone surface in the lower half,
soft warm gradient above, gentle light spots and depth blur low in the frame,
upper half left completely empty. No objects.

Medium shot, shallow depth of field, eye level,
key light upper-left 45 degrees, soft fill right, background gently graded down.

Audio: gentle musical resolve.

No text, no logos, no branding, no packaging, no objects — the frame stays
clean for compositing. No Japanese or Chinese characters, no cartoon,
no 3D-render look.
```

包装用 `images/refs/render-cup.jpg` 去背合成于中下位，主标题「原薯鲜切」落上方留空；片尾 logo 用 `logo.jpg`（® 待确认）。正面平视，不突出日文副标。

---

## 音效

Veo 原生音频可作氛围参考，但 B 片音效是主角级，**以 [04c 后期拟音表](./04c-b-jimeng-v1#音效是主角) 为基准**：撕封「嘶啦」→ 半拍安静 → 「咔嚓」全片最响 → 轻收尾。

## 生成日志

每段跑了几条、采用哪条、废的为什么废，**当场记进 [05 · 生成日志](./05-genlog)**。

---

**上一步** ← [04c · B 片即梦执行表](./04c-b-jimeng-v1) ｜ **下一步** → [05 · 生成日志](./05-genlog)

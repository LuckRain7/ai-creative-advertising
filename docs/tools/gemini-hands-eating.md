# Gemini 手部与进食特写

::: info 来源
- 来源：Gemini Web（Google Gemini）现场问答
- 时间：2026-08-15
- 说明：本文为用户向 Gemini Web 提问拿到的回答，仅做排版整理，文字未做改写。内容由 Gemini 生成，未经 Google 官方文档逐一核实；涉及 Veo 对手部/口腔的解算能力请以官方文档为准。
:::

> 提问：手拿薯条、牙齿咬断、食物入口这类特写，手指 / 牙齿 / 口腔细节最容易崩，怎么在 prompt 里约束才稳定？

## 核心策略

手指、牙齿、舌头、口腔属于高维关节与复杂物理碰撞区域，是扩散模型最容易「融化、多指、多齿、形变」的重灾区。核心策略：**用强物理约束锁定运动幅度 + 降低解算复杂度 + 避开微观口腔解算**。

## 三大崩溃点的约束法则

**1. 手持薯条（防多指 / 融化）**

- 明确手部姿势：不写 `holding a french fry`，写 `thumb and index finger`（食指拇指捏住）。
- 锁定手指数量与状态：写 `two fingers only` 或 `thumb and index finger visible`。
- 加景深：把手和薯条置于焦平面，背景拉虚，逼模型把像素算力集中到手和薯条上。

**2. 牙齿咬断（防齿数混乱 / 咬合错误）**

- 锁定牙齿局部：写 `front teeth`（门牙）或 `upper teeth`（上排），别让模型生成整张嘴的复杂齿列。
- 控制运动幅度：用「预咬」或「接触即止」，别写大跨度咬合全过程。
- 用物理碎屑转移注意力：显式写「断裂声响的视觉化」，既增加真实感又掩盖齿部解算不稳。

**3. 食物入口（防口腔黑洞 / 肌肉融化）**

- 避拍深层口腔：不写 `tongue chewing`、`inside the mouth`。
- 用唇部掩护：焦点放在「嘴唇张开 → 咬下 → 唇角微扬」。

## 实战 Prompt 拆解

**手持薯条特写**

```text
Extreme close-up shot, macro video. Two clean, photorealistic fingers (thumb and index finger) holding a single golden crispy french fry coated with honey butter seasoning. The camera captures ultra-detailed crisp texture and tiny seasoning crystals. Shallow depth of field, soft natural studio lighting, 8k resolution, photorealistic, high-end food commercial style, slow motion 60fps.
```

关键约束：`Two clean, photorealistic fingers (thumb and index finger)` 锁死两根手指，减少多指概率。

**牙齿咬断薯条**

```text
Macro slow-motion close-up. Pristine upper front teeth taking a clean bite out of a thick-cut tomato-flavored french fry. The fry snaps precisely in half with tiny crunchy crumbs scattering in mid-air. Macro lens, sharp focus on the teeth and fry, soft lip framing, backlit, clean commercial lighting, cinematic 4k food ad.
```

关键约束：`Pristine upper front teeth`（只渲染上排门牙）、`snaps precisely in half`（明确断成两半，避免橡胶化拉丝）、`crumbs scattering`（碎屑掩盖缝隙失真）。

**食物送入口中**

```text
Side-profile close-up shot. Soft natural lips gently open as a golden french fry is brought towards the mouth. Natural facial movement, clean skin texture, realistic lighting, warm aesthetic. Shot on 35mm lens, depth of field, high-end snack advertisement.
```

关键约束：`Side-profile`（斜侧角度比正对嘴稳定 80% 以上，避开口腔内部解算）。

## 禁用词与运镜技巧

**绝对避开**：`tongue chewing`、`inside the mouth`、`full mouth open`、`hand holding a handful of fries`（手抓一把必融合）。

**运镜**：静态镜头（`Static Shot`）或极微前移（`Slow Push-in`）——咬断本身已有动态，镜头再快动会双重运动导致解算崩溃；`Slow Motion / 60fps / 120fps` 能掩盖肌肉/咬合接缝的不自然滑移。

**工作流**：先出「手持/咬下」的高清剧照做首帧，再驱动 2 秒动作（成功率 90%+）；成片里咬断特写只用 0.5–1.2 秒，截取最准的 10–20 帧配「咔嚓」音效即可。

---

关联：手部/口腔的形变崩坏靠首帧锁定兜底，见 [首帧与首尾帧锁定](/tools/gemini-first-last-frame)；静态镜头降崩溃见 [运镜翻车词](/tools/gemini-camera-failsafe)；`deformed hands` 等负面词见 [排除项写法](/tools/gemini-negative-tokens)。
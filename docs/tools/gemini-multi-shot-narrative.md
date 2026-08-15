# Gemini 多镜头叙事与转场

::: info 来源
- 来源：Gemini Web（Google Gemini）现场问答
- 时间：2026-08-15
- 说明：本文为用户向 Gemini Web 提问拿到的回答，仅做排版整理，文字未做改写。内容由 Gemini 生成，未经 Google 官方文档逐一核实；涉及 Veo 对分镜/转场的支持请以官方文档为准。
:::

> 提问：
> 1. 8 个分镜之间怎么设计转场节奏，避免拼接感？有没有镜头与镜头衔接、保持情绪连贯的技巧？
> 2. 一条 30 秒食品广告的完整结构（吸引 → 展示 → 食欲 → 品牌收尾）该怎么拆给 Gemini 分镜？

## 8 分镜转场节奏（「起-承-转-合」律动）

AI 视频极易因「镜头时长一致」产生机械拼接感，核心在于**快慢交替（抑扬顿挫）**：

| 分镜 | 画面 | 节奏 | 转场手法 |
| --- | --- | --- | --- |
| 01 | 宏观环境引子（国潮场景） | 慢 1.5–2s | Match Cut，画面中央留焦点 |
| 02 | 食材特写（黄油融化 / 番茄爆汁） | 中 1s | 微距推镜，液体/粉末同向运动衔接 |
| 03 | 制作过程（油锅翻滚） | 快 0.8s | 气泡/烟雾遮挡做 Wipe Cut |
| 04 | 调味瞬间（粉末瀑布倾泻） | 极慢 2s | Shape/Color Match 匹配粉末落点 |
| 05 | 成品亮相 | 中 1s | 轴线/方向延续 |
| 06 | 开袋/开盒（手撕包装） | 快 0.8s | Action Cut，撕开瞬间切下一镜 |
| 07 | 品尝反馈（蘸酱/咬下高潮） | 慢 1.5s | 光效/粒子转场 |
| 08 | 品牌落款（包装 + Logo 定格） | 稳 1.5s | 自然淡出 / 图形归位 |

## 四大无缝衔接技巧

1. **动向一致性（Vector Continuation）**：上一镜结尾运动方向 = 下一镜开头方向（镜头 03 向下俯冲 → 镜头 04 顺势向下）。
2. **遮挡 / 擦除转场（Wipe）**：用烟雾、蒸汽、飞沫或主体边缘短暂遮挡全屏再切换（番茄汁溅满屏 → 下一帧从粉末瀑布拉出）。
3. **形状 / 颜色匹配（Match Cut）**：整颗番茄（圆）→ 番茄味薯圈（圆）；黄油块（旋转）→ 金黄薯条。
4. **声画同步驱动（Audio-Driven Pacing）**：剪辑点踩在音效上——`Crunch` 配画面放大/微闪光，液体流动声配慢动作微距。

## 保持情绪连贯的「三个不变」

每个分镜 Prompt 固定三样，8 镜头即有统一品牌调性：

- **统一光影**：`warm volumetric lighting, cinematic soft backlight, golden hour food photography style`
- **统一色调**：蜂蜜黄油 → `warm golden, amber yellow, creamy white`；番茄 → `vibrant tomato red, warm lighting`
- **统一相机参数**：`shot on 85mm macro lens, shallow depth of field, 4K resolution, commercial food advertisement`

## 30 秒广告四阶段拆解

先给 Gemini 一段**全局视觉基线**：`Commercial food photography, 8k resolution, cinematic lighting, photorealistic, ultra-detailed texture, 60fps` + 统一色调 + 主角产品定义。再按四阶段拆：

| 阶段 | 时间 | 目标 | 画面 | 运镜 |
| --- | --- | --- | --- | --- |
| 黄金 3 秒钩子 | 0–3s | 秒内抓眼球 | 极限微距 + 慢动作（薯条蘸酱拉丝） | `Macro lens, 120fps, push-in` |
| 场景与产品展示 | 3–10s | 建立场景共鸣 | 动态中景 + 真实生活感（开袋） | `Medium tracking shot` |
| 食欲爆发 | 10–22s | 放大美味感 | 动态特写 + 原材料碰撞（融化/爆汁/飞溅） | `Orbit shot / Phantom flex macro` |
| 情绪升华与品牌收尾 | 22–30s | 满足感 + Logo + CTA | 满足表情 + 包装 hero-shot + Logo | `Shallow DOF close-up → static tilt-up` |

**可直接复制给 Gemini 的整体指令**：

```text
你是一位精通 AI 视频生成的食品广告导演（熟悉 Google Veo / Sora 提示词）。
请为一款【中式番茄味 / 蜂蜜黄油味薯条】创作一条 30 秒的短视频广告脚本。
格式：
1. 按 [0-3s 钩子] [3-10s 场景] [10-22s 食欲爆发] [22-30s 品牌收尾] 拆解。
2. 每个镜头提供：画面描述(Visual) / 运镜指令(Camera) / 光影材质细节 / 可直接复制给 Veo 的英文 Prompt。
```

---

关联：分镜的结构方法论见 [分镜设计](/method/storyboard) 与 [从 brief 到成片 SOP](/method/workflow-sop) 的 ④ 分镜阶段；单镜头内相机/主体/物理三层不再打架见 [三层运动解耦](/tools/gemini-motion-layers)。
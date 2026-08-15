# Gemini 一句话精确控制机位与运镜

::: info 来源
- 来源：Gemini Web（Google Gemini）现场问答
- 时间：2026-08-15
- 说明：本文为用户向 Gemini Web 提问拿到的回答，仅做排版整理，文字未做改写。内容由 Gemini 生成，未经 Google 官方文档逐一核实；涉及 Veo 对具体运镜术语的支持程度请以官方文档为准。
:::

> 提问：怎么用一句话精确指定机位和运镜？俯拍、环形运镜、dolly-in 在 Veo 里最稳的写法分别是什么？

## 核心句式结构

在 Veo 中，单句提示词要达到工业级控制精度，核心句式结构是：

**[镜头起始景别与机位] + [精确运镜动词与轨迹] + [运动速度 / 节奏] + [锁定的视觉焦点与光影]**

避免使用文学化描述（如「慢慢地看过去」），直接使用标准摄影工业术语。以下是三种机位在 Veo 中最稳定、无歧义的写法与解析。

## 1. 俯拍（Top-down / Overhead Shot）

最稳单句写法：

```text
A static overhead bird's-eye view, perfectly top-down 90-degree angle, focused on [Subject] centered on [Surface] with soft diffused top lighting.
```

关键术语解析：

- **`perfectly top-down 90-degree angle`**：强制锁定绝对垂直俯视，防止模型生成 45 度的斜俯视角。
- **`overhead bird's-eye view`**：双重加固垂直空间认知。
- **`static`**：若不需要移动，务必加上 `static`，防止 AI 自行添加晃动。

## 2. 环形运镜（360° Orbit / Arc Shot）

最稳单句写法：

```text
A smooth 180-degree orbital arc shot, circling around [Subject] from left to right at eye level, camera tracking tightly with seamless cinematic parallax.
```

关键术语解析：

- **`180-degree orbital arc shot`（或 `360-degree`）**：明确弧形旋转的角度范围与起始方向（`from left to right`）。
- **`at eye level`**：锁死相机高度，防止镜头在环绕过程中上下起伏漂移。
- **`seamless cinematic parallax`**：诱导模型生成准确的前后景视差，强化 3D 纵深感。

## 3. 平滑推进（Dolly-in / Push-in）

最稳单句写法：

```text
A controlled slow dolly-in shot, camera smoothly pushing forward along the z-axis from medium close-up into a crisp macro detail of [Subject], no lens distortion.
```

关键术语解析：

- **`along the z-axis`**：在空间几何层面上明确沿 Z 轴直线推进，杜绝左右晃动。
- **`from [A] into [B]`**：清晰定义起始景别（Medium close-up）与落点景别（Macro detail）。
- **`no lens distortion`**：避免广角镜头在极近距离推入时产生鱼眼畸变。

## 快速速查表

| 机位 / 运镜 | 核心组合词 | 作用与避坑要点 |
| --- | --- | --- |
| 纯正俯拍 | `top-down 90-degree angle`, `overhead bird's-eye view` | 杜绝 45° 俯角倾斜 |
| 水平环绕 | `orbital arc shot`, `circling at eye level`, `cinematic parallax` | 锁定高度，防止环形运动中翻滚变形 |
| 直线推进 | `slow dolly-in along the z-axis`, `pushing from [A] to [B]` | 锁定运动轴线，精确控制景别过渡 |

---

关联：运镜的速度与节奏（slow motion、dolly-in、orbital）会直接决定单镜时长分配，配合 [控制视频时长](/tools/gemini-video-duration) 第一行锁总长的方法一起用。
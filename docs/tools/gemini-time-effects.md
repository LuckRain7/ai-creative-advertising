# Gemini 时间特效触发词：升格 / 延时 / 定格

::: info 来源
- 来源：Gemini Web（Google Gemini）现场问答
- 时间：2026-08-15
- 说明：本文为用户向 Gemini Web 提问拿到的回答，仅做排版整理，文字未做改写。内容由 Gemini 生成，未经官方文档逐一核实；涉及具体机型与帧率参数（Phantom Flex4K、1000fps 等）请以官方文档为准。
:::

> 提问：升格慢动作、延时摄影、突然停格，分别用什么词触发最稳定？

## 1. 升格慢动作（Ultra Slow-Motion / High-Speed）

单纯使用 `slow motion` 往往只能得到动作放缓的普通视频，缺乏升格摄影特有的微观物理张力。最稳定的方式是指定工业级高速摄影机型号与极高帧率数值（1000fps），并绑定微观悬浮物理特征。

最稳触发词组：

- `shot on Phantom Flex4K at 1000fps ultra slow-motion`（锁定千帧高速摄影机质感）
- `extreme temporal expansion, micro-second physics`（时间微秒级膨胀）
- `suspended in mid-air, capturing fine surface ripples`（指定粒子 / 液滴的空气悬浮态）

标准 Prompt 句式：

```text
Captured on Phantom high-speed camera at 1000fps ultra slow-motion: the [Subject/Impact] occurs with extreme temporal expansion, fine droplets and micro-particles suspended crisply in mid-air, subtle surface ripples spreading in slow motion, pristine studio lighting.
```

## 2. 延时摄影（Time-Lapse / Hyperlapse）

AI 在生成延时摄影时最容易出现画面高频闪烁（Flickering）或物体随机变异。最稳定的方式是强制锁定相机载具（三脚架锁定），并明确指定受时间加速影响的环境运动载体（如光影位移、流云）。

最稳触发词组：

- `smooth intervalometer timelapse, locked-off tripod`（平滑间隔延时，杜绝机位抖动）
- `rapid sunlight trajectory and sweeping shadows`（用光影快速扫过强化延时真实感）
- `smooth motion-blur hyperlapse with fixed tracking anchor`（移动延时需加固定跟踪锚点）

标准 Prompt 句式：

```text
A smooth locked-off tripod timelapse: stationary [Subject] remains rigid and unchanged at the center while dramatic golden hour sunlight and sharp shadows rapidly sweep across the scene, clean frame transition with no flickering.
```

## 3. 突然停格 / 变速定格（Speed Ramp / Time Freeze / Bullet Time）

纯文字指令很难在单一镜头中精准控制「先动后停」。最稳定的触发方式是使用子弹时间（Bullet Time）或速度阶跃（Speed Ramp to Dead Freeze）——即主体物理动作瞬间归零，但摄像机维持微动环绕，这样模型不会误判为输出一张死图。

最稳触发词组：

- `dynamic speed ramping into an instant dead freeze-frame`（动态变速瞬间锁死）
- `temporal freeze / time-freeze effect`（时间冻结效应）
- `bullet-time camera arc around frozen mid-air [Subject]`（围绕空中停格主体的子弹时间环绕）

标准 Prompt 句式：

```text
Dynamic action with sudden speed-ramping snapping into an absolute temporal freeze: the shattering [Subject] and floating debris freeze completely in mid-air, while the camera executes a smooth subtle orbital arc around the frozen moment.
```

## 触发词稳定性速查表

| 特效类型 | 最稳触发词（Core Tokens） | 辅助约束词（防止翻车） |
| --- | --- | --- |
| 千帧升格 | `Phantom Flex4K 1000fps`, `ultra slow-motion` | `suspended in mid-air`, `high-speed shutter` |
| 稳定延时 | `locked-off tripod timelapse`, `smooth intervalometer` | `no flickering`, `sweeping natural shadows` |
| 突然定格 | `speed-ramp to dead freeze`, `bullet-time temporal freeze` | `frozen mid-air debris`, `camera orbiting frozen subject` |

---

关联：升格触发词与 [三层运动解耦](/tools/gemini-motion-layers) 的「全局时间速率统一」直接相关——那篇要求句首设 `In 1000fps ultra slow-motion`，本篇把它落到具体的高帧率机位写法。
# Gemini 三层运动解耦：相机 / 主体 / 物理

::: info 来源
- 来源：Gemini Web（Google Gemini）现场问答
- 时间：2026-08-15
- 说明：本文为用户向 Gemini Web 提问拿到的回答，仅做排版整理，文字未做改写。内容由 Gemini 生成，未经官方文档逐一核实；不同模型对多层运动语义的解析能力不同，请以各自官方文档为准。
:::

> 提问：怎么在一条 prompt 里同时锁住「镜头运动 + 物体原本运动 + 物理规律」三个层次而不互相打架？

## 核心逻辑

在一条 Prompt 中让「镜头运动」「主体运动」和「物理规律」同时生效且不互相干扰，核心逻辑是：**「语法分层隔离（Syntax Decoupling）+ 明确参考系关联（Frame of Reference）+ 统一时间速率（Time Scale）」**。

模型在解析单句长文本时，如果把相机动作和物体动作混在同一个分句里（例如 `A french fry falls down as camera zooms in and steam rises`），注意力机制会模糊「是谁在向哪个方向移动」。必须采用结构化三层递进句式。

## 一、三层标准结构公式

```text
[Layer 1: 相机运动与参考系] → [Layer 2: 主体自主动作矢量] → [Layer 3: 被动物理碰撞与微观动力学]
```

### Layer 1：相机运动层（Camera & Reference Frame）

- **职责**：只定义摄影机在空间中的绝对轨迹，以及相机与主体的运动绑定关系。
- **核心词**：`static overhead shot`／`smooth dolly-in along z-axis`／`camera locked tracking with [Subject]`（相机与主体锁定跟随）。

### Layer 2：主体运动层（Subject Kinematics）

- **职责**：只定义主体的主动位移、受力方向与起始 / 终点状态。
- **核心词**：`moving from left to right`／`colliding at a 45-degree angle`／`snapping into two halves`。

### Layer 3：物理规律层（Physics & Passive Dynamics）

- **职责**：只定义被动的环境响应（重力、惯性、脆裂散射、流体飞溅、空气阻力）。
- **核心词**：`realistic downward gravitational acceleration`／`micro-fragments scattering outward along the vector of impact`／`rising translucent steam dissipating naturally`。

## 二、防止三个层次「打架」的 3 条铁律

**1. 明确参考系（锁定相机是「静止围观」还是「跟随主体」）**：

- 若物体高速下落、相机静止：写明 `camera remains static while [Subject] falls through the frame from top to bottom`。
- 若相机跟着物体一起掉：写明 `camera tracks downward in sync with the falling [Subject], keeping [Subject] dead-centered`。

**2. 物理因果链必须严格单向编写（Action → Reaction）**：先写主要动作，再用 `triggering`／`resulting in` 引出次级物理响应，杜绝多主语并列。

正确范例：`...snapping in the middle, instantly triggering micro-crumbs to burst outward due to fracture force`。

**3. 全局时间速率必须绝对统一（Global Time Rate）**：切忌在一条 Prompt 里同时出现 `rapid crash` 和 `slow-motion liquid`。在句首统一设定全局时间基准（如 `In 1000fps ultra slow-motion:`），让相机移动速度、物体撞击速度与粒子沉降速度都在同一时间膨胀尺度下计算。

## 三、实战标准 Prompt 示范

场景：高难度微距——推镜头中两个物体相撞脆裂、碎屑受重力散射、热气向上消散。

结构化英文 Prompt（可直接输入模型）：

```text
[Camera] A controlled slow dolly-in shot pushing forward along the z-axis with a shallow depth of field.

[Subject Action] Simultaneously, two crispy golden French fries collide horizontally at high speed at the center of the frame, snapping instantly upon impact.

[Physics & Dynamics] The fracture creates realistic brittle physics: tiny golden crumbs and fine salt crystals violently burst outward along the kinetic vector before falling under gravity, while thin translucent steam gently curls and rises upward, unaffected by the debris.

8k macro commercial lighting.
```

解析：

- **相机**：只管向 Z 轴直线慢推（不抢 X / Y 轴空间）。
- **主体**：在 X 轴水平相撞并断裂（动作明确）。
- **物理**：碎屑沿撞击动量向外炸开后受重力下落（符合动量与重力），蒸汽轻微向上自然升腾（符合热力学），各层物理矢量完全不冲突。

## 层次解耦对照表

| 层次 | 容易犯错的写法（易冲突） | 正确的解耦写法（稳定锁定） |
| --- | --- | --- |
| 机位 vs 物体 | `Camera goes down and fries fall down`（模型分不清谁在掉） | `Camera stays static at eye level while fries fall vertically past the lens` |
| 主体 vs 物理 | `Fries break and flying crumbs and steam together`（粒子粘连） | `Fries snap at center, triggering micro-crumbs to scatter radially outward` |
| 时间尺度 | `Fast zoom in slow motion water splash`（画面撕裂） | `In ultra slow-motion, smooth linear push-in as water droplets splash naturally` |

---

关联：本文是 [机位与运镜](/tools/gemini-camera-movement) 与 [运镜翻车词](/tools/gemini-camera-failsafe) 的进阶篇——前两篇解决「单层运镜怎么写 / 避坑」，本篇解决「相机、主体、物理三层运动在同一条 Prompt 里如何解耦」。
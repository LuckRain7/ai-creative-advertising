# Gemini 失败诊断与去廉价感

::: info 来源
- 来源：Gemini Web（Google Gemini）现场问答
- 时间：2026-08-15
- 说明：本文为用户向 Gemini Web 提问拿到的回答，仅做排版整理，文字未做改写。内容由 Gemini 生成，未经 Google 官方文档逐一核实；涉及模型随机性、Seed 等行为请以实际测得的版本为准。
:::

> 本组三个提问：
> 1. 同一句 prompt 每次生成差异很大，怎么判断是 prompt 的问题还是模型随机性？要改哪几处来收敛？
> 2. 成片「廉价感」通常由哪几个因素造成（运镜太飘、打光平、材质假）？分别怎么在 prompt 里救？
> 3. 一条 prompt 生成不满意时，有没有推荐的「诊断顺序」——先查时长、还是先查运镜、还是先查材质？迭代时每次只动一处吗？

## 一、判断：是 Prompt 问题还是模型随机性

做一次「对照组测试」：保持 Prompt 绝对不变，连续生成 3–5 次。

- **是模型随机性**：主体和核心构图基本一致（同一只碗、同一种色调、同样的微距视角），只有细节微抖（黄油融化的流动轨迹不同、酱汁沾染的斑点形状改变、光斑位置偏移）。—— Prompt 已发挥控制力，靠挑选满意版本（Cherry-picking）或固定 Seed 解决。
- **是 Prompt 问题**：每次生成的主体风格、画面结构或画质大相径庭（一次是二次元插画、一次是实拍；一次是俯拍全景、一次是微距特写；薯条的形状、包装袋风格完全不统一）。—— Prompt 缺乏排他性约束或关键锚点词，概率分布区间过大，模型在「猜」你的意图。

**判定法则**：核心主体形态（薯条规格、包装形态）、镜头轨迹（推/摇）、关键动作发生质变 → Prompt 描述层级太高、缺约束锚点；只变气泡、烟雾、撒料轨迹、光线微调 → 正常随机探索，无需大改。

## 二、让生成收敛的 4 处修改

要把 Prompt 从「意境描述」改成「电影镜头指令 + 物理约束」，重点改这四处：

**1. 明确镜头语言与摄影参数**（锁定视角与构图）

- 不佳：`a close-up photo of french fries`（太宽泛）
- 收敛：`Extreme macro 85mm lens, shallow depth of field, 45-degree side angle`（限定了镜头、景深与角度）

**2. 精细化材质与动态描述**（锁定食欲感）

- 不佳：`delicious honey butter fries, looks tasty`
- 收敛：`Golden crispy french fries, glistening honey glaze, fine white butter powder dusting, steam gently rising in slow motion`

**3. 规范光影与色调**（不同口味不同基调，避免随机匹配背景光）

- 蜂蜜黄油味：`Warm studio lighting, golden hour rim light, high-key warm yellow tone`
- 番茄味：`Vibrant cinematic lighting, rich crimson red background, bold high-contrast highlights`

**4. 固定词库结构**（模板化）

```
[主体细节] + [环境/背景] + [摄影镜头/光影] + [动态/渲染质感]
```

**实践范例（蜂蜜黄油薯条特写）**

```text
Extreme close-up shot of crispy golden-brown french fries. Fine melted butter coating and light powder specks on the surface. A slow-motion drizzle of translucent amber honey falling onto the fries. Studio macro photography, 105mm lens, soft backlight highlighting the honey translucency, warm yellow color palette. 4k resolution, commercial advertising style.
```

**进阶收敛技巧**：先出「高精度单帧图」再走图生视频（见 [首帧与首尾帧锁定](/tools/gemini-first-last-frame)）；Negative Prompt 写 `blurry, distorted shape, cartoon, illustration, low resolution, extra noise`；能固定 Seed 就固定 Seed。

## 三、廉价感四因素与救法

| 成因 | 廉价根源 | Prompt 修复关键词 |
| --- | --- | --- |
| 运镜太飘 | 镜头像「无重力幽灵」乱窜、加速度异常 | `Dolly in`、`Camera Crane`、`Cinematography`、`100mm macro`、`120fps slow motion` |
| 打光平 | 漫反射过强，无主光/辅光/轮廓光分层 | `Chiaroscuro`、`Volumetric rim light`、`Backlit`、`Golden hour fill light` |
| 材质假 | 微观细节丢失，调味粉变贴图、油脂缺乏折射率 | `Granular texture`、`Glistening oil droplets`、`Crystalline texture`、`Subsurface scattering` |
| 色彩失真 | 粉末/酱汁缺重力，颜色过饱和 | `Realistic physics gravity`、`Cinematic color grading`、`Volumetric dust` |

**万能避坑公式**：

```
[主体与微观材质] + [动态物理与动作] + [专业运镜与帧率] + [灯光与明暗] + [色彩与画质风格]
```

综合范例（蜂蜜黄油薯条）：

```text
Extreme macro shot of golden-brown honey butter french fries, ultra-detailed rough potato texture dusted with fine granular seasoning powder and glistening sugar crystals. A drizzle of liquid honey falls in slow motion (120fps). Smooth motorized dolly-in camera movement. Low-key studio lighting with warm golden rim light and cinematic depth of field. Commercial food styling, dark elegant background.
```

## 四、诊断顺序 + 迭代控制变量法

底层逻辑：**先看物理画面是否崩溃，再看镜头是否自然，最后调精细质感**。

```
画面崩坏度（时长/形变） → 镜头语言（运镜/焦点） → 食品质感（光影/材质） → 品牌氛围（色调/排版）
```

**第一步：查时长与稳定性（最优先）**——时长超过 10 秒极易中间帧「熔化」「异形」；先把单次生成压到 3~5 秒，动作幅度别太复杂。

**第二步：查运镜与视角**——是否用了 `Macro lens`、`Phantom Flex 4K`、`120fps` 等专业术语，运镜命令是否单一明确。

**第三步：查材质与光影（决定食欲感）**——补 `glistening honey glaze`、`melted butter drizzle`、`subtle steam rising`、`backlight / side lighting`。

**第四步：查颜色与品牌氛围**——补 `Warm lighting`、`Cinematic commercial color grading`。

**迭代时每次只动一处吗？** 原则是「先大改一次，后单点微调」：

- **初创阶段（0→1）**：允许同时改 2–3 个核心要素（摄影器材 + 动作 + 光影）。
- **精修阶段（1→80 分）**：严格遵守控制变量法，一次只改一个变量——AI 视频随机性高，同时改两个就没法归因。单点微调顺序：先锁主体 → 只调光 → 只调颗粒细节 → 只调镜头速度。

| 诊断步骤 | 排查重点 | 常用提示词 |
| --- | --- | --- |
| 稳定度 | 截短时长至 3 秒，简化动作 | `3-second clip, simple motion` |
| 运镜 | 专业镜头语言与帧率 | `Macro lens, 120fps slow-motion, Slow push-in` |
| 质感 | 高光、液体、表面颗粒 | `Glistening glaze, powder texture, steaming` |
| 光影 | 背光与广告调色 | `Studio backlighting, Warm color grading` |

---

关联：本文是「片子出问题从哪查起」的诊断入口——单品项写法分别见 [控制视频时长](/tools/gemini-video-duration)（第一步）、[机位与运镜](/tools/gemini-camera-movement)（第二步）、[食品材质不漂移](/tools/gemini-food-material)（第三步）、[排除项写法](/tools/gemini-negative-tokens)（负面约束）。
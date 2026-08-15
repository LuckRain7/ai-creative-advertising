# Gemini 排除项怎么写才生效

::: info 来源
- 来源：Gemini Web（Google Gemini）现场问答
- 时间：2026-08-15
- 说明：本文为用户向 Gemini Web 提问拿到的回答，仅做排版整理，文字未做改写。内容由 Gemini 生成，未经官方文档逐一核实；文中「识别率」为 Gemini 给出的经验估算值，非官方测试数据，仅供相对参考。
:::

> 提问：`no text / no logo / no camera cut / no morphing` 这类排除项，Gemini 和 Veo 实际认哪些？有没有一个「最有效排除项清单 + 推荐书写顺序」？

## 核心逻辑

在 Gemini 和 Veo 的指令遵循体系中，单纯写「否定句」（如 `no X`）有时会触发模型的「粉象效应」——提到什么词，模型注意力就聚焦到该概念的潜在空间。

要让排除项绝对生效，Veo 最认同的方式是：「**正向封闭式定义（Positive Anchoring）+ 行业级负向过滤词（Standardized Negative Tokens）**」结合。

## 一、Gemini & Veo 实际识别效果分级

| 排除项类型 | 原始否定写法 | Veo 实际识别率 | 最佳生效写法（正反双重锁定） |
| --- | --- | --- | --- |
| 禁止分镜切换 | `no camera cut` | 95% | `single continuous uncut shot`, `continuous single take`, `no jump cuts`, `uninterrupted camera movement` |
| 禁止文字 / Logo | `no text, no logo` | 90% | `clean unbranded surface`, `blank solid packaging`, `pristine studio plate`, `no typography`, `no text`, `no watermarks`, `no labels` |
| 禁止形变融化 | `no morphing` | 85% | `rigid solid geometry`, `structural stability preserved`, `no warping`, `no melting`, `no rubbery deformation` |
| 禁止假材质 / 塑料感 | `not fake, no CGI` | 80% | `authentic organic texture`, `natural microscopic flaws`, `no synthetic plastic look`, `no artificial gloss` |
| 泛化无效词（避坑） | `no bad quality, no blur, not ugly` | < 10%（几乎无效） | 直接用具体参数替代（如 `8k macro photography`, `sharp crisp focus`, `cinematic rim lighting`） |

## 二、最有效排除项清单（按功能模块分类）

**1. 镜头连贯与防切镜（Temporal & Shot Stability）**

```text
single continuous uncut shot, single take, locked temporal consistency, uninterrupted sequence, no camera cuts, no scene transitions, no jump cuts
```

**2. 画面纯净度与去文字（Text & UI Cleanliness）**

```text
clean unbranded plate, blank surface, minimal pristine background, no text, no logos, no typography, no watermarks, no subtitles, no UI overlays
```

**3. 几何结构与防扭曲（Anti-Deformation / Anti-Morphing）**

```text
rigid solid body, preserved physical geometry, stable object contour, no warping, no melting, no morphing, no rubbery deformation, no flickering artifacts
```

**4. 食品与材质真实感（Organic Material Authenticity）**

```text
authentic natural food texture, subtle micro-imperfections, controlled specular highlights, no synthetic plastic look, no artificial CGI gloss, no wax-like surface
```

## 三、黄金书写顺序与 Prompt 结构模版

为了保证权重清晰，不要把排除项散落在句子中间。推荐将 Prompt 划分为 4 层递进结构，把排除项统一收拢在最后：

```text
[第1层：正向主体与微观材质] → [第2层：机位运镜与参考系] → [第3层：主体动作与物理交互] → [第4层：标准排除与防崩约束块]
```

实战 Prompt 范例：

```text
[Subject & Material] A single crispy golden French fry with delicate micro-blistered crust, subtle salt grains, and authentic food texture.

[Camera & Continuity] Single continuous uncut shot, a smooth slow dolly-in pushing forward along the z-axis.

[Action & Physics] The French fry falls vertically under realistic gravity onto a dark slate surface with a gentle bounce.

[Negative Constraint Block] High-speed macro cinematography, 8k crisp focus, clean unbranded background, rigid solid geometry, preserved structural shape, no text, no logos, no watermarks, no camera cuts, no morphing, no warping, no synthetic plastic look.
```

## 四、核心规则与避坑要点

1. **禁止在否定句中使用生僻或模糊词**：不要写 `no strange floating things`，直接写 `no debris, clean dark background`。
2. **包装文字优先用「Blank / Unbranded」做正向定义**：对包装做去字处理时，在主体描述阶段就加上 `blank unbranded packaging`，比单纯在结尾写 `no logo` 的成功率高出一倍以上。
3. **单镜头杜绝分段描述**：若 Prompt 中出现 `first camera does A, then camera does B`，极易被模型误判为分镜头剪辑；始终使用 `during the entire continuous shot` 维持单镜头状态。

---

关联：本文 `no text / no logo` 与 [包装文字不崩](/tools/gemini-packaging-logo) 的「净版生成」是同一思路的正反两面（那篇用正向定义，本篇给标准写法）；`no camera cut` 与 [机位与运镜](/tools/gemini-camera-movement) 的单镜连续性配合使用。
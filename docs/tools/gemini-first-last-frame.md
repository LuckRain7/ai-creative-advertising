# Gemini 首帧与首尾帧锁定

::: info 来源
- 来源：Gemini Web（Google Gemini）现场问答
- 时间：2026-08-15
- 说明：本文为用户向 Gemini Web 提问拿到的回答，仅做排版整理，文字未做改写。内容由 Gemini 生成，未经 Google 官方文档逐一核实；涉及 Veo 的 Image-to-Video 能力与「废片率」为经验估算，请以官方文档为准。
:::

> 提问：
> 1. 首帧锁定 vs 只给文字 prompt，稳定性和一致性到底差多少，值不值得每次都出首帧？
> 2. 首尾帧（First & Last Frame）具体怎么用？给了起始图和落点图后，中间运动容易乱抖、发糊，怎么约束？

## 核心结论

首帧锁定（Image-to-Video, I2V）与纯文字（Text-to-Video, T2V）存在**代际差异**。在食品广告里，**极度值得每次都出首帧——它是商业级交片的「生命线」**。

| 维度 | 纯文字（T2V） | 首帧锁定（I2V） |
| --- | --- | --- |
| 主体一致性 | 低/不可控，每次薯条长短粗细截面都变 | 极高，直接继承参考图材质/造型/配色 |
| 材质质感 | 凭空随机，蜂蜜黏稠度、番茄挂壁感易飘忽 | 精准锁定高光/透光/纹理，AI 只做动力学 |
| 构图运镜 | 模糊理解，视角摆盘随机 | 完全掌控，首帧定死黄金构图与焦点 |
| 废片率 | 抽卡 70%–90% | 可降到 20%–30% |

**推荐标准工业流程**：文生图（定风格/首帧）→ PS 修瑕疵 → 图生视频（只写运动/运镜/物理现象）。

## 首尾帧的三种典型用法

首尾帧的作用是**设定起点与终点，让 AI 填充中间的物理运动**。

1. **材质形态变幻**：首帧 = 整颗黄油切块/新鲜番茄，尾帧 = 金黄酥脆裹粉薯条；中间由 AI 补全「融化裹住 / 爆破成粉」。
2. **运镜空间推拉**：首帧 = 微距颗粒特写，尾帧 = 包装袋中景 + Logo；AI 补全「镜头拉远，颗粒随镜头后退」。
3. **动态交互**：首帧 = 手指捏起薯条，尾帧 = 蘸酱拉丝；AI 补全自然蘸酱动作。

## 为什么「乱抖、发糊」

- **首尾帧逻辑不一致**：两张图的光影、角度、主体比例、背景结构差异过大，AI 找不到物理轨迹，图像撕裂/重合。
- **缺运动提示**：没告诉 AI 中间发生什么，它随机扩散导致画质下降。
- **相机运镜剧烈**：主体在动、镜头也在转，运动矢量叠加过载。

## 5 个约束技巧

1. **控制首尾帧连贯性（图像侧）**：首尾帧的主体比例、镜头角度、光源方向、色调必须一致。建议用 PS / 图生图在「同一底图空间」内加工首尾帧。
2. **单轴 / 单向运动动词（文本侧）**：一次只给 1–2 个方向明确的矢量运动，别写 `spinning, bursting, shaking, zoom in and flying` 组合。

```text
Smooth high-speed macro shot. Liquid honey drips down vertically onto the golden potato fries. The camera slowly pushes in. Cinema-grade lighting, crisp focus, hyper-realistic, 8k, no jitter.
```

3. **加专业广告锚点词**：`Slow motion`、`High-speed camera 1000fps`、`Locked camera`、`Smooth linear push-in`；防糊词 `Crisp details`、`Sharp focus throughout`、`No motion blur`。
4. **分步渲染**：动作太复杂（切片爆破→变汁→包裹）别一镜到底，拆成 2–3 段 2 秒短镜头，硬切/Wipe 衔接，远比单段稳定。
5. **后期兜底**：Topaz Video AI 补帧到 60/120fps 降抖动；把变糊的 1–2 帧导出贴清晰纹理再合成。

---

关联：用哪张图做首帧最稳见 [参考图去风格](/tools/gemini-reference-image)；跨 8 镜头的一致性工作流见 [跨镜头一致性](/tools/gemini-shot-consistency)；防抖的运镜词见 [运镜翻车词](/tools/gemini-camera-failsafe)。
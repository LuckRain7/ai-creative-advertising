# Gemini 从 brief 到成片的标准工作流模板

::: info 来源
- 来源：Gemini Web（Google Gemini）现场问答
- 时间：2026-08-15
- 说明：本文为用户向 Gemini Web 提问拿到的回答，仅做排版整理，文字未做改写。内容由 Gemini 生成，未经 Google 官方文档逐一核实；涉及 Veo 的能力与参数请以官方文档为准。
:::

> 提问：有没有一个从 brief 到成片的标准 prompt 工作流，能把「时长锁定 + 中英文分层 + 资产一致性 + 三层运镜解耦 + 排除项 + 中性参考图」串成一套固定模板？

## 7 层标准模板

```
[①时长与节奏锁定] + [②核心主体与资产一致性] + [③场景与光影氛围] + [④三层运镜解耦] + [⑤中英文分层描述] + [⑥排除项] + [⑦中性参考图 / 首尾帧指引]
```

| 层 | 作用 | 要点 |
| --- | --- | --- |
| ① 时长锁定 | 秒数 / 帧率 / 动作时间轴 | `X 秒，60fps 慢动作`，时间轴闭合到总时长 |
| ② 资产一致性 | 锁主体 / 包装 / 配色不漂移 | 形态锚点 + 包装锚点 + 色值（如 #F4C430） |
| ③ 场景与光影 | 定基调 | 光型 + 色调 + 氛围 |
| ④ 三层运镜解耦 | 相机 / 主体 / 物理分开写 | 主体动作、镜头轨道、光学参数三块隔离 |
| ⑤ 中英文分层 | 意境与术语分工 | 中文意境 + 英文摄影术语 |
| ⑥ 排除项 | 负向兜底 | `plastic look, deformed hands, blurry dust...` |
| ⑦ 中性参考图 | 首帧 / 控制帧 | 白底/暗底干净图，锁构图不锁风格 |

## 实战 Prompt 模板（蜂蜜滴落薯条特写）

```text
【①时长】4 秒，120fps 慢动作；0-2s 蜂蜜滴落，2-4s 镜头环绕
【②资产】Premium crinkle-cut golden fries, fine honey-butter powder（#F4C430 + #FFBF00）
【③光影】Soft cinematic rim light, warm volumetric backlight, golden bokeh
【④三层运镜】Layer1 蜂蜜缓缓覆盖薯条；Layer2 45° 微距推入后 30° 环绕；Layer3 浅景深、清晰焦点、探针微距镜头
【⑤中英文】High-end commercial TVC, 8K, photorealistic, appetite appeal
【⑥排除】plastic texture, cartoonish, deformed fry shape, camera shake, text, watermark, fingers
【⑦参考图】白底/暗底的高清中性微距图做控制帧
```

## 4 步 SOP

1. **Gemini 拆 storyboard**：输入产品特点，产出 3–5 个 3–4 秒镜头脚本（Hero / Action / Flavor explosion / Packaging reveal）。
2. **套 7 层模板**：把镜头脚本填入模板，锁定每个镜头的 Duration、Camera Path、Asset Anchors。
3. **准备 1–2 张中性资产图**：① 单个薯条/薯片极致微距图（无背景/暗底）；② 包装袋 3D 正面渲染图。
4. **Veo 生成 + 控帧**：挂中性图做 Image Prompt / First Frame 生成 4 秒片段，导入剪辑拼接 + 音效成片。

---

关联：本模板是各单点的汇总——①时长见 [控制视频时长](/tools/gemini-video-duration)、②资产见 [跨镜头一致性](/tools/gemini-shot-consistency)、④三层见 [三层运动解耦](/tools/gemini-motion-layers)、⑤语言见 [中文还是英文](/tools/gemini-prompt-language)、⑥见 [排除项写法](/tools/gemini-negative-tokens)、⑦见 [参考图去风格](/tools/gemini-reference-image)。全链路上游见 [从 brief 到成片 SOP](/method/workflow-sop)。
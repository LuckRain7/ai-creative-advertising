# 05 · 声音与剪辑

> 正式画面粗剪通过后执行。视频模型自带音频只作动作参考，不直接进入最终混音。

## 声音策略

本片的 A / B / C 必须听起来是同一种产品在三种动作下产生的声音，而不是三个无关音效。素材可以来自产品 Foley 实录，也可以使用 AI 音效模型逐条定制；无论来源如何，都要独立生成或录制，并保留来源记录。

若最终没有使用真实产品实录，对外文案只称「声音选择题」或「声纹挑战」，不表述为「原声实录」「真实盲测」。

## 声音资产表

| 声音 | 性格 | 生成 / 录制要求 | 后期处理 |
|---|---|---|---|
| A · 单根折断 | 短、亮、干、起音清楚 | 单次脆裂，尾音短，无包装和环境声 | 轻微削低频，保留碎裂高频 |
| B · 双根折断 | 更厚、两层、带 20–60ms 微时差 | 独立制作，不复制 A 简单叠两层 | 控制峰值，保留两次不同起音 |
| C · 咬下 | 中低频更完整，有食用感但不黏 | 一次自然咬断，不含吞咽、呼吸和湿润口腔声 | 删除令人不适的口腔细节 |
| 调味颗粒 | 轻、细、干燥 | 少量粉末落在纸面的高频细节 | 只用于 remix，低于主咔嚓 |
| 包装接触 | 轻微、克制 | 杯体落台或包装层移动 | 只用于落版，不制造塑料空响 |
| 提示音 | 清楚但不游戏化 | 0.1 秒以内的短音 | 仅片头与答案揭晓使用 |

## AI 音效 Prompt 基准

### A · 单根折断

```text
A single short, bright and dry snap of one rigid crispy potato baton breaking cleanly at the center,
close-mic food Foley, crisp high-frequency detail, tiny natural crumb tail, no reverb, no music,
no packaging sound, no voice, no wet mouth sound, duration under 0.6 seconds.
```

### B · 双根折断

```text
Two rigid crispy potato batons snapping almost together with a natural 20-60 millisecond offset,
slightly fuller and denser than a single snap, two distinct brittle layers, close-mic dry food Foley,
short natural crumb tail, no reverb, no music, no impact boom, no packaging, duration under 0.7 seconds.
```

### C · 咬下

```text
One natural bite through a dry crispy potato baton, a clean brittle crack with a slightly fuller
low-mid body than a hand snap, appetizing close-mic food Foley, minimal mouth detail, no chewing loop,
no saliva, no swallowing, no breathing, no voice, no music, duration under 0.8 seconds.
```

同一工具内尽量固定模型、采样设置和空间感。A、B、C 各生成 6–8 条，选片时优先判断是否像同一种食品材质，再判断哪一条更“爽”。

## 声画同步

- 每条声音峰值与画面第一次真实断裂或咬断的帧对齐，不能提前制造假冲击。
- 视频模型生成的随机声不参与最终比较，导入剪辑时先全部静音。
- A 与 B 保持相同基础响度，不能仅靠把 B 放大来制造差异。
- C 可以更厚，但不能出现吞咽、黏声或夸张低频冲击。
- 三条最终声音生成波形后，再制作镜头 05 和 07；不能先画装饰波形再反推声音。

## 剪辑节拍

| 时间 | 剪辑职责 | 声音处理 |
|---|---|---|
| 00:00.0–00:00.9 | 建立问题与口味身份 | 0.1 秒提示音后留白 |
| 00:00.9–00:04.2 | A / B / C 连续测试 | 不加音乐和转场音；声音峰值逐帧对齐动作 |
| 00:04.2–00:05.4 | 留出作答 | 三声尾音以极低音量快速回放，不强调某一选项 |
| 00:05.4–00:08.1 | A–B–C–断面 remix | 音乐第一次进入；第四拍最重，主咔嚓高于伴奏 |
| 00:08.1–00:09.0 | 答案停顿 | 先静音 0.1 秒，再用轻提示音揭晓 |
| 00:09.0–00:10.3 | 断面证据 | 单独回放最干净的一声咔嚓 |
| 00:10.3–00:12.0 | 包装落版与循环 | 音乐在产品名出现时收住；11.6 秒最后一声接回片头 |

## remix 结构

```text
第 1 拍：A 单根折断，短、亮
第 2 拍：B 双根折断，更厚、带自然微时差
第 3 拍：C 咬下，中低频更完整
第 4 拍：最干净的主咔嚓 + 镜头 08 断面，最重收束
```

调味颗粒可作为低音量高频装饰，不增加与画面无关的爆炸、金属、玻璃或电影冲击音。

## 字幕与版式

| 元素 | 规则 |
|---|---|
| 主问题 | 两行以内，第一帧完整出现，不逐字动画 |
| A / B / C | 固定在左上安全区；位置、字号、颜色一致 |
| 波形 | 由最终声音生成；线条清楚，不做装饰性假波形 |
| 答案 | 只写「答案：都是。」不补解释小字 |
| 核心文案 | 「味道听不见，脆可以。」保持一行或自然分成两行 |
| 落版 | 品牌名、产品名、口味名由后期排版，不让模型写字 |

主色为奶油白、自然浅金与少量黑色。A / B / C 可以使用三种低饱和辅助色，但产品本身不跟随选项变色。

## 输出版本

| 版本 | 时长 | 用途 | 调整原则 |
|---|---:|---|---|
| 主版 | 12 秒 | 原生发布与完整互动 | 保留问题、三声、作答、反转、证据和落版 |
| 投放版 | 6 秒 | 信息流快速测试 | 保留问题、A / B / C 快切、答案与简化落版 |
| A / B / C 单条 | 每条 1–2 秒 | 评论回复和二次剪辑 | 保留对应动作和独立声音，不加音乐 |
| remix 素材 | 6–8 秒 | 后续声纹内容 | 只用已建立的声音资产重排，不伪装新测试 |

## 本步审核

- [ ] 视频模型原始声音已全部静音或移出正式轨道
- [ ] A、B、C 听起来属于同一种食品材质，但动作层次可区分
- [ ] 每条声音均有来源、Prompt / 原始文件与采用版本记录
- [ ] 三条波形由最终采用的声音生成
- [ ] 前 4.2 秒完全无背景音乐和无关转场音
- [ ] 落版尾声可以自然循环回第一帧

---

**上一步** ← [04 · 分镜](./04-storyboard) ｜ **下一步** → [06 · 发布与验收](./06-release-review)

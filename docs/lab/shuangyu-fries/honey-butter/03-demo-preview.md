# 03 · Demo 预览

> 内部方向预览 ｜ 12 秒 / 9:16 ｜ 只验证创意、调性、动作可行性与节奏

## Demo 的职责

关键帧通过后，先用最小生成量拼出一条 12 秒预览。此时不追求逐帧产品保真，也不为某个失败动作重写全部镜头；只回答四个问题：

1. 第一秒的声音选择题是否能看懂？
2. A / B / C 三个动作是否有足够差异？
3. 5.4–8.1 秒的 remix 是否形成节奏高潮？
4. 「答案：都是」和产品落版是否拥挤？

::: warning Demo 不是成片底料
Demo 可保留节奏、镜头顺序和通过的单段动作，但不能默认直接进入最终交付。平台水印、产品漂移、假包装、伪文字和不稳定手部必须在正式分镜阶段重做。
:::

## 最小预览包

只生成四段动态，其余镜头使用已审核关键帧和后期版式完成。

| 素材 | 输入 | 动作窗口 | 用途 |
|---|---|---:|---|
| DV02 · 单根折断 | KF02A + KF02B | 1.0s | A 声纹 |
| DV03 · 双根折断 | KF03A + KF03B | 1.1s | B 声纹 |
| DV04 · 咬下 | KF04A + KF04B | 1.2s | C 声纹 |
| DV08 · 断面轻转 | KF08 | 1.3s | remix 第四拍与答案证据 |

镜头 01、05、07、09 在 Demo 中使用静帧数字推近和后期排版，不额外消耗视频生成次数。镜头 06 直接由 DV02、DV03、DV04、DV08 各截 0.25–0.4 秒拼成。

## Demo 视频 Prompt

### DV02 · 单根折断

```text
Editorial action window: exactly 1.0 second.
Use the approved KF02A and KF02B as strict first and last frames. One continuous uncut vertical 9:16
macro shot. Lock the camera, focus, exposure, product scale, clamp positions and background.

The two edge clamps apply one short opposing force. The single rigid potato crisp snaps exactly once at
the center and reaches the supplied end frame. Preserve the exact P0 length, thickness, pale-golden color,
dry creamy-yellow seasoning and M0 fracture material. Only 5-8 small food crumbs fall under gravity.

No camera movement, no bending, no repeated fracture, no healing, no extra product, no dust cloud,
no text, no packaging, no logo, no watermark and no generated audio required.
```

### DV03 · 双根折断

```text
Editorial action window: exactly 1.1 seconds.
Use KF03A and KF03B as strict first and last frames. One continuous uncut vertical 9:16 shot. Keep both
P0 crisps separate, parallel and identical in thickness. The upper crisp snaps first; the lower crisp
follows 20-60 milliseconds later. Both actions happen once and settle into the supplied end frame.

Preserve exact product identity and M0 fracture material. Crumbs remain sparse and obey gravity.
Locked camera and stable exposure. Exclude product fusion, synchronized explosion, third product,
bending, morphing, camera move, text, packaging, logo, watermark and generated audio.
```

### DV04 · 咬下

```text
Editorial action window: exactly 1.2 seconds.
Use KF04A and KF04B as strict first and last frames. Keep the same lower-face identity, side angle,
lighting and P0 product scale. The product pauses near the lips for 0.2 seconds, then one small front
section is bitten off in a single natural action. The remaining product keeps its exact rigid geometry
and reaches the supplied end frame.

No full face reveal, no exaggerated expression, no chewing loop, no saliva, no extra teeth, no warped
mouth, no product penetration, no packaging text, no logo, no watermark and no generated audio.
```

### DV08 · 断面轻转

```text
Editorial action window: exactly 1.3 seconds.
Animate the approved KF08 only. One rigid broken P0 crisp makes a subtle three-quarter turn of less than
12 degrees while the locked macro camera holds. Focus moves once from the dry outer surface to the M0-
matched fracture face. Preserve all geometry, pore scale, crumbs, color and seasoning without change.

No orbit, no push-in, no second product, no new fracture, no oversized pores, no glow, no liquid,
no text, no packaging, no logo, no watermark and no generated audio.
```

## 12 秒预览拼法

| 时间 | 使用素材 | Demo 处理 |
|---|---|---|
| 00:00.0–00:00.9 | KF01 | 数字推近 2%；后期加问题 |
| 00:00.9–00:01.9 | DV02 | 完整使用；后期加 A |
| 00:01.9–00:03.0 | DV03 | 完整使用；后期加 B |
| 00:03.0–00:04.2 | DV04 | 完整使用；后期加 C |
| 00:04.2–00:05.4 | KF05 | 静帧；后期加三条临时波形和「你选哪一声？」 |
| 00:05.4–00:08.1 | 四段动态 | 按 A–B–C–断面剪成四拍 |
| 00:08.1–00:09.0 | KF05 | 三条波形合一；后期加「答案：都是。」 |
| 00:09.0–00:10.3 | DV08 | 使用完整动作；后期加核心文案 |
| 00:10.3–00:12.0 | KF09 | 合成确认包装；数字推近不超过 2% |

Demo 阶段使用临时 Foley 和临时音乐，只用于判断节拍。正式声音资产见 [05 · 声音与剪辑](./05-sound-edit)。

## 预览反馈记录

审核只记录方向问题，不在此阶段逐帧修图。

| 审核项 | 结论 | 需要带入正式分镜的修改 |
|---|---|---|
| 第一秒钩子 | 待审核 |  |
| A / B / C 可区分性 | 待审核 |  |
| remix 节奏 | 待审核 |  |
| 答案反转 | 待审核 |  |
| 包装落版 | 待审核 |  |
| 整体食欲感 | 待审核 |  |

## Demo 通过门禁

- [ ] 0.9 秒内能理解问题，且不需要额外玩法说明
- [ ] A / B / C 三个动作一眼可区分
- [ ] 四个动态素材均从已审核关键帧生成
- [ ] 产品形态虽允许轻微漂移，但没有变成膨化棒、饼干或威化
- [ ] remix 有清楚的四拍递进，答案出现时不过度拥挤
- [ ] 假包装、模型文字、水印和 Demo 音频不会进入正式交付
- [ ] 已记录需要带入正式分镜的具体修改

---

**上一步** ← [02 · 关键帧](./02-keyframes) ｜ **下一步** → [04 · 分镜](./04-storyboard)

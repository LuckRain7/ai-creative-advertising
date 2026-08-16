# 02 · 关键帧

> 蜂蜜黄油味独立创意片 ｜ P0 产品母版 + 10 张正式关键帧 ｜ 9:16 竖屏

## 直接结论

本片先用真实产品图校准一张无包装 P0，再从 P0 生成各镜独立关键帧。关键帧只锁定产品身份、构图、光线和动作起止状态；动作、镜头运动与声音留到 Demo 和正式图生视频阶段。

```text
真实产品参考 → P0 身份母版 → 每镜关键帧 → Demo 动态测试 → 正式图生视频
```

旧版 `images/黄油蜂蜜味/关键帧1.png` 及其衍生图只作失败对照，不再进入任何生成输入。产品身份校准沿用 [04i · v2.1 的 P0 规则](../04i-honey-butter-v2-optimization#p0-外观身份母版)。

## 输入资产

| 资产 | 路径 | 用途 | 使用边界 |
|---|---|---|---|
| 真实产品参考 | `images/薯条脆实拍.jpg` | 锁定长宽比、锥度、自然弯曲、缺口和表面粗糙度 | 不继承番茄红挂粉、白底和堆叠构图 |
| 蜂蜜黄油包装图 | `images/薯条脆-蜂蜜黄油味.jpg` | 判断奶油黄、浅金和少量琥珀配色 | 不作为无包装镜头输入，不让模型复制文字和插画 |
| 包装工程文件 | `images/薯条脆蜂蜜黄油味包装工程文件.jpg` | 后期包装合成 | 只在落版后期使用 |
| P0 产品母版 | 通过审核后补路径 | 全片唯一外观身份参考 | 不继承 P0 背景、机位和景深 |
| M0 断面参考 | 待补 | 锁定断口组织 | 只参考断面，不继承手部和拍摄背景 |

## 输出清单与顺序

所有图片保持同一批次的原生 `9:16` 尺寸；同一动态的首尾帧必须完全同尺寸。

| 顺序 | 文件名 | 作用 | 输入 |
|---:|---|---|---|
| 1 | `p0-蜂蜜黄油产品母版.jpeg` | 全片产品身份 | 真实产品参考 |
| 2 | `kf01-出题背景.jpeg` | 镜头 01 开场底图 | P0；包装后期合成 |
| 3 | `kf02a-单根折断首帧.jpeg` | A 声纹首帧 | P0 |
| 4 | `kf02b-单根折断尾帧.jpeg` | A 声纹尾帧 | KF02A + P0 + M0 |
| 5 | `kf03a-双根折断首帧.jpeg` | B 声纹首帧 | P0 |
| 6 | `kf03b-双根折断尾帧.jpeg` | B 声纹尾帧 | KF03A + P0 + M0 |
| 7 | `kf04a-咬下首帧.jpeg` | C 声纹首帧 | P0 |
| 8 | `kf04b-咬下尾帧.jpeg` | C 声纹尾帧 | KF04A + P0 + M0 |
| 9 | `kf05-作答界面底图.jpeg` | 波形和选项后期底图 | P0 |
| 10 | `kf08-断面证据.jpeg` | 答案后的产品证据 | P0 + M0 |
| 11 | `kf09-产品落版背景.jpeg` | 终稿包装后期合成底图 | P0 |

镜头 06 的 remix 直接复用 KF02B、KF03B、KF04B 和 KF08，不另造产品身份。镜头 07 复用 KF05 底图，只在后期改变波形和答案。

## P0 固定身份块

以下内容写入所有含产品的关键帧 Prompt。修改构图时，不删除或弱化。

```text
上传的 P0 是唯一产品外观母版。严格保持同一产品族的厚切但细长比例、
轻微自然弯曲、细微粗细变化、略微收尖的端部、不均匀缺角与稳定刚性轮廓。
底色为自然浅金色，外覆一层薄而干爽的奶油黄色调味粉，只有极少琥珀色细颗粒；
表面哑光、细密粗粝，具有轻微起伏和细小裂隙。不得继承 P0 的背景、机位或景深。

Preserve the uploaded P0 as the sole external product-identity master. Keep the exact slender
thick-cut proportion, subtle natural taper and bends, chipped irregular edges, pale-golden potato
base, thin dry creamy-yellow seasoning and compact matte food texture in every frame.

Exclude: oversized rectangular bar, extruded puff stick, corn puff, wafer, biscuit, bread stick,
capsule shape, cylinder, rounded ends, uniform foam cells, wet glaze, syrup, oil film, plastic gloss,
red seasoning, text, packaging, logo, watermark and UI overlay.
```

## 关键帧构图指令

### KF01 · 出题背景

奶油白自然影棚，画面下半部预留蜂蜜黄油味杯装包装的合成位置，杯口上方露出三根与 P0 完全一致的产品；上半部保持安静留白，供后期加入问题。正面略俯视，等效 50mm，柔和侧光，背景不过曝。生成图中不出现包装、文字、波形或 UI。

### KF02A / KF02B · 单根折断

- **首帧**：一根 P0 横向占画面宽度约 72%，两侧只出现窄小夹具或最少量指尖，中央完整、笔直、无遮挡。
- **尾帧**：保持机位、比例、夹持位置和光线不变；产品只在中央断开一次，两段沿水平轴分开 10–15mm，断面匹配 M0，碎屑控制在 5–8 枚。
- **排除**：手掌、额外手指、弯曲软化、重复断裂、巨大孔洞、碎屑爆炸。

### KF03A / KF03B · 双根折断

- **首帧**：两根 P0 上下平行，间距约一根产品宽度，四个端点均在画面内，断点错开少量距离。
- **尾帧**：两根分别断开，断裂位置与碎屑不完全对称，保留自然的先后层次；产品数量、长度和粗细守恒。
- **排除**：两根融合、复制同一断口、同步爆炸、第三根产品、产品交叉遮挡。

### KF04A / KF04B · 咬下

- **首帧**：只生成同一人物的下半张脸侧面，一根 P0 停在唇前约 8mm；人物肤色自然，背景包装仅保留模糊色块，不生成可读文字。
- **尾帧**：保持人物、机位和产品比例，产品前端被咬掉一小段，断口匹配 M0；嘴部自然闭合，不出现夸张表情或口腔细节。
- **排除**：完整人脸、额外牙齿、嘴部变形、产品穿模、咀嚼黏液、伪包装文字。

### KF05 · 作答界面底图

中央只保留一根垂直静止的 P0，奶油白背景，左右亮度均衡，上方和两侧留出版式空间。A / B / C、问题和真实波形全部后期添加，关键帧不生成任何图形或文字。

### KF08 · 断面证据

```text
Use the approved P0 as the external product-identity reference and M0 as the strict fracture-material
reference. One pale-golden honey-butter potato crisp has just snapped. One irregular fracture face points
toward the camera and occupies about one third of the vertical frame. Preserve the exact P0 thickness,
dry matte surface and sparse creamy-yellow seasoning. Match M0's irregular compact dehydrated-potato
cells, mixed pore sizes, thin broken walls and locally dense tissue. The product makes only a subtle
three-quarter turn; camera and light remain locked.

100mm macro lens, shallow depth of field, soft side backlight, restrained cream-white and pale-golden
palette, vertical 9:16, photorealistic commercial food image, no text, no logo, no packaging.

Exclude bread fibers, sponge, regular honeycomb, wafer layers, extruded foam, oversized holes, wet crumbs,
oil gloss, honey liquid, butter liquid, explosion, glass, metal, glowing particles, cartoon and watermark.
```

### KF09 · 产品落版背景

暖奶油白台面，右侧黄金分割位置预留终稿杯装包装，前景三根 P0 形成稳定放射构图，左侧保留品牌和核心文案区。只生成产品、台面、接触阴影和少量自然碎屑；包装、logo、中文与口味名全部后期合成。

## 选片与失败回退

1. 先审 P0；产品身份不过，不生成任何镜头关键帧。
2. 再审 KF02A / B；单根断裂不过，不扩展到双根和咬下。
3. 手部或嘴部连续三轮不稳定时，Demo 降级为夹具断裂和产品碰撞，不用模型硬做复杂人体。
4. M0 缺失时，KF02B、KF03B、KF04B 和 KF08 不做断面大特写，只用侧面远景表达动作。
5. 包装永远后期合成；任何模型生成的中文、logo 或杯身插画直接废弃。

## 本步审核

- [ ] P0 与真实产品并排时可认作同一产品族
- [ ] P0 和 10 张关键帧的画幅、尺寸、色温与产品身份统一
- [ ] 首尾帧的机位、比例、光向和背景完全一致
- [ ] A / B / C 的动作差异清楚，但产品没有换形
- [ ] 断面有 M0 依据，不是面包、海绵或膨化泡孔
- [ ] 关键帧不生成文字、波形、logo 和终稿包装

---

**上一步** ← [01 · 创意](./01-creative) ｜ **下一步** → [03 · Demo 预览](./03-demo-preview)

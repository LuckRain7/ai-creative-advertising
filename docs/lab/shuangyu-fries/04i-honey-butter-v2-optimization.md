# 04i · 蜂蜜黄油味无包装镜头 v2 优化

> 阶段 4 · v2.1 Gemini / Flow 执行修订 ｜ 2026-08-16 ｜ 20 秒成片中的镜头 01–05
>
> 第一轮素材：`images/黄油蜂蜜味/` ｜ 镜头 06 继续使用真实终稿包装后期合成
>
> 本次修订依据 2026-08-15 的 Gemini 现场问答沉淀；具体模型能力与时长档位仍以当前入口实测为准。

## 结论先行

第一轮的问题不只是“产品像膨化棒”。旧 v2 里还有三处会继续放大错误：

1. **参考图自相矛盾**：一边要求废弃错误的关键帧 1，一边又把它作为 P0 输入。参考图会同时带入形态与材质，文字很难完全抵消；错误帧必须退出整条生成链。
2. **产品尺寸来自推测**：旧稿写死“8–9 厘米、9×10 毫米、垂直平切长方体”，现有物料没有这些测量值，且真实产品照片可见轻微锥度、弯曲和自然缺口。v2.1 改为按实拍的长宽比与自然变化锁定，不再虚构尺寸。
3. **把 P0 当成所有视频的同一首帧**：这会锁死景别与角度。正确做法是 P0 只负责产品身份，每个镜头先生成自己的静态关键帧，再以该镜关键帧做 I2V。
4. **静帧和运动语义混在一起**：关键帧 Prompt 中出现“缓慢接近、提亮、落下”等视频动作，模型会随机选择动作瞬间。v2.1 将静态状态与视频动作彻底分开。
5. **断面仍由模型臆造**：没有真实断面参考时，越强调“多孔”越容易变成面包、海绵或大孔膨化体。新增 M0 真实断面门禁；M0 未到位前不做正对断面的超微距交付镜头。

v2.1 保留原来的明暗节奏与五个镜头职责：

```text
甜香靠近 → 奶油柔光 → 调味落附 → 一次脆裂 → 三次咔嚓连击
```

但正式生成统一改为：

```text
真实产品参考 → P0 身份母版 → 每镜独立关键帧 → 单镜 I2V → 后期声音与包装
```

## 第一轮素材结论

| 素材 | 可保留 | 硬问题 | v2.1 处理 |
|---|---|---|---|
| 关键帧 1 | 黑底、中央构图、暖金轮廓 | 产品是圆头膨化棒；多条光带穿过主体；平台标记 | **只作失败对照，不再上传** |
| 关键帧 2 | 奶油白色温 | 高光过曝；光幕实体化；产品身份错误 | **只保留色温判断** |
| 关键帧 3 | 调味微距方向 | 多出产品和展台；继续重复光带 | **按真实重力落粉重做** |
| 关键帧 4 | 断裂动作可读 | 手部过大；断面像面包；光带穿手；碎屑过密 | **用 P0 + M0 重做首尾帧** |
| 关键帧 5 | 三次节拍概念 | 三个动作挤在一帧；比例漂移；碎屑圆环像装饰 | **拆成 05A / 05B / 05C** |
| 关键帧 6 | 包装位与文案区 | 前景产品错误；粉末同心圆不真实 | **只作落版构图草图** |
| v1-1.mp4 | 微距节奏 | 规则鼓泡、湿润油亮，像膨化物 | **不采用画面** |
| v1-2.mp4 | 浅色影棚方向 | 断裂瞬间缺失；主体像饼干棒 | **不采用画面** |

::: tip 可继承的只有节奏
保留“黑金开场 → 奶油白展开 → 黑底脆裂 → 明亮高潮”。产品、光带、断面和碎屑必须重新建立。
:::

## 参考资产与门禁

### 参考优先级

| 权重 | 资产 | 只参考什么 | 禁止继承什么 |
|---:|---|---|---|
| 1 | `images/薯条脆实拍.jpg` | 真实产品的长宽比、轻微锥度与弯曲、自然缺口、表面粗糙度 | 番茄味的橙红挂粉、白色拍摄背景、堆叠构图 |
| 2 | 通过验收的 P0 | v2.1 的单根产品身份、蜂蜜黄油色与干爽材质 | P0 的中性背景和三分之四构图 |
| 3 | M0 真实断面照片 | 断口密度、孔隙尺度、断裂边缘、碎屑形状 | 拍摄环境、手部、原始色偏 |
| 4 | `images/薯条脆-蜂蜜黄油味.jpg` | 蜂蜜黄油包装的奶油黄、浅金、少量琥珀配色 | 包装文字、logo、杯体、包装插画中的几何 |

`images/黄油蜂蜜味/关键帧1.png` 及其衍生图权重为 **0**，不得再进入图生图、图生视频或多图参考。

::: warning 包装图不要直接喂给无包装镜头
蜂蜜黄油包装图含大量中文、logo、杯体和插画产品。它只供人工判断色相，不作为无包装镜头的模型输入；否则容易带入伪文字、杯形和插画材质。
:::

### P0 · 外观身份母版

P0 只锁定外部身份，不承担任何创意构图。用同一条 Prompt 连续生成 4 张，选择 1 张；不要为四张分别改词。

```text
Use case: ads-marketing
Asset type: honey-butter potato crisp identity master, still image only

[Reference priority]
Use the real product photograph as the strict source for the product's photographed length-to-width
ratio, natural taper, subtle bends, non-uniform cut faces, chipped edges and dry surface roughness.
Ignore the red tomato seasoning, the white background and the pile arrangement.

[Subject and material]
One isolated honey-butter-flavored potato crisp selected from the real product geometry. It is a
thick-cut but slender irregular potato baton, not an oversized rectangular block. Show four readable
cut faces, slightly uneven squared or naturally chipped ends, occasional subtle bending and authentic
non-uniform edges. Preserve the photographed thickness and do not make the baton wider.

The potato base is natural pale-to-warm golden yellow. A very thin, dry, matte layer of fine creamy-
yellow seasoning sits in the small surface fissures, with only a few tiny amber specks. The surface is
finely rough and compact with natural food imperfections, never wet, glazed or uniformly aerated.

[Composition]
Place the single crisp diagonally on a neutral dark-gray matte stone plate in a three-quarter view,
showing the top face, one side face and one natural end. No floating and no debris.

[Camera and lighting]
85mm macro lens, f/5.6, camera slightly above the plate. Soft diffused key light from front-left and a
narrow rim light from rear-right. Neutral white balance, controlled highlights, 16:9, photorealistic
high-end commercial food photography. No motion and no creative effect.

[Constraints]
Rigid natural potato-stick geometry, stable compact contour, authentic microscopic imperfections,
clean unbranded studio plate. Exclude oversized rectangular bar, extruded puffed snack, corn puff,
rice cracker, wafer, biscuit stick, bread stick, cheese stick, capsule or cylinder, fully rounded ends,
giant circular pores, uniform foam cells, laminated layers, wet glaze, syrup, oil film, plastic gloss,
red seasoning, packaging, typography, logo, watermark and UI overlay.
```

**P0 硬验收：**

- 与 `images/薯条脆实拍.jpg` 并排时，长宽比、粗细、自然锥度、轻微弯曲和边缘不规则程度可认作同一产品。
- 不能出现第一轮的圆头胶囊体，也不能过度纠偏成完全笔直、四边机械切齐的工业方棒。
- 产品为自然浅金色，表面只有薄层奶油黄粉与极少琥珀点，不是奶白色、橙红色或深褐色。
- 纹理细小、干爽、紧实；没有均匀鼓泡壳、连续油亮高光或糖浆涂层。
- P0 无包装、文字、logo、平台标记和创意特效。

### M0 · 真实断面材质锚点

M0 不生成。用真实产品折断后拍摄：

- 同一根产品先拍完整状态，再从中央折断；保留左右两段和碎屑。
- 100mm 左右微距，f/5.6–f/8，固定机位，深灰背景，侧逆光加柔和正面补光。
- 至少一张断口正对镜头，一张三分之四角度同时看见外表面和断口。
- 不磨平、不补光到过曝、不洒额外粉末；保留真实孔隙大小和自然断边。

::: danger M0 未到位时的降级方案
可以做 01、02、03、05A、05B；04 与 05C 只能使用较远的侧面断裂，不让断口占画面高度超过 12%，也不写“蜂窝、多孔、孔壁透光”等词。没有实物证据时，不让模型自由设计产品内部。
:::

## 固定执行块

所有关键帧 Prompt 都把 P0 作为**身份参考**而不是构图参考。每个镜头生成自己的关键帧；不得直接把同一张 P0 当成不同镜头的首帧。

所有视频 Prompt 都遵守：

1. 第一行写成片动作窗口；若当前入口固定输出更长时长，动作完成后保持尾帧，后期裁切。
2. 使用结构化英文，按 `[Camera] / [Subject action] / [Physics] / [Audio guide] / [Constraints]` 分层。
3. 一镜只保留一个主动作；主体运动时相机默认锁定，相机运动时主体默认不动。
4. 先写正向封闭定义：`single continuous uncut shot`、`rigid geometry`、`clean unbranded plate`；排除项集中放末尾。
5. Gemini / Veo 同步声音只作节奏参考；最终颗粒、碰撞和咔嚓全部换成实录 Foley。

## 生成顺序

| 顺序 | 任务 | 输入 | 通过后才能做什么 |
|---:|---|---|---|
| 1 | P0 外观身份母版 | 真实产品照片 | 所有无包装关键帧 |
| 2 | M0 真实断面 | 实物拍摄 | 04、05C 的断面特写 |
| 3 | K04A / K04B | K04A 只用 P0；K04B 再加入 M0 | 锁定全片最重要的脆裂证据 |
| 4 | K01 / K02 / K03 | P0 | 锁定黑金、奶油白与落粉三种独立视觉语言 |
| 5 | K05A/B/C 首尾帧 | P0 + K04 + M0 | 生成三段连击 |
| 6 | 01–05 单镜 I2V | 各镜自己的关键帧 | 剪辑、调色、声音与包装衔接 |

先跑 P0 和 04。核心产品与断面不过，不继续批量生成其余镜头。

## 01 · 甜香靠近

**广告任务**：用一处暖琥珀反射建立甜香，不出现蜂蜜液体，也不让光穿过产品。

### K01 · 静态首帧

```text
Use case: ads-marketing
Asset type: opening keyframe, still image only, no packaging
Input image: approved P0 as product-identity reference only

A pure black food studio. One exact P0 potato crisp is suspended horizontally at the center, occupying
48% of the frame width. Preserve its irregular slender potato-baton geometry, pale golden color, dry
matte creamy-yellow seasoning and natural edges. Behind it, separated by about one product width, place
one large, soft, out-of-focus amber elliptical reflection near the far-left background. It has no hard
edge and no physical volume. The foreground and the product surface remain clean.

100mm macro lens, f/4, fixed side view. A narrow warm rim light defines only the upper edge; restrained
front fill preserves the real surface texture. Deep black negative space, controlled highlights,
photorealistic high-end food advertising, 16:9.

Clean unbranded plate, one product only, rigid stable geometry. Exclude ribbons, streams, honey liquid,
smoke, glowing particles, starbursts, debris, wet surface, extra products, packaging, text, logo,
watermark and UI overlay.
```

### V01 · 图生视频

**输入**：K01 首帧。**成片动作窗口**：2.8 秒。

```text
成片动作窗口：2.8 秒。若当前入口输出更长视频，2.8 秒后保持最终画面稳定不动。
Editorial action window: 2.8 seconds. If the interface outputs a longer clip, complete the action
within 2.8 seconds and hold the final state for the remainder.

[Format and reference]
Use K01 as the strict first frame and preserve the exact P0 product identity. One continuous uncut
16:9 photorealistic food-commercial shot.

[Camera]
Locked-off 100mm macro camera. No pan, orbit, zoom, focus pull or shake.

[Subject action]
The crisp remains perfectly still. The single soft amber background reflection moves horizontally
from left to right by 18% of the frame width, always remaining behind the product and out of focus.

[Physics and light]
The reflection is only a defocused studio-light reflection in the background. It has no hard edge,
volume, trail or contact with the food. Exposure and product color remain stable.

[Audio guide]
One very light, dry air movement from left to right, ending cleanly. No liquid sound and no voice-over.

[Constraints]
Single continuous take, rigid product geometry, stable exposure and one amber reflection only.
Exclude product rotation, floating drift, ribbons, liquid, smoke, glow trails, particles, starbursts,
camera movement, cuts, text, packaging, logo, watermark and UI overlay.
```

**验收**：产品逐帧不变形；琥珀光始终在后景，只发生一次水平位移；画面没有第二个主动运动。

## 02 · 黄油柔光

**广告任务**：用面积光表达圆润奶香，不生成实体黄油、布幕或黄色流体。

### K02 · 静态首帧

```text
Use case: ads-marketing
Asset type: butter-soft-light keyframe, still image only, no packaging
Input image: approved P0 as product-identity reference only

A bright seamless cream-white food studio. One exact P0 potato crisp rests diagonally on a matte cream
surface, rising about 15 degrees from lower-left to upper-right. Preserve the photographed slender
thickness, natural taper, subtle bend, dry pale-golden surface and fine creamy-yellow seasoning. A soft
natural contact shadow anchors the product to the surface.

Behind the product is one broad, borderless, out-of-focus pale butter-yellow area light at low intensity.
It reads only as illuminated background, not as fabric, membrane, ribbon, sauce or a physical object.

85mm lens, f/4, fixed three-quarter view. Soft frontal key light and restrained rear rim light. Keep
texture visible in both top and side faces; no clipped whites. Photorealistic commercial food image,
16:9, controlled warm-neutral color.

Clean unbranded studio plate and rigid product geometry. Exclude floating food, cloth, translucent film,
ribbon, butter block, yellow sauce, liquid, glow trail, starburst, wet sheen, packaging, text, logo,
watermark and UI overlay.
```

### V02 · 图生视频

**输入**：K02 首帧。**成片动作窗口**：3.0 秒。

```text
成片动作窗口：3.0 秒。若当前入口输出更长视频，3.0 秒后保持最终画面稳定不动。
Editorial action window: 3.0 seconds. If the interface outputs a longer clip, complete the action
within 3.0 seconds and hold the final state for the remainder.

[Format and reference]
Use K02 as the strict first frame. One continuous uncut 16:9 photorealistic food-commercial shot.

[Camera]
Locked-off 85mm camera with fixed focus and fixed composition.

[Subject action]
The product remains completely motionless on the surface.

[Light action]
The single borderless butter-yellow background area light increases smoothly from 35% to 55% perceived
brightness over 2.6 seconds, then holds. It changes only the background ambience; product highlights do
not clip and the seasoning color does not shift.

[Audio guide]
A restrained warm low-frequency swell with a dry, soft room tone. No pour, sizzle or voice-over.

[Constraints]
Stable rigid food geometry, stable contact shadow, single continuous take and one light change only.
Exclude product movement, camera movement, fabric, membrane, ribbon, sauce, liquid, butter block,
overexposure, wet gloss, cuts, text, packaging, logo, watermark and UI overlay.
```

**验收**：只允许背景亮度变化；产品、阴影、焦点和机位不漂移；最亮时表面纹理仍完整。

## 03 · 风味落脆

**广告任务**：用真实干粉落附表达口味，颗粒数量可数、方向受重力，不做螺旋、圆环或爆炸。

### K03 · 静态首帧

```text
Use case: ads-marketing
Asset type: seasoning macro start frame, still image only, no packaging
Input image: approved P0 as product-identity reference only

Extreme macro of one longitudinal edge of the exact P0 crisp, running from lower-left to upper-right.
Show both the top and side faces with their different natural micro-textures. The surface is dry, matte
and clean at the start, with only the seasoning already present in P0; no particles are airborne yet.

100mm macro lens, f/5.6, locked camera, warm off-white background. Side-back light defines the edge
without creating an oil sheen. Keep the contact zone and longitudinal edge in crisp focus, 16:9,
photorealistic high-speed food-advertising setup.

One product only, compact natural potato texture and clean background. Exclude a second product,
airborne debris, glowing dust, jewelry-like crystals, glass, smoke, liquid, oil drops, wet gloss,
packaging, text, logo, watermark and UI overlay.
```

### V03 · 图生视频

**输入**：K03 首帧。**成片动作窗口**：3.0 秒。

```text
成片动作窗口：3.0 秒。若当前入口输出更长视频，3.0 秒后保持最终画面稳定不动。
Editorial action window: 3.0 seconds. If the interface outputs a longer clip, complete the action
within 3.0 seconds and hold the final state for the remainder.

[Format and reference]
Use K03 as the strict first frame and preserve the exact P0 surface. One continuous uncut 16:9 macro
food-commercial shot. Global time scale: restrained high-speed slow motion throughout.

[Camera]
Locked-off 100mm macro camera. No slide, push-in, orbit or rack focus.

[Subject action]
The crisp remains completely still. From 0.25 to 2.25 seconds, 20-30 visible food-seasoning particles
fall vertically from above. Most are extremely fine creamy-yellow powder; only a few are irregular pale-
amber grains about 0.3-0.8 mm. By 2.60 seconds all particles have settled and the frame holds.

[Physics]
Gravity is strictly downward. Each visible grain makes at most one tiny bounce, then rests inside a real
surface fissure. Particle density remains restrained; no dust cloud forms.

[Audio guide]
Very light dry seasoning grains landing on baking paper, close-miked and below the later crunch level.

[Constraints]
Single continuous take, rigid product geometry and stable exposure. Exclude upward or spiral motion,
orbiting grains, glowing dust, powder cloud, ring, explosion, smoke, liquid, oil sheen, extra products,
camera movement, cuts, text, packaging, logo, watermark and UI overlay.
```

**验收**：颗粒垂直下落、最多弹一次；产品本身完全静止；末帧不能变成厚粉包裹。

## 04 · 一折即脆

**广告任务**：用一次真实、守恒、可核对的脆裂证明口感。采用两枚窄小食品测试夹具，避免手部抢画面；M0 到位后再做断面特写。

### K04A · 首帧

```text
Use case: ads-marketing
Asset type: crisp-snap start frame, still image only, no packaging
Input image: approved P0 as the strict external product-identity reference

A deep charcoal-black food studio. One exact P0 crisp is horizontal at the center. Two narrow matte
stainless-steel food-testing clamps enter only from the far-left and far-right edges, each gripping the
outermost 8 mm of the product. The clamp tips together occupy no more than 12% of the frame width; no
hands or mechanical arms are visible. The crisp is intact, straight and unstressed, with its center
fully unobstructed.

100mm macro lens, f/5.6, locked side view. Strong side-back rim light defines the natural edges; soft
frontal fill preserves the pale-golden potato color. The center is the sharpest focal plane. No crumbs,
no effects and no pre-existing fracture, 16:9, photorealistic commercial food photography.

Exactly one product and two clamp tips, rigid geometry, clean unbranded plate. Exclude hands, extra
clamps, bending, crack, debris, glow, wet surface, packaging, text, logo, watermark and UI overlay.
```

### K04B · 尾帧

```text
Use case: ads-marketing
Asset type: crisp-snap end frame, still image only, no packaging
Input images: approved K04A as strict composition reference; approved P0 for external identity;
approved M0 as strict cross-section material reference

Keep K04A's frame, camera, focus, lighting, product scale and two clamp positions exactly unchanged.
Change only the product's center state: it has just snapped once into two pieces. The halves move
horizontally apart by 12-15 mm without bending or twisting. Their combined visible length and thickness
equal the intact product. Both irregular fracture faces turn only slightly toward the camera and match
M0's real density, pore scale and broken edge exactly.

Show only 8-12 small pale-golden food crumbs, 0.5-4 mm, moving mainly along the fracture direction and
slightly forward. 100mm macro lens, f/5.6, high-speed freeze frame, deep charcoal background.

Exactly two product halves and the original two clamp tips. Exclude third fragments, repeated break,
healing, rubbery bending, enlarged holes, bread fibers, sponge, uniform foam cells, crumb explosion,
dust cloud, glass, metal debris, glow, smoke, text, packaging, logo, watermark and UI overlay.
```

### V04 · 首尾帧视频

**输入**：K04A + K04B。**成片动作窗口**：3.4 秒。

```text
成片动作窗口：3.4 秒。若当前入口输出更长视频，3.4 秒后保持上传尾帧稳定不动。
Editorial action window: 3.4 seconds. If the interface outputs a longer clip, complete the action
within 3.4 seconds and hold the supplied end frame for the remainder.

[Format and references]
Use K04A and K04B as strict first and last frames. Use P0 as the exact external identity and M0 as the
exact fracture material. One continuous uncut 16:9 shot. Global time scale: restrained high-speed food
cinematography throughout; do not switch time rates.

[Camera]
Locked-off 100mm macro camera, fixed side view, fixed focus and fixed lighting.

[Subject action]
From 0.00 to 0.90 seconds, both clamp tips move outward by only 2-3 mm and apply steady opposing force.
From 0.90 to 1.20 seconds, one local center crack appears and the crisp snaps exactly once. From 1.20 to
2.00 seconds, the two rigid halves move horizontally to the supplied final positions. From 2.00 to 3.40
seconds, both halves and clamps remain still for a clean edit handle.

[Physics]
The single fracture triggers only the 8-12 crumbs shown in K04B. They first follow the fracture force,
then move downward under gravity. Product mass, combined length, thickness, color and seasoning remain
constant. The exposed material matches M0 exactly.

[Audio guide]
Near-silence for 0.15 seconds before one close, dry, dense crisp snap, followed by a short light crumb tail.

[Constraints]
Exactly two halves and two clamp tips, rigid brittle geometry, single fracture and single continuous take.
Exclude bending, stretching, repeated fracture, healing, product growth, extra pieces, large pores, bread,
sponge, foam, explosion, smoke, camera movement, cuts, text, packaging, logo, watermark and UI overlay.
```

**验收**：长度与粗细守恒；只断一次；两段不掉落、不变软；断面必须与 M0 一致，不接受“看起来更酥”的模型自由发挥。

## 05 · 咔嚓连击

05 不再尝试一条视频完成三个动作。三段统一使用奶油白哑光台面、70mm、f/5.6、固定轻微低机位、右后暖金硬光；各自先做首尾帧，再单独生成并后期剪成 4.3 秒。

| 段 | 首帧 | 尾帧 | 成片窗口 | 声音职责 |
|---|---|---|---:|---|
| 05A · 落台 | 一根 P0 距台面 3cm，一端向下 | 一端触台，3–5 枚薄片碎屑弹起 | 1.1s | 第一声轻“咔” |
| 05B · 轻碰 | 两根 P0 相向运动，夹角 25°，尚未接触 | 接触后错开，2–3 枚小碎屑 | 1.2s | 第二声较近“咔” |
| 05C · 脆裂 | 一根 P0 被两枚窄夹具从画面边缘夹住 | 两段分开，断面匹配 M0，8–12 枚碎屑 | 2.0s | 最重“咔嚓” |

所有首尾帧必须同为 `16:9`、同一分辨率。05C 可使用 K04A / K04B 做几何和断面参考，但要重新生成奶油白场景的首尾帧，不能直接让视频模型跨黑白背景插值。

### K05A · 落台首尾帧

**首帧：**

```text
Use case: ads-marketing
Asset type: single-crisp drop start frame, still image only, no packaging
Input image: approved P0 as the strict product-identity reference

A seamless cream-white food studio with a matte cream tabletop. One exact P0 crisp is suspended only
3 cm above the surface in the left action zone, nearly horizontal with its right end angled downward by
8 degrees. Preserve the exact photographed thickness, natural taper, pale-golden color, dry matte
creamy-yellow seasoning and irregular edges. The right side of the frame remains clean.

70mm lens, f/5.6, locked low three-quarter angle, warm hard rim light from rear-right and soft frontal
fill. No contact, no shadow directly under the raised end, no crumbs and no motion blur, 16:9.

One product only, rigid stable geometry and clean unbranded plate. Exclude tabletop contact, debris,
second product, floating dust, ring, text, packaging, logo, watermark and UI overlay.
```

**尾帧：**

```text
Use the approved K05A start frame as the strict composition reference and P0 as the strict product-
identity reference. Keep the same 16:9 frame, 70mm camera, low angle, product scale, lighting and cream
studio. Change only the impact state: the product's right end has just contacted the tabletop, the body
remains intact and rigid, and 3-5 small thin food crumbs are suspended within 2 cm of the contact point.
Add one compact natural contact shadow. No dust cloud, no second bounce and no shape change.

Exclude fracture, bending, extra products, debris ring, glowing particles, text, packaging, logo,
watermark and UI overlay.
```

### K05B · 轻碰首尾帧

**首帧：**

```text
Use case: ads-marketing
Asset type: two-crisp contact start frame, still image only, no packaging
Input image: approved P0 as the strict identity reference for both products

In the same cream-white tabletop studio, two exact P0 crisps approach the frame center along straight,
readable paths at a 25-degree angle. They are still separated by 15 mm and do not overlap. Both preserve
the same photographed thickness, pale-golden dry surface, creamy-yellow seasoning and natural edges.

70mm lens, f/5.6, the same locked low angle and rear-right warm rim light used for K05A. Keep the contact
point at the frame center, both contours fully readable, no crumbs and no motion blur, 16:9.

Exactly two products, rigid separate contours and clean unbranded plate. Exclude contact, fusion,
fracture, third product, floating dust, text, packaging, logo, watermark and UI overlay.
```

**尾帧：**

```text
Use the approved K05B start frame as the strict composition reference. Keep the same 16:9 frame,
camera, focus, product scale, lighting and cream studio. Change only the post-contact state: the same two
intact crisps have touched once at the center and moved 8-12 mm past the contact point along their
original straight paths. Their contours remain separate. Show only 2-3 tiny food crumbs near the contact
point, beginning to fall under gravity. Preserve both products' exact length, thickness and color.

Exclude merged products, fracture, bending, third product, debris ring, sparks, dust cloud, text,
packaging, logo, watermark and UI overlay.
```

### K05C · 前景脆裂首尾帧

**首帧：**

```text
Use case: ads-marketing
Asset type: cream-studio crisp-snap start frame, still image only, no packaging
Input image: approved P0 as the strict external product-identity reference

In the same cream-white tabletop studio, one exact P0 crisp is horizontal in the right foreground.
Two narrow matte stainless-steel food-testing clamp tips enter only from the far-left and far-right
edges and grip the outermost ends. The center is intact, straight, unobstructed and in sharp focus.
The two tips together occupy no more than 12% of the frame width; no hands or arms are visible.

70mm lens, f/5.6, the same locked low angle, rear-right warm hard rim light and soft frontal fill used
for K05A and K05B. No crack, crumbs, effects or motion blur, 16:9.

Exactly one intact product and two clamp tips, rigid geometry and clean unbranded plate. Exclude hands,
extra clamps, pre-existing crack, bending, debris, text, packaging, logo, watermark and UI overlay.
```

**尾帧：**

```text
Use the approved K05C start frame as the strict composition reference, P0 as the strict external
identity reference and M0 as the strict fracture-material reference. Keep the same 16:9 frame, camera,
focus, lighting, clamp positions, product scale and cream studio. Change only the center state: the crisp
has snapped once into two rigid halves, separated horizontally by 12-15 mm. Their combined visible
length and thickness equal the intact product. Both fracture faces match M0 exactly.

Show only 8-12 thin irregular pale-golden food crumbs moving slightly toward the lens and downward.
The nearest single crumb may be softly out of focus; both halves and fracture faces stay sharp.

Exactly two product halves and the original two clamp tips. Exclude third fragments, bending, healing,
large pores, bread fibers, sponge, uniform foam, explosion, debris ring, smoke, glow, text, packaging,
logo, watermark and UI overlay.
```

### V05A · 落台

```text
成片动作窗口：1.1 秒。若当前入口输出更长视频，1.1 秒后保持上传尾帧稳定不动。
Editorial action window: 1.1 seconds. If the interface outputs a longer clip, complete the action
within 1.1 seconds and hold the supplied end frame for the remainder.

[Format and references]
Use the approved 05A start and end frames. One continuous uncut 16:9 shot. Preserve the exact P0 identity.

[Camera]
Locked-off 70mm camera at the supplied low angle.

[Subject action]
One crisp falls vertically by 3 cm. One end contacts the matte cream surface at 0.45 seconds, makes one
small rigid bounce, then settles into the supplied end position by 0.85 seconds.

[Physics]
Real gravity, contact and inertia. The impact releases only 3-5 thin food crumbs; they rise briefly and
fall back. The crisp remains intact and keeps its exact thickness.

[Audio guide]
One light, dry crisp tap on a matte surface. No voice-over.

[Constraints]
One product, one impact, rigid geometry and single take. Exclude second bounce, breakage, bending,
rotation beyond 8 degrees, debris ring, dust cloud, extra products, text, packaging, logo, watermark and UI.
```

### V05B · 轻碰

```text
成片动作窗口：1.2 秒。若当前入口输出更长视频，1.2 秒后保持上传尾帧稳定不动。
Editorial action window: 1.2 seconds. If the interface outputs a longer clip, complete the action
within 1.2 seconds and hold the supplied end frame for the remainder.

[Format and references]
Use the approved 05B start and end frames. One continuous uncut 16:9 shot. Both crisps match P0 exactly.

[Camera]
Locked-off 70mm camera with fixed focus and lighting.

[Subject action]
Two rigid crisps approach along clear straight paths and touch once at a 25-degree angle in the frame
center at 0.50 seconds. They remain intact, separate naturally and reach the supplied end positions by
0.90 seconds.

[Physics]
Real contact and inertia. Only 2-3 tiny food crumbs leave the contact point and fall under gravity.
The two contours never merge and neither product changes length, color or thickness.

[Audio guide]
One slightly closer, sharper dry tap than 05A. No voice-over.

[Constraints]
Exactly two products, one contact and one continuous take. Exclude fusion, fracture, third product,
large rotation, floating, debris ring, sparks, dust cloud, text, packaging, logo, watermark and UI.
```

### V05C · 前景脆裂

```text
成片动作窗口：2.0 秒。若当前入口输出更长视频，2.0 秒后保持上传尾帧稳定不动。
Editorial action window: 2.0 seconds. If the interface outputs a longer clip, complete the action
within 2.0 seconds and hold the supplied end frame for the remainder.

[Format and references]
Use the approved cream-studio 05C first and last frames. Use P0 for exact external identity and M0 for
exact fracture material. One continuous uncut 16:9 high-speed food-commercial shot.

[Camera]
Locked-off 70mm camera at the supplied low angle. No push-in, orbit or focus change.

[Subject action]
The two narrow clamp tips apply one short opposing force. The crisp snaps exactly once at 0.75 seconds.
The two halves move along one horizontal axis to the supplied end positions by 1.20 seconds and hold.

[Physics]
Only 8-12 thin irregular crumbs move slightly toward the lens and downward under gravity. The nearest
single crumb may be softly out of focus; both product halves and fracture faces remain sharp. Combined
length, thickness, color and seasoning remain constant.

[Audio guide]
One close, full-bodied dry crisp snap, heavier than 05A and 05B, with a short natural crumb tail.

[Constraints]
Exactly two halves and two clamp tips, one fracture, rigid brittle geometry and stable exposure.
Exclude hands, extra clamps, bending, healing, repeated fracture, explosion, debris ring, smoke, glow,
camera movement, text, packaging, logo, watermark and UI overlay.
```

### 05 剪辑要求

- 按 `05A 1.1s → 05B 1.2s → 05C 2.0s` 合计 **4.3 秒**；优先在实际碰撞第一帧对齐声音峰值。
- 三段统一白平衡、黑位、产品亮度和调味粉密度；必要时使用同一 LUT 做最终统一。
- 只允许硬切或用飞出画面的真实碎屑做动作匹配，不使用发光圆环、闪白、速度模糊或魔法转场。
- 三次 Foley 必须独立录制，力度由轻到重，不复制同一个样本调音量。

## 镜头 06 衔接

本页不重做包装视频。现有关键帧 6 只作为空间草图，正式落版前：

1. 用 P0 产品替换右下错误膨化棒，或重做无包装静态背景后再合成 P0。
2. 删除台面同心粉末圆环，只保留真实接触阴影与少量自然碎屑。
3. 使用客户确认的蜂蜜黄油味终稿包装实拍、渲染或设计源文件；不让模型重绘中文与 logo。
4. 从 05C 以一枚向右下运动的真实碎屑做动作匹配；落版最后至少 1.6 秒所有图层完全静止。

## 受控迭代方法

不要每次失败都重写整条 Prompt。按以下顺序定位：

| 检查顺序 | 现象 | 处理 |
|---:|---|---|
| 1 | 产品形态每次都错 | 回到 P0 或更换参考图；不改镜头特效 |
| 2 | 同一 Prompt 连跑 3 次，主体与构图大幅变化 | Prompt 缺关键锚点；只补一个最主要约束 |
| 3 | 主体一致但碎屑、光斑位置轻微变化 | 属正常随机性；同词再跑并选片 |
| 4 | 首尾帧之间抖动、发糊 | 检查两帧尺寸、机位、主体比例、灯向和背景是否一致 |
| 5 | 产品稳定但动作失败 | 只改 `[Subject action]` 或 `[Physics]`，不动身份与灯光块 |
| 6 | 画面合格但时长不准 | 保持 Prompt，按动作窗口后期裁切；不要为时长重新采样产品 |

每次迭代只改一个变量，并记录：模型入口、输入图、提示词版本、输出时长、产品保真、动作完成度、是否采用。

## v2.1 交付门禁

- [ ] P0 与真实产品并排可认作同一形态，不再是圆头膨化棒，也不是机械切齐方棒。
- [ ] 错误关键帧 1 及其衍生图没有进入任何正式生成输入。
- [ ] M0 来自真实断面；04B 与 05C 的断口匹配 M0。M0 缺失时已按降级方案缩小断面。
- [ ] 01 只有一处后景琥珀反射；02 只有面积光变化；03 只有垂直落粉；04 只断一次；05 每段只有一个动作。
- [ ] 每个视频使用本镜独立关键帧，不把 P0 直接当作所有镜头的首帧。
- [ ] 相机、主体、物理三层没有互相争夺运动轴；无模型自行切镜、环绕或变焦。
- [ ] 产品逐帧保持干爽、粗细与色泽稳定；无油膜、糖浆、液体、发光颗粒或厚粉层。
- [ ] 碎屑数量可数并遵循惯性与重力；无圆环、烟花、玻璃或金属质感。
- [ ] 字幕、logo、口味名与终稿包装全部后期添加，逐帧无漂移、闪烁和乱码。
- [ ] 正式交付使用授权的无标记导出；不能通过破坏构图的裁切或简单涂抹处理平台标记。
- [ ] 镜头 01–05 成片合计 16.5 秒，镜头 06 落版 3.5 秒，全片精确 20.0 秒。

---

**第一轮提示词** ← [04g · 蜂蜜黄油味图片关键帧](./04g-honey-butter-keyframes) ｜ **导演执行稿** ← [03e · 蜂蜜黄油味独立感官创意片](./03e-honey-butter-sensory-film) ｜ **Gemini 工作流** ← [从 brief 到成片模板](/tools/gemini-master-template)

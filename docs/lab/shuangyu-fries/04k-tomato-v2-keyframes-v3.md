# 02 · 关键帧

> 番茄味独立感官创意片 ｜ 对应 [03 · 分镜](./04j-tomato-v2-optimization) ｜ P0 V3 外观母版 ｜ 10 张关键帧 ｜ 16:9 横屏

## 直接结论

**P0 V3 产品外观母版**已经通过验收。本页从该 P0 重新生成正式关键帧，旧版镜头 02、03、05、06 只能参考构图关系，不能再作为产品身份来源。完整文件路径见下方输入资产表。

::: danger 03B 的额外门禁
P0 V3 只锁定外形、颜色、表面与调味颗粒，不提供断裂组织。生成 03B 之前，必须实拍真实产品断面 M0；没有 M0 时可以先完成其他关键帧，但不能让 Gemini 自由设计断面。
:::

## 中英同步约定

每组提示词都分为两部分：

- **中文审阅版**是内容基准；创意、构图或约束先在中文中修改。
- **English execution prompt** 是实际投喂 Gemini 的版本，必须与中文逐项同步。

英文未同步时不得直接生成。所有字幕、品牌名、logo、包装文字继续留给后期，不写入关键帧。

## 输入资产

| 资产 | 路径 | 用途 | 使用边界 |
|---|---|---|---|
| P0 V3 产品外观母版 | `images/番茄味独立感官创意片/p0-产品模板校准V3.jpeg` | 锁定全部薯条脆外形 | **最高优先级外观参考**；不参考它的石盘构图，也不参考左端内部组织 |
| 真实产品实拍 | `images/薯条脆实拍.jpg` | 辅助验收产品族一致性 | 只在 P0 被模型明显改形时补充上传 |
| M0 真实断面 | `images/番茄味独立感官创意片/m0-真实断面.jpeg` | 锁定 03B 断面 | 必须由真实产品掰断并实拍，不能用 AI 图代替 |
| 包装渲染 | `docs/lab/shuangyu-fries/assets/shu_tiao_cui.jpg` | 锁定杯体、杯口和铝箔结构 | 不参考其中的食品插画、中文、logo 或标签细节 |
| 旧关键帧 | `images/番茄味独立感官创意片/关键帧*.jpeg` | 必要时参考景别和留白 | 不继承产品、断面、手部或模型生成包装 |

## 输出清单与顺序

统一使用横屏，保持同一批次的原生尺寸；首尾帧必须完全同尺寸。若 Gemini 仍输出 `2752×1536`，全组先沿用该尺寸，进入视频前再统一裁切，不单独拉伸某一张。

| 顺序 | 输出文件名 | 输入 | 作用 |
|---:|---|---|---|
| 1 | `kf01a-番茄入场首帧-v3.jpeg` | 无 | 镜头 01 首帧 |
| 2 | `kf01b-番茄遮挡尾帧-v3.jpeg` | KF01A | 镜头 01 尾帧 / 镜头 02 首帧 |
| 3 | `kf02b-调味落附尾帧-v3.jpeg` | P0 V3 + KF01A | 镜头 02 尾帧 |
| 4 | `kf03a-一折即脆首帧-v3.jpeg` | P0 V3 | 镜头 03 首帧 |
| 5 | `kf03b-一折即脆尾帧-v3.jpeg` | KF03A + P0 V3 + M0 | 镜头 03 尾帧 / 镜头 04 余韵底图 |
| 6 | `kf05a-撕膜首帧-v3.jpeg` | P0 V3 + 真实包装正面图 | 撕膜动作首帧 |
| 7 | `kf05b-撕膜结束-v3.jpeg` | KF05A + P0 V3 | 撕膜方向检查 / KF05C 制作参考 |
| 8 | `kf05c-单根取出尾帧-v3.jpeg` | KF05B + P0 V3 | 镜头 05 合并视频尾帧 |
| 9 | `kf06b-产品落版背景尾帧-v3.jpeg` | P0 V3 | 无包装最终落版背景，优先生成 |
| 10 | `kf06a-薯条悬空首帧-v3.jpeg` | KF06B + P0 V3 | 产品下落视频首帧 |

镜头 02 不单独生成首帧，直接复用 KF01B。镜头 04 不单独生成关键帧，直接延长 KF03B。镜头 05 正式视频直接使用 KF05A → KF05C；KF05B 只用于确认撕膜方向并制作 KF05C，不单独生成视频。镜头 06 先通过最终落版 KF06B，再由 KF06B 反推只移动一根产品的 KF06A；视频上传顺序为 KF06A → KF06B。

## P0 V3 固定身份块

以下内容已经写进所有含产品的提示词。后续修改单镜构图时，不要删除或弱化。

**中文审阅版**：

```text
上传的 P0 V3 是唯一产品外观母版。严格保持同一产品族的厚切但细长比例、
轻微自然弯曲、细微粗细变化、略微收尖的端部、不均匀缺角与稳定刚性轮廓。
底色为暖金黄色，外覆一层薄而干爽的橙红色番茄调味粉；表面哑光、细密粗粝，
具有轻微起伏、细小裂隙和真实酥松边缘。不得继承 P0 的石盘、背景、视角或景深。
P0 左端只用于外轮廓参考，不作为断裂组织参考。
```

**English execution block**：

```text
Use the uploaded P0 V3 as the sole external product-identity master. Preserve the same product
family: thick-cut but slender proportions, a subtle natural bend, slight thickness variation,
gently tapered ends, irregular small chips and a stable rigid contour. The base is warm golden
yellow beneath a thin, dry orange-red tomato seasoning dust. The surface is matte and finely rough,
with subtle undulation, tiny fissures and naturally crisp edges. Do not inherit the P0 stone plate,
background, camera angle or depth of field. Use the visible left end only for the external contour,
never as a fracture-material reference.
```

## KF01A · 一颗番茄入场首帧

**输入**：不上传 P0；本帧没有产品。

**用途**：建立番茄口味和黑红影棚基调。

**中文审阅版（内容基准）**：

```text
用途：广告营销
素材类型：真实番茄开场关键帧

[画面]
纯黑高端食品影棚中，只有一颗完整、成熟、自然鲜红的普通圆番茄位于画面左侧。
番茄比例真实，表皮薄而紧实，保留非常轻微的自然凹凸和一两处微小真实瑕疵，
不能像完美塑料球。顶部绿色萼片完整、自然卷曲，颜色新鲜但不过度鲜绿。
表皮只有一条克制柔和的高光，不能湿漉漉；番茄下方有准确的接触阴影。
画面右侧保留约一个半番茄宽度的黑色运动空间，背景没有其他食材。

[相机与灯光]
85mm 镜头，f/4，中近景，轻微低机位，固定相机。
左后方窄幅红色轮廓光，右前方柔和暖白补光，黑红高反差，16:9 横屏，
写实高端商业食品摄影，轻微胶片颗粒，自然曝光。

[约束]
只有一颗普通成熟红番茄。排除切口、番茄汁、番茄酱、水滴、多个番茄、樱桃番茄、
畸形萼片、漂浮、薯条脆、手、包装、文字、logo、字幕、水印和 UI 覆盖。
```

**English execution prompt（与中文版逐项对应）**：

```text
Use case: ads-marketing
Asset type: real tomato opening keyframe

[Composition]
In a pure-black premium food studio, place exactly one whole, ripe, naturally red, regular round
tomato on the left side of the frame. Use realistic proportions and thin, taut skin with very subtle
natural unevenness and one or two tiny authentic imperfections; it must not look like a perfect
plastic sphere. The complete green calyx curls naturally and looks fresh without oversaturation.
Use one restrained soft highlight on the skin, never a wet surface, and an accurate contact shadow.
Reserve about one and a half tomato widths of black movement space on the right. No other food.

[Camera and lighting]
85mm lens, f/4, medium close-up, slightly low angle, locked-off camera. Narrow red rim light from
rear-left and soft warm-white fill from front-right. High-contrast black-and-red palette, 16:9,
photorealistic premium commercial food photography, subtle film grain and natural exposure.

[Constraints]
Exactly one regular ripe red tomato. Exclude cuts, juice, tomato sauce, droplets, extra tomatoes,
cherry tomatoes, malformed calyx, floating, potato crisps, hands, packaging, text, logo, subtitles,
watermark and UI overlay.
```

**验收**：番茄不是圣女果；萼片结构自然；右侧运动空间足够；无产品、文字或包装。

## KF01B · 番茄遮挡尾帧

**输入**：上传已通过的 KF01A，只锁定同一颗番茄的颜色、表皮和萼片身份。

**用途**：镜头 01 尾帧，同时作为镜头 02 的红色实拍首帧。

**中文审阅版（内容基准）**：

```text
基于上传的 KF01A，保持同一颗成熟红番茄的真实颜色、表皮纹理和灯光色温。
生成它滚到镜头前、用真实番茄表皮完全遮挡镜头的严格尾帧。

整个 16:9 画面由近距离真实番茄红色表皮填满，能看见非常轻微的自然皮肤纹理和
柔和明暗渐变，但不能看见番茄外轮廓、黑色背景、绿色萼片或桌面。
画面不是纯色卡，也不是抽象红色渐变；它必须仍然像真实镜头贴近番茄表皮。
曝光与 KF01A 一致，红色自然，不剪开、不流汁、不产生水滴。

排除纯色图、抽象擦镜、番茄切面、果肉、种子、汁液、酱汁、裂口、绿色萼片、
黑边、文字、logo、包装、字幕、水印和 UI 覆盖。
```

**English execution prompt（与中文版逐项对应）**：

```text
Using the uploaded approved KF01A, preserve the exact same ripe tomato's natural color, skin texture
and lighting temperature. Create the strict end frame in which it has rolled directly in front of
the lens and its real tomato skin completely occludes the camera.

Fill the entire 16:9 frame with extremely close real red tomato skin. Show only very subtle organic
skin texture and a soft natural luminance falloff. Do not show the tomato outline, black background,
green calyx or tabletop. This is not a flat color card or an abstract red gradient; it must still
read as a real lens pressed close to tomato skin. Match KF01A exposure and natural red color.
No cut, juice or droplets.

Exclude flat-color graphic, abstract wipe, tomato cross-section, flesh, seeds, juice, sauce, cracks,
green calyx, black border, text, logo, packaging, subtitles, watermark and UI overlay.
```

**验收**：画面 100% 被真实红色表皮覆盖；无黑边和萼片；与 KF01A 红色色温一致。

## KF02B · 番茄调味落附尾帧

**输入**：上传 P0 V3；可同时上传 KF01A，只用于背景中同一颗番茄的身份。

**用途**：镜头 02 尾帧；镜头从 KF01B 的红色遮挡过渡到本帧。

**中文审阅版（内容基准）**：

```text
[参考图]
上传的 P0 V3 是唯一产品外观母版，只继承产品外形、颜色、表面和调味颗粒，
不继承石盘、构图、视角或景深。若同时上传 KF01A，背景中必须是同一颗完整番茄。

[画面]
一根与 P0 V3 完全一致的番茄味薯条脆从画面左下延伸至右上，形成横向微距构图。
产品保持厚切但细长、轻微自然弯曲、细微粗细变化和不均匀酥松边缘。
暖金黄色底色上只有薄而干爽的橙红调味粉，表面哑光、细密粗粝并带细小裂隙。
8–14 颗可辨认的细小橙红色食物调味颗粒位于产品上方、接触点和表面凹处，
表现刚刚落附的瞬间；颗粒密度克制，不形成红色厚层或粉尘云。
画面左后方只有一颗完整番茄的失焦红色轮廓，保持静止，不接触产品。
右侧保留干净字幕安全区。

[相机与灯光]
100mm 微距镜头，f/4，固定机位；焦点覆盖中央产品表面和主要颗粒。
侧逆光勾亮颗粒边缘，背景从暗番茄红过渡到深黑，16:9，写实高速食品摄影定格。

[约束]
严格保持 P0 V3 外观。排除产品变粗、变白、变圆、端面大孔、番茄变成粉末、
切开的番茄、汁液、酱汁、液体飞溅、厚红包浆、向上喷发、发光金粉、火星、烟雾、
油膜、第二根产品、包装、文字、logo、字幕、水印和 UI 覆盖。
```

**English execution prompt（与中文版逐项对应）**：

```text
[References]
Use the uploaded P0 V3 as the sole external product-identity master. Inherit only its product
geometry, color, surface and seasoning; do not inherit its stone plate, composition, angle or depth
of field. If KF01A is also uploaded, use exactly the same whole tomato in the background.

[Composition]
Place one tomato-flavored potato crisp that exactly matches P0 V3, extending diagonally from lower-left
to upper-right in a landscape macro composition. Preserve its thick-cut but slender proportions,
subtle natural bend, slight thickness variation and irregular crisp edges. Keep the warm golden-yellow
base beneath only a thin, dry orange-red seasoning dust, with a matte finely rough surface and tiny
fissures. Show 8-14 individually readable, fine orange-red food-seasoning particles above the product,
at contact points and settled inside surface recesses, capturing the instant after they have fallen.
Keep density restrained; no thick red layer or dust cloud. In the rear-left background, show only the
defocused red silhouette of one complete tomato, motionless and not touching the product. Preserve a
clean subtitle-safe area on the right.

[Camera and lighting]
100mm macro lens, f/4, locked-off camera. Keep the central product surface and main particles in focus.
Use side-backlight to define particle edges, with a dark tomato-red to deep-black background, 16:9,
photorealistic high-speed food-photography freeze frame.

[Constraints]
Preserve P0 V3 exactly. Exclude thicker, whiter or rounder product, giant end pores, tomato transforming
into powder, cut tomato, juice, sauce, liquid splash, thick red coating, upward particle eruption,
glowing gold dust, sparks, smoke, oil film, second product, packaging, text, logo, subtitles, watermark
and UI overlay.
```

**验收**：产品与 P0 V3 同一；颗粒可数且像食品；番茄完整失焦；产品没有被红粉覆盖。

## KF03A · 一折即脆首帧

**输入**：上传 P0 V3。

**用途**：镜头 03 首帧，锁定手部、产品长度和断裂构图。

**中文审阅版（内容基准）**：

```text
[参考图]
上传的 P0 V3 是唯一产品外观母版。只继承产品外形、暖金黄色、橙红调味颗粒、
干爽粗粝表面和自然边缘，不继承石盘、视角或景深。

[画面]
纯黑食品影棚中，一根与 P0 V3 完全一致、尚未断裂的薯条脆水平位于画面中央，
横向占画面宽度约 62%。产品保持刚性、自然轻微弯曲和完整长度，不被拉直或加粗。
左右各一组结构自然的拇指与食指从最左和最右边缘轻轻捏住产品两端，
画面中恰好四枚指尖末端，手掌不进入。四枚指尖总面积不超过画面 22%。
产品中央三分之一完整无遮挡，在几何中心只保留一条自然、发丝级表面裂隙，
不能已经出现断口。中央潜在断裂区是全画面最清晰区域。

[相机与灯光]
100mm 微距镜头，f/5.6，固定正侧视角，产品水平轴与画面水平线平行。
强侧逆光勾亮上下边缘，克制正面补光保留真实肤色和调味颗粒，背景纯黑，16:9。

[约束]
产品完整且只有一根；恰好两组拇指与食指末端。排除完整手掌、额外手指、指甲油、
首饰、产品弯折、已有断口、碎屑、产品变粗或变白、膨化棒、面包棒、文字、包装、
logo、字幕、水印和 UI 覆盖。
```

**English execution prompt（与中文版逐项对应）**：

```text
[Reference]
Use the uploaded P0 V3 as the sole external product-identity master. Inherit only its geometry,
warm golden-yellow color, orange-red seasoning, dry rough surface and natural edges. Do not inherit
the stone plate, camera angle or depth of field.

[Composition]
In a pure-black food studio, place one intact, unbroken potato crisp that exactly matches P0 V3
horizontally across the center, occupying about 62% of frame width. Preserve its rigid contour,
subtle natural bend and complete length; do not straighten or thicken it. One anatomically correct
thumb-and-index fingertip pair gently holds each end from the far left and far right edges. Show
exactly four fingertip ends and no palms. Their combined area is no more than 22% of the frame.
Keep the central third fully visible. At geometric center, retain only one natural hairline surface
fissure, never an existing break. The potential fracture zone is the sharpest area in the frame.

[Camera and lighting]
100mm macro lens, f/5.6, locked-off direct side view. Align the product axis with the horizontal frame.
Strong side-backlight defines the upper and lower edges; restrained frontal fill preserves natural
skin tone and seasoning. Pure-black background, 16:9.

[Constraints]
Exactly one complete product and exactly two thumb-and-index fingertip pairs. Exclude palms, extra
fingers, nail polish, jewelry, bent product, existing break, crumbs, thicker or whiter product,
puffed snack, bread stick, text, packaging, logo, subtitles, watermark and UI overlay.
```

**验收**：产品长度和粗细与 P0 一致；只有四枚指尖；中央无遮挡；产品尚未断裂。

## M0 · 真实断面采集

M0 不是生成图。实际掰断一根产品后，用手机微距或相机拍摄：

- 一张正对断面的近照，另一张略偏 30–45 度，能同时看清外壳和内部组织。
- 使用中性灰或黑色背景，固定白平衡，侧后方小面积硬光勾出真实孔隙。
- 断面占画面至少 35%，清晰、不美颜、不过度锐化，不涂粉、不喷水、不补油。
- 保留真实碎裂边缘；不要为了“更酥”而人为挖孔。
- 选片后命名为 `m0-真实断面.jpeg`，再开始生成 KF03B。

## KF03B · 一折即脆尾帧

**输入**：同时上传已通过的 KF03A、P0 V3 和 M0。

**用途**：镜头 03 尾帧，也是镜头 04 的唯一底图。

**中文审阅版（内容基准）**：

```text
[参考图优先级]
1. KF03A 严格锁定画幅、相机、灯光、手部身份、指尖数量、产品尺度和水平构图。
2. P0 V3 严格锁定两截产品的外表、颜色、粗细、弯曲和调味颗粒。
3. M0 严格锁定两个新鲜断面的真实马铃薯内部组织；不得参考 P0 左端内部质感。

[画面变化]
只把 KF03A 中完整的一根产品改为刚刚从几何中心断成两截的状态。
左侧指尖仍捏住左段，右侧指尖仍捏住右段；两截沿水平方向向外分开约一个产品宽度。
两截长度之和、粗细、自然弯曲、暖金黄色和橙红调味颗粒与 KF03A 完全守恒。
两个参差断面略微朝向镜头，并与 M0 的真实材质完全一致：组织干燥、致密但酥松，
只有细小、不规则孔隙，边缘自然碎裂。断裂点周围只有 8–12 颗大小不同的真实食品碎屑，
少量橙红调味颗粒混在其中；碎屑主要位于断裂点下方和短距离外侧。

[相机与灯光]
保持 KF03A 的 100mm 微距、f/5.6、固定正侧视角、黑色背景和全部灯位。
断面和四枚指尖都在可接受焦平面内，强侧逆光只勾亮真实碎裂边缘。

[约束]
恰好两截产品、原有四枚指尖和一次断裂。排除第三截、长度增加、产品变粗、手指增生、
断口愈合、巨大圆孔、规则蜂窝、均匀泡沫、面包纤维、海绵、奶酪、碎屑爆炸、粉尘云、
玻璃、金属、火星、烟雾、文字、包装、logo、字幕、水印和 UI 覆盖。
```

**English execution prompt（与中文版逐项对应）**：

```text
[Reference priority]
1. Use KF03A as the strict frame, camera, lighting, hand identity, fingertip count, product scale and
   horizontal-composition reference.
2. Use P0 V3 as the strict external appearance, color, thickness, bend and seasoning reference for
   both product halves.
3. Use M0 as the strict real-potato internal-material reference for both fresh fracture faces.
   Never use the visible P0 left end as an internal-material reference.

[Only allowed visual change]
Change only the one intact product in KF03A into the instant after it has fractured once at geometric
center. The left fingertips still hold the left half and the right fingertips still hold the right
half. Separate the halves horizontally by about one product width. Preserve the combined length,
thickness, natural bend, warm golden-yellow color and orange-red seasoning exactly from KF03A.
Angle both irregular fracture faces slightly toward the camera and match M0 exactly: dry, compact but
crisp potato tissue with only fine irregular pores and naturally broken edges. Show only 8-12 real
food crumbs of varied small sizes around the break, with a few orange-red seasoning grains mixed in.
Keep most crumbs below and only a short distance outward from the fracture point.

[Camera and lighting]
Preserve KF03A's 100mm macro lens, f/5.6, locked direct side view, black background and all light
positions. Keep the fracture faces and the four fingertip ends within acceptable focus. Let the strong
side-backlight define only the real broken edges.

[Constraints]
Exactly two product halves, the original four fingertip ends and one fracture. Exclude third fragment,
added length, thicker product, extra fingers, healing, giant circular pores, regular honeycomb,
uniform foam, bread fibers, sponge, cheese, crumb explosion, dust cloud, glass, metal, sparks, smoke,
text, packaging, logo, subtitles, watermark and UI overlay.
```

**验收**：KF03A/B 除断裂状态外没有换镜头；长度守恒；断面与 M0 一致；碎屑不超过 12 颗。

## KF05A · 撕膜首帧

**输入**：上传 P0 V3 和真实包装正面高清图。P0 V3 锁定杯内产品；真实包装图锁定杯体、杯口、铝箔、品牌版式、logo、文字和颜色。

**用途**：05A 撕膜动作首帧。

**中文审阅版（内容基准）**：

```text
[参考图]
P0 V3 是杯内产品的唯一外观母版。真实包装正面图是包装设计的唯一母版，必须准确继承
圆柱杯比例、杯口、铝箔结构、品牌logo、中文文字、产品图案、标签排版和全部品牌颜色。

[画面]
暖奶油色影棚台面上，一只刚性圆柱杯位于画面右侧黄金分割区域。
杯身正面准确还原真实包装图，所有版式随圆柱弧面自然收窄，透视和高光真实稳定。
只有一个清晰的银色卷边杯口和一张圆形铝膜。
同一张铝膜覆盖杯口左前方约三分之二，并与这一个杯口外沿完全重合；
右后方只有一个连续的三角形撕口，铝膜角向右上方掀起约三分之一。
杯口下方不能出现第二道银色圆环、内盖、夹层或切开的杯体。
一组结构自然的右手拇指和食指只露末端，捏住铝箔撕角；没有第二只手或完整手掌。
杯内可见 5–7 根与 P0 V3 同一产品族的薯条脆：外形比例、暖金黄色、干爽粗粝表面和
橙红调味粉一致，但长度、轻微弯曲和缺角有自然小差异，不能像复制粘贴。
产品全部留在杯内，画面左侧保留干净文案区。

[相机与灯光]
85mm 镜头，f/5.6，轻微低机位，固定相机。柔和正面主光加右后方暖金轮廓光，
暖奶油背景，16:9 写实商业食品摄影。

[约束]
真实包装商业摄影。排除包装文字改写、logo变形、乱码、伪造字体、假标签、杯体变形、
杯口扭曲、铝箔复制或脱落、产品飞出、错误产品形态、额外手指、面孔、字幕、水印和 UI。
```

**English execution prompt（与中文版逐项对应）**：

```text
[References]
Use P0 V3 as the sole identity master for all products inside the cup. Use the real package-front
reference as the sole package-design master for cup proportions, rim, foil, brand logo, typography,
graphics, label layout and all brand colors.

[Composition]
On a warm-cream studio tabletop, place one rigid cylindrical cup at the right golden-ratio position.
Reproduce the real package design on the cup front, naturally wrapped around the cylindrical surface,
with realistic stable curvature, perspective and highlights. Keep the complete rolled silver rim.
Show exactly one rolled silver cup rim and exactly one circular foil membrane.
The same membrane covers approximately the front-left two-thirds of the opening, with its outer edge
coincident with the single cup rim. Make one clean continuous triangular tear opening at the rear-right.
Only that rear-right foil corner is lifted about one-third toward the upper-right.
Show one anatomically correct right thumb-and-index fingertip pair holding that corner; no second hand.
Do not create a second silver ring, inner lid, lower rim, cavity insert or cutaway packaging.
Inside the cup, show 5-7 crisps from the same P0 V3 product family. Match its proportions, warm golden
yellow color, dry rough surface and orange-red seasoning, while allowing small natural variations in
length, subtle bend and chipped edges so they never look copy-pasted. Keep all products inside the cup.
Reserve a clean copy area on the left.

[Camera and lighting]
85mm lens, f/5.6, slightly low angle, locked-off camera. Soft frontal key light and warm rim light from
rear-right, warm-cream background, 16:9 photorealistic commercial food photography.

[Constraints]
Real-package commercial photography. Exclude rewritten typography, distorted logo, gibberish,
fake label, warped cup, distorted rim, duplicated or detached foil, flying products,
incorrect product identity, extra fingers, face, subtitles, watermark and UI overlay.
```

**验收**：包装与真实参考一致且文字可读；铝箔只开三分之一；只有一组右手指尖；杯内产品与 P0 同族但不重复克隆。

## KF05B · 撕膜结束净帧

**输入**：上传已通过的 KF05A 和 P0 V3。

**用途**：确认撕膜方向与结束状态，并作为 KF05C 的制作参考；不单独生成视频。

**中文审阅版（内容基准）**：

```text
严格保持 KF05A 的画幅、相机、焦距、杯体位置、杯身透视、暖奶油背景、灯光、
真实包装版式和杯内 P0 V3 产品身份。只允许发生以下变化：

始终只有一个杯口和一张连续铝膜。左前方约三分之二铝膜保持平铺，
右后方三角形撕膜角沿同一条撕裂边向右上方后撤并翻折到约四分之三打开；
禁止出现第二道银色圆环、内盖、夹层或切开的杯体；
撕膜手已经自然离开画面，本帧不出现任何手或手指；
杯内 5–7 根产品保持原位静止，仍全部位于杯内，数量、形态和颜色不变。

杯身继续保持与 KF05A 完全相同的真实包装，包装文字和 logo 不得变化，杯口不变形，左侧文案区保持干净。
排除手、额外产品、产品飞出、铝箔脱落或复制、杯体变形、包装重绘、文字乱码、logo变形、
字幕、水印和 UI 覆盖。
```

**English execution prompt（与中文版逐项对应）**：

```text
Strictly preserve KF05A's frame, camera, focal length, cup position, cup perspective, warm-cream
background, lighting, real package design and P0 V3 product identity. Allow only these changes:

Keep exactly one cup rim and one continuous foil membrane.
The front-left two-thirds of the membrane stays flat and coincident with the rim.
Pull only the rear-right triangular foil corner toward the upper-right until it reaches about three-quarters open.
The membrane remains one sheet attached to the single rim. Do not create a second silver ring,
inner lid, lower rim, cavity insert or cutaway packaging. The peeling hand has naturally exited the frame;
show no hand or fingers in this image. Keep all 5-7 products frozen in their original positions,
completely inside the cup with unchanged count, identity and color.

Keep the real package design exactly identical to KF05A, preserve the rigid rim and keep the left
copy area clean. Exclude hands, extra products, flying products, detached or duplicated foil, warped
cup, package redraw, typography mutation, distorted logo, subtitles, watermark and UI overlay.
```

**验收**：与 KF05A 是同一机位和杯体；铝箔开到四分之三；本帧完全无手，可直接作为取食动作首帧。

## KF05C · 单根取出尾帧

**输入**：上传已通过的 KF05B 和 P0 V3。

**用途**：镜头 05“撕膜并取出一根”合并视频的严格尾帧。

**中文审阅版（内容基准）**：

```text
严格保持 KF05B 的画幅、相机、杯体、铝箔、背景、灯光、真实包装版式和产品数量关系。

一组结构自然的拇指和食指从画面右上边缘进入，只夹住杯内最前方的一根完整产品，
将它垂直提起约两厘米，最终停在杯口正上方。只露两枚指尖末端，不出现完整手掌。
被提起的产品必须与 P0 V3 的厚切但细长比例、轻微弯曲、暖金黄色、薄层橙红调味粉、
干爽粗粝表面和自然缺角完全一致，保持刚性，不弯曲、不拉长。
其余产品只轻微沉降一次，仍留在杯内；铝箔和杯体完全不动。

排除同时提起两根、产品变长或变圆、产品飞出、进食、嘴巴、面孔、第二只手、额外手指、
铝箔运动、杯体变形、包装重绘、文字乱码、logo变形、字幕、水印和 UI 覆盖。
```

**English execution prompt（与中文版逐项对应）**：

```text
Strictly preserve KF05B's frame, camera, cup, foil, background, lighting, real package design and
product count relationship.

One anatomically correct thumb-and-index fingertip pair enters from the upper-right edge, grips exactly
one front product and lifts it vertically by about two centimeters, ending directly above the rim.
Show only two fingertip ends and no palm. The lifted product must exactly match P0 V3's thick-cut but
slender proportions, subtle bend, warm golden-yellow color, thin orange-red seasoning, dry rough
surface and natural chipped edges. Keep it rigid, never bent or elongated. Let the remaining products
settle only once and remain inside. Keep the foil and cup completely motionless.

Exclude lifting two products, elongated or rounder product, flying products, eating, mouth, face,
second hand, extra fingers, foil movement, cup deformation, package redraw, typography mutation,
distorted logo, subtitles,
watermark and UI overlay.
```

**验收**：只提起一根；手部只有两枚指尖；P0 外形稳定；铝箔、杯和剩余产品位置没有漂移。

## KF06B · 产品落版背景尾帧

**输入**：上传 P0 V3，作为前景单根产品的唯一外观母版。不上传包装，真实包装在视频生成后合成。

**用途**：无包装最终产品落版背景，同时作为镜头 06 首尾帧视频的严格尾帧；必须先于 KF06A 生成并通过。

**中文审阅版（内容基准）**：

```text
[参考图]
P0 V3 是前景单根产品的唯一外观母版，只继承产品外形、颜色、表面和调味颗粒，
不继承深灰石盘、原构图、原视角或景深。

[画面]
生成一张 16:9 写实高端商业食品产品落版背景。背景和台面为暖奶油色，带非常轻微的
浅番茄橙色明暗过渡。画面右侧黄金分割区域完整预留一只直立杯装产品的位置，
该区域保持干净空白，不放置杯子、假包装、轮廓、标签或文字。
一根与 P0 V3 完全一致的番茄味薯条脆水平放在左前景，保持厚切但细长比例、
轻微自然弯曲、暖金黄色、薄层橙红调味粉、干爽粗粝表面和自然边缘。
产品下方有紧凑、真实的接触阴影。只添加 6–10 颗细小真实食品碎屑和少量干燥
橙红调味颗粒，全部贴近台面，不能漂浮或形成圆环。
画面左侧 36% 保持干净，用于后期品牌和口味文字。

[相机与灯光]
50mm 镜头，f/5.6，轻微低机位，柔和正面主光和右后方窄幅暖色轮廓光。
高光受控，透视稳定中性，前景产品完整清晰，16:9。

[约束]
干净无品牌影棚净版。排除杯子、包装、轮廓、标签、文字、logo、伪造字体、
第二根产品、番茄、酱汁、液体、烟雾、
发光圆环、漂浮颗粒、新增广告文案、水印和 UI 覆盖。
```

**English execution prompt（与中文版逐项对应）**：

```text
[Reference]
Use P0 V3 as the sole foreground crisp identity master. Inherit only its geometry, color, surface
and seasoning; do not inherit its plate,
composition, camera angle or depth of field.

[Composition]
Create a 16:9 photorealistic premium commercial food packshot background. Use a warm-cream seamless
background and tabletop with a very subtle pale tomato-orange luminance falloff. Reserve the right
golden-ratio area for one upright packaged cup and keep that area completely empty, with no cup,
fake package, outline, label or typography. Place one tomato-flavored potato crisp that exactly
matches P0 V3 horizontally in the left
foreground. Preserve its thick-cut but slender proportions, subtle natural bend, warm golden-yellow
color, thin orange-red seasoning, dry rough surface and natural edges. Add a compact realistic contact
shadow. Include only 6-10 small real food crumbs and a few dry orange-red seasoning grains, all close
to the tabletop, never floating or forming a ring. Keep the left 36% clean for brand and flavor copy.

[Camera and lighting]
50mm lens, f/5.6, slightly low angle, soft frontal key and narrow warm rim light from rear-right.
Controlled highlights, stable neutral perspective, complete sharp foreground product, 16:9.

[Constraints]
Clean unbranded studio plate. Exclude cup, package, outline, label, text, logo, fake typography,
second product, tomato, sauce, liquid, smoke, glowing ring, floating particles, added copy, watermark and UI.
```

**验收**：前景只有一根 P0 产品且比例正常；右侧包装预留区和左侧文字区干净；无杯子、包装、假字或 logo。真实包装在视频通过后合成。

## KF06A · 薯条悬空首帧

**输入**：图 1 上传已通过的 KF06B；图 2 上传 P0 V3。KF06B 锁定全部落版画面，P0 V3 只校验被移动产品的身份。

**用途**：镜头 06 产品下落动作的严格首帧。视频生成时先上传 KF06A，再上传 KF06B。

**中文审阅版（内容基准）**：

```text
这是一项严格的单物体位置编辑任务。以图1 KF06B 作为完整画面的唯一基准，
保持画幅、裁切、相机、右侧空白包装预留区、背景、台面、已有碎屑、调味颗粒、
灯光、曝光、色温和左侧留白完全不变。

只允许修改图1左前景的那一根薯条脆：将同一根产品从台面最终落点垂直向上移动，
使其宽面近乎水平地悬在最终落点正上方约10–12厘米处。产品中心必须正对原来的最终落点，
保持与图1完全相同的长度、厚度、轻微自然弯曲、暖金黄色、薄层橙红调味颗粒、
干爽粗粝表面、自然缺角、尺寸和透视；只允许相对最终角度有不超过8度的小倾斜。

原来产品所在的台面位置恢复为连续、干净的原始台面纹理，移除原接触阴影；
在悬空产品正下方增加一个很浅、边缘柔和、符合10–12厘米离地高度的投影。
画面中始终只有这一根产品，不复制产品，不增加碎屑，不移动任何已有碎屑。

禁止在右侧预留区生成杯子、包装、logo、中文文字、标签或轮廓；禁止改变背景、
构图、镜头、焦点和曝光；禁止增加手、手指、第二根产品、飞散碎屑、运动模糊、文字、
字幕、水印或任何新物体。除前景单根产品的位置和对应阴影外，图1其他内容必须完全一致。
```

**English execution lock**：

```text
Edit image 1 only. Move the exact same single foreground crisp vertically 10-12 cm above its final
landing position, with no more than 8 degrees of tilt. Replace its old contact area with the original
clean tabletop and add only a soft airborne shadow directly below it. Keep the empty package-reserved
area, crumbs, background, camera, lighting and every other pixel-level relationship locked.
Do not add a cup, package, logo, label, hand, second crisp, new crumbs, motion blur or text.
```

**验收**：除同一根产品从台面移到落点上方、接触阴影改为离地投影外，KF06A 与 KF06B 完全一致；产品中心正对最终落点；没有第二根产品，没有手，右侧包装预留区零变化。

## 选片与失败回退

| 关键帧 | 首轮数量 | 只改什么 | 不通过时不要做什么 |
|---|---:|---|---|
| KF01A | 3 张 | 番茄与萼片 | 不要用失败番茄继续生成 KF01B |
| KF01B | 2 张 | 红色表皮遮挡 | 不要接受纯色卡或黑边 |
| KF02B | 4 张 | P0 一致性与颗粒数量 | 不要把错误产品作为后续参考 |
| KF03A | 4 张 | 四枚指尖与完整产品 | 不要先生成断裂视频补救手部 |
| KF03B | 4 张 | 长度守恒与 M0 断面 | 不要用负向词反复修补错误断面；回到 M0 重做 |
| KF05A | 4 张 | 杯体、铝箔和真实包装 | 不要接受包装乱码后继续做视频 |
| KF05B | 3 张 | 同杯同机位、无手 | 不要让杯内产品换批次 |
| KF05C | 4 张 | 单根产品与两枚指尖 | 不要接受两根产品一起被提起 |
| KF06B | 3 张 | 右侧空白杯位与 P0 产品 | 不要让模型生成杯子、包装或假字 |
| KF06A | 2 张 | 只移动同一根产品和对应阴影 | 不要重新生成整张背景或包装 |

同一关键帧最多连续微调两轮。两轮后仍出现产品变形，重新从 P0 V3 原图开新会话，不继续投喂失败图。

## 全组交付门禁

- [ ] 10 张关键帧均已生成，并使用统一横屏尺寸。
- [ ] 所有产品外形都能与 P0 V3 并排认作同一产品族。
- [ ] P0 的石盘和原构图没有被错误继承到其他镜头。
- [ ] KF01A/B 是同一颗番茄；KF01B 可同时作为镜头 02 首帧。
- [ ] KF02B 只有薄层调味颗粒，没有红色厚粉、液体或番茄变形。
- [ ] KF03A/B 的相机、产品尺度和四枚指尖一致；两截长度守恒。
- [ ] KF03B 断面严格来自 M0，没有巨大孔洞、规则泡沫或面包纤维。
- [ ] KF05A/B/C 的杯体、透视和真实包装完全一致；包装文字和 logo 不漂移。
- [ ] KF05C 只提起一根产品，且与 P0 V3 外观一致。
- [ ] KF06A/B 的右侧包装预留区完全空白且一致；同一根产品从悬空位置落到 KF06B 左前景落点。
- [ ] 除真实包装自带文字和 logo 外，全组无新增文字、乱码、平台水印和 UI 覆盖。

---

**成片动作与视频 Prompt** → [03 · 分镜](./04j-tomato-v2-optimization)

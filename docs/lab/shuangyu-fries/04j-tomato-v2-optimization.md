# 03 · 分镜

> 番茄味独立感官创意片 v2 ｜ 15 秒 / 6 镜头 / **16:9 横屏**
>
> 第一轮视频：`images/番茄味独立感官创意片/video_766872367687978.mp4`
>
> v2 预演素材：`images/番茄味独立感官创意片/ad123.mp4`、`ad456.mp4`
>
> 原始 20 秒版本继续保留在 [01 · 导演执行稿](./03f-tomato-sensory-film)。

::: tip 关键帧已迁移
P0 V3 产品外观母版已经通过。正式关键帧请使用独立页面 [02 · 关键帧](./04k-tomato-v2-keyframes-v3)；本页折叠的旧关键帧仅作版本追溯。
:::

## 结论先行

第一轮已经验证三件事：番茄红色在黑底上有识别度，掰断微距能证明酥脆，杯装撕膜动作有产品记忆。v2 预演进一步证明“完整番茄遮挡 → 调味颗粒 → 掰断 → 开杯 → 落版”的顺序成立，但**现有 P0、断裂帧和包装动态仍未达到交付标准**。v2.1 不再继续润色同一批错误资产，先用实拍产品重做身份母版，再把高风险动作拆开生成；包装文字、镜头 04 余韵和镜头 06 尾版交给后期完成。

| 第一轮资产 | v2 处理 |
|---|---|
| 番茄红调味粉落附 | 升级为“一颗真实番茄入场 + 调味颗粒落附”，前 4.25 秒完成口味识别与产品揭示 |
| 掰断微距与真实碎屑 | **保留为全片核心镜头**，用正确产品母版重做首尾帧 |
| 撕开铝箔的杯装动作 | 保留动作，包装平面与 logo 纳入后期合成 |
| 手指在台面推动薯条脆 | 删除，没有增加番茄味或脆感信息 |
| 结尾大量产品飞出 | 删除，运动模糊遮挡包装，无法承担尾版 |

## 第一轮主要问题

1. **产品形态偏膨化条**：当前产品过白、过圆、表面均匀鼓泡，像膨化米果，不像参考图里的粗直鲜切薯条脆。
2. **第一秒口味不明确**：红色粉末出现后才有番茄联想。v2 第一镜直接出现一颗真实番茄，1.9 秒进入产品微距并叠加「番茄味」。
3. **断面镜头手指过大**：断裂动作成立，但手指抢占画面。下一版保留真实所需的左右两组拇指与食指、共四枚指尖，只露末端并限制总面积，把断面放在中心。
4. **包装不能直接交付**：生成包装的文字、logo、日文副标和杯口细节不稳定，必须使用真实终稿物料。
5. **没有干净产品尾版**：14 秒后运动中的薯条遮挡杯身，没有完整、稳定、可读的包装落版。
6. **含生成平台水印**：右下角「千问AI生成」必须从交付文件中移除，优先重新导出无水印源。

## v2 预演素材实测复盘

两条新增预演视频均为 `1280×720`、约 `10.005 秒`。Gemini 实际把前三镜和后三镜分别做成了两个连续多段视频，并未按页面原先写的 1.7–3.5 秒逐镜输出。它们可以验证节奏和转场，但不能直接视为无条件通过的 15 秒成片。

| 资产 | 可保留 | 硬问题 | 结论 |
|---|---|---|---|
| `ad123.mp4` | 番茄入场、红色擦镜、调味落附、断裂顺序清楚；黑红色调统一 | 产品比实拍更粗、更白，侧面像压制膨化块；四枚指尖面积过大；右下有生成标记 | **仅作节奏预演** |
| `ad456.mp4` | 断裂余韵能接上前片；撕膜、取食、落版顺序成立；浅色影棚利于包装识别 | 杯身文字由模型重绘；产品仍沿用错误母版；包装动态不可保证逐帧保真；右下有生成标记 | **仅作动作预演** |
| `p0-产品模板校准.jpeg` | 长方体方向、浅金底色、红色颗粒方向正确 | 体积过厚、端面大圆孔像发泡奶酪，侧面有压制层和连续大裂缝，与实拍产品不一致 | **P0 未通过，必须重做** |
| 镜头 01 首尾帧 | 完整番茄真实、遮挡转场明确 | 首尾帧尺寸不同；视频中萼片和生成标记需逐帧检查 | **条件通过** |
| 镜头 02 关键帧 | 番茄与番茄红颗粒关系直观 | 继承错误 P0；产品过白、过厚，颗粒量偏多 | **重做产品，保留构图** |
| 镜头 03 首尾帧 | 裂纹、断裂和长度守恒关系清楚 | 产品像膨化块；手部过大；断面依据仍是模型臆造 | **重做首尾帧** |
| 镜头 05 / 06 关键帧 | 杯装购买语境与左右留白成立 | 不能将生成中文和 logo 当终稿；镜头 06 前景产品错误 | **只作合成草图** |

::: danger 当前资产门禁
正式重生成之前，`p0-产品模板校准.jpeg`、镜头 02、03、05、06 都不能继续充当“已通过身份参考”。反复投喂错误 P0 只会让 Gemini 更稳定地生成错误产品。
:::

## v2 片型与时间线

| 项目 | 内容 |
|---|---|
| 片型 | 单口味感官创意片 / ASMR 食品广告 |
| 画幅 | **16:9 横屏** |
| 时长 | 15 秒 |
| 核心概念 | **番茄香，咔嚓脆** |
| 信息顺序 | 真实番茄 → 调味颗粒 → 咔嚓断裂 → 开杯 → 产品 |

| 时间 | 镜头 | 画面与动作 | 字幕 / 声音 |
|---|---|---|---|
| 00:00.000–00:01.900 | 01 · 一颗番茄入场 | 一颗成熟红番茄滚入黑色影棚，结尾用真实表皮遮挡镜头 | 轻微滚动声、短促停顿 |
| 00:01.900–00:04.250 | 02 · 番茄风味落脆 | 红色遮挡移开，揭示薯条脆表面微距，红色调味颗粒自然落附 | **番茄味** / 细密颗粒声 |
| 00:04.250–00:07.500 | 03 · 一折即脆 | 左右两组指尖折断产品，断面朝镜头，真实碎屑飞散 | **咔嚓酥脆** / 主咔嚓 |
| 00:07.500–00:08.605 | 04 · 脆屑回落 | 两截产品停住，红色颗粒和金色碎屑落回台面 | 轻微干燥颗粒声 |
| 00:08.605–00:11.905 | 05 · 开杯取食 | 撕开铝箔，杯中产品露出；拿起一根，不入口 | **番茄香，咔嚓脆** / 撕膜声 |
| 00:11.905–00:15.000 | 06 · 产品落版 | 同一根产品从上方落入左前景，轻触台面后形成最终包装落版；最后 1.5 秒完全静止 | 轻脆落定声 + 品牌 + 产品名 + **番茄味** |

::: warning 口味画面的事实边界
本版按创意确认加入一颗真实番茄，作为“番茄味”的视觉符号，不自动等同于配料承诺。配料表未确认前，番茄只保持完整外观，不切开、不挤汁、不变成调味粉；文案只写「番茄味」，不使用「真番茄」「鲜番茄」「番茄原料」等表述。
:::

## 16:9 构图规则

- 所有镜头按 16:9 原生生成，不使用竖屏画面拉伸或扩边。
- 产品主体位于中间 60% 安全区，左右分别承担红色颗粒运动和字幕。
- 断裂镜头横向展开两截产品，避免竖屏式上下堆叠。
- 包装尾版放在右侧黄金分割位，左侧预留品牌与口味文案。
- 生成平台水印通常出现在右下角，最终落版不得依靠简单裁切解决水印。

## 产品母版固定描述

下一轮所有无包装镜头都以 `images/薯条脆实拍.jpg` 为**最高优先级身份参考**。包装渲染只用于杯体与版式，不再用来推断食物几何。以下身份块必须逐字复用：

```text
The exact tomato-flavored potato crisps shown in the real product photograph:
thick-cut but slender irregular potato batons, naturally varied in length and taper,
with four readable cut faces, slightly chipped squared ends, subtle bends and non-uniform edges.
The base potato is warm golden yellow under a thin, dry orange-red tomato seasoning dust.
The surface is crisp, matte and finely rough, with tiny natural fissures and compact potato texture.
When a cross-section is visible, it is dense dehydrated potato tissue with only fine irregular pores,
never oversized round tunnels or a uniformly aerated foam structure.
Preserve this exact geometry, scale, color and seasoning density in every shot.
```

固定正向封闭与排除块：

```text
Rigid natural potato-stick geometry, compact organic food texture, dry matte seasoning,
stable contour and stable thickness throughout the shot.
Exclude: oversized rectangular bar, extruded puffed snack, corn puff, rice cracker, wafer,
bread stick, cheese stick, capsule shape, cylinder, fully rounded ends, giant circular pores,
Swiss-cheese holes, uniform foam cells, laminated pressed layers, wet glaze, oil film,
plastic gloss, warping, melting, morphing, extra products, text, logo, watermark and UI overlay.
```

## 执行顺序

不要直接从镜头 01 开始批量生成。先通过 P0 产品母版，再按以下顺序推进：

| 顺序 | 任务 | 通过后才能做什么 |
|---:|---|---|
| 1 | P0 · 产品母版重做 | 用实拍产品锁定全片形态、颜色与调味颗粒 |
| 2 | M0 · 实拍断面锚点 | 实际掰断一根产品并拍清断面；不让模型臆造内部组织 |
| 3 | 03A / 03B · 断裂首尾帧 | 同时投喂 P0 与 M0，锁定断面与长度守恒 |
| 4 | 01 · 真实番茄开场 | 沿用条件通过的首尾帧，只重跑稳定动作 |
| 5 | 02 · 番茄风味落脆 | 用新 P0 重做产品，保留现有构图关系 |
| 6 | 05 · 撕膜并取出一根 | KF05A → KF05C 首尾帧一次生成；KF05B 只用于方向检查和制作尾帧 |
| 7 | 04 / 06 · 余韵 / 落版 | 04 使用通过帧后期延长；06 用 KF06A → KF06B 生成一根产品受重力落定 |

## P0 · 产品母版校准

**参考图优先级**：

1. `images/薯条脆实拍.jpg`：严格参考真实产品的长宽比、自然弯曲、切面、底色和挂粉密度。
2. [`assets/shu_tiao_cui.jpg`](./assets/shu_tiao_cui.jpg)：只参考番茄口味的暖橙红色范围；忽略杯身插画里的产品形态和全部文字。

**当前状态**：`p0-产品模板校准.jpeg` **未通过**，不得继续用于图生图或图生视频。

**生成要求**：生成 4 张，只选 1 张作为镜头 01–04 的唯一产品身份参考。

**中文审阅版（内容基准）**：

```text
用途：广告营销
素材类型：番茄味薯条脆产品母版参考图

[参考图优先级]
1. 以真实产品照片为严格身份来源，锁定产品几何、比例、自然差异、表面纹理、
   底色和番茄调味颗粒密度。
2. 包装渲染只用于参考暖番茄橙色范围；忽略插画中的食品形态、包装、文字和 logo。

[主体与材质]
从真实照片中选择一根番茄味薯条脆，单独放置在深色中性灰哑光石盘上，采用四分之三视角。
它是一根厚切但细长、不规则的马铃薯条，不是巨大的长方体。画面同时展示顶面、一个侧面和
一个自然缺角的近方形端面。保留实拍产品轻微收尖、轻微弯曲、不均匀边缘和致密马铃薯主体。
底色是暖金黄色，外覆一层薄而干爽的橙红色番茄调味粉。表面哑光、细微粗粝并带有细小裂隙；
任何可见的端面都应保持致密，只能有细小、不规则孔隙。

[相机与灯光]
85mm 微距镜头，f/5.6，相机略高于石盘。左前方柔和漫射主光，右后方窄幅轮廓光。
中性白平衡，高光受控，16:9，写实高端商业食品摄影。没有运动或创意特效。

[约束]
保持刚性、自然的马铃薯条几何，轮廓稳定致密，并保留真实食品的微小不完美。
使用干净、无品牌的影棚石盘。排除超大长方体、挤压膨化零食、玉米泡芙、威化、面包棒、
芝士条、圆柱或胶囊形、完全圆滑的端面、巨大圆孔、瑞士奶酪孔、均匀泡沫孔、层压压制层、
湿亮糖衣、油膜、塑料光泽、包装、文字、logo、水印、UI、酱汁、烟雾和漂浮碎屑。
```

**English execution prompt（与中文版逐项对应）**：

```text
Use case: ads-marketing
Asset type: tomato potato crisp master reference

Reference priority:
1. Use the real product photograph as the strict identity source for geometry, proportions,
   natural variation, surface texture, base color and tomato-seasoning density.
2. Use the package rendering only for the warm tomato-orange color family.
   Ignore all illustrated food geometry, packaging, typography and logos.

Subject and material:
One exact tomato-flavored potato crisp selected from the real photograph, isolated on a dark
neutral-gray matte stone plate in a three-quarter view. It is a thick-cut but slender irregular
potato baton, not a large rectangular block. Show the top face, one side face and one naturally
chipped squared end. Preserve the photographed product's slight taper, subtle bend, non-uniform
edges and compact potato body. The base is warm golden yellow beneath a thin, dry orange-red
tomato seasoning dust. The surface is matte and finely rough with tiny fissures; any visible end
texture is compact with only fine irregular pores.

Camera and lighting:
85mm macro lens, f/5.6, camera slightly above the plate. Soft diffused key light from front-left
and a narrow rim light from rear-right. Neutral white balance, controlled highlights, 16:9,
photorealistic high-end commercial food photography. No motion or creative effect.

Constraints:
Rigid natural potato-stick geometry, stable compact contour, authentic food micro-imperfections.
Clean unbranded studio plate. Exclude oversized rectangular bars, extruded puffed snacks, corn
puffs, wafers, bread sticks, cheese sticks, cylindrical or capsule shapes, fully rounded ends,
giant circular pores, Swiss-cheese holes, uniform foam cells, laminated pressed layers, wet glaze,
oil film, plastic gloss, packaging, text, logo, watermark, UI, sauce, smoke and floating debris.
```

**P0 硬验收**：

- 与 `images/薯条脆实拍.jpg` 并排时，长宽比、自然弯曲、切面轮廓和挂粉密度能被认作同一产品。
- 不能再出现当前 P0 的超厚方砖体积、连续压制层或端面大圆孔。
- 产品是暖金黄色并带薄层橙红调味粉，不是奶白色，也不是红色厚粉层。
- 顶部和侧面纹理不完全相同，边缘有实拍同级别的自然不规则，不是均匀鼓泡壳。
- 端面若可见，只允许细小不规则孔隙；M0 断面实拍完成前，不凭空强化内部结构。
- 表面以漫反射为主，没有连续油亮高光。

<details>
<summary>v2 中文关键帧草稿（已被 v2.1 执行 Prompt 取代）</summary>

**逐镜分镜提示词（旧版）**

#### 01 · 一颗番茄入场

**时码**：00:00–00:01.8

**单一信息**：第一秒直接建立番茄口味，不让观众靠红色粉末猜测。

**关键帧 Prompt**：

```text
Use case: ads-marketing
Asset type: real tomato opening keyframe, no packaging, no potato crisp

纯黑高端食品影棚中，只有一颗完整、成熟、自然鲜红的圆形番茄位于画面左侧，
番茄大小真实，表皮薄而紧实，带极轻微自然凹凸和一两处细小真实瑕疵，
不是完美塑料球；顶部绿色萼片完整、自然卷曲、颜色清新但不过度鲜绿，
表皮有一条克制的柔和高光，不能湿漉漉，番茄下方有真实接触阴影。
画面右侧保留充足黑色运动空间和后续遮挡转场方向，背景没有其他食材。

85mm lens，f/4，中近景，轻微低机位，左后方窄幅红色轮廓光，
右前方柔和暖白补光，黑红高反差，轻微胶片颗粒，16:9 横屏，
真实高端商业食品摄影，不是 CGI，不是插画。

禁止：切开的番茄、番茄汁、番茄酱、多个番茄、樱桃番茄、圣女果、
水滴喷溅、湿亮塑料表面、过度饱和、畸形萼片、漂浮、文字、logo、包装、
平台水印、薯条脆、9:16 竖屏、纵向构图。
```

**视频动作 Prompt**：

```text
1.8 秒内，这颗番茄从画面左侧沿水平桌面自然滚向右侧约一个番茄直径，
滚动速度先快后慢，绿色萼片随球体做符合物理规律的旋转，番茄不弹跳、不悬浮、不变形；
镜头同步向右做短距离滑轨并推进 3%，一道柔和高光从番茄表皮左侧扫到右侧。
最后 0.25 秒，番茄靠近镜头并用自然红色表皮完全遮挡画面，作为下一镜的实拍式遮挡转场。
不要生成切口、汁液、调味粉、文字、额外番茄或包装。
```

**后期 / 验收**：0–1.8 秒不加文案。番茄必须是一颗普通成熟红番茄，不是圣女果；滚动需要有真实重量感，最后一帧必须形成均匀红色遮挡。

#### 02 · 番茄风味落脆

**时码**：00:01.8–00:03.5

**单一信息**：从完整番茄自然切回真实产品，让番茄意象和表面调味颗粒建立联系，但不表现“番茄变成粉”。

**关键帧 Prompt**：

```text
Use case: ads-marketing
Asset type: tomato flavor bridge and seasoning macro keyframe
Input images:
- approved P0 as strict potato-crisp identity reference
- approved final frame of shot 01 as red color and tomato identity reference

同一根 P0 薯条脆从画面左下向右上横向延伸，极致微距展示干爽粗粝表面、
平直棱线、纵向马铃薯纹理、细小裂隙和不均匀浅孔；
细小番茄红食物调味颗粒从画面上方自然落下，部分停在空中，
部分刚接触表面并轻微弹起，部分附着在表面凹处；
画面左后方只有镜头 01 中同一颗完整红番茄的失焦轮廓，番茄保持完整，
不切开、不流汁、不接触薯条脆，作为口味背景线索；
产品仍以自然浅金色为主，没有红色厚粉层，右侧保留字幕安全区。

100mm macro lens，f/3.2，极浅景深，高速摄影定格感，
侧逆光照亮调味颗粒边缘，背景从暗番茄红过渡到深黑，16:9 横屏，
真实高端商业食品广告摄影。

禁止：改变 P0 产品形态、番茄变成粉末、番茄爆炸、番茄切开、番茄酱、
番茄汁、液体飞溅、湿润表面、油膜、多个番茄、烟花、火星、金属粉尘、
文字、logo、包装、平台水印、9:16 竖屏。
```

**视频动作 Prompt**：

```text
以上一镜的红色表皮遮挡作为开场，红色遮挡从左向右自然移开，
揭示同一根 P0 薯条脆的表面微距；背景中完整番茄只保留失焦红色轮廓并保持静止。
1.7 秒内，细小番茄红调味颗粒从稀到密自然落下，
接触产品后只做一次很小的弹跳并停住；镜头沿产品表面由左向右移动约 18%，
焦点跟随一颗红色颗粒，结尾快速推进表面一道自然裂纹，匹配下一镜断裂点。
番茄不能变成粉末、液体或烟雾；产品不旋转、不改变颜色、不产生油光。
```

**后期 / 验收**：00:01.8 叠加字幕「番茄味」，不能写「真番茄」或「鲜番茄」。遮挡转场应像真实镜头衔接，不能出现番茄溶解、爆炸或魔法变形。

#### 03 · 一折即脆

**时码**：00:03.5–00:07.0

**单一信息**：用真实断裂、碎屑和断面证明酥脆。这一镜必须走首尾帧控制。

#### 03A · 完整首帧 Prompt

```text
Use case: ads-marketing
Asset type: snap action start frame
Input image: approved P0 as strict product identity reference

纯黑影棚中，同一根薯条脆水平位于画面中央，左右各一组结构自然的拇指与食指
从画面最左和最右边缘轻轻捏住产品两端，共四枚指尖，只露末端，手掌不进入画面；
产品保持 P0 的长度、粗细、平直棱线、平切端面、自然浅金色和红色调味颗粒，
中央三分之一完整无遮挡，表面一道自然细裂纹位于画面几何中心。
强侧逆光勾亮上下棱线，背景纯黑，中央断裂区最清晰。

100mm macro lens，f/4，正侧面，主体横向占画面宽度约 62%，
16:9 横屏，真实商业食品摄影。

禁止：改变 P0 产品、四只手指占满画面、指甲油、首饰、弯曲产品、已有断口、
面包、膨化棒、文字、包装、logo、平台水印、9:16 竖屏。
```

#### 03B · 断裂尾帧 Prompt

```text
Use 03A as the strict start-state identity reference. Keep the same camera, lighting,
fingertips, product scale and horizontal composition.

同一根薯条脆已从中央自然断成两截，两截长度之和与 03A 完全一致，
左右两组拇指与食指仍各自捏住一截并水平向外分开约一个产品宽度；
两个参差断面朝向镜头，显示马铃薯脱水后的不规则细胞孔隙，
孔洞大小不一、孔壁薄、局部仍较致密，不能像面包纤维、海绵或规则蜂巢；
少量真实浅金色食物碎屑从断裂点向前方和下方飞出，
少数番茄红调味颗粒混在碎屑中，强逆光点亮断面边缘。

100mm macro lens，f/4，正侧面，16:9 横屏，真实高速食品摄影。

禁止：第三截产品、断裂愈合、两截变长、产品变粗、手指增生、
面包断面、规则蜂巢、海绵、烟花、玻璃、金属碎屑、文字、平台水印。
```

**视频动作 Prompt**：

```text
Use 03A as the first frame and 03B as the last frame.
前 0.8 秒左右两组指尖只施加极小幅度压力，产品中央裂纹缓慢加深；
随后产品一次性干净断开，两截沿水平方向各移动约一个产品宽度，不能回弹或愈合；
断裂瞬间进入超高速升格，真实食物碎屑受重力和惯性向前、向下运动，
0.25 秒后恢复正常速度。镜头只推进 3%，不环绕、不切换机位。
严格保持产品数量、长度、粗细、颜色和指尖结构，禁止生成第三截或额外手指。
```

**后期 / 验收**：断裂前留 0.15 秒静音，再加入全片最重的一声「咔嚓」。字幕「咔嚓酥脆」在断裂后出现。两截长度守恒是硬指标。

#### 04 · 脆屑回落

**时码**：00:07.0–00:09.0

**单一信息**：延续断裂高潮，让观众看清断面和番茄颗粒；替代第一轮无意义的手指推动。

**关键帧 Prompt**：直接使用通过验收的 03B 尾帧，不重新生成产品。

**视频动作 Prompt**：

```text
Use approved 03B as the first frame and strict visual reference.
两截薯条脆和原有四枚指尖保持完全静止，断面始终朝向镜头；
只让少量浅金色食物碎屑和番茄红调味颗粒从断裂点缓慢向下回落，
颗粒数量逐渐减少，最后一颗红色调味颗粒落出画面下沿；
镜头在 2 秒内缓慢后拉 4%，景深略微加深，让两个断面同时清晰。
禁止产品移动、旋转、愈合、变形，禁止增加手指、烟雾、发光粒子或文字。
```

**后期 / 验收**：不加字幕。碎屑声比主咔嚓低至少一个层级，不能再次制造高潮。

#### 05 · 开杯取食

**时码**：00:09.0–00:12.2

**单一信息**：用撕膜动作强化杯装产品记忆，同时让真实包装进入购买语境。

::: warning 包装生成方式
本镜只生成手、杯体透视、杯口、铝箔和产品动作。杯身正面图案必须用终稿包装物料后期替换，禁止采用模型生成的中文与 logo。
:::

**动作底图关键帧 Prompt**：

```text
Use case: ads-marketing
Asset type: package opening action plate for later compositing
Input images:
- approved P0 as strict potato-crisp identity reference
- project package rendering as cup geometry and foil structure reference only

暖奶油色影棚台面上，一只圆柱形杯装产品位于画面右侧黄金分割区域，
杯身正面保留平整、无文字、无图案的橙红色合成占位区，透视和弧度真实；
只有一个清晰的银色卷边杯口和一张圆形铝膜。
同一张铝膜覆盖杯口左前方约三分之二，并与这一个杯口外沿完全重合；
右后方只有一个连续的三角形撕口，铝膜角向右上方掀开约三分之一。
杯口下方不出现第二道银色圆环、内盖、夹层或切开的杯体。
一只结构自然的右手只露拇指和食指，捏住封膜撕角；
杯内整齐露出 5–7 根与 P0 完全一致的浅金色粗直薯条脆，
表面有细小番茄红调味颗粒，产品不溢出、不飞散。
画面左侧留出文案区，台面和背景干净，接触阴影真实。

85mm lens，产品特写，轻微低机位，柔和正面光加暖金侧逆光，
16:9 横屏，真实商业食品摄影。

禁止：生成包装文字、logo、日文、乱码、假标签、杯身变形、袋装包装、
产品大量飞出、蒸汽、油滴、多余手指、人物面孔、平台水印、9:16 竖屏。
```

**视频动作 Prompt**：

```text
3.2 秒内，右手只拉动右后方三角形撕膜角，沿右上方后撤，
沿同一条撕裂边把铝箔从三分之一打开到约四分之三；
左前方约三分之二铝膜始终平铺固定，不能被掀起。封膜是同一张连续铝箔，
保持连接，不凭空消失、不变成第二层杯盖；杯内薯条脆保持原位静止，
不碰撞、不弹跳、不向外散开，不在这一动作中取出产品。
杯体和机位保持静止，左侧文案区始终干净。
禁止改变杯身透视、增加手指、生成包装文字、产品爆发式飞出或运动模糊。
```

**后期 / 验收**：用真实包装正面图替换橙红占位区，匹配杯身弧面、透视、色温和阴影。字幕「番茄香，咔嚓脆」放左侧，不遮挡手和杯口。

#### 06 · 产品落版

**时码**：00:12.2–00:15.0

**单一信息**：让消费者清楚记住品牌、产品名和番茄口味。

**背景关键帧 Prompt**：

```text
Use case: ads-marketing
Asset type: clean product hero background for package compositing
Input image: approved P0 as strict potato-crisp identity reference

生成一张不含包装、不含假杯子的暖奶油色商业食品影棚背景。
画面右侧黄金分割区域完整预留一只杯装产品的直立位置，预留区不放任何物体；
一根与 P0 完全一致的浅金色粗直薯条脆水平放在预留区左前方，
表面细小番茄红调味颗粒清晰，干爽哑光，边缘酥松；
少量真实浅金碎屑和红色调味颗粒自然散落在台面，不形成光环或法阵；
画面左侧约 36% 保持干净，作为品牌、产品名和口味字幕区；
背景由暖奶油白向极浅番茄橙过渡，接触阴影真实，画面稳定、清晰、有食欲。

50mm lens，轻微低机位，f/5.6，正面柔光加暖金轮廓光，
16:9 横屏，真实高端产品英雄摄影。

禁止：任何杯子、包装、标签、文字、logo、平台水印、额外产品、
番茄酱、液体、火焰、烟雾、发光圆环、金属颗粒、9:16 竖屏。
```

**后期合成与动作**：

```text
将客户确认的番茄味终稿包装实拍或渲染图合成到右侧预留位置，
保持包装像素级不变，匹配台面接触阴影、透视、色温与景深；
镜头在 2.8 秒内只推进 3%，前 1.3 秒让极少碎屑自然落定，
最后 1.5 秒包装、产品、碎屑和镜头全部停止运动。
12.5 秒出现品牌与产品名，13.1 秒出现「番茄味」，13.5 秒后画面完全锁定。
```

**后期 / 验收**：包装必须完整、不被前景产品遮挡；中文、logo、口味名可读；不得出现平台水印。最后 1.5 秒是硬性识别时间。

</details>

## 分段处理要求

| 部分 | 第一轮问题 | v2 要求 |
|---|---|---|
| 01 | 第一秒只有红粉，番茄口味仍需猜测 | 改为一颗真实成熟红番茄滚入并完成红色遮挡转场 |
| 02 | 产品太白、太圆，调味粉与口味关联不够直接 | P0 产品母版先过验收；背景保留失焦完整番茄，1.9 秒出现「番茄味」 |
| 03 | 手指占比过大，产品材质偏膨化 | 左右各一组拇指与食指，只露四枚末端；总面积不超过画面 22%，断面居中横向展开 |
| 04 | 手指推动没有信息增量 | 不再单独生成；延长 03B 尾部或使用静帧完成余韵 |
| 05 | 开杯动作成立，包装文字与动作方向不稳定 | 使用包装一致的 KF05A / KF05C 首尾帧一次生成；KF05B 只作中间状态检查 |
| 06 | 运动模糊遮挡包装 | 生成阶段不放包装，只让一根产品从 KF06A 落到 KF06B；动作通过后合成真实包装 |

## Gemini / Flow v2.1 最终执行规则

本节是正式重生成与剪辑的唯一执行依据。中文是完整执行正文，末尾英文句用于加强首尾帧和运动边界；页面后方折叠的 v2 Prompt 只保留作版本追溯。发生冲突时，以本节为准。

::: tip 中英同步约定
**中文正文直接投喂 Gemini / Flow，末尾英文短句只强化关键边界。**后续先修改中文完整正文，再同步检查英文边界句是否仍与首尾帧、镜头连续性和禁止项一致。
:::

### 从本轮实测修正四条用法

| 原写法 | 本轮实测 | v2.1 做法 |
|---|---|---|
| 文本写 1.7–3.5 秒，期待文件严格按该时长输出 | 当前入口实际输出约 `10.005 秒` | UI 能选时长时先选最短档；不能选时，把成片时长写成“动作窗口”，窗口结束后保持尾帧，后期裁切 |
| 一条 10 秒视频包含三镜 | 概念顺序成立，但产品、手部和包装问题会跨三镜传播 | 一次只生成一个主动作；每镜独立首帧或首尾帧控制 |
| 相机、主体和光线同时运动 | 画面可看，但不必要的运动提高形变和漂移风险 | `[Camera] / [Subject] / [Physics]` 分层；相机默认锁定，只有主体和被动物理响应运动 |
| 让模型保持包装文字 | 预演中能短暂看清，但无法逐帧验证，也不能保证品牌像素准确 | 05 首尾帧使用同一包装并准备真实贴片；06 生成底图完全不放包装，动作通过后再合成 |

每条正式 Prompt 都遵守：

1. 第一行写成片动作窗口，第二行英文重复；若入口固定 10 秒，动作完成后保持稳定，不再发明新动作。
2. 中文完整正文决定内容，末尾英文短句只加强 `first keyframe`、`last keyframe`、`one continuous uncut shot` 等边界。
3. 先用正向封闭描述锁定 `single continuous shot`、`rigid geometry` 和真实包装一致性，排除项统一放末尾。
4. 声音描述只作为 Gemini 同步音频的参考轨；最终咔嚓、颗粒和撕膜仍用实录 Foley 替换。
5. 包装自带文字和 logo 必须继承真实包装参考；画面之外的品牌字幕、口味字幕和广告文案全部在后期添加。

### 现有两条 10 秒素材的 15 秒预演剪法

以下切点按 1 秒间隔抽帧确定，用于快速形成内部预演。正式剪辑时在原帧附近前后微调 `±0.15 秒`，以动作起落点和音效波形为准。六段合计约 `15.005 秒`，最终尾帧裁掉 0.005 秒即可锁定 15 秒。

| 成片时间 | 来源 | 源入点–出点 | 时长 | 用途 |
|---|---|---:|---:|---|
| 00:00.000–00:01.900 | `ad123.mp4` | 00:00.000–00:01.900 | 1.900s | 完整番茄入场并靠近镜头 |
| 00:01.900–00:04.250 | `ad123.mp4` | 00:02.750–00:05.100 | 2.350s | 红色遮挡后揭示调味颗粒 |
| 00:04.250–00:07.500 | `ad123.mp4` | 00:05.650–00:08.900 | 3.250s | 施压、断裂、主咔嚓 |
| 00:07.500–00:08.605 | `ad123.mp4` | 00:08.900–00:10.005 | 1.105s | 断面与碎屑余韵 |
| 00:08.605–00:11.905 | `ad456.mp4` | 00:01.550–00:04.850 | 3.300s | 撕膜并取出一根产品 |
| 00:11.905–00:15.005 | `ad456.mp4` | 00:06.000–00:09.100 | 3.100s | 杯装产品落版 |

::: warning 预演不等于交付
这套切法只解决“20 秒预演素材如何快速压到 15 秒”。产品身份、包装文字和生成标记仍是硬失败项；不完成 P0 / M0、包装贴片与无标记导出，就不能作为最终交付。
:::

### 正式重生成优先级

| 优先级 | 重做项 | 原因 | 通过标准 |
|---:|---|---|---|
| P0 | 产品身份母版 | 当前所有产品问题的共同源头 | 与实拍长宽比、自然弯曲、切面、色泽和挂粉一致 |
| P0 | M0 真实断面 | 模型当前把断面生成成大孔发泡组织 | 实拍掰断产品，正侧逆光拍清致密断面 |
| P1 | 03A / 03B 首尾帧 | 核心咔嚓镜头决定“脆”是否可信 | 产品与 P0 同一；断面与 M0 同一；四枚指尖总面积 ≤22% |
| P1 | 05 首尾关键帧 | 节省生成次数并统一撕膜与取食方向 | KF05A / KF05C 包装一致；铝箔向右上方打开；只取出一根 |
| P1 | 06A / 06B 产品落版首尾帧 | 尾版必须像素级正确且有明确收束动作 | 只移动一根 P0 产品；真实终稿包装无遮挡，最后 1.5 秒完全稳定 |
| P2 | 02 调味落附 | 构图成立但继承错误 P0 | 新 P0 外形稳定；颗粒可数、受重力、最多弹一次 |
| P2 | 01 番茄入场 | 当前概念已成立 | 只有萼片稳定性或运动不顺时才重跑 |

## v2.1 Gemini 执行 Prompt

### 01 · 一颗番茄入场

**输入**：`images/番茄味独立感官创意片/kf01a-番茄入场首帧-v3.jpeg` + `images/番茄味独立感官创意片/kf01b-番茄遮挡尾帧-v3.jpeg`。上传前确认两张图片尺寸一致；若仍沿用旧版尾帧，先统一到 `2752×1536`。

**模式**：首尾帧控制；单一主动作是番茄沿台面滚动并在结尾遮挡镜头。

**成片动作窗口**：1.9 秒。

**中文审阅版（内容基准）**：

```text
成片动作窗口：1.9 秒。若当前入口固定输出 10 秒，在 1.9 秒内完成动作，
随后保持上传的尾帧稳定不动。

[格式与参考]
以上传的首帧和尾帧作为严格视觉约束。单一连续、无剪切的 16:9 写实食品广告镜头。
保持同一颗番茄、同一萼片、黑色台面、灯光方向和自然红色。

[相机]
85mm 相机锁定在上传参考图的低机位。相机不摇摄、不环绕、不变焦、不抖动。

[主体动作]
唯一一颗成熟番茄沿台面从左向右滚动约一个番茄直径，然后自然减速。
最后 0.35 秒内，番茄滚到足够靠近镜头的位置，以真实表皮完全覆盖画面，
并精准抵达上传的尾帧。

[物理]
萼片与番茄作为刚性整体一起旋转。表现真实接触、摩擦和重量；不弹跳、不滑行、
不漂浮、速度不突变、形态不改变。影棚灯光保持固定，不随动作变化。

[声音参考]
番茄在哑光台面上发出一段短促、有重量感的滚动声，然后干净停下。没有旁白。

[约束]
单一连续镜头，番茄几何刚性稳定，萼片和曝光稳定。排除切开的番茄、汁液、酱汁、
水滴、额外番茄、樱桃番茄、形变、烟雾、抽象红色擦镜、镜头切换、文字、logo、
包装、字幕、水印和 UI 覆盖。
```

**English execution prompt（与中文版逐项对应）**：

```text
Editorial action window: 1.9 seconds. If the interface outputs a fixed 10-second clip,
complete the action within 1.9 seconds and hold the supplied end frame for the remainder.

[Format and references]
Use the uploaded first and last frames as strict visual constraints. One continuous uncut
16:9 photorealistic food-commercial shot. Preserve the same tomato, calyx, black tabletop,
lighting direction and natural red color.

[Camera]
Locked-off 85mm camera at the supplied low angle. The camera does not pan, orbit, zoom or shake.

[Subject action]
The single ripe tomato rolls from left to right along the tabletop by about one tomato diameter,
decelerating naturally. During the final 0.35 seconds it rolls close enough to the lens for its
real skin to cover the entire frame and arrive precisely at the supplied end frame.

[Physics]
The calyx rotates rigidly with the tomato. Real contact, friction and weight; no bounce, sliding,
floating, acceleration spike or shape change. Keep the studio light fixed rather than animating it.

[Audio guide]
One short, weighty tomato roll on a matte tabletop, then a clean stop. No voice-over.

[Constraints]
Single continuous take, rigid tomato geometry, stable calyx and stable exposure. Exclude cut tomato,
juice, sauce, droplets, extra tomatoes, cherry tomatoes, morphing, smoke, abstract red wipe, camera cut,
text, logo, packaging, subtitles, watermark and UI overlay.
```

### 02 · 番茄风味落脆

**输入**：`images/番茄味独立感官创意片/kf01b-番茄遮挡尾帧-v3.jpeg` + `images/番茄味独立感官创意片/kf02b-调味落附尾帧-v3.jpeg`；产品身份以 `images/番茄味独立感官创意片/p0-产品模板校准V3.jpeg` 为准。

**模式**：首尾帧控制；单一主动作是红色实拍遮挡移开后，调味颗粒垂直落附。

**成片动作窗口**：2.35 秒。

**中文审阅版（内容基准）**：

```text
成片动作窗口：2.35 秒。若当前入口固定输出 10 秒，在 2.35 秒内完成动作，
随后保持上传的尾帧稳定不动。

[格式与参考]
以上传的番茄表皮图作为严格首帧，以基于已通过 P0 制作的调味微距图作为严格尾帧。
单一连续、无剪切的 16:9 微距食品广告镜头。

[相机]
100mm 微距相机锁定。不跟拍、不环绕、不变焦、不改变焦点。

[主体动作]
前 0.30 秒内，真实番茄表皮从左向右水平移出画面，露出与已通过 P0 完全一致的薯条脆。
背景中失焦的完整番茄保持完整、静止。随后，细小橙红色番茄调味颗粒垂直落到产品上，
并停留在表面细小裂隙中。

[物理]
颗粒密度克制。每颗粒子服从重力，接触产品后最多轻微弹跳一次，然后停止。
薯条脆保持刚性、干爽、哑光，颜色和厚度不变。

[声音参考]
非常轻的干燥调味颗粒落在纸面上的声音。没有液体声，没有旁白。

[约束]
严格保持 P0 的全部产品身份特征。单一连续镜头，产品几何稳定刚性，背景干净。
排除番茄变形、番茄爆炸、切开的番茄、汁液、酱汁、厚重红色包浆、向上运动的颗粒、
发光粉尘、火星、烟雾、油光、镜头切换、文字、logo、包装、字幕、水印和 UI 覆盖。
```

**English execution prompt（与中文版逐项对应）**：

```text
Editorial action window: 2.35 seconds. If the interface outputs a fixed 10-second clip,
complete the action within 2.35 seconds and hold the supplied end frame for the remainder.

[Format and references]
Use the uploaded tomato-skin image as the strict first frame and the approved P0-based seasoning
macro image as the strict last frame. One continuous uncut 16:9 macro food-commercial shot.

[Camera]
Locked-off 100mm macro camera. No tracking move, orbit, zoom or rack focus.

[Subject action]
During the first 0.30 seconds, the real tomato skin moves horizontally out of frame from left to
right, revealing the exact approved P0 potato crisp. The blurred whole tomato in the background
remains complete and motionless. Fine orange-red tomato seasoning particles then fall vertically
onto the crisp and settle into its small surface fissures.

[Physics]
Use restrained particle density. Each particle follows gravity, makes at most one tiny bounce on
contact, then stops. The crisp remains rigid, dry, matte and unchanged in color or thickness.

[Audio guide]
Very light dry seasoning grains landing on paper. No liquid sound and no voice-over.

[Constraints]
Preserve the P0 identity block exactly. Single continuous take, stable rigid geometry and clean
background. Exclude tomato transformation, tomato explosion, cut tomato, juice, sauce, thick red
coating, upward particles, glowing dust, sparks, smoke, oil sheen, camera cut, text, logo, packaging,
subtitles, watermark and UI overlay.
```

### 03 · 一折即脆

**输入**：`images/番茄味独立感官创意片/kf03a-一折即脆首帧-v3.jpeg` + `images/番茄味独立感官创意片/kf03b-一折即脆尾帧-v3.jpeg`；外观参考为 `images/番茄味独立感官创意片/p0-产品模板校准V3.jpeg`，断面参考为 `images/番茄味独立感官创意片/m0-真实断面.jpeg`。首尾帧须同尺寸、同构图、同灯位。

**模式**：首尾帧控制；相机锁定，主体断裂，碎屑只作被动物理响应。

**成片动作窗口**：3.25 秒。

**中文审阅版（内容基准）**：

```text
成片动作窗口：3.25 秒。若当前入口固定输出 10 秒，在 3.25 秒内完成动作，
随后保持上传的尾帧稳定不动。

[格式与参考]
以已通过的 03A 和 03B 作为严格首帧和尾帧。以 P0 作为产品外观的精确身份参考，
以 M0 作为断面材质的精确参考。单一连续、无剪切的 16:9 镜头。
全程采用克制的高速食品摄影时间尺度，不切换速度。

[相机]
100mm 微距相机锁定，固定正侧视角、固定焦点、固定黑色背景。

[主体动作]
0.00–1.20 秒，两组拇指与食指的指尖保持在画面最左和最右边缘，施加小幅、稳定的反向力。
1.20–1.55 秒，产品中央已有的发丝级裂纹逐渐加深，薯条脆只断裂一次。
1.55–3.25 秒，两截产品水平向外移到上传尾帧中的位置并保持不动。
两截长度之和、厚度、颜色和调味颗粒与断裂前完全一致。

[物理]
单次断裂只产生 8–12 颗细小、不规则的真实食品碎屑。碎屑先沿断裂受力方向运动，
随后在重力作用下向下落。暴露的断面与 M0 一致：马铃薯组织致密，只有细小不规则孔隙，
绝不能出现大型泡沫孔。

[声音参考]
断裂前紧邻 0.15 秒近乎无声；随后只有一声近距离、干燥、致密的清脆断裂声，
并带一小段短促碎屑尾音。

[约束]
画面中恰好两截产品，以及原有的四枚指尖末端。指尖总面积不超过画面 22%。
食品保持刚性酥脆，曝光稳定，只有一个连续镜头。排除额外手指、完整手掌、指甲油、首饰、
第三截产品、断口愈合、重复断裂、橡胶般弯曲、产品变长、巨大孔洞、面包纤维、海绵、
均匀泡沫、碎屑爆炸、玻璃、金属、火星、烟雾、相机运动、文字、包装、logo、水印和 UI 覆盖。
```

**English execution prompt（与中文版逐项对应）**：

```text
Editorial action window: 3.25 seconds. If the interface outputs a fixed 10-second clip,
complete the action within 3.25 seconds and hold the supplied end frame for the remainder.

[Format and references]
Use approved 03A and 03B as strict first and last frames. Use P0 as the exact external product
identity and M0 as the exact cross-section material reference. One continuous uncut 16:9 shot.
Global time scale: restrained high-speed food cinematography throughout; do not switch time rates.

[Camera]
Locked-off 100mm macro camera, fixed side view, fixed focus and fixed black background.

[Subject action]
From 0.00 to 1.20 seconds, the two thumb-and-index fingertip pairs apply a small, steady opposing
force while remaining at the far left and right edges. From 1.20 to 1.55 seconds, the existing
center hairline crack deepens and the crisp snaps exactly once. From 1.55 to 3.25 seconds, the two
halves move horizontally outward to the supplied final positions and remain there. Their combined
length, thickness, color and seasoning remain identical to the intact product.

[Physics]
The single fracture triggers only 8-12 small, irregular food crumbs. They move first along the
fracture force and then downward under gravity. The exposed cross-sections match M0: compact potato
tissue with fine irregular pores, never large foam cells.

[Audio guide]
Near-silence for 0.15 seconds immediately before one close, dry, dense crisp snap; short crumb tail.

[Constraints]
Exactly two product halves and exactly the original four fingertip ends. Fingertips occupy no more
than 22% of the frame. Rigid brittle food geometry, stable exposure and single continuous take.
Exclude extra fingers, full hands, nail polish, jewelry, third fragment, healing, repeated fracture,
rubbery bending, product growth, giant holes, bread fibers, sponge, uniform foam, crumb explosion,
glass, metal, sparks, smoke, camera movement, text, packaging, logo, watermark and UI overlay.
```

### 04 · 脆屑回落

**不再生成。**优先直接采用 `ad123.mp4` 的 `00:08.900–00:10.005` 作为预演余韵；正式版使用通过的 `images/番茄味独立感官创意片/kf03b-一折即脆尾帧-v3.jpeg` 延长或做 1.105 秒后期停留。产品、手和断面保持不动，只允许现有碎屑继续受重力下落。这样不会重新采样产品，也不会制造第二次断裂。

### 05 · 撕膜并取出一根（一次生成）

**输入**：首帧使用已还原真实包装的 `kf05a-撕膜首帧`；尾帧使用包装、杯体、机位完全一致的 `kf05c-单根取出尾帧`。`KF05B` 只用于确认撕膜方向并制作 KF05C，不作为本次视频输入，也不单独生成视频。

**模式**：首尾关键帧控制；一次连续完成撕膜和取出一根。若入口固定输出 10 秒，动作必须在前 3.3 秒完成，其余时间严格保持尾帧。

**Gemini / Flow 直接执行 Prompt**：

```text
严格使用第一张图片作为视频首帧，严格使用第二张图片作为视频尾帧。

生成一条10秒、16:9、固定机位、单镜头、无剪辑的一镜到底商业食品视频。
不要重新设计首帧或尾帧，只生成两个关键帧之间连续、真实、符合物理规律的动作。
动作必须在前3.3秒完成：0.0–0.2秒保持首帧；0.2–1.7秒撕膜；
1.7–2.2秒放下铝膜并移动手指；2.2–3.0秒夹住并取出一根；
3.0–3.3秒准确到达尾帧并稳定；3.3–10.0秒严格保持尾帧，不再发生任何动作。

[撕膜方向锁定]
右手从第一张图片中的姿势开始，继续捏住铝膜右后侧的自由端，沿画面右上方缓慢、
平稳地拉动。铝膜左前侧始终固定在杯口，开口由右后侧向左前固定端逐渐扩大。
撕膜方向全程保持一致，不能向左、向下或朝镜头拉，不能突然翻转。
铝膜打开约四分之三后，右手将仍连接在杯口左前侧的铝膜轻轻折放到杯口左侧外沿。
铝膜不能完全撕掉、消失、弹回或重新封闭。

[取食动作]
同一只右手自然松开铝膜，拇指和食指移动到杯口右侧，只夹住一根完整薯条脆。
手将这根薯条近乎垂直地缓慢向上提起，最终准确到达第二张图片中的位置和姿态。
其他薯条始终安静留在杯内，不能跳动、弹出、喷出、悬浮或突然改变数量。

[一致性]
首尾帧之间始终保持同一个杯子、同一份真实产品包装、同一个品牌Logo和包装文字、
同一只右手、同一层铝膜、相同杯口结构、背景、桌面、灯光、构图、焦距和曝光。
相机全程锁定，不推镜、不拉镜、不摇镜、不旋转、不变焦。
杯子不能移动、旋转、缩放或变形。包装的Logo、中文文字、图案、颜色和比例不能变化、
重绘、漂移或闪烁。

[禁止]
禁止添加首帧之前或尾帧之后的任何场景；禁止开场产品展示、结尾产品落版、额外包装、
额外杯子、字幕、转场和水印；禁止反方向撕膜、两层铝膜、两个杯口、双层金属边缘；
禁止第二只手、多余手指、手指融合和手部变形；禁止一次取出多根；
禁止薯条跳出、弹出、喷出或自行移动；禁止修改、重绘或替换产品包装。

Start exactly from the first keyframe. End exactly on the second keyframe.
Create only the natural physical motion between these two keyframes.
One continuous uncut shot. No scene before the first frame and no scene after the final frame.
No product packshot or additional ending.
```

### 06 · 产品落版

**输入**：首帧使用 `KF06A · 薯条悬空首帧`；尾帧使用现有通过的干净产品落版背景，并将其命名为 `KF06B · 产品落版背景尾帧`。两帧除同一根前景产品的位置和离地阴影外，碎屑、背景、右侧包装预留区、机位与曝光必须完全一致；真实包装在视频生成后合成。

**模式**：首尾关键帧控制。只让一根产品受重力落到左前景并稳定，相机与空白包装预留区全程锁定。若入口固定输出 10 秒，动作在前 1.5 秒完成，其余时间严格保持 KF06B；成片截取前 3.1 秒。

**Gemini / Flow 直接执行 Prompt**：

```text
严格使用第一张图片作为视频首帧，严格使用第二张图片作为视频尾帧。

生成一条10秒、16:9、固定机位、单镜头、无剪辑的高端食品广告产品落版视频。
只生成同一根薯条脆从第一张图片的悬空位置落到第二张图片前景位置的真实物理动作。
不要重新设计首帧或尾帧，不要添加其他动作或场景。

动作必须在前1.5秒完成：
0.0–0.15秒保持第一张图片的悬空状态；
0.15–0.95秒，薯条脆在重力作用下近乎垂直向下落，速度自然逐渐加快；
0.95–1.15秒，薯条脆以宽面轻触台面，只发生一次不超过3毫米的细小干脆回弹；
1.15–1.50秒，薯条脆不滑动、不滚动，准确稳定到第二张图片中的位置、角度和接触阴影；
1.50–10.00秒，严格保持第二张图片完全静止，不再发生任何运动。

[产品运动]
下落的是第一张图片中唯一的一根薯条脆，也是第二张图片左前景中的同一根产品。
始终保持 P0 的厚切但细长比例、轻微自然弯曲、暖金黄色、薄层橙红调味颗粒、
干爽粗粝表面和自然缺角。下落过程中保持刚性，不弯曲、不拉长、不变粗、不旋转超过10度。
落点、最终方向、尺寸和透视必须精确匹配第二张图片。不能碎裂，不能产生新的碎屑，
不能弹起第二次，不能滚动或滑入右侧包装预留区。

[静态落版锁定]
已有食物碎屑、调味颗粒、暖奶油背景、台面明暗关系和右侧空白包装预留区必须逐帧稳定。
禁止模型生成任何杯子、包装、Logo、标签或文字；右侧预留区不能出现物体、轮廓或闪烁。
相机完全锁定，不推镜、不拉镜、不摇镜、不环绕、不变焦；背景、焦点、曝光和色温固定。
左侧文案留白保持干净，不自动生成任何文字。

[声音参考]
薯条触碰台面时只有一声轻、短、干燥的酥脆落定声，不是折断声；随后完全安静。

[禁止]
禁止手或手指出现；禁止第二根产品；禁止产品从杯中飞出；禁止产品碎裂、连续弹跳、
大幅旋转、滚动、滑动或变形；禁止新增碎屑或调味颗粒；禁止生成杯子、包装、Logo、
中文乱码、标签、杯盖或任何右侧占位物；禁止焦点呼吸、曝光呼吸、镜头摇晃、火焰、烟雾、
蒸汽、发光圆环、新增文字、字幕、转场、平台水印和镜头切换。

Start exactly from the first keyframe. End exactly on the second keyframe.
Animate only the single crisp falling under gravity into its final foreground position.
Keep the camera, crumbs, empty package-reserved area, background and lighting completely locked.
Do not generate any cup, package, logo, label or typography.
One continuous uncut shot. No scene before the first frame and no scene after the final frame.
```

### 包装后期与声音

- 镜头 05：首尾关键帧都使用同一份真实包装；若生成视频中的文字或 logo 漂移，使用真实包装正面版式做平面跟踪覆盖，保留原视频高光和阴影。
- 镜头 06：使用无包装的 KF06A → KF06B 只生成单根产品落定；视频通过后再把真实终稿包装合成到右侧预留区，最后 1.5 秒完全静止。
- 若只能导出带可见生成标记的版本，该版本只作内部预演。正式交付必须走无标记授权导出或重新生成，不能用简单裁切破坏 16:9 构图。
- Gemini 同步音频只作节奏参考。最终替换为四条 Foley：番茄滚动、干粉落附、一次主咔嚓、铝箔撕开；主咔嚓必须对齐断裂第一帧。

### v2.1 交付门禁

- [ ] P0 与实拍产品并排可认作同一款，不再是超厚方砖或大孔发泡体。
- [ ] M0 来自真实掰断产品；03B 断面与 M0 一致，不由模型自由设计。
- [ ] 镜头 01–03 黑红色调统一；镜头 05–06 暖奶油色调统一，切换发生在主咔嚓余韵之后。
- [ ] 所有生成视频均为单一主动作、单一连续镜头；没有模型自行切镜或新增动作。
- [ ] 03 只有两组拇指与食指末端，共四枚；总面积不超过画面 22%。
- [ ] 05 的 KF05A / KF05C 使用同一真实包装，撕膜方向一致且只取出一根；必要时用真实包装贴片覆盖动态漂移。
- [ ] 06 只有一根产品从 KF06A 落到 KF06B，最多一次 3 毫米回弹；生成底图始终无包装，真实包装在后期合成且最后 1.5 秒无遮挡可读。
- [ ] 最后 1.5 秒包装无遮挡、可读且完全静止；全片精确 15.000 秒。
- [ ] 交付文件无平台水印、生成标记、UI 覆盖和未授权素材。

<details>
<summary>v2 旧版时长规则与视频 Prompt（已停用，仅供追溯）</summary>

**Gemini 单镜头时长规则（旧版）**

Gemini Web 在 Prompt 没有明确时长时，可能按默认值生成 **10 秒**。因此每一个独立分镜都必须在 Prompt 第一行锁定自己的视频时长，不能只在分镜表或上一条 Prompt 中说明。推荐格式：

```text
视频时长：X 秒（必须生成 X 秒，不要生成默认 10 秒）。
A X-second video, one continuous shot, ...
```

每条 Gemini Prompt 必须同时满足以下规则：

- 第一行写 `视频时长：X 秒`，第二行用 `X-second video` 重复一次；X 必须与下表“生成时长”和镜头动作时间轴一致。
- 把完整动作放在该镜头的总时长内，最后 0.2–0.5 秒只保留稳定尾帧；不要让动作超出总时长。
- 不允许全程静止。即使是产品落版，也要有极缓慢推进、光线或颗粒的微小真实变化。
- 首尾帧只约束身份、构图和最终状态；动作必须在中间发生，不能把首帧直接延长成整条视频。
- 生成完成后检查实际文件时长、首尾帧、变形和水印；若平台只能提供固定时长档位，选择不短于目标时长的最近档位，再裁出目标时长。

每段直接按成片需要锁定生成时长：

| 素材 | 建议生成 | 成片采用 | 说明 |
|---|---:|---:|---|
| P0 | 静图 4 张 | 1 张 | 全片唯一产品母版 |
| 01 | 1.8 秒 | 1.8 秒 | 番茄滚动和红色遮挡在同一条 1.8 秒 Prompt 内完成 |
| 02 | 1.7 秒 | 1.7 秒 | 红色擦镜、产品揭示和颗粒落附在同一条 1.7 秒 Prompt 内完成 |
| 03 | 3.5 秒 | 3.5 秒 | 保留施压、断裂、碎屑升格和尾帧稳定 |
| 04 | 2 秒 | 2 秒 | 只保留脆屑回落和最后一颗红色颗粒落出 |
| 05 | 3.2 秒 | 3.2 秒 | 铝箔移动、开杯和前景薯条脆轻微倾斜在时长内完成 |
| 06 | 2.8 秒 | 2.8 秒 | 轻微推进后进入稳定产品落版，包装后期合成 |

剪辑顺序：先锁定镜头 03 的主咔嚓点，再向前安排番茄颗粒节奏、向后安排开杯和落版。不要先按平均时长拼镜头，否则主咔嚓容易落不到音乐重拍。

**最终视频生成 Prompt（旧版）**

以下 Prompt 已绑定本轮通过验收的关键帧。每条 Prompt 第一行都已写明该镜头的目标时长；Gemini 统一生成 **16:9 横屏、写实商业食品广告、无字幕、无水印**。不要删除第一行的时长，也不要把其他镜头的时长复制过来。

::: warning 上传前处理
镜头 1 的首帧为 `2752×1536`、尾帧为 `1376×768`，两者比例一致但分辨率不同。使用要求首尾帧同尺寸的平台时，先把尾帧无损放大到与首帧相同尺寸。镜头 3 的首尾帧已经同为 `2752×1536`，可直接使用。
:::

#### 视频 01 · 一颗番茄入场

**输入方式**：首尾帧控制。

- 首帧：`images/番茄味独立感官创意片/kf01a-番茄入场首帧-v3.jpeg`
- 尾帧：`images/番茄味独立感官创意片/kf01b-番茄遮挡尾帧-v3.jpeg`
- Gemini 生成：1.8 秒（Prompt 首行锁定）
- 成片采用：完整 1.8 秒

```text
视频时长：1.8 秒（必须生成 1.8 秒，不要生成默认 10 秒）。
A 1.8-second video.
Use the uploaded first and last frames as strict visual constraints.
Create one continuous realistic food-commercial shot with no cuts, exactly 1.8 seconds long.

Timing: 0.0–0.25s establish the first-frame tomato; 0.25–1.35s complete the roll and camera push;
1.35–1.8s complete the red wipe into the supplied end frame and hold it briefly.

一颗完整、成熟、自然鲜红的番茄位于纯黑食品影棚台面左侧。
番茄从左向右沿水平台面自然滚动约一个番茄直径，速度先稍快、随后平稳减慢；
绿色萼片随番茄球体做符合真实物理规律的旋转，不独立摆动，不发生形变。
镜头同步向右做短距离平滑滑轨，并极缓慢推进约3%；
滚动过程中，一道柔和暖白高光从番茄表皮左侧自然扫到右侧，
番茄保持真实重量感，不弹跳、不漂浮、不突然加速。

最后0.45秒，番茄继续靠近镜头，红色表皮逐渐占满整个16:9画面，
准确过渡到上传的尾帧；遮挡过程必须是番茄表皮真实靠近摄影机，
不能变成纯色背景、红色烟雾或抽象特效。

摄影：85mm lens，轻微低机位，黑红高反差，真实影棚光，轻微胶片颗粒。
声音：轻而有重量的番茄滚动摩擦声，结尾干净停住；无旁白。

严格保持：同一颗番茄、同一萼片、同一台面、同一黑色背景和自然红色。
禁止：切开的番茄、番茄汁、番茄酱、液体、水滴飞溅、多个番茄、
圣女果、番茄变形、萼片增生、悬浮、弹跳、镜头切换、文字、logo、包装、水印。
```

**验收**：末帧必须完全贴合番茄表皮尾帧；萼片不能增加、脱落或变成藤蔓。

#### 视频 02 · 番茄风味落脆

**输入方式**：首尾帧控制，用镜头1尾帧作为本镜首帧，保证红色遮挡连续。

- 首帧：`images/番茄味独立感官创意片/kf01b-番茄遮挡尾帧-v3.jpeg`
- 尾帧：`images/番茄味独立感官创意片/kf02b-调味落附尾帧-v3.jpeg`
- Gemini 生成：1.7 秒（Prompt 首行锁定）
- 成片采用：完整 1.7 秒

```text
视频时长：1.7 秒（必须生成 1.7 秒，不要生成默认 10 秒）。
A 1.7-second video.
Use the uploaded first and last frames as strict start and end states.
Create one continuous realistic macro food shot with no cuts, exactly 1.7 seconds long.

Timing: 0.0–0.25s keep the tomato-red wipe; 0.25–1.05s reveal the product and begin the
seasoning fall; 1.05–1.7s complete natural particle adhesion and settle into the end frame.

开场是番茄红色表皮完全遮挡镜头。红色表皮从左向右自然掠过并移出镜头，
像一颗番茄贴近摄影机滚过形成的真实遮挡转场；
遮挡移开后，逐步揭示上传尾帧中的同一根浅金色粗直薯条脆微距画面。

薯条脆必须保持平直长方体轮廓、自然浅金色、干爽哑光表面、
纵向马铃薯纹理、不规则浅孔和细小番茄红调味颗粒。
背景左侧保留一颗完整番茄的柔和失焦轮廓，番茄始终完整、静止，
不切开、不流汁、不接触产品，也不能变成调味粉。

细小番茄红食物调味颗粒沿自然重力从上方向下落，
颗粒数量克制，比尾帧静态画面减少约三分之一；
颗粒不发光、不喷射、不向上飞、不形成火星或烟花，
接触产品后只做一次极小弹跳并停在表面凹处。
镜头沿产品表面从左向右平滑移动约18%，焦点跟随一颗红色颗粒，
结尾轻微推进产品表面的一道自然裂纹，匹配下一镜断裂位置。

摄影：100mm macro lens，极浅景深，暗番茄红到深黑背景，真实高速食品摄影。
声音：非常轻的干燥调味颗粒落下声；无旁白、无液体声。

禁止：产品变形、产品变白、产品变成膨化棒、番茄爆炸、番茄溶解、
番茄变成粉末、番茄汁、番茄酱、油光、烟雾、火星、发光粒子、
金属粉尘、镜头切换、文字、logo、包装、水印。
```

**后期**：在成片 `00:01.8` 叠加「番茄味」，不要让生成模型制作文字。

#### 视频 03 · 一折即脆

**输入方式**：首尾帧控制。

- 首帧：`images/番茄味独立感官创意片/kf03a-一折即脆首帧-v3.jpeg`
- 尾帧：`images/番茄味独立感官创意片/kf03b-一折即脆尾帧-v3.jpeg`
- Gemini 生成：3.5 秒（Prompt 首行锁定）
- 成片采用：完整 3.5 秒

```text
视频时长：3.5 秒（必须生成 3.5 秒，不要生成默认 10 秒）。
A 3.5-second video.
Use the uploaded first and last frames as strict visual and identity constraints.
Create one continuous 3.5-second shot with no cuts. Keep exactly the same camera, black background, hands, fingertips, product scale,
product color, seasoning particles and horizontal composition throughout the shot.

Timing: 0.0–0.7s establish the intact product and hands; 0.7–1.55s apply pressure and
deepen the center hairline crack; 1.55–2.0s execute one clean snap; 2.0–3.5s show the
crumbs in high-speed motion and settle into the supplied end frame.

前0.7秒，两只手从画面左右两端稳定捏住同一根完整薯条脆，
每侧只显示原有的拇指和食指末端；手指缓慢、克制地向中央施加压力，
产品中央的短竖向发丝裂纹逐渐加深，产品整体仍保持水平和长度不变。

随后薯条脆只发生一次干净利落的中央断裂。
断裂瞬间进入真实超高速升格：左右两截沿水平方向分别向外移动，
最终准确到达上传尾帧的位置；两截长度之和必须始终等于首帧完整产品长度，
不能变长、变粗、缩短或出现第三截。

断裂处飞出少量真实浅金色食物碎屑和极少番茄红调味颗粒，
碎屑受到真实惯性与重力影响，先向前方和两侧散开，再自然向下落；
碎屑不是爆炸、烟花、玻璃或金属颗粒。
断面逐渐显露马铃薯脱水后的不规则细胞孔隙，
孔洞大小不一、孔壁薄，不能像面包、海绵或规则蜂巢。

镜头只做3%极缓慢推进，不环绕、不摇晃、不切换机位。
声音：断裂前留0.15秒近乎静音，随后一记近距离、干净、厚实的主“咔嚓”，
伴随短促真实碎屑声；无旁白。

禁止：手指增生、手指错位、指甲变形、第三截产品、断裂愈合、
反复断裂、两截上下错位、产品弯成橡胶、面包断面、海绵、规则蜂巢、
碎屑爆炸、火焰、烟雾、镜头切换、文字、包装、logo、水印。
```

**后期**：把主咔嚓点剪在约 `00:05.0`；断裂完成后叠加「咔嚓酥脆」。

#### 视频 04 · 脆屑回落

**输入方式**：单帧图生视频。

- 首帧：`images/番茄味独立感官创意片/kf03b-一折即脆尾帧-v3.jpeg`
- Gemini 生成：2 秒（Prompt 首行锁定）
- 成片采用：完整 2 秒

```text
视频时长：2 秒（必须生成 2 秒，不要生成默认 10 秒）。
A 2-second video.
Use the uploaded image as a strict first frame and identity reference.
Create a restrained 2-second continuation of the previous snap shot, with no cuts.

Timing: 0.0–1.35s let the existing crumbs and seasoning particles fall under gravity;
1.35–2.0s let the final small red particle leave the frame and settle the broken product.

左右两截薯条脆、两只手和四枚原有指尖保持几乎完全静止，
两截之间的距离、产品长度、粗细、颜色和断面方向不发生变化；
断面始终朝向镜头，不能旋转、愈合或继续断裂。

只让画面中央已经存在的浅金色食物碎屑和番茄红调味颗粒
按照真实重力缓慢向下回落，颗粒数量逐渐减少；
不要凭空增加新的碎屑，不要制造第二次爆裂，不要让颗粒向上喷射或发光。
最后一颗小红色调味颗粒从画面下沿落出。

镜头在2秒内极缓慢后拉约4%，景深轻微加深，
让左右两个断面同时清晰；黑色背景保持纯净稳定。
声音：轻微、干燥的食物碎屑回落声，音量明显低于上一镜主咔嚓；无旁白。

禁止：产品移动、产品愈合、手指移动或增生、第三截产品、再次爆炸、
烟花、火星、发光粒子、玻璃、金属、烟雾、镜头切换、文字、包装、水印。
```

**验收**：这一镜只负责“余韵”，不能比上一镜更激烈。

#### 视频 05 · 开杯取食

**输入方式**：单帧图生视频。

- 首帧：`images/番茄味独立感官创意片/kf05a-撕膜首帧-v3.jpeg`
- Gemini 生成：3.2 秒（Prompt 首行锁定）
- 成片采用：完整 3.2 秒

```text
视频时长：3.2 秒（必须生成 3.2 秒，不要生成默认 10 秒）。
A 3.2-second video.
Use the uploaded image as a strict first frame and product/package reference.
Create one continuous realistic package-opening food-commercial shot with no cuts, exactly 3.2 seconds long.

Timing: 0.0–0.35s stabilize the supplied starting pose; 0.35–1.65s complete the foil pull
from one-third open to three-quarters open; 1.65–3.2s hold the open-cup state.

保持当前16:9构图、暖奶油色影棚、杯子位置、杯身透视、包装版式、
手部结构、银色铝箔、杯口和杯内薯条脆数量完全稳定。
画面左前方的大面积铝箔保持平铺并连接杯沿，作为固定侧；
右上方现有手指只拉动画面右侧的撕膜角，沿右上方后撤，
绕左前方杯沿的同一条连接折痕，把铝箔移动到约四分之三打开状态；
封膜沿真实折线弯曲并保持连接，不凭空消失，不变成第二层杯盖。

杯内5–7根粗直薯条脆保持原位静止，不发生碰撞、沉降、自然回弹或向外散开，
始终保持平直长方体粗条、自然浅金色、平切端部、干爽哑光表面和红色调味颗粒；
产品不能变细、变圆、弯曲、融化、飞出杯口或变成普通薯条。
不要新增第二只手，不进行取食、入口或咀嚼动作。

杯身和包装正面保持静止，中文、logo、产品名和口味信息不能改写、漂移或闪烁。
镜头完全锁定，左侧文案留白始终保持干净。
声音：只保留一条克制、真实的铝箔撕开声；无薯条碰撞声，无旁白。

禁止：包装文字变化、logo变化、杯身变形、铝箔增生、额外手指、
薯条大量飞出、产品变细、产品变圆、蒸汽、油滴、镜头切换、
新包装、乱码、文字叠加、平台水印。
```

**后期**：此镜生成结果只作为动作底图，最终杯身正面仍用真实终稿包装覆盖。

#### 视频 06 · 产品落版

**输入方式**：单帧图生视频。

- 首帧：`images/番茄味独立感官创意片/kf06-产品落版背景-v3.jpeg`
- Gemini 生成：2.8 秒（Prompt 首行锁定）
- 成片采用：完整 2.8 秒

```text
视频时长：2.8 秒（必须生成 2.8 秒，不要生成默认 10 秒）。
A 2.8-second video.
Use the uploaded image as a strict product hero frame.
This is a restrained final packshot, not an action shot. Generate exactly 2.8 seconds.

Timing: 0.0–1.3s make the 2% camera push-in and settle the existing crumbs; 1.3–2.8s
enter and hold the clean stable hero framing with only a barely perceptible exposure breathing.

保持杯装包装、杯盖、中文、logo、产品名、口味信息、杯身比例、
前景薯条脆、食物碎屑、调味颗粒、暖奶油色背景和所有接触阴影完全稳定。
产品包装始终正面可读，不能旋转、变形、漂浮或被前景产品遮挡。

镜头在前1.3秒只做2%极缓慢、平滑的正向推进；
背景右上方的暖橙色光线做一次极轻微亮度变化，不能形成光带、光环或特效；
台面上已有的极小碎屑只允许自然停止，不新增碎屑，不让任何薯条飞起。
最后1.5秒镜头、包装、薯条脆、碎屑、背景和光线全部完全静止，
作为清晰稳定的品牌识别尾版。

声音：前段一声非常轻的碎屑落定声，随后最后一记短促干净的“咔嚓”，
音乐在最后1.5秒内快速收住；无旁白。

禁止：包装文字改写、logo变形、杯盖打开、额外包装、包装旋转、
产品飞出、碎屑爆炸、镜头摇晃、火焰、烟雾、发光圆环、
新增文字、乱码、平台水印、镜头切换。
```

**后期**：`00:12.5`加入品牌与产品名，`00:13.1`加入「番茄味」；包装层最终使用真实终稿物料替换。

</details>

## 包装与水印

包装镜头不要让模型重绘中文、logo 和日文副标。镜头 05 的首尾关键帧先还原同一真实包装，生成视频若有漂移再用真实包装贴片覆盖；镜头 06 使用无包装的 KF06A / KF06B 只生成单根产品下落，动作通过后再合成真实终稿包装。

右下角「千问AI生成」不能进入交付片。优先重新导出无水印视频；若平台只提供带水印版本，应重生成或使用经授权的后期覆盖设计，同时检查包装、字幕与水印处理之间的安全边距。

## 声音重做

| 声音层 | v2 处理 |
|---|---|
| 番茄入场 | 录制番茄在木质或哑光台面上的短促滚动声，轻而有重量，结尾干净停住 |
| 调味颗粒 | 录制调味粉落在纸面上的细密声，保持轻、干 |
| 主咔嚓 | 使用真实薯条脆近距离折断录音，断裂前留 0.15 秒静音 |
| 碎屑 | 只使用干燥食物颗粒声，避免金属或玻璃质感 |
| 开杯 | 铝箔撕开、杯内碰撞分两层录制 |
| 音乐 | 90–100 BPM；断裂后进入节拍，14.5 秒前收住 |

## 后期字幕

| 入点 | 文案 | 版式 |
|---:|---|---|
| 00:01.900 | **番茄味** | 右侧安全区，小号白字或浅奶油色字，0.15 秒淡入 |
| 00:06.400 左右 | **咔嚓酥脆** | 以实际断裂第一帧为准，位于下方安全区，不做震屏特效 |
| 00:09.000 | **番茄香，咔嚓脆** | 开杯镜头左侧，两行内排完 |
| 00:12.100 | **双宇食品 · 薯条脆** | 尾版左侧，品牌名在上 |
| 00:12.700 | **番茄味** | 产品名下方，至少保留到 15 秒 |

所有字幕均由后期添加，不写进图片或视频生成 Prompt。中文字体、logo 和包装文字使用品牌确认物料，不能采用模型输出。

## v2 验收标准

- 16:9 原生画面，无拉伸、无竖屏扩边痕迹。
- 第一秒出现一颗真实成熟红番茄；1.9 秒进入产品微距并出现「番茄味」字幕。
- 番茄保持完整，不切开、不出汁、不变成调味粉，避免形成未经证实的原料承诺。
- 产品保持浅金、粗直、平切端面和干爽哑光，不再像膨化条。
- 断裂前后产品长度守恒，手指结构正常，断面不像面包或海绵。
- 包装文字、logo、杯盖和口味名来自真实终稿物料。
- 片尾至少 1.5 秒完整静止，包装无遮挡、可读。
- 交付文件无平台水印，时长 15 秒。

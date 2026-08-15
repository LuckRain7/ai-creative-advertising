# Gemini 批量问答结果

---

## Q1 · A · 失败诊断 / 去廉价感

**问：** 同一句 prompt 每次生成差异很大，怎么判断是 prompt 的问题还是模型随机性？要改哪几处来收敛？

**答：**

在 Google Veo 或 Gemini 生成视频/图像时，这种“每次跑结果都不一样”的情况非常普遍。要分清是 Prompt 问题 还是 模型随机性（Seed/Temperature 抖动），并将其收敛到稳定的视觉风格，可以从以下诊断逻辑与收敛策略入手：

一、 怎么判断是 Prompt 问题还是模型随机性？

可以做一次 “对照组测试”：保持 Prompt 绝对不变，连续生成 3-5 次。

如果是模型随机性：

主体和核心构图基本一致（例如：都是同一只碗、同一种色调、同样的微距视角）。

但细节微抖（如：黄油融化的流动轨迹不同、番茄酱沾染的斑点形状改变、光斑位置稍有偏移）。

结论：Prompt 已经发挥了控制力，这种微调抖动属于正常随机性，通常靠挑选满意版本（Cherry-picking）或固定 Seed 解决。

如果是 Prompt 问题：

每次生成的主体风格、画面结构或画质大相径庭（例如：一次是二次元插画，一次是实拍风；一次是俯拍全景，一次是微距特写；或者薯条的形状、包装袋风格完全不统一）。

结论：Prompt 缺乏排他性约束或关键锚点词，导致模型的概率分布区间过大，模型在“猜”你的意图。

二、 提示词收敛的 4 大核心修改处

要让生成效果快速收敛并符合商业广告标准，建议在 Prompt 中精准控制以下 4 个维度：

1. 明确镜头语言与摄影参数（锁定视角与构图）

模糊的词（如“好看的视角”、“近景”）会让模型自由发挥。请直接使用专业摄影术语：

不佳示例：a close-up photo of french fries（太宽泛）

收敛示例：Extreme macro 85mm lens, shallow depth of field, 45-degree side angle（限定了镜头、景深与拍摄角度）

2. 精细化材质与动态描述（锁定中式零食特质）

食品广告最看重“食欲感”（Appetite Appeal），必须用物理材质词和微观动作替代抽象形容词：

不佳示例：delicious honey butter fries, looks tasty

收敛示例：Golden crispy french fries, glistening honey glaze, fine white butter powder dusting, steam gently rising in slow motion（明确了金黄酥脆、蜂蜜光泽、黄油粉末微粒和缓缓升起的蒸汽）

3. 规范光影与色调（锁定品牌视觉基调）

不同口味对应的色调需要被显式定义，避免模型随机匹配背景光：

蜂蜜黄油味：Warm studio lighting, golden hour rim light, high-key warm yellow tone（强调温润、金黄、高调光）

番茄味零食：Vibrant cinematic lighting, rich crimson red background, bold high-contrast highlights（强调鲜艳、深红、高对比度）

4. 建立固定词库结构（Prompt 模板化）

将 Prompt 结构固定为：[主体细节] + [环境/背景] + [摄影镜头/光影] + [动态/渲染质感]。

三、 零食广告 Prompt 实践范例
范例 1：蜂蜜黄油味薯条（特写食欲感）

Prompt:
Extreme close-up shot of crispy golden-brown french fries. Fine melted butter coating and light powder specks on the surface. A slow-motion drizzle of translucent amber honey falling onto the fries. Studio macro photography, 105mm lens, soft backlight highlighting the honey translucency, warm yellow color palette. 4k resolution, commercial advertising style.

范例 2：番茄味膨化零食（爆发力/动态冲击）

Prompt:
Slow-motion action shot of tomato-flavored crinkle-cut potato chips falling through the air. Rich red tomato powder scattering gently around them. Dynamic side lighting creating high contrast, deep crimson and bright red atmosphere. High-speed camera footage, 120fps feel, sharp focus on chip texture, appetizing photo setup.

四、 针对 Google Veo / Gemini 的进阶收敛技巧

利用 Image-to-Video (图生视频)：

如果仅靠 Text-to-Video 难以固定食品形态，先用 Gemini / Midjourney 生成一张满意且形态完美的“食品高精度单帧图”，再输入给 Veo 进行图生视频（Image-to-Video），并仅在 Prompt 中描述动态（如：“camera slowly zooms in, steam rising”）。这是目前商业广告最稳妥的收敛路径。

负面约束 (Negative Prompting)：

如果使用了支持 Negative Prompt 的接口，明确写出 blurry, distorted shape, cartoon, illustration, low resolution, extra noise，排除非实拍质感。

固定种子值 (Seed)（如在 API 或支持 Seed 参数的界面中）：

在调整 Prompt 细节时，保持固定 Seed，观察微调词带来的具体改观。

---

## Q2 · A · 失败诊断 / 去廉价感

**问：** 成片「廉价感」通常由哪几个因素造成（运镜太飘、打光平、材质假）？分别怎么在 prompt 里救？

**答：**

AI 生成视频（如 Veo / Gemini 提示词生成视频）出现“廉价感”，核心在于违背了真实摄影逻辑与物理材质规律。要摆脱这种质感，需要从镜头、光影、物理细节以及后期画面调性四个维度进行精确规避。

一、 运镜太飘（缺乏重力与机械轨迹感）

廉价根源：默认生成动画时，摄像机容易像“无重力幽灵”一样随意穿梭、无规律扭曲或加速度异常。

Prompt 修复公式：明确摄影设备类型 + 机械运动轨迹 + 镜头焦段 + 慢动作帧率。

关键词推荐：Dolly in（推镜）、Pan/Tilt（摇镜）、Camera Crane（升降机）、Cinematography（电影级摄影）、Macro lens 100mm（微距）、120fps slow motion（高帧率慢动作）。

具体例子：

坏 Prompt：A camera flies around french fries dropping into a bowl.（镜头绕着落入碗中的薯条飞）
好 Prompt：100mm macro lens, smooth motorized camera crane shot, slow dolly-in towards honey butter seasoned french fries, tracking shot as fries gently land in a ceramic bowl, shot at 120fps high-speed slow motion, cinema quality.

二、 打光平淡（ lack of depth & contrast ）

廉价根源：漫反射过强，缺乏主光、辅光、轮廓光的区分，没有形成明暗对比，导致画面看起来像手机随意拍的或者三维软件未渲染完成的裸模。

Prompt 修复公式：指定专业摄影灯光布局 + 色温/光芒质感 + 强调轮廓光与暗部。

关键词推荐：Chiaroscuro lighting（明暗对比法）、Volumetric rim lighting（体积轮廓光）、Soft key light（柔和主光）、Backlit（逆光）、Warm cinematic lighting（温暖电影灯光）、Golden hour fill light（黄昏补光）。

具体例子：

坏 Prompt：Tomato snacks with bright studio light.（亮棚光下的番茄味零食）
好 Prompt：Commercial food photography lighting, low-key lighting with high contrast, strong warm rim light accentuating the red tomato powder coating, soft directional key light from the left, cozy warm ambient dark background, dramatic side-lighting.

三、 材质发假（调味粉像塑料、油光像乳胶）

廉价根源：微观细节丢失，模型表面过于平滑。调味粉末（如蜂蜜黄油粉、番茄粉）变成了贴图，液体/油脂缺乏折射率（IOR）和表面张力。

Prompt 修复公式：使用微观细节描述词 + 物理光学质感 + 表面不规则微痕。

关键词推荐：Granular texture（颗粒感）、Fine spice dust particles（细腻调料粉末）、Glistening oil droplets（闪烁微小油滴）、Crystalline texture（结晶质感）、Subsurface scattering（次表面散射，表现酥脆或半透明感）、Hyper-detailed close-up。

具体例子：

坏 Prompt：Crispy fries with yellow honey butter seasoning powder.（带有黄蜂蜜黄油调味粉的酥脆薯条）
好 Prompt：Ultra close-up macro, freshly fried golden potato french fries, detailed fine honey-butter seasoning dust coating the rough surface, tiny glistening droplets of melted butter sparkling under light, powdery texture with visible sugar and salt crystals, subsurface scattering on golden edges.

四、 物理与色彩失真（动态不合逻辑、饱和度过高）

廉价根源：粉末飘散或酱汁流动缺乏流体力学与重力感；颜色过度饱和（如高饱和纯正荧光红/荧光黄）。

Prompt 修复公式：加入真实物理现象 + 限制色调范围（莫兰迪/电影调色）。

关键词推荐：Realistic physics gravity（真实重力）、Slow motion explosion of spice powder（慢动作粉末爆发）、Cinematic color grading（电影级调色）、Rich warm palette（丰富暖色调）、Volumetric dust in the air（空中体积粉尘）。

具体例子：

坏 Prompt：Red tomato powder flying around tomato chips, super bright colors.（红色番茄粉在番茄薯片周围飞，颜色超级亮）
好 Prompt：Phantom Flex 4K quality, macro shot of a single crispy tomato chip, slow-motion burst of fine red tomato seasoning powder floating in mid-air with natural gravity, natural warm red and earthy yellow color palette, cinematic color grading, appetizing texture.

💡 Veo / Gemini 避坑万能公式

将上述四大救场要素组合成完整提示词结构：

[主体与微观材质] + [动态物理与动作] + [专业运镜与帧率] + [灯光与明暗] + [色彩与画质风格]

综合实用案例（蜂蜜黄油薯条）：
Extreme macro shot of golden-brown honey butter french fries, ultra-detailed rough potato texture dusted with fine granular seasoning powder and glistening sugar crystals. A drizzle of liquid honey falls in slow motion (120fps). Smooth motorized dolly-in camera movement. Low-key studio lighting with warm golden rim light and cinematic depth of field. Commercial food styling, dark elegant background.

---

## Q3 · A · 失败诊断 / 去廉价感

**问：** 一条 prompt 生成不满意时，有没有推荐的「诊断顺序」——先查时长、还是先查运镜、还是先查材质？迭代时每次只动一处吗？

**答：**

在用 Google Veo / Gemini 生成 AI 食品广告短片时，遇到生成效果不满意是常态。为了避免无头绪地瞎改，建议建立一套科学的「五步诊断法」。

一、 推荐的「诊断顺序」

诊断的底层逻辑是：先看物理画面是否崩溃，再看镜头运动是否自然，最后调精细质感与细节。

1. 画面崩坏度 (时长/形变) ──> 2. 镜头语言 (运镜/焦点) ──> 3. 食品质感 (光影/材质) ──> 4. 品牌/氛围 (色调/排版)

1. 第一步：查时长与视频稳定性（最优先）

诊断原因：如果视频时长设得太长（如直接生成 10 秒以上），视频生成模型极易出现中间帧“熔化”、“异形”或掉帧现象。

排查方法：

先将单次生成时长压缩至 3~5 秒。食品广告（如薯条蘸酱、番茄酱飞溅）真正的黄金画面往往只有 2-3 秒的特写。

动作幅度：检查 Prompt 里是否有过多连续动作（例如：“薯条掉进酱里，然后弹出，被手拿走”）。动作过多会导致模型错乱。

解决例子：

错：A stick of honey butter french fry falling into sweet dip and then picked up by a hand for 10 seconds.

改：Slow-motion 3-second clip: A golden honey-butter french fry dipping into creamy yellow sauce.

2. 第二步：查运镜与视角（决定画面动感）

诊断原因：画面如果没有崩坏，但显得“很假”或“死板”，通常是因为镜头视角不符合食品广告的标准拍摄手法。

排查方法：

是否使用了专业的摄影摄像术语（如 Macro lens 微距、Phantom Flex 4K 高速摄影、Slow-motion 120fps）。

运镜命令是否单一明确（如 Push-in 推进、Tracking shot 追踪、Orbit 环绕）。

解决例子：

改：添加明确运镜，如 Macro 120fps slow-motion, steady camera slow push-in on the texture.

3. 第三步：查材质与光影（决定食欲感）

诊断原因：画面稳定、运动也顺畅，但看起来像“塑料”或“3D模型”，没有食欲（Craveability）。

排查方法：

检查提示词中是否有高光、颗粒、液体流动、气味化的细节描绘。

检查光源设置（食品广告极度依赖背光 Backlight 和侧光 Side lighting 来表现透光感和颗粒感）。

解决例子：

蜂蜜黄油薯条：补充 glistening honey glaze（闪光的蜂蜜釉）、melted butter drizzle（融化的黄油）、subtle steam rising（微热蒸汽）。

番茄零食：补充 crispy surface（酥脆表面）、dusted with bright red tomato powder（裹着鲜红番茄粉颗粒）。

4. 第四步：查颜色与品牌氛围（决定整体调性）

诊断原因：质感有了，但色调偏暗或偏色，不符合中式休闲零食的明亮鲜艳风格。

排查方法：

检查色调词，如 Warm lighting（暖光）、Saturated bright colors（高饱和鲜艳色彩）、Cinematic commercial color grading（影视级广告调色）。

二、 迭代时，每次只动一处吗？

原则是：先“大改一次”，后“单点微调”。

1. 初创阶段（0到1）：允许批量修改 2-3 个核心要素

当你刚写出一条初始 Prompt，生成的视频完全不对路时，没必要一次只改一个词。你可以同时调整 摄影器材 + 动作描述 +  lighting（光影）。

2. 精修阶段（1到80分）：严格遵守「控制变量法」（一次只动一处）

当画面已经接近你想要的效果（比如薯条的形态和光线都对了，但运镜太快），此时必须每次只改一个变量。

为什么？

AI 视频生成的随机性极高。如果你同时改了 120fps 和 Honey texture，结果画面变差了，你无法判断是运镜参数冲突，还是材质词影响了模型解析。

单点微调的常见顺序示例：

固定画面：先锁定主体（Golden crisp french fry）。

只调微距光线：加入 Volumetric studio lighting, glowing edges，生成看效果。

只调颗粒细节：加入 visible sugar/salt crystals on edge，生成看效果。

只调镜头速度：把 Slow motion 改为 Super slow-motion 240fps，生成看效果。

三、 实用模板与示例（以中式零食为例）
示例 1：蜂蜜黄油味薯条（特写镜头）

Prompt 结构：[镜头与帧率] + [主体与细节材质] + [动作与物理效果] + [光影与色彩]

微调前（效果一般）：

A french fry with honey butter flavor, close up, commercial.

微调后（高清食欲级）：

[镜头] Macro shot, 120fps slow-motion, camera slow push-in.
[主体与材质] A golden crispy french fry coated with glistening melted honey-butter glaze and sprinkled with fine parsley flakes.
[动作] A drop of rich amber honey slowly drips off the end of the fry.
[光影与氛围] Warm studio backlighting, highlighting the translucent honey edge, appetizing commercial aesthetics, 8k resolution.

示例 2：番茄味脆片/零食（飞溅动感镜头）

微调后（高动态广告感）：

[镜头] High-speed Phantom Flex 4K camera shot, ultra slow-motion.
[主体与材质] Crunchy tomato-flavored chips dusted with vibrant red tomato seasoning powder.
[动作] Fresh ripe red tomato exploding in the background, creating a dynamic splash of tomato juice and powder in mid-air around the chips.
[光影与氛围] Bright clean studio lighting, punchy saturated red and orange colors, sharp focus, cinematic snack advertisement.

四、 总结小清单
诊断步骤	排查重点	常用提示词（English）
1. 稳定度	截短时长至 3 秒，简化复杂动作	3-second clip, simple motion
2. 运镜	使用专业镜头语言与速帧	Macro lens, 120fps slow-motion, Slow push-in
3. 质感	增加高光、液体、表面颗粒	Glistening glaze, powder texture, steaming
4. 光影	增加背光与广告调色	Studio backlighting, Warm color grading
如果您想进一步优化生成效果，可以选择以下方向：
帮我写 3 组不同风格的中式零食 Veo 提示词
诊断我目前写得不满意的一条 Prompt

---

## Q4 · B · 中国食品语境的画面翻译

**问：** 中式食品的「锅气」「酥脆」「金黄」「挂汁」「焦香」这类词，拆成英文时该怎么落成 Veo 能真正理解的画面描述，而不是直译？能不能给几个标准对照？

**答：**

要让 Google Veo 这种视频大模型精准还原中式美食广告的质感，核心原则是：不要用抽象形容词，而是用物理运动、光影质感、物理材质和摄影语法去“还原现场”。

Veo 无法直接理解“锅气”这种文化概念，但它非常擅长渲染烟雾轨迹、液体黏度、微粒飞溅和高光反射。

中式美食关键词 -> Veo 画面描述拆解
中文抽象词	直译误区（Veo容易忽略/变形）	物理还原逻辑	英文标准Prompt模板
锅气	Wok hei / Wok flavor	热气升腾 + 冒烟 + 快速翻炒 + 油滴飞溅	Rising wisps of white steam, subtle smoke wafting, sizzling oil droplets, fast wok-tossing movement
酥脆	Crispy / Crunchy	碎屑飞溅 + 表面微孔裂纹 + 动态硬碰撞	Crumbles explosion in slow motion, crackling texture, micro-fractures on surface, light dust flying off
金黄	Golden yellow	焦糖色泽 + 边缘高光 + 侧逆光透光感	Deep golden-brown crust, backlit rim lighting, glistening amber tone, sun-kissed reflection
挂汁	Coated sauce	厚重液体慢速流动 + 粘稠包裹 + 镜面反光	Glossy thick sauce slowly dripping, velvety glaze clinging to the surface, mirror-like liquid sheen
焦香	Burnt fragrance	边缘微焦炭化 + 炙烤火苗 + 微微冒烟	Seared charred edges, caramelized golden crust, subtle flame kiss, light smoke rising
零食广告实战 Prompt 案例
炸制过程：物理气泡与金黄质感. 출처: Bohdan Chenkaliuk / Getty Images
1. 蜂蜜黄油味薯条（突出“金黄”、“酥脆”、“挂汁”）

Prompt:
Extreme macro close-up, slow-motion 120fps. A crispy French fry with micro-cracks on its deep golden-brown crust. Melted honey-butter glaze clings velvet-smooth to the surface, dripping in slow motion. Fine amber sugar crystals and tiny butter droplets glisten under warm side-lighting. Soft cinematic focus, dark background.

解析： 用 micro-cracks（微裂纹）替代 “Crispy”；用 velvet-smooth（丝绒般顺滑）和 dripping in slow motion（超慢速滴落）来描绘黄油挂汁的黏稠感。

酱汁包裹：光泽感与液体黏度. 출처: EcoPim-Studio / Getty Images
2. 茄汁膨化零食 / 薯片（突出“浓郁挂汁”、“酸甜鲜红”、“咔哧酥脆”）

Prompt:
Macro lens, 4K commercial style. A crunchy tomato-flavored snack chip breaks in mid-air in super slow-motion, sending a tiny cloud of rich red seasoning dust exploding outward. Glossy, thick tomato glaze clings to the textured surface, catching bright studio reflections. Dynamic phantom high-speed camera effect.

解析： 动态炸裂（breaks in mid-air）配合粉末飞溅（seasoning dust exploding），能瞬间让 Veo 生成出“极度酥脆”的视觉冲击力。

Veo 提示词书写 3 大黄金法则

加词加在“动作”上： 动词（dripping, exploding, sizzling, wafting）比形容词（yummy, delicious）管用 100 倍。

控制光影与材质： 善用 backlit（逆光）、glossy（高光镜面）、amber tone（琥珀色调），Veo 对光影关键词非常敏感。

指定摄影参数： 加上 Macro lens（微距镜头）、120fps slow-motion（慢动作）、Phantom camera effect（高速摄影），Veo 会自动套用商业广告级别的镜头调性。

---

## Q5 · C · 图生视频进阶

**问：** 首帧锁定 vs 只给文字 prompt，稳定性和一致性到底差多少，值不值得每次都出首帧？

**答：**

在 Google Veo 和 Gemini 的视频生成工作流中，首帧锁定（Image-to-Video, I2V）与纯文字 Prompt（Text-to-Video, T2V）在稳定性和一致性上存在本质上的代际差异。

结论：在食品广告制作中，极度值得每次都出首帧，甚至首帧是商业级交片的“生命线”。

一、 稳定性和一致性对比
维度	纯文字 Prompt (T2V)	首帧锁定 (I2V)	广告落地的影响
主体一致性	

低/不可控




薯条的长短、粗细、截面形状、挂粉颗粒度在每一帧/每次生成时都会变化。

	

极高




直接继承参考图的主体材质、造型、包装和配色，不会发生“物种突变”。

	T2V 无法保证镜头切换后还是“同一种薯条”；I2V 保证品牌视觉连续。
材质与质感	

凭空随机生成




蜂蜜的黏稠度、黄油融化的光泽感、番茄酱的挂壁感极易飘忽。

	

精准锁定




首帧已确定高光、透光性与表面纹理，AI 仅负责赋予其动力学物理运动。

	食品广告核心在于“食欲感（Crave Appeal）”，I2V 锁定了高精度食欲感。
构图与运镜控制	

模糊理解




描述“微距特写”或“倾泻倒出”，AI 生成的视角和摆盘随机性大。

	

完全掌控




首帧定死黄金构图与焦点，Prompt 只需专注描述“镜头语言”和“物理运动”。

	广告对构图（如留白放 Logo、黄金分割）要求极高，T2V 抽卡成本极高。
废片率与抽卡成本	抽卡率高达 70%-90%	废片率可降低至 20%-30%	I2V 大幅节省生成时间和算力配额。
二、 为什么食品广告必须用首帧锁定？
1. 食品的“微观材质”极难仅凭文字精准控制

以蜂蜜黄油薯条为例：

T2V 痛点：文字写“Crispy golden potato fries coated with glistening honey and melted butter”，AI 可能会生成炸得过焦的薯条，或者液体看起来像黄油块而不是融化的糖浆。

I2V 优势：你可以先用 Midjourney / Flux / Gemini (Imagen 3) 调整出最完美的一张“带有金色微晶、表面挂着琥珀色蜂蜜丝、边缘微焦”的静态大片，作为首帧喂给 Veo。Veo 只需要做“蜂蜜往下滴落、微风吹过蒸汽”的动作。

2. 品牌包装与印花一致性

如果短片里出现零食包装袋（如番茄味薯片袋）：

T2V：文字绝对无法在动态视频中稳定复现具体的中文品牌 Logo 或特定的番茄插画。

I2V：首帧垫上印有高清 Logo 的包装袋图片，Veo 能在此基础上完成“撕开包装袋”或“包装袋落入镜头”的动态。

三、 实战例子与工作流（以 2 个典型镜头为例）
镜头 1：蜂蜜黄油薯条 —“蜂蜜滴落与沾粉”特写

不推荐（纯文字 Prompt）：

Prompt: Macro shot of crunchy golden fries being drizzled with amber honey and sprinkled with butter powder, slow motion, warm lighting.
结果：生成的薯条形状每次都变，蜂蜜一会儿像水一会儿像油，挂粉甚至会变成奇怪的白色斑点。

推荐（首帧锁定 + 动作 Prompt）：

准备首帧：生成/修图一张完美的超微距照片——两根交叉的金黄色薯条，上面有一滴即将断丝的透明蜂蜜，光泽感极强。

垫入首帧并输入 Prompt：

Prompt: Slow-motion macro shot. The amber honey drip in the center slowly falls off the fry, stringing delicately. A subtle stream of golden steam rises from the hot fry. Camera performs a smooth micro-push in. Focus remains razor-sharp on the crispy texture.

镜头 2：番茄味零食 —“翻滚落入番茄浓汁”

准备首帧：一张番茄膨化食品悬空、下方是浓郁番茄酱飞溅喷涌的静态画面。

动作 Prompt：

Prompt: High-speed phantom camera shot, 120fps. The tomato snack rotates smoothly in mid-air as it drops down into the rich red tomato sauce, creating a smooth splash of sauce outward. cinematic lighting, vivid red dynamic sauce motion.

四、 总结与执行建议

值不值得每次都出？
非常值得。 现代 AI 视频的标准工业流程是 “文生图（定风格/定首帧） → 图生视频（定动态）”。

高效推荐流程：

Step 1 (Gemini / Imagen 3 / MJ)：专注出静态图，把食品材质、光影、构图、色调做到 100 分。

Step 2 (PS 局部修图)：修复静态图里不合逻辑的瑕疵（如多余的渣滓、不自然的光斑）。

Step 3 (Veo I2V)：锁定这张 100 分的首帧，Prompt 完全只写“运动（Motion）”、“镜头运镜（Camera Movement）”和“物理现象（Steam, Splash, Drizzle）”。

想要进一步优化 AI 食品广告的生成效果，可以探讨：
索取 Veo 专用的食品动态与运镜 Prompt 词库
了解如何用 Gemini 生成高食欲感的静态首帧图

---

## Q6 · C · 图生视频进阶

**问：** 首尾帧（First & Last Frame）具体怎么用？给了起始图和落点图后，中间运动容易乱抖、发糊，怎么约束？

**答：**

在 AI 视频生成（如 Google Veo、Luma Dream Machine、Runway Gen-3 等）中，首尾帧控制（First & Last Frame / Image-to-Video with End Frame） 是极强且关键的技术。它能够帮你将静态的商品高光图/概念设计，精准转化为富有冲击力的广告大片。

针对中式零食/薯条（如蜂蜜黄油味、番茄味）广告，以下是首尾帧的具体玩法与解决“乱抖、发糊”的硬核约束技巧：

一、 首尾帧在食品广告中的 3 种典型用法

首尾帧的核心作用是设定起点与终点，让 AI 填充中间的物理运动。

1. 材质与形态变幻（从原料到成品）

首帧：高清特写——新鲜的整颗黄油切块与流淌的蜂蜜/新鲜红润的番茄切片。

尾帧：高清特写——炸得金黄酥脆、包裹着蜂蜜黄油微粒/裹满番茄粉的零食薯条。

AI 中间过程：液态蜂蜜与黄油融化裹住薯条，或者番茄爆破化为番茄香粉。

2. 运镜与空间推拉（从宏观爆发到品牌落款）

首帧：极近特写（Macro）——薯条上的番茄风味颗粒颗粒分明，背景深邃暗调。

尾帧：中景（Medium Shot）——零食包装袋在画面中央，周围飞舞着番茄与冰块，右下角带有品牌 Logo。

AI 中间过程：镜头快速拉远（Zoom Out），风味颗粒随镜头后退，精准拉出最终包装落图。

3. 动态交互与诱人动作（食欲感）

首帧：手指正要捏起一根沾满蜂蜜黄油粉末的薯条。

尾帧：薯条被拉起，蘸上浓郁的黄油芝士酱，出现诱人的拉丝。

AI 中间过程：自然顺畅的蘸酱拉丝动作。

二、 为什么会“乱抖、发糊”？

AI 出现抖动（Jitter）、闪烁（Flicker）或中间帧发糊（Blurry Motion），本质原因是：

首尾帧逻辑不一致：首尾两张图的光影、角度、主体比例、背景结构差异过大，AI 无法找到合理的物理运动轨迹，导致图像撕裂或重合混淆。

缺乏明确的运动提示（Prompt Constraints）：没有告诉 AI 中间发生了什么，AI 会随机尝试扩散（Diffusion），导致画质下降。

相机运镜剧烈：主体在动，镜头也在剧烈旋转，导致运动矢量叠加过载。

三、 解决乱抖与发糊的 5 个约束技巧
技巧 1：控制首尾帧的“连贯性”（图像侧约束）

保持主体比例与镜头角度一致：如果首帧薯条占画面 80%，尾帧不要突然变成全景小元素。

保持光影一致：首尾帧的光源方向（如左侧 45 度侧逆光）、色调（暖黄光/暗调广告风）必须一致，避免 AI 在生成中间帧时频闪变光。

建议制作方式：先用 Midjourney / SD 生成尾帧（如最终产品图），再利用 PS 或图生图工具对尾帧进行抠图、变形或局部修改作为首帧，确保两者在同一底图空间内。

技巧 2：在 Prompt 中用“单轴/单向”运动动词约束（文本侧约束）

不要在 Prompt 里写过于复杂的组合动作（如 "spinning, bursting, shaking, zoom in and flying"）。一次生成只给 1-2 个方向明确的矢量运动。

❌ 错误提示："The fries bounce around, honey drips everywhere, camera spins."（动作太多，必抖）

✅ 正确提示（蜂蜜黄油薯条）：

Prompt: Smooth high-speed macro shot. Liquid honey drips down vertically onto the golden potato fries, seamlessly smoothly. The camera slowly pushes in. Cinema-grade lighting, crisp focus, hyper-realistic, 8k, no jitter.

✅ 正确提示（番茄零食爆破）：

Prompt: High-speed camera, seamless morphing transition. Tomato powder explodes horizontally into thin air, exposing the crisp tomato-flavored snack. Steady tracking shot, ultra-sharp focus, commercial lighting.

技巧 3：加入“摄像机与专业广告词”锚点词

在文本 Prompt 中加入专业广告器材与拍摄术语，能大幅提升 AI 生成中间帧的稳定度：

稳定运镜词：Slow motion（慢动作）、High-speed camera 1000fps（高速摄影）、Locked camera（固定机位）、Smooth linear push-in（平滑直线推进）。

质感与防糊词：Commercial advertising look（商业广告质感）、Crisp details（细节清晰）、Sharp focus throughout（全程清晰对焦）、No motion blur（无动态模糊）。

技巧 4：分步渲染（Multi-Stage Rendering）

如果动作太复杂（例如：番茄切片爆破 → 变成汁液 → 包裹薯条），不要尝试用一张首帧 + 一张尾帧直接跑完。

解法：拆分为 2-3 个 2 秒短镜头。

镜头 1（首帧 A → 尾帧 B）：番茄爆破挤出汁液。

镜头 2（首帧 B → 尾帧 C）：汁液与粉末包裹薯条。

最后在剪辑软件（剪映/PR）中用硬切或快速 Wipe 衔接，效果远比单段生成稳定。

技巧 5：善用后期技术修复（AI 视频补帧与防抖）

如果生成的视频总体不错，但中间有一两帧微抖或变糊：

降倍速/插帧：利用 Topaz Video AI 或 Veo 自带的 Slow-Mo 功能，将视频提升至 60fps/120fps，流畅度提升后抖动感会大幅减弱。

利用 PS/剪映修帧：导出视频帧序列，将变糊的 1-2 帧在 PS 中贴上清晰的产品纹理覆盖，再重新合成视频。

想要进一步优化你的 AI 食品广告制作吗？
生成蜂蜜黄油薯条的具体 MJ + Veo 提示词
了解如何用 Veo 制作动态镜头语言

---

## Q7 · D · 声音 / 旁白 / ASMR

**问：** Gemini / Veo 现在能到哪一步：旁白口播、音效、配乐？口播节奏和画面动作怎么对齐？

**答：**

Google Veo / Gemini 在食品广告音效与对齐上的能力边界

Gemini：负责生成全套文本脚本、分镜头脚本（Storyboard）、精准的 Timecode（时间轴时间戳）、Prompt 描述以及声音元素的规划指示。

Veo：负责生成高画质的视频画面。它在视频生成阶段主要关注画面视觉，对于旁白口播（VO）、背景音乐（BGM）和精准音效（SFX），通常需要借助音频生成工具（如 ElevenLabs、Suno、Sudio等）或剪辑软件（如剪映、Premiere）进行后期合成。

一、 旁白口播、音效、配乐的能力拆解与分工

音频元素	现状与最佳实践方案	推荐工具搭配
旁白口播 (VO)	

** Gemini 生成文案，AI 声优生成语音**




Gemini 撰写符合中式食品语境的口播词（带情感标注），再导入专用语音工具生成带情绪的中英语音。

	Gemini（写稿）+ ElevenLabs / 剪映（TTS配音）
音效 (SFX)	

** 提示词规划 + 专业音效库生成**




Veo 专注生成如“薯条折断、蜂蜜滴落”等画面；Gemini 输出清晰的 Foley（拟音）提示词供音频 AI 生成。

	Gemini（音效Prompt）+ ElevenLabs Sound Effects / SoundDraw
背景音乐 (BGM)	

** 风格与节奏 Prompt 匹配**




Gemini 提供音乐 Style & BPM 指引，再由音乐 AI 一键生成符合国潮/食欲感的高质 BGM。

	Suno v3/v4 / Udio

二、 口播节奏与画面动作的“毫米级”对齐方案

AI 视频对齐的核心原则是：“以音频的时间轴为基准，让 Veo 画面去适应音频”。

落地执行四步法：

第一步：生成并确认音频（先声后画）

先用 Gemini 写好口播词，用配音工具生成最终的 VO 文件。

获取音频的精确时长（例如：整段口播共 8.5 秒）。

第二步：Gemini 导出带 Timecode 的分镜脚本

让 Gemini 将口播词拆解到毫秒级，匹配画面动作。

第三步：Veo 画面生成（控速与提示词对齐）

在 Veo 的 Prompt 中加入动作速率与镜头指令（如 Slow-motion, 60fps 或 Fast cut），确保动作幅度匹配音频停顿。

第四步：后期剪辑对齐与 Speed Ramp（变速）

将 Veo 生成的视频与音频导入剪辑软件，利用“音频波形图”对齐高潮动作（如咔嚓声对齐薯条断裂）。

三、 具体实战案例：蜂蜜黄油味薯条 6秒 TVC 短片

1. Gemini 生成的音画对齐脚本 (Storyboard & Timecode)

00:00 - 00:02（镜头 1：极速吸引）

画面 (Veo Prompt): Macro close-up, a crispy golden potato chip snapping in half, releasing a light crunch powder dust, cinematic lighting, 4K, slow motion.

口播 (VO): “听到了吗？这是金黄酥脆的声音！”

音效 (SFX): 清脆无比的薯条折断声（Crispy chip snapping SFX）。

00:02 - 00:04（镜头 2：核心卖点/质感特写）

画面 (Veo Prompt): Extreme close-up, rich golden honey slowly dripping over smooth melted butter on a potato chip surface, warm lighting, appetizing glow.

口播 (VO): “浓郁蜂蜜与醇香黄油，双重包裹。”

音效 (SFX): 黏稠液体滴落声（Viscous honey dripping SFX）、轻微的滋滋声。

00:04 - 00:06（镜头 3：品牌与购买冲动）

画面 (Veo Prompt): A bowl of golden potato chips on a wooden table, vibrant modern Asian snacks aesthetic, high energy, product packaging dynamically entering frame.

口播 (VO): “一口沦陷，根本停不下来！”

背景音乐 (BGM): 欢快、轻快的明亮 Pop 音乐在最后 1 秒达到高潮。

2. 落地可执行的对齐技巧

利用帧率控制（FPS）：在 Veo 中，涉及食品口感（如汁水爆开、酥脆折断）的镜头，建议使用 Slow motion (慢动作) 提示词，方便后期在剪辑软件里裁切和打关键帧。

音频波形卡点：在剪辑软件中打开音效波形，将薯条“折断”音频的最尖锐波形峰值，直接对准 Veo 视频中薯条裂开的第一帧。

---

## Q8 · D · 声音 / 旁白 / ASMR

**问：** 食品广告的「咔嚓声」「气泡声」「咀嚼声」这类 ASMR 音效，Gemini 能不能生成、或者精确描述出来，方便后期找素材？

**答：**

Gemini 无法直接生成音频文件（如 WAV/MP3），但它能够以极高精度为你输出 ASMR 音效的「文字描述 Prompt」与「声效分轨脚本」，方便你快速在音效库搜索或在 AI 音频工具（如 ElevenLabs, Suno, Stable Audio）中生成素材。

Gemini ASMR 音效精确描述范例

要让 Gemini 输出精准的 ASMR 描述，不能只用「咔嚓声」，而需结合物理动作、材质密度、声音频率与环境音调。以下是针对中式/复合调味零食的 Prompt 描述模版：

薯条硬脆破裂（蜂蜜黄油味）

中文精细描述：极近距离（Close-up）高频破裂声，伴随轻微的油脂炸裂回响。先是外层糖霜与硬脆薯条断裂的 crisp snap（清脆咔嚓声），随后紧接着细碎颗粒摩擦的 crunch（咀嚼碎裂声），尾音带有一丝浓郁融化黄油的沉闷低频。

英文搜索/生成 Keyword：Ultra-close-up hyper-realistic potato chip snap, high-pitched crispy crackle, subtle buttery melt undertone, dry crunch, high frequency, studio Foley, ASMR micro-detail.

膨化零食挂粉咬合（番茄味）

中文精细描述：松软膨化食品被牙齿压塌的空气挤压声（airy crunch），混合着表面番茄调味粉末在舌尖摩擦的细微沙沙声（powdery texture sound），声效轻盈、干爽且节奏明快。

英文搜索/生成 Keyword：Airy puffed corn snack bite, light dusty powder friction sound, rapid soft crunch, dry acoustic Foley, high definition macro audio.

Gemini 协作执行流程（后期高效找素材/生成）

你可以直接向 Gemini 发出以下指令，获取可执行的音效制作清单：

分轨音效脚本提取：让 Gemini 为你的视频画面逐帧匹配 Foley 声效。

提问指令："我有一段 5 秒的极近距离咬下蜂蜜黄油薯条的画面。请帮我拆解成 3 个音效层（主咬合音、细节摩擦音、背景氛围音），并给出英文音效库搜索关键词。"

生成 AI 音频 Prompt：直接让 Gemini 生成针对 Stable Audio 或 ElevenLabs 的专用提示词。

提问指令："请为 ElevenLabs / Stable Audio 生成一段 Prompt，要求生成'厚切薯条被咔嚓咬断、伴随甜黄油融化'的 3 秒高保真 ASMR 音效。"

后期音频落地建议

AI 音频生成：复制 Gemini 输出的英文 Prompt，贴入 ElevenLabs (Sound Effects)、Stable Audio 或 AudioCraft 直接生成专属音效。

音效库精准搜索：拿着 Gemini 给出的英文专业术语（如 crisp snap, powdery crunch, airy bite），在 Epidemic Sound、Motion Array 或 Envato 中精准筛选。

---

## Q9 · E · 手部 / 进食特写

**问：** 手拿薯条、牙齿咬断、食物入口这类特写，手指 / 牙齿 / 口腔细节最容易崩，怎么在 prompt 里约束才稳定？

**答：**

在 AI 视频生成（如 Google Veo、Sora、Runway 等）中，手指、牙齿、舌头和口腔内部属于高维关节与复杂物理碰撞区域，也是目前扩散模型最容易出现“融化”、“多指”、“多齿”或“不自然形变”的重灾区。

要让手持薯条、咬断、入口等特写画面保持高度稳定，核心策略是：用强物理由来控制运动幅度 + 降低生成模型的算力负担（减少解算复杂度） + 避开微观口腔解算。

一、 核心 Prompt 约束法则
1. 手持薯条（防止手指变形 / 多指 / 融化）

明确手部姿势（Pinch / Holding）：不要只写 "holding a french fry"，这会导致手掌全景或指头纠缠。必须明确是“食指与拇指捏住”。

锁定手指数量与状态：明确写出 "two fingers only" 或 "thumb and index finger visible"。

添加景深（Depth of Field / Bokeh）：将手部和主体置于焦平面，背景拉虚，迫使模型把像素算力集中在手和薯条上。

2. 牙齿咬断（防止齿数混乱 / 融化 / 咬合错误）

锁定牙齿局部：写明 "front teeth"（门牙）或 "upper teeth"（上排牙齿），避免模型生成整张嘴的复杂齿列。

控制运动幅度：AI 极度擅长生成“微小位移”或“动作即将发生/刚刚发生”的瞬间，不擅长生成“大跨度咬合全过程”。建议使用 “预咬”或“接触即止” 的动态。

强调物理材质与碎屑：用“薯条断裂的声响视觉化（碎屑溅出、质感脆硬）”来转移模型对齿部肌肉解算的不稳定性。

3. 食物入口（防止口腔变成“黑洞”或“肌肉融化”）

避免生成深层口腔：尽量不要让镜头直接拍摄“舌头卷起食物”或“深部口腔咽喉”。

用唇部掩护：利用唇部（Lips）遮挡口腔内部，重点表现“嘴唇张开 -> 咬下 -> 唇角微扬”。

二、 实战 Prompt 范例与拆解（可直接复制/调整）
场景 1：手持薯条特写（强调金黄酥脆与指尖质感）

Prompt (英文原版，Veo/Gemini 效果最佳):
Extreme close-up shot, macro video. Two clean, photorealistic fingers (thumb and index finger) holding a single golden crispy french fry coated with honey butter seasoning. The camera captures ultra-detailed crisp texture and tiny seasoning crystals. Shallow depth of field, soft natural studio lighting, 8k resolution, photorealistic, high-end food commercial style, slow motion 60fps.

关键约束词拆解：

Two clean, photorealistic fingers (thumb and index finger)：强行锁定只有两根手指，减少多指概率。

coated with honey butter seasoning / tiny seasoning crystals：用微观细节填充视觉，提升真实感。

Extreme close-up shot / Shallow depth of field：减少背景干扰。

场景 2：牙齿咬断薯条特写（强调喀嚓断裂感）

Prompt (英文原版):
Macro slow-motion close-up. Pristine upper front teeth taking a clean bite out of a thick-cut tomato-flavored french fry. The fry snaps precisely in half with tiny crunchy crumbs scattering in mid-air. Macro lens, sharp focus on the teeth and fry, soft lip framing, backlit, clean commercial lighting, cinematic 4k food ad.

关键约束词拆解：

Pristine upper front teeth：只渲染上排门牙，降低全口牙齿混淆的风险。

clean bite / snaps precisely in half：明确咬断的动作结果，避免出现薯条“橡胶化拉丝”的异常。

crumbs scattering in mid-air：用物理碎屑增加真实感并掩盖潜在的微小缝隙失真。

场景 3：食物送入口中（自然侧面/斜侧角度）

Prompt (英文原版):
Side-profile close-up shot. Soft natural lips gently open as a golden french fry is brought towards the mouth. Natural facial movement, clean skin texture, realistic lighting, warm aesthetic. Shot on 35mm lens, depth of field, high-end snack advertisement.

关键约束词拆解：

Side-profile：斜侧面角度比正对着嘴巴拍摄稳定 80% 以上，避开了直接观测口腔内部的解算困难。

Soft natural lips gently open：将焦点放在唇部形态而非口腔内部结构。

三、 运镜与提示词的“避坑与加分技巧”

绝对要避开的禁用词（Negative constraints/避免在提示词中描述）：

避免写 "tongue chewing"（舌头咀嚼）、"inside the mouth"（口腔内部）、"full mouth open"（大张嘴）。

避免写 "hand holding a handful of fries"（手抓一把薯条），这必然导致手指与薯条融合。

镜头语言（Camera Movements）控制：

静态镜头（Static Shot）或极微弱的前移（Slow Push-in）：咬断动作本身已有动态，如果镜头再快速运动，Veo 会因为双重运动导致解算崩溃（画幅变糊、器官变形）。

升格/慢动作（Slow Motion / 60fps / 120fps）：AI 慢动作能极大地掩盖肌肉/咬合接缝处的不自然滑移。

后剪辑与生成流策略（Workflow Tips）：

分段生成（First Frame / Keyframe Control）：如果 Veo 支持图生视频（Image-to-Video），先用 Midjourney / Flux 生成一张完美的手持薯条或门牙准备咬下的超高清剧照，再输入给 Veo 驱动“咬下”的 2 秒动作，成功率会提升至 90% 以上。

剪辑卡点：广告片中“咬断”的特写镜头在最终成品里通常只需 0.5 ~ 1.2 秒，生成 2-4 秒后，只截取动作最精准的 10-20 帧配合“咔嚓”音效，视觉效果即极其惊艳。

---

## Q10 · F · 多镜头叙事与整片结构

**问：** 8 个分镜之间怎么设计转场节奏，避免拼接感？有没有镜头与镜头衔接、保持情绪连贯的技巧？

**答：**

针对 AI 视频生成（如 Google Veo / Gemini 提示词生成）制作中式零食广告时，8 个分镜的转场节奏与衔接技巧是决定作品是否具有“商业大片感”的关键。以下是具体的转场节奏设计与无缝衔接技巧：

一、 8 分镜转场节奏排布（“起-承-转-合”律动）

AI 视频极易因为“镜头时长一致”而产生机械拼接感。商业广告的核心在于快慢交替（抑扬顿挫）：

分镜	镜头类型与画面内容	剪辑节奏与时长	转场逻辑 / 视觉焦点
01	

宏观环境/情绪引子




古风/国潮场景（如竹林、原木案台）

	

慢速（1.5-2秒）




运镜平缓

	

Match Cut（匹配转场）




画面中央留出焦点（如降落的食材）


02	

食材特写（质感）




精选黄油切块融化、番茄爆汁

	

中速（1秒）




微距极速推镜头

	

动作延续（Motion Blur）




利用液体/粉末飞溅的同向运动衔接


03	

制作过程（高潮前奏）




薯条在热油中翻滚，炸至金黄

	

快速（0.8秒）




升格升速升格

	

视觉遮挡（Wipe Cut）




油锅气泡或烟雾短暂遮挡全屏


04	

调味瞬间（核心卖点）




蜂蜜黄油/番茄粉末如瀑布般倾泻

	

极慢（慢动作 2秒）




微距环绕镜头

	

图形/色彩匹配（Shape/Color Match）




粉末飞溅形态匹配下一镜头的落点


05	

成品亮相（视觉冲击）




金黄薯条挂着蜂蜜/番茄酱出锅

	

中速（1秒）




快速拉远或旋转

	

轴线/方向延续




顺应上一镜头的旋转方向继续旋转


06	

开袋/开盒（体验感）




手部撕开包装，咔哧声与气味呼之欲出

	

快速（0.8秒）




特写切中景

	

主体运动（Action Cut）




撕开包装的瞬间动作直接切下一镜头


07	

品尝反馈（情绪高潮）




蘸酱/咬下瞬间，酥脆质感爆发（可带光影/粒子）

	

慢速（1.5秒）




情感放大

	

光效/粒子转场（Lighting Cut）




咬下瞬间炸开金色/红色粒子光效


08	

品牌落款（收尾）




产品包装与品牌 Logo 完美定格

	

稳定（1.5秒）




推镜头定格

	

自然淡出/图形归位




光效收拢至产品包装，视觉归于平静

二、 避免拼接感：4 大AI镜头无缝衔接技巧

在向 Veo 输入 Prompt 或后期拼接时，可以通过以下物理与视觉逻辑实现无缝过渡：

1. 动向一致性（Vector Continuation）

逻辑：前一个镜头的结尾运动方向，必须与下一个镜头的开头运动方向一致。

Prompt 示例：

镜头 03：FPV fast zoom-in into hot oil sizzling, camera moving downwards...（镜头向下俯冲）

镜头 04：Seamless camera continuation moving downwards into a waterfall of golden honey and butter...（镜头顺势向下）

2. 视觉遮挡/自然擦除（Wipe / Light Transition）

逻辑：利用烟雾、蒸汽、飞沫或主体边缘暂时遮挡镜头（过黑/过亮/过模糊），再在中途切换场景。

零食应用：

番茄味：番茄被切开的瞬间，鲜红汁液飞溅贴满屏幕（全红遮挡），下一帧从红色粉末瀑布中拉出。

蜂蜜黄油味：热气蒸腾的烟雾充满屏幕，烟雾散去后露出金黄色的薯条堆。

3. 形状/颜色匹配（Match Cut）

逻辑：用相似几何形状或主色调的产品作为过渡桥梁。

零食应用：

圆形的整颗鲜番茄（微距特写） → 瞬间坍缩/爆炸变身 → 圆形的番茄味薯圈/零食。

黄色块状黄油（镜头旋转） → 旋转中形状融化 → 变形成金黄酥脆的方形薯条。

4. 声画同步驱动（Audio-Driven Pacing）

逻辑：AI 画面剪辑点严丝合缝地踩在音效点（SFX）上。

技巧：

咔哧声（Crunch）：配以瞬间的画面放大或微闪光（Flash）。

液体流动声：配合慢动作微距（Slow-mo macro）。

三、 保持情绪连贯的 AI 提示词（Prompt）控制法

在生成各分镜提示词时，保持以下三个“不变”，可大幅提升 8 个镜头的统一感与品牌调性：

统一光影语言（Lighting）：
在每个分镜 Prompt 中固定光影词，如 warm volumetric lighting, cinematic soft backlight, golden hour food photography style（暖色体积光、电影级软背光）。

统一色调风格（Color Palette）：

蜂蜜黄油味：warm golden, amber yellow, creamy white background, cozy and rich atmosphere

番茄味：vibrant tomato red, warm lighting, dynamic and mouth-watering mood

统一渲染与相机参数（Camera Specs）：
全篇追加 shot on 85mm macro lens, shallow depth of field, 4K resolution, commercial food advertisement quality, fluid motion，确保镜头画质与景深感完全一致。

通过“快慢交替的 8 帧律动”加上“动向/遮挡/色调”的控制，AI 生成的分镜就能像专业食品广告大片一样流畅连贯。

---

## Q11 · F · 多镜头叙事与整片结构

**问：** 一条 30 秒食品广告的完整结构（吸引 → 展示 → 食欲 → 品牌收尾）该怎么拆给 Gemini 分镜？

**答：**

将 30 秒中式食品广告拆解为可直接提交给 Gemini / Veo 执行的分镜 Prompt 时，建议采用“按时间轴分段 + 统一视觉规范（Visual Baseline）”的结构。Veo 对光影、材质（宏观近特写）和动态物理效果（如如散落、流淌、酥脆炸裂）的理解极强，因此分镜提示词需要重点突出镜头语言、动作（Action）、光影与物理细节。

第一步：设置全局视觉基准线（给 Gemini 的全局设定）

在发送具体分镜前，先向 Gemini 定义整条广告的统一视觉风格，确保生成的每段视频风格一致：

全局风格设定 (Global Prompt Baseline):

画质/风格: Commercial food photography, 8k resolution, cinematic lighting, photorealistic, ultra-detailed texture, 60fps.

色调/氛围: Warm golden hour lighting, cozy atmosphere, vibrant food colors, shallow depth of field (微距浅景深).

主角产品: Golden crispy Chinese style potato fries / chips with rich tomato glaze and honey butter dusting.

第二步：30 秒分镜结构拆解与 Gemini Prompt 示范

我们将 30 秒划分为 4 个黄金阶段，并提供可以直接复用的 Prompt 模板：

阶段一：黄金 3 秒·强效吸引（00:00 - 00:03）

核心目标: 制造视觉冲击或听觉共鸣，3 秒内抓人眼球，拒绝废话。

画面表现: 极限微距（Extreme Close-up）+ 慢动作（Slow Motion）。

Gemini / Veo 分镜 Prompt 示范:

** Shot 1 - The Hook**

Visual: Extreme close-up shot of a golden French fry dipping into bright red, glossy tomato sauce. As it pulls up, a slow-motion stretchy sauce string forms.

Camera: Macro lens, slow-motion (120fps), push-in rapidly.

Lighting: High-contrast side lighting highlighting the glossy texture of sauce and crystal seasoning powders.

Audio cue: Dramatic crunch sound effect.

阶段二：场景与产品展示（00:03 - 00:10）

核心目标: 建立产品使用场景（如追剧、朋友聚会、加班放松），引发心理共鸣。

画面表现: 动态中景（Medium Shot）+ 真实生活感（Lifestyle）。

Gemini / Veo 分镜 Prompt 示范:

** Shot 2 & 3 - Context & Product Intro**

Visual: A young Asian woman sitting on a cozy couch under warm ambient lights, watching a movie. She opens a vibrant yellow package of Honey Butter Fries. Fine honey butter powder dust drifts softly in the air in slow motion as the bag opens.

Camera: Medium tracking shot, smoothly panning around the character.

Lighting: Soft cinematic living room lighting with neon highlights in the background.

阶段三：极致食欲爆发（00:10 - 00:22）

核心目标: 放大美味感（Food Porn），展现食材特写、调味过程与嘎嘣脆的物理质感。

画面表现: 动态特写 + 原材料碰撞（如黄油融化、番茄爆汁、粉末飞溅）。

Gemini / Veo 分镜 Prompt 示范:

** Shot 4 - Flavor Explosion (Honey Butter)**

Visual: Slow motion shot of a melting cube of golden butter cascading down over a stack of hot, freshly fried potato sticks. Microscopic view of sweet honey droplets clinging to the crispy edges.

Camera: 360-degree orbit shot, extreme macro.

Lighting: Top warm spotlight, dynamic steam rising gently.

** Shot 5 - Crunch Impact (Tomato Flavor)**

Visual: A crisp tomato chip being snapped in half by fingertips in super slow-motion. Crunchy crumbs and red tomato seasoning powder burst softly into the air.

Camera: Phantom flex style ultra-high-speed macro shot.

阶段四：情绪升华与品牌收尾（00:22 - 00:30）

核心目标: 满足感表达 + 品牌 Logo 展示 + 行动号召（CTA）。

画面表现: 满足的笑容 + 干净的品牌 Packaging 展台落地。

Gemini / Veo 分镜 Prompt 示范:

** Shot 6 - Consumer Satisfaction**

Visual: Close-up of a person taking a satisfying bite of the fry, showing a genuinely delighted facial expression, licking a speck of honey butter powder off their finger tip.

Camera: Shallow depth of field eye-level close-up.

** Shot 7 - Brand Call-to-Action**

Visual: Clean studio background. Two colorful packages (Honey Butter & Tomato flavor) hero-shot in the center. Fresh potatoes, tomato slices, and honeycombs neatly arranged around them. Animated brand logo pops up with text: "一口脆爽，双重美味！"

Camera: Static hero shot, slight tilt up.

Lighting: Bright, clean studio product lighting.

第三步：提交给 Gemini 的整体指令（System Prompt 模板）

你可以将以下这段话直接复制发给 Gemini，让它帮你想出更多具体的分镜方案：

Plaintext
你是一位精通 AI 视频生成的食品广告导演（擅长 Google Veo / Sora 提示词设计）。
请为一款【中式番茄味/蜂蜜黄油味薯条】创作一条 30 秒的短视频广告脚本。

格式要求：
1. 请按 [0-3s 钩子]、[3-10s 场景]、[10-22s 食欲爆发]、[22-30s 品牌收尾] 拆解。
2. 每个镜头提供：
   - 画面描述 (Visual)
   - 运镜指令 (Camera Movement)
   - 光影/材质细节 (Lighting & Texture)
   - 可直接复制给 Veo 生成视频的英文 Prompt。

---

## Q12 · G · 收官：把 11 篇串成一个总模板

**问：** 有没有一个从 brief 到成片的标准 prompt 工作流，能把「时长锁定 + 中英文分层 + 资产一致性 + 三层运镜解耦 + 排除项 + 中性参考图」串成一套固定模板？

**答：**

一套完整、高可执行性的 AI 食品广告短片（Veo / Gemini）标准 Prompt 工作流模板，专门针对中式零食/休闲食品（如蜂蜜黄油薯条、番茄味膨化零食等）的视听语言与分镜生成进行了深度优化。

AI 食品广告短片：标准 Prompt 7层工作流模板

在向 Gemini 输入生成脚本/分镜 Prompt，或向 Veo 输入单镜头视频生成 Prompt 时，可直接套用以下通用结构：

Plaintext
[【1. 时长与节奏锁定】] + [【2. 核心主体与资产一致性】] + [【3. 场景与光影氛围】] + [【4. 三层运镜解耦】] + [【5. 中英文分层描述】] + [【6. 排除项 (Negative Prompt)】] + [【7. 中性参考图/首尾帧指引】]

模块拆解与具体写法
1. 时长锁定 (Duration & Pace Control)

原理：Veo/Sora 等视频大模型对模糊的时长描述（如“慢慢地”、“很快”）理解差异极大。必须精准限定秒数与帧率，并搭配时间轴运镜描述。

写法标准：时长：X秒 | 帧率：60fps (慢动作) / 24fps (电影感) | 动作时间轴：0-2s [动作A] -> 2-4s [动作B]

2. 资产一致性 (Asset Consistency Anchors)

原理：AI 生成食品最忌讳同一产品在不同镜头中“变样”（如薯条形状、包装配色、调味粉颗粒分布）。

锁定三要素：

形态锚点 (Shape/Texture)：黄金微卷波浪切/直切薯条、表面沾附红/黄色调味粉末（Seasoning dust）、微焦边缘。

包装/品牌锚点 (Packaging Anchor)：明亮暖黄色/番茄红包装袋、亮光材质（Glossy metallic pouch）、固定 Logo 位置。

色彩 HEX/PANTONE：如蜂蜜黄油色 #F4C430、番茄红 #E32636。

3. 三层运镜解耦 (3-Layer Camera Motion Decoupling)

将镜头运动拆分为主体运动、镜头轨道、光影/环境动态三层，避免指令混淆：

Layer 1: 主体动作 (Subject Motion)：薯条从空中倾泻落下 / 蜂蜜倾泻流淌 / 番茄炸裂爆出汁水。

Layer 2: 摄像机轨道 (Camera Path)：高帧率极速俯冲（FPV dive） -> 冰冻时间（Bullet time） -> 360度环绕（Arc orbit）。

Layer 3: 镜头光学参数 (Lens & Optical Dynamics)：90mm 探针镜头（Probe lens）、f/2.8 大光圈微距（Macro）、浅景深（Shallow DOF）、粒子景深虚化（Bokeh particles）。

4. 中英文分层 (Bilingual Layering)

原理：Gemini / Veo 对英文提示词在光学、摄像机运动、视觉材质上的理解准确度远高于中文；而中文在食品意境、口感修饰词、神态上表达更精准。

分层策略：结构框架与视觉修饰采用 中文意境 + 英文精准学术术语/视听术语 双语对照。

5. 排除项 (Negative Prompts)

食品专用 negative prompt：塑料感（plastic look）、过度磨皮（over-smoothed）、变形的食指/手部（deformed hands）、模糊的粉末（blurry dust）、融化的包装（melting package）、低分辨率胶片躁点（dirty noise）。

6. 中性参考图 / 首尾帧指引 (Neutral Reference Image / Keyframe Prompt)

中性图原则：提供一张无复杂背景、高光均匀、包装/产品特写清楚的干净白底/木纹底图，作为 Image-to-Video 的 Consistency Control 图。

案例落地：实战 Prompt 模板（以“蜂蜜黄油薯条”广告镜头为例）

可以直接复制并根据需求修改以下模板：

🎯 镜头名称：【极致诱惑】蜂蜜滴落与金黄薯条特写 (Macro Hero Shot)
Plaintext
【1. 时长与节奏 / Duration & Pace】
- Exact Duration: 4 seconds (4s)
- Frame Rate: 120fps ultra slow-motion (慢特写)
- Timeline: 
  * 0.0s - 2.0s: Honey slowly drips onto the crispy french fry.
  * 2.0s - 4.0s: Camera smoothly orbits around the fry, showing glistening butter melted on the golden texture.

【2. 资产一致性 / Asset Consistency Anchors】
- Product Anchor: Premium crinkle-cut golden potato fries, coated with fine honey-butter seasoning powder (fine yellow sugar crystals and parsley flakes).
- Color Palette: Warm Golden Yellow (#F4C430), Rich Amber Honey (#FFBF00), Creamy White Butter.
- Texture: Crispy exterior texture with microscopic air pockets, glistening liquid surface glaze.

【3. 三层运镜解耦 / 3-Layer Camera Motion】
- Layer 1 (Subject Motion): Golden viscous honey drapes smoothly over the fry in extreme macro detail; butter melts gradually into the crevices.
- Layer 2 (Camera Movement): Slow-motion probe lens macro tracking, starting with a tight 45-degree close-up, then slowly executing a 30-degree arc orbit around the fry center.
- Layer 3 (Optical & Lighting): Probe macro lens (Laowa 24mm f/14 Probe), shallow depth of field, sharp focus on the honey droplet, soft cinematic rim lighting (侧后方轮廓光), warm volumetric backlight creating golden bokeh in the background.

【4. 中英文视觉描述 / Fine Visual Details】
- 视觉风格 / Style: High-end Commercial TVC, 8K Resolution, Photorealistic, Mouth-watering Appetite Appeal (高质感商业广告，美食诱惑特写).
- 光影与材质 / Lighting & Material: Crisp surface lighting highlighting the crunchiness, realistic liquid refraction in honey, warm studio backlight.

【5. 排除项 / Negative Prompts】
- Negative: plastic texture, cartoonish, oversaturated artificial yellow, blurry seasoning, deformed fry shape, camera shake, low lighting, dark shadows, text, watermark, human fingers, raw potato look.

【6. 参考图/控制帧指引 / Image Control Guide】
- Reference Image Type: High-resolution neutral macro studio photograph of the honey-butter potato fry on a clean dark slate surface under studio key light.

完整工作流：从 Brief 到 成片（4步 SOP）
[步骤 1: Gemini 撰写分镜 Brief] 
        ↓
[步骤 2: 套用 7层 Prompt 模板转化为 Veo 单镜头指令] 
        ↓
[步骤 3: 提取/生成产品“中性资产参考图”] 
        ↓
[步骤 4: Veo 图生视频 (Image+Text to Video) 批量生成与垫片拼合]


Step 1：用 Gemini 拆解故事板 (Storyboard)

向 Gemini 输入产品特点（如：新上市番茄爆汁薯片，主打爽脆酸甜），让 Gemini 生成 3~5 个 3-4 秒的镜头脚本（Hero shot, Action shot, Flavor explosion shot, Packaging reveal shot）。

Step 2：填入上述“7层标准模板”

将 Gemini 输出的镜头脚本放入模板中，锁定每个镜头的 Duration、Camera Path 和 Asset Anchors。

Step 3：准备 1-2 张固定资产“中性图” (Neutral Ref Images)

包含：① 单个薯条/薯片的极致微距图（无背景/暗底）；② 包装袋的 3D 正面渲染图。

Step 4：Veo 生成与控帧

输入 Prompt 并挂载中性图作为 Image Prompt 或 First Frame，将生成的 4 秒片段导入剪映/Premiere 拼接，加上音效（炸裂声/脆响声/蜂蜜流动声）即成片。

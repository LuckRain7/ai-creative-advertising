import{_ as a,o as n,c as p,a2 as e}from"./chunks/framework.CHeM0PsO.js";const h=JSON.parse('{"title":"04a · 即梦执行表（交付 v1）","description":"","frontmatter":{},"headers":[],"relativePath":"lab/shuangyu-fries/04a-jimeng-v1.md","filePath":"lab/shuangyu-fries/04a-jimeng-v1.md","lastUpdated":1786327499000}'),l={name:"lab/shuangyu-fries/04a-jimeng-v1.md"};function t(i,s,c,o,d,r){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="_04a-·-即梦执行表-交付-v1" tabindex="-1">04a · 即梦执行表（交付 v1） <a class="header-anchor" href="#_04a-·-即梦执行表-交付-v1" aria-label="Permalink to &quot;04a · 即梦执行表（交付 v1）&quot;">​</a></h1><blockquote><p>阶段 4 · 执行 ｜ 2026-08-09 ｜ <strong>内部工作文档，可直接粘贴使用</strong></p><p>本表把 <a href="./03-storyboard">03 · 分镜</a> 与 <a href="./04-prompts">04 · Prompt 组</a> 落到即梦：Prompt 全部继承 04 的五段式与内容边界，只多两件事——<strong>逐镜标明配哪张参考图</strong>、<strong>标明即梦里的粘贴位置</strong>。</p><p>镜头编号与 03/04 一一对应。换可灵 / Veo 时回 04 的换工具表。</p><p>20s 四段精简版（全 Gemini 生成）见 <a href="./04b-gemini-v1">04b · Gemini 执行表</a>。</p><p>B 片（开盖片）见 <a href="./04c-b-jimeng-v1">04c · B 片即梦</a> / <a href="./04d-b-gemini-v1">04d · B 片 Gemini</a>。</p></blockquote><h2 id="交付范围" tabindex="-1">交付范围 <a class="header-anchor" href="#交付范围" aria-label="Permalink to &quot;交付范围&quot;">​</a></h2><p>这一版即 03 定义的 demo 版：<strong>工艺段落完整、产品段落将就</strong>，先交付一版完整的。</p><table tabindex="0"><thead><tr><th></th><th>本版（v1）</th><th>成片版</th></tr></thead><tbody><tr><td>镜头 1–9</td><td>即梦生成</td><td>同左，精修</td></tr><tr><td>镜头 10 · 产品出镜</td><td>客户渲染图去背 + 后期动态</td><td>必须用设计源文件重做</td></tr><tr><td>字幕「80~90℃」/ 镜头 6</td><td>打上 / 做（<strong>钩子，待 2b、2c 确认</strong>）</td><td>确认后方可保留</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">交付前自查</p><p>发客户前过一遍<a href="./03-storyboard#字幕红线">字幕红线</a>：非油炸、更健康、低脂、0 负担、不含丙烯酰胺、与传统油炸的任何对比——<strong>一律不出现</strong>。</p></div><h2 id="参考图-已备好-在-images-refs" tabindex="-1">参考图（已备好，在 <code>images/refs/</code>） <a class="header-anchor" href="#参考图-已备好-在-images-refs" aria-label="Permalink to &quot;参考图（已备好，在 \`images/refs/\`）&quot;">​</a></h2><table tabindex="0"><thead><tr><th>文件</th><th>来源</th><th>用途</th><th>注意</th></tr></thead><tbody><tr><td><code>stick-product.jpg</code></td><td>打样稿产品大图裁出，无文字无条码</td><td>镜头 7/8/9 主体参考</td><td>锁定成品外观：浅金、带红色调味颗粒、长条形</td></tr><tr><td><code>render-cup.jpg</code></td><td>客户渲染图（商用授权待确认）</td><td>镜头 10 合成素材</td><td><strong>需去背</strong>；不进即梦</td></tr><tr><td><code>cup-front.jpg</code></td><td>开盖视频 0.2s 帧</td><td>镜头 10 合成的杯型 / 光效参考</td><td>仅参考，不进即梦</td></tr><tr><td><code>logo.jpg</code></td><td>客户提供</td><td>片尾落版合成</td><td>白底需去背；带不带 ® 待客户确认</td></tr></tbody></table><div class="danger custom-block"><p class="custom-block-title">只给即梦「干净」的图</p><p>允许进即梦的参考图只有无文字的实物/产品图（<code>stick-product.jpg</code>）。<strong>带文字的包装平面、工程文件全图、logo 图一律不能做参考图</strong>——一旦参考，模型会学会往画面里画中文和 logo，那条素材直接作废。包装文字的像素只走合成通道。这与 04 的防事故负面词是同一道红线。</p></div><p><strong>镜头 1–3 不配参考图</strong>：要的是带薄土的写实生土豆与鲜切土豆条，包装上的土豆是艺术渲染（螺旋削皮），风格与纪录片质感冲突，文本锁定更稳。</p><h2 id="粘贴位置对照" tabindex="-1">粘贴位置对照 <a class="header-anchor" href="#粘贴位置对照" aria-label="Permalink to &quot;粘贴位置对照&quot;">​</a></h2><table tabindex="0"><thead><tr><th>内容</th><th>即梦输入位置</th></tr></thead><tbody><tr><td>首帧 / 尾帧 Prompt</td><td>AI 图像 → 文生图提示词</td></tr><tr><td>负面词</td><td>AI 图像 → 「不希望出现的内容」，全量粘贴</td></tr><tr><td>主体参考图</td><td>AI 图像 → 参考图（主体），强度中高</td></tr><tr><td>视频 Prompt</td><td>AI 视频 → 图生视频；首尾帧镜勾「使用尾帧」，按先首帧后尾帧上传</td></tr><tr><td>视频的无文字约束</td><td>视频无独立负面栏，已改写进每条视频 Prompt 结尾</td></tr></tbody></table><p>参数：1080p、单次 5 秒、24fps（可选则选）；<strong>每镜跑 4–6 条</strong>，微距与慢动作废片率高。</p><h2 id="固定负面词-粘贴进「不希望出现的内容」" tabindex="-1">固定负面词（粘贴进「不希望出现的内容」） <a class="header-anchor" href="#固定负面词-粘贴进「不希望出现的内容」" aria-label="Permalink to &quot;固定负面词（粘贴进「不希望出现的内容」）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>深褐色，焦黑，油腻反光，表面浮油，</span></span>
<span class="line"><span>文字，logo，品牌标识，包装袋，包装盒，商标，日文，中文字符，</span></span>
<span class="line"><span>卡通，3D渲染感，塑料感，畸变，多余的手指，水印</span></span></code></pre></div><hr><h2 id="镜头-1-·-土豆落在案板-·-去皮-首尾帧" tabindex="-1">镜头 1 · 土豆落在案板 · 去皮（首尾帧） <a class="header-anchor" href="#镜头-1-·-土豆落在案板-·-去皮-首尾帧" aria-label="Permalink to &quot;镜头 1 · 土豆落在案板 · 去皮（首尾帧）&quot;">​</a></h2><p><strong>图像 · 首帧</strong>｜无参考图</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一整颗新鲜马铃薯刚落在深色胡桃木案板上，表皮微带薄土与细小凹坑，</span></span>
<span class="line"><span>薯皮呈自然的浅褐黄色，案板上有几粒散落的土粒，背景深色虚化，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/2.0，平视略俯，</span></span>
<span class="line"><span>侧逆光，一束硬光从右后方打来勾出表皮质感与轮廓，背景压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>图像 · 尾帧</strong>｜无参考图</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>同一块案板上，马铃薯已去皮，果肉呈乳白微黄，表面微湿，</span></span>
<span class="line"><span>削下的薯皮卷曲落在土豆旁，案板上土粒仍在，</span></span>
<span class="line"><span>背景深色虚化，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/2.0，平视略俯，</span></span>
<span class="line"><span>侧逆光勾出果肉轮廓，背景压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>视频 · 首尾帧</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>马铃薯落在案板上轻微弹跳一次，随后表皮被削离，</span></span>
<span class="line"><span>薯皮卷曲落向一旁，露出乳白微黄的果肉。慢动作，镜头固定。</span></span>
<span class="line"><span>画面中不出现任何文字、logo。</span></span></code></pre></div><p><strong>验收</strong>：首尾帧同一颗土豆、同一机位；去皮后<strong>无残留表皮</strong>；去皮动作扭曲就废。</p><hr><h2 id="镜头-2-·-刀切入土豆-首尾帧" tabindex="-1">镜头 2 · 刀切入土豆（首尾帧） <a class="header-anchor" href="#镜头-2-·-刀切入土豆-首尾帧" aria-label="Permalink to &quot;镜头 2 · 刀切入土豆（首尾帧）&quot;">​</a></h2><p><strong>图像 · 首帧</strong>｜无参考图</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一把厚背主厨刀的刀刃刚接触去皮马铃薯的表面，尚未切入，</span></span>
<span class="line"><span>去皮后的马铃薯呈乳白微黄，放在深色胡桃木案板上，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/2.0，平视，</span></span>
<span class="line"><span>侧逆光为主，顶部补一盏柔光提亮即将出现的切面，背景压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>图像 · 尾帧</strong>｜无参考图</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>主厨刀已切入去皮马铃薯约三分之二，切面完整露出，</span></span>
<span class="line"><span>切面呈乳白微黄，质地致密，渗出细小的淀粉汁水与水珠，</span></span>
<span class="line"><span>纹理清晰可见，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/2.0，平视，</span></span>
<span class="line"><span>侧逆光，顶光提亮切面使汁水反光，背景压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>视频 · 首尾帧</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>刀刃匀速切入马铃薯，切面逐渐露出，切口渗出淀粉汁水。</span></span>
<span class="line"><span>慢动作，镜头固定。画面中不出现任何文字、logo。</span></span></code></pre></div><p><strong>验收</strong>：切面乳白微黄、有汁水；切面发干发灰就废。</p><hr><h2 id="镜头-3-·-土豆条落下" tabindex="-1">镜头 3 · 土豆条落下 <a class="header-anchor" href="#镜头-3-·-土豆条落下" aria-label="Permalink to &quot;镜头 3 · 土豆条落下&quot;">​</a></h2><p><strong>图像 · 首帧</strong>｜无参考图</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一把切好的马铃薯条悬停在空中，完全不带皮，</span></span>
<span class="line"><span>条形整齐但边缘带自然毛刺与不规则棱角，</span></span>
<span class="line"><span>断面呈乳白微黄，可见细微纤维纹理，</span></span>
<span class="line"><span>背景为深色虚化的厨房台面，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/1.8，平视，</span></span>
<span class="line"><span>顶光为主，侧面补一点冷光勾边，背景压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>视频 · 图生视频</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>马铃薯条从画面上方缓慢落下，轻微翻转，落出画面下缘。</span></span>
<span class="line"><span>慢动作，镜头固定。画面中不出现任何文字、logo。</span></span></code></pre></div><p><strong>验收</strong>：<strong>边缘带毛刺、棱角不规则 = 真土豆切的</strong>，这是「原薯鲜切」唯一的画面物证；出片边缘太规整，重跑。<strong>薯条任何一面带皮即废</strong>——去皮在镜头 1 已完成。</p><hr><h2 id="镜头-4-·-真空舱内的低温油炸-首尾帧" tabindex="-1">镜头 4 · 真空舱内的低温油炸（首尾帧） <a class="header-anchor" href="#镜头-4-·-真空舱内的低温油炸-首尾帧" aria-label="Permalink to &quot;镜头 4 · 真空舱内的低温油炸（首尾帧）&quot;">​</a></h2><p><strong>图像 · 首帧</strong>｜无参考图</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>封闭金属舱室内部视角，透过观察窗看到清澈的浅金色食用油，</span></span>
<span class="line"><span>油面平静无波，几根马铃薯条刚刚没入油中，</span></span>
<span class="line"><span>舱壁为哑光不锈钢，环境昏暗，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中特写，浅景深，平视，</span></span>
<span class="line"><span>舱内单一暖黄光源从上方照亮油面，四周迅速衰减为暗部，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>图像 · 尾帧</strong>｜无参考图</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>同一舱室内，马铃薯条悬浮在浅金色油中，</span></span>
<span class="line"><span>油面依然平静，只有极细密的小气泡缓慢上升，数量不多，</span></span>
<span class="line"><span>薯条颜色略变浅金，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中特写，浅景深，平视，</span></span>
<span class="line"><span>舱内单一暖黄光源，四周暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>视频 · 首尾帧</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>细密的小气泡从马铃薯条表面缓慢上升至油面破裂，</span></span>
<span class="line"><span>油面保持平静，无剧烈翻滚，无大量白色泡沫。</span></span>
<span class="line"><span>镜头极缓慢推近。画面中不出现任何文字、logo。</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">全片最容易做错的一镜</p><p>模型对「油炸」的默认是剧烈翻滚 + 大量白色气泡（常压油炸）。真空低温是<strong>油面近乎平静、气泡细密缓慢</strong>。出片若翻滚沸腾，<strong>必须废掉重跑</strong>——它是全片唯一的「不一样」视觉证据。</p></div><hr><h2 id="镜头-5-·-多孔结构形成-首尾帧" tabindex="-1">镜头 5 · 多孔结构形成（首尾帧） <a class="header-anchor" href="#镜头-5-·-多孔结构形成-首尾帧" aria-label="Permalink to &quot;镜头 5 · 多孔结构形成（首尾帧）&quot;">​</a></h2><p><strong>图像 · 首帧</strong>｜无参考图</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一根马铃薯条的纵向剖面极致微距，内部组织致密，</span></span>
<span class="line"><span>细胞结构紧密排列，含水饱满，呈半透明的乳白微黄，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>极致微距，科学摄影质感，浅景深，</span></span>
<span class="line"><span>内部透光，剖面自内向外发出柔和的光，边缘轮廓压暗，</span></span>
<span class="line"><span>16:9，极高细节</span></span></code></pre></div><p><strong>图像 · 尾帧</strong>｜无参考图</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>同一根马铃薯条的纵向剖面，内部已形成大量细密孔洞，</span></span>
<span class="line"><span>孔洞大小不一、相互连通，形成疏松多孔的海绵状结构，</span></span>
<span class="line"><span>孔壁变薄呈半透明，整体呈浅金色，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>极致微距，科学摄影质感，浅景深，</span></span>
<span class="line"><span>内部透光，光从孔洞间穿过使孔壁边缘发亮，</span></span>
<span class="line"><span>16:9，极高细节</span></span></code></pre></div><p><strong>视频 · 首尾帧</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>剖面内部的孔洞由小逐渐扩张、相互连通，</span></span>
<span class="line"><span>形成疏松的多孔结构，过程平缓连续。</span></span>
<span class="line"><span>镜头极缓慢推近。画面中不出现任何文字、logo。</span></span></code></pre></div><p><strong>验收</strong>：首尾两帧必须是<strong>同一根薯条、同一机位</strong>，只有内部结构在变；机位跳了就废。</p><hr><h2 id="镜头-6-·-离心脱油-须-2c-确认" tabindex="-1">镜头 6 · 离心脱油（须 2c 确认） <a class="header-anchor" href="#镜头-6-·-离心脱油-须-2c-确认" aria-label="Permalink to &quot;镜头 6 · 离心脱油（须 2c 确认）&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">前提未确认</p><p>物料清单 2c（本产品是否有脱油工序）未确认。<strong>确认为否则整镜删除</strong>，不做「看起来像脱油」的替代画面。demo 里照做，是钩子。</p></div><p><strong>图像 · 首帧</strong>｜无参考图</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>工业离心机的不锈钢内筒特写，筒内铺着一层浅金色的马铃薯条，</span></span>
<span class="line"><span>筒壁有细密的滤孔，机器静止，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中景，浅景深，略俯视，</span></span>
<span class="line"><span>冷白色工业光源从上方打下，金属表面有硬朗的反光，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>视频 · 图生视频</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>离心机内筒开始高速旋转，马铃薯条被甩向筒壁，</span></span>
<span class="line"><span>细小的油滴从滤孔向外飞出，形成放射状轨迹。</span></span>
<span class="line"><span>旋转由慢加快，出现自然的运动模糊。</span></span>
<span class="line"><span>镜头固定。画面中不出现任何文字、logo。</span></span></code></pre></div><hr><h2 id="镜头-7-·-断面逆光透光-首尾帧" tabindex="-1">镜头 7 · 断面逆光透光（首尾帧） <a class="header-anchor" href="#镜头-7-·-断面逆光透光-首尾帧" aria-label="Permalink to &quot;镜头 7 · 断面逆光透光（首尾帧）&quot;">​</a></h2><p><strong>图像 · 首帧</strong>｜参考图 <code>stick-product.jpg</code>（主体参考）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一根浅金色的薯条脆竖立在深色石质台面上，断面朝向镜头，</span></span>
<span class="line"><span>断面可见细密的多孔结构，表面干爽无油光，</span></span>
<span class="line"><span>背景纯黑，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/1.8，平视，</span></span>
<span class="line"><span>强逆光从正后方直射，光线尚未穿透断面，背景纯黑，</span></span>
<span class="line"><span>16:9，极高细节</span></span></code></pre></div><p><strong>图像 · 尾帧</strong>｜参考图 <code>stick-product.jpg</code>（主体参考）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>同一根薯条脆，强逆光穿透断面，</span></span>
<span class="line"><span>多孔结构被光点亮，孔洞边缘呈明亮的金色，</span></span>
<span class="line"><span>整个断面像蜂窝一样透光，表面干爽无油光，</span></span>
<span class="line"><span>背景纯黑，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/1.8，平视，</span></span>
<span class="line"><span>强逆光穿透，断面发光，背景纯黑，</span></span>
<span class="line"><span>16:9，极高细节</span></span></code></pre></div><p><strong>视频 · 首尾帧</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>逆光逐渐增强，光线穿透薯条脆的断面，</span></span>
<span class="line"><span>多孔结构由暗转亮，孔洞边缘依次点亮。</span></span>
<span class="line"><span>镜头极缓慢推近，其余静止。画面中不出现任何文字、logo。</span></span></code></pre></div><p><strong>验收</strong>：薯条脆外观须与参考图一致（浅金 + 红色调味颗粒）；颜色偏白或变成普通薯条就废。</p><hr><h2 id="镜头-8-·-掰断瞬间-首尾帧" tabindex="-1">镜头 8 · 掰断瞬间（首尾帧） <a class="header-anchor" href="#镜头-8-·-掰断瞬间-首尾帧" aria-label="Permalink to &quot;镜头 8 · 掰断瞬间（首尾帧）&quot;">​</a></h2><p><strong>图像 · 首帧</strong>｜参考图 <code>stick-product.jpg</code>（主体参考）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>两只手的手指捏住一根浅金色薯条脆的两端，即将掰断，</span></span>
<span class="line"><span>薯条脆表面干爽，可见细微的多孔质地，</span></span>
<span class="line"><span>背景深色虚化，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/2.0，平视，</span></span>
<span class="line"><span>侧面硬光，在薯条脆表面形成清晰的明暗交界，背景压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>图像 · 尾帧</strong>｜参考图 <code>stick-product.jpg</code>（主体参考）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>薯条脆已断成两截，断口参差，</span></span>
<span class="line"><span>大量细小碎屑向四周飞散，断面露出多孔结构，</span></span>
<span class="line"><span>背景深色虚化，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/2.0，平视，</span></span>
<span class="line"><span>侧面硬光照亮飞散的碎屑，背景压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>视频 · 首尾帧</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>手指用力，薯条脆断裂，断口处细小碎屑向四周飞散。</span></span>
<span class="line"><span>高速摄影般的慢动作，断裂瞬间清晰可见。</span></span>
<span class="line"><span>镜头固定。画面中不出现任何文字、logo。</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">手部是高风险区</p><p>多指、断指、关节反折是最常见废片原因。<strong>只入画两根手指的指尖</strong>，不出现完整手掌；手部一出问题，改跑「薯条脆自然折断、不出现手」版本——重点是断口和碎屑，不是手。</p></div><hr><h2 id="镜头-9-·-成品质感" tabindex="-1">镜头 9 · 成品质感 <a class="header-anchor" href="#镜头-9-·-成品质感" aria-label="Permalink to &quot;镜头 9 · 成品质感&quot;">​</a></h2><p><strong>图像 · 首帧</strong>｜参考图 <code>stick-product.jpg</code>（主体参考）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一堆浅金色的薯条脆散落在深色石质台面上，条形整齐边缘带自然毛刺，</span></span>
<span class="line"><span>颜色浅金偏黄，不是深褐色，表面干爽哑光，无油亮反光，</span></span>
<span class="line"><span>可见细微的多孔表面质地，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>特写，浅景深 f/2.2，略俯视，</span></span>
<span class="line"><span>柔和顶光为主，侧面补一盏硬光勾勒边缘，背景压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>视频 · 图生视频</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>更多薯条脆从画面上方缓慢落下，堆叠在已有的一堆上，</span></span>
<span class="line"><span>落下时相互碰撞、轻微弹跳。</span></span>
<span class="line"><span>慢动作，镜头缓慢横移。画面中不出现任何文字、logo。</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">颜色是合规要点</p><p><strong>浅金 ≠ 深褐。</strong> 出片是深褐色就和「低温」工艺链自相矛盾——负面词里的「深褐色、焦黑」就是防这个。</p></div><hr><h2 id="镜头-10-·-产品出镜-不生成主体" tabindex="-1">镜头 10 · 产品出镜（不生成主体） <a class="header-anchor" href="#镜头-10-·-产品出镜-不生成主体" aria-label="Permalink to &quot;镜头 10 · 产品出镜（不生成主体）&quot;">​</a></h2><p><strong>包装本身不经过任何生成模型。</strong> 流程：</p><ol><li><code>render-cup.jpg</code> 去背，包装像素级保留；</li><li>背景与光环境用即梦生成（下方 Prompt，<strong>画面里不放产品</strong>）；</li><li>设计软件合成，后期做缓慢推近 + 一道光扫 + 轻微景深变化；<strong>不做变形、不做形变过渡</strong>；</li><li>杯型与卷边、铝箔盖的光效对照 <code>cup-front.jpg</code>；角度取正面平视，<strong>不刻意突出日文副标</strong>；</li><li>片尾落版用 <code>logo.jpg</code>（去背后叠加），带不带 ® 等客户确认。</li></ol><p><strong>图像 · 背景</strong>｜无参考图</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>纯净的深色石质台面，背景为柔和的暖调渐变，</span></span>
<span class="line"><span>台面上有柔和的光斑与轻微的景深虚化，画面中央留空，</span></span>
<span class="line"><span>无任何物体，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中景，浅景深，平视，</span></span>
<span class="line"><span>影棚布光，主光从左上方 45 度，右侧柔光补光，背景轻微渐变压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>视频 · 图生视频</strong>（可选，背景微动）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>光斑极缓慢地移动，景深轻微变化。</span></span>
<span class="line"><span>画面中央保持留空。画面中不出现任何文字、logo、物体。</span></span></code></pre></div><hr><h2 id="生成顺序" tabindex="-1">生成顺序 <a class="header-anchor" href="#生成顺序" aria-label="Permalink to &quot;生成顺序&quot;">​</a></h2><p>先锁定产品形象，再做工艺段：</p><p><strong>9 → 7 → 8</strong>（产品三镜，参考图锁定外观，先跑通）→ <strong>1 → 2 → 3</strong> → <strong>4 → 5</strong> → <strong>6</strong> → <strong>10 背景</strong>。</p><p>镜头 5 与 7 必须成对保留、中间隔镜头 6（<a href="./03-storyboard#镜头-5-7-一个原因-一个结果">因果链</a>），剪辑时不要拆散。</p><h2 id="生成日志" tabindex="-1">生成日志 <a class="header-anchor" href="#生成日志" aria-label="Permalink to &quot;生成日志&quot;">​</a></h2><p>每镜跑了几条、采用哪条、废的为什么废，<strong>当场记进 <a href="./05-genlog">05 · 生成日志</a></strong>，事后记不准。</p><hr><p><strong>上一步</strong> ← <a href="./04-prompts">04 · Prompt 组</a> ｜ <strong>下一步</strong> → <a href="./04b-gemini-v1">04b · Gemini 执行表</a></p>`,107)])])}const b=a(l,[["render",t]]);export{h as __pageData,b as default};

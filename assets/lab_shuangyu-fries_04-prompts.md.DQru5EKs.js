import{_ as l,C as i,o,c as d,a2 as p,j as a,a as n,E as e}from"./chunks/framework.CHeM0PsO.js";const P=JSON.parse('{"title":"04 · Prompt 组（A 片 demo）","description":"","frontmatter":{},"headers":[],"relativePath":"lab/shuangyu-fries/04-prompts.md","filePath":"lab/shuangyu-fries/04-prompts.md","lastUpdated":1786291067000}'),c={name:"lab/shuangyu-fries/04-prompts.md"},r={id:"镜头-2-·-刀切入土豆",tabindex:"-1"},g={id:"镜头-4-·-真空舱内的低温油炸",tabindex:"-1"},h={id:"镜头-5-·-多孔结构形成",tabindex:"-1"},b={id:"镜头-6-·-离心脱油",tabindex:"-1"},u={id:"镜头-7-·-断面逆光透光",tabindex:"-1"},v={id:"镜头-8-·-掰断瞬间",tabindex:"-1"};function m(k,s,y,C,_,x){const t=i("Badge");return o(),d("div",null,[s[18]||(s[18]=p(`<h1 id="_04-·-prompt-组-a-片-demo" tabindex="-1">04 · Prompt 组（A 片 demo） <a class="header-anchor" href="#_04-·-prompt-组-a-片-demo" aria-label="Permalink to &quot;04 · Prompt 组（A 片 demo）&quot;">​</a></h1><blockquote><p>阶段 4 · Prompt ｜ 2026-08-06 ｜ <strong>内部工作文档，可直接粘贴使用</strong></p></blockquote><p>按<a href="/prompts/structure">结构通法</a>的五段式写：主体 / 风格 / 镜头 / 光影 / 参数。<strong>风格段全片固定</strong>，逐镜只改主体与动作——这是保持十个镜头质感一致的主要手段。</p><p>镜头对应关系见 <a href="./03-storyboard">03 · 分镜</a>。<strong>镜头 10（产品出镜）不在此列</strong>，它走后期合成，不经过生成模型。</p><div class="tip custom-block"><p class="custom-block-title">在即梦执行</p><p>全片落在即梦时，用 <a href="./04a-jimeng-v1">04a · 即梦执行表</a>：Prompt 与本表一致并逐镜展开，另标明每镜配哪张参考图、粘贴到即梦哪个输入位。</p></div><h2 id="工具分工" tabindex="-1">工具分工 <a class="header-anchor" href="#工具分工" aria-label="Permalink to &quot;工具分工&quot;">​</a></h2><table tabindex="0"><thead><tr><th>环节</th><th>工具</th><th>说明</th></tr></thead><tbody><tr><td>首帧图</td><td><strong>即梦 / Gemini 图像</strong></td><td>先把静帧调满意，再让它动</td></tr><tr><td>视频</td><td><strong>可灵 AI</strong></td><td>图生视频为主；标注「首尾帧」的镜头用首尾帧模式</td></tr><tr><td>镜头 10</td><td>AE / 剪映</td><td>客户渲染图去背 + 后期动态，<strong>不生成</strong></td></tr></tbody></table><h2 id="固定风格段" tabindex="-1">固定风格段 <a class="header-anchor" href="#固定风格段" aria-label="Permalink to &quot;固定风格段&quot;">​</a></h2><p><strong>每条图像 Prompt 都拼上这一段，不要改动。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感</span></span></code></pre></div><h2 id="固定负面词" tabindex="-1">固定负面词 <a class="header-anchor" href="#固定负面词" aria-label="Permalink to &quot;固定负面词&quot;">​</a></h2><p><strong>每条都带上。前四个是质感控制，后四个是防事故。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>深褐色，焦黑，油腻反光，表面浮油，</span></span>
<span class="line"><span>文字，logo，品牌标识，包装袋，包装盒，商标，日文，中文字符，</span></span>
<span class="line"><span>卡通，3D渲染感，塑料感，畸变，多余的手指，水印</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">负面词里的「文字 / logo / 包装」不能删</p><p>生成模型有很强的倾向自作主张加上包装或品牌字样——<strong>一旦出现，这条素材直接作废</strong>，因为那必然是个假包装（见 <a href="./03-storyboard#镜头-10-为什么坚持不生成">03 · 镜头 10 的说明</a>）。</p><p>这是这套 Prompt 里最容易被顺手删掉、也最不能删的一行。</p></div><hr><h2 id="镜头-1-·-土豆落在案板上" tabindex="-1">镜头 1 · 土豆落在案板上 <a class="header-anchor" href="#镜头-1-·-土豆落在案板上" aria-label="Permalink to &quot;镜头 1 · 土豆落在案板上&quot;">​</a></h2><p><strong>首帧图</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一整颗新鲜马铃薯放在深色胡桃木案板上，表皮微带薄土与细小凹坑，</span></span>
<span class="line"><span>薯皮呈自然的浅褐黄色，案板上有几粒散落的土粒，背景深色虚化，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高端食品广告微距摄影，接近纪录片的真实质感，暖调，</span></span>
<span class="line"><span>轻微胶片颗粒，自然肤色与食物色彩，不过度锐化、不过度饱和，</span></span>
<span class="line"><span>商业级布光，实拍感，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/2.0，平视略俯，</span></span>
<span class="line"><span>侧逆光，一束硬光从右后方打来勾出表皮质感与轮廓，背景压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>视频（图生视频）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>马铃薯从画面上方落下，接触案板后轻微弹跳一次，随即静止，</span></span>
<span class="line"><span>案板上的土粒被轻微震起。慢动作，整体动作幅度小。</span></span>
<span class="line"><span>镜头固定不动。</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">动作写小一点</p><p><a href="/prompts/structure#调试思路-出图不对时改哪一段">结构通法</a>里说的「动作扭曲 = 写得太快太复杂」，在食物落地这类镜头上尤其明显。</p><p><strong>一个动作、一次弹跳、镜头不动</strong>——比写「弹跳滚动后停下」出片率高得多。</p></div><hr>`,22)),a("h2",r,[s[0]||(s[0]=n("镜头 2 · 刀切入土豆 ",-1)),e(t,{type:"tip",text:"首尾帧"}),s[1]||(s[1]=n()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#镜头-2-·-刀切入土豆","aria-label":'Permalink to "镜头 2 · 刀切入土豆 <Badge type="tip" text="首尾帧" />"'},"​",-1))]),s[19]||(s[19]=p(`<p><strong>首帧图</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一把厚背主厨刀的刀刃刚接触马铃薯表面，尚未切入，</span></span>
<span class="line"><span>马铃薯放在深色胡桃木案板上，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[固定风格段]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/2.0，平视，</span></span>
<span class="line"><span>侧逆光为主，顶部补一盏柔光提亮即将出现的切面，背景压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>尾帧图</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>主厨刀已切入马铃薯约三分之二，切面完整露出，</span></span>
<span class="line"><span>切面呈乳白微黄，质地致密，渗出细小的淀粉汁水与水珠，</span></span>
<span class="line"><span>纹理清晰可见，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[固定风格段]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/2.0，平视，</span></span>
<span class="line"><span>侧逆光，顶光提亮切面使汁水反光，背景压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>视频（首尾帧）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>刀刃匀速切入马铃薯，切面逐渐露出，切口渗出淀粉汁水。</span></span>
<span class="line"><span>慢动作，镜头固定。</span></span></code></pre></div><hr><h2 id="镜头-3-·-土豆条落下" tabindex="-1">镜头 3 · 土豆条落下 <a class="header-anchor" href="#镜头-3-·-土豆条落下" aria-label="Permalink to &quot;镜头 3 · 土豆条落下&quot;">​</a></h2><p><strong>首帧图</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一把切好的马铃薯条悬停在空中，条形整齐但边缘带自然毛刺与不规则棱角，</span></span>
<span class="line"><span>断面呈乳白微黄，可见细微纤维纹理，</span></span>
<span class="line"><span>背景为深色虚化的厨房台面，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[固定风格段]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/1.8，平视，</span></span>
<span class="line"><span>顶光为主，侧面补一点冷光勾边，背景压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>视频（图生视频）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>马铃薯条从画面上方缓慢落下，轻微翻转，落出画面下缘。</span></span>
<span class="line"><span>慢动作，镜头固定。</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">这一镜的关键是「毛刺」</p><p><strong>边缘带毛刺、棱角不规则 = 真土豆切的。</strong> 薯粉压模成型的产品，边缘是绝对光滑规整的。</p><p>这个细节是「原薯鲜切」这个主张在画面上唯一的物证，Prompt 里不能省。如果出片边缘太规整，重跑。</p></div><hr>`,14)),a("h2",g,[s[3]||(s[3]=n("镜头 4 · 真空舱内的低温油炸 ",-1)),e(t,{type:"tip",text:"首尾帧"}),s[4]||(s[4]=n()),s[5]||(s[5]=a("a",{class:"header-anchor",href:"#镜头-4-·-真空舱内的低温油炸","aria-label":'Permalink to "镜头 4 · 真空舱内的低温油炸 <Badge type="tip" text="首尾帧" />"'},"​",-1))]),s[20]||(s[20]=p(`<p><strong>首帧图</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>封闭金属舱室内部视角，透过观察窗看到清澈的浅金色食用油，</span></span>
<span class="line"><span>油面平静无波，几根马铃薯条刚刚没入油中，</span></span>
<span class="line"><span>舱壁为哑光不锈钢，环境昏暗，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[固定风格段]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中特写，浅景深，平视，</span></span>
<span class="line"><span>舱内单一暖黄光源从上方照亮油面，四周迅速衰减为暗部，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>尾帧图</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>同一舱室内，马铃薯条悬浮在浅金色油中，</span></span>
<span class="line"><span>油面依然平静，只有极细密的小气泡缓慢上升，数量不多，</span></span>
<span class="line"><span>薯条颜色略变浅金，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[固定风格段]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中特写，浅景深，平视，</span></span>
<span class="line"><span>舱内单一暖黄光源，四周暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>视频（首尾帧）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>细密的小气泡从马铃薯条表面缓慢上升至油面破裂，</span></span>
<span class="line"><span>油面保持平静，无剧烈翻滚，无大量白色泡沫。</span></span>
<span class="line"><span>镜头极缓慢推近。</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">这一镜最容易做错</p><p>模型对「油炸」的默认理解是<strong>剧烈翻滚 + 大量白色气泡</strong>——那是常压油炸。</p><p><strong>真空低温不是那样。</strong> 负压下水的沸点降低，油面近乎平静，气泡细密缓慢。</p><p>如果出片是翻滚沸腾的，<strong>这条必须废掉重跑</strong>，不能将就——它是整支片子里唯一一个「不一样」的视觉证据，做成常规油炸就全白费了。</p><p>必要时在 Prompt 里追加：<code>油面平静，无沸腾，无大量气泡，无白色泡沫</code>。</p></div><hr>`,8)),a("h2",h,[s[6]||(s[6]=n("镜头 5 · 多孔结构形成 ",-1)),e(t,{type:"tip",text:"首尾帧"}),s[7]||(s[7]=n()),s[8]||(s[8]=a("a",{class:"header-anchor",href:"#镜头-5-·-多孔结构形成","aria-label":'Permalink to "镜头 5 · 多孔结构形成 <Badge type="tip" text="首尾帧" />"'},"​",-1))]),s[21]||(s[21]=p(`<p><strong>首帧图</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一根马铃薯条的纵向剖面极致微距，内部组织致密，</span></span>
<span class="line"><span>细胞结构紧密排列，含水饱满，呈半透明的乳白微黄，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[固定风格段]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>极致微距，科学摄影质感，浅景深，</span></span>
<span class="line"><span>内部透光，剖面自内向外发出柔和的光，边缘轮廓压暗，</span></span>
<span class="line"><span>16:9，极高细节</span></span></code></pre></div><p><strong>尾帧图</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>同一根马铃薯条的纵向剖面，内部已形成大量细密孔洞，</span></span>
<span class="line"><span>孔洞大小不一、相互连通，形成疏松多孔的海绵状结构，</span></span>
<span class="line"><span>孔壁变薄呈半透明，整体呈浅金色，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[固定风格段]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>极致微距，科学摄影质感，浅景深，</span></span>
<span class="line"><span>内部透光，光从孔洞间穿过使孔壁边缘发亮，</span></span>
<span class="line"><span>16:9，极高细节</span></span></code></pre></div><p><strong>视频（首尾帧）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>剖面内部的孔洞由小逐渐扩张、相互连通，</span></span>
<span class="line"><span>形成疏松的多孔结构，过程平缓连续。</span></span>
<span class="line"><span>镜头极缓慢推近。</span></span></code></pre></div><hr>`,7)),a("h2",b,[s[9]||(s[9]=n("镜头 6 · 离心脱油 ",-1)),e(t,{type:"warning",text:"须 2c 确认"}),s[10]||(s[10]=n()),s[11]||(s[11]=a("a",{class:"header-anchor",href:"#镜头-6-·-离心脱油","aria-label":'Permalink to "镜头 6 · 离心脱油 <Badge type="warning" text="须 2c 确认" />"'},"​",-1))]),s[22]||(s[22]=p(`<div class="warning custom-block"><p class="custom-block-title">这一镜的前提未确认</p><p>物料清单 2c（本产品是否有脱油工序）尚未确认。<strong>若确认为否，整镜删除</strong>，不做「看起来像脱油」的替代画面。见 <a href="./03-storyboard#镜头-6-这个产品唯一能正面回应油炸-油腻的东西">03 · 分镜</a>。</p></div><p><strong>首帧图</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>工业离心机的不锈钢内筒特写，筒内铺着一层浅金色的马铃薯条，</span></span>
<span class="line"><span>筒壁有细密的滤孔，机器静止，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[固定风格段]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中景，浅景深，略俯视，</span></span>
<span class="line"><span>冷白色工业光源从上方打下，金属表面有硬朗的反光，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>视频（图生视频）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>离心机内筒开始高速旋转，马铃薯条被甩向筒壁，</span></span>
<span class="line"><span>细小的油滴从滤孔向外飞出，形成放射状轨迹。</span></span>
<span class="line"><span>旋转由慢加快，出现自然的运动模糊。</span></span>
<span class="line"><span>镜头固定。</span></span></code></pre></div><hr>`,6)),a("h2",u,[s[12]||(s[12]=n("镜头 7 · 断面逆光透光 ",-1)),e(t,{type:"tip",text:"首尾帧"}),s[13]||(s[13]=n()),s[14]||(s[14]=a("a",{class:"header-anchor",href:"#镜头-7-·-断面逆光透光","aria-label":'Permalink to "镜头 7 · 断面逆光透光 <Badge type="tip" text="首尾帧" />"'},"​",-1))]),s[23]||(s[23]=p(`<p><strong>首帧图</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一根浅金色的薯条脆竖立在深色石质台面上，断面朝向镜头，</span></span>
<span class="line"><span>断面可见细密的多孔结构，表面干爽无油光，</span></span>
<span class="line"><span>背景纯黑，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[固定风格段]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/1.8，平视，</span></span>
<span class="line"><span>强逆光从正后方直射，光线尚未穿透断面，背景纯黑，</span></span>
<span class="line"><span>16:9，极高细节</span></span></code></pre></div><p><strong>尾帧图</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>同一根薯条脆，强逆光穿透断面，</span></span>
<span class="line"><span>多孔结构被光点亮，孔洞边缘呈明亮的金色，</span></span>
<span class="line"><span>整个断面像蜂窝一样透光，表面干爽无油光，</span></span>
<span class="line"><span>背景纯黑，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[固定风格段]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/1.8，平视，</span></span>
<span class="line"><span>强逆光穿透，断面发光，背景纯黑，</span></span>
<span class="line"><span>16:9，极高细节</span></span></code></pre></div><p><strong>视频（首尾帧）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>逆光逐渐增强，光线穿透薯条脆的断面，</span></span>
<span class="line"><span>多孔结构由暗转亮，孔洞边缘依次点亮。</span></span>
<span class="line"><span>镜头极缓慢推近，其余静止。</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">这是全片的「证据镜头」</p><p><a href="./03-storyboard#镜头-5-7-一个原因-一个结果">03 · 分镜</a>说明过：镜头 5 讲孔怎么来的，这一镜讲孔带来了什么。</p><p><strong>它要的不是好看，是可信。</strong> 所以背景纯黑、镜头几乎不动、没有任何多余元素——画面里只剩一个事实。</p></div><hr>`,8)),a("h2",v,[s[15]||(s[15]=n("镜头 8 · 掰断瞬间 ",-1)),e(t,{type:"tip",text:"首尾帧"}),s[16]||(s[16]=n()),s[17]||(s[17]=a("a",{class:"header-anchor",href:"#镜头-8-·-掰断瞬间","aria-label":'Permalink to "镜头 8 · 掰断瞬间 <Badge type="tip" text="首尾帧" />"'},"​",-1))]),s[24]||(s[24]=p(`<p><strong>首帧图</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>两只手的手指捏住一根浅金色薯条脆的两端，即将掰断，</span></span>
<span class="line"><span>薯条脆表面干爽，可见细微的多孔质地，</span></span>
<span class="line"><span>背景深色虚化，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[固定风格段]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/2.0，平视，</span></span>
<span class="line"><span>侧面硬光，在薯条脆表面形成清晰的明暗交界，背景压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>尾帧图</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>薯条脆已断成两截，断口参差，</span></span>
<span class="line"><span>大量细小碎屑向四周飞散，断面露出多孔结构，</span></span>
<span class="line"><span>背景深色虚化，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[固定风格段]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微距，浅景深 f/2.0，平视，</span></span>
<span class="line"><span>侧面硬光照亮飞散的碎屑，背景压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>视频（首尾帧）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>手指用力，薯条脆断裂，断口处细小碎屑向四周飞散。</span></span>
<span class="line"><span>高速摄影般的慢动作，断裂瞬间清晰可见。</span></span>
<span class="line"><span>镜头固定。</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">手部是生成的高风险区</p><p>出现多指、断指、关节反折是这类镜头最常见的废片原因。</p><p><strong>降低风险的做法</strong>：只入画两根手指的指尖，不出现完整手掌；或改为「薯条脆自然折断」不出现手。<strong>这一镜的重点是断口和碎屑，不是手。</strong></p></div><hr><h2 id="镜头-9-·-成品质感" tabindex="-1">镜头 9 · 成品质感 <a class="header-anchor" href="#镜头-9-·-成品质感" aria-label="Permalink to &quot;镜头 9 · 成品质感&quot;">​</a></h2><p><strong>首帧图</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一堆浅金色的薯条脆散落在深色石质台面上，条形整齐边缘带自然毛刺，</span></span>
<span class="line"><span>颜色浅金偏黄，不是深褐色，表面干爽哑光，无油亮反光，</span></span>
<span class="line"><span>可见细微的多孔表面质地，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[固定风格段]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>特写，浅景深 f/2.2，略俯视，</span></span>
<span class="line"><span>柔和顶光为主，侧面补一盏硬光勾勒边缘，背景压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>视频（图生视频）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>更多薯条脆从画面上方缓慢落下，堆叠在已有的一堆上，</span></span>
<span class="line"><span>落下时相互碰撞、轻微弹跳。</span></span>
<span class="line"><span>慢动作，镜头缓慢横移。</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">颜色是这一镜的合规要点</p><p><strong>浅金 ≠ 深褐。</strong> VF 低温油炸的产品颜色明显浅于常压高温油炸，这是工艺的自然结果。</p><p>如果出片是深褐色，画面就和「低温」这条工艺链自相矛盾了——<strong>观众不一定说得出哪里不对，但会觉得不对。</strong></p><p>负面词里的「深褐色、焦黑」就是防这个。</p></div><hr><h2 id="镜头-10-·-产品出镜-不生成" tabindex="-1">镜头 10 · 产品出镜（不生成） <a class="header-anchor" href="#镜头-10-·-产品出镜-不生成" aria-label="Permalink to &quot;镜头 10 · 产品出镜（不生成）&quot;">​</a></h2><p><strong>制作方式：客户渲染图 → 去背 → AI 生成背景与光环境 → 设计软件合成 → 后期动态</strong></p><p>走<a href="/tools/decision-tree#a1-产品必须精确还原吗">决策树 A1</a> 的链路。<strong>包装本身不经过任何生成模型。</strong></p><p>背景与光环境可以生成，Prompt 如下（<strong>画面里不放产品</strong>，产品是后期合成上去的）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>纯净的深色石质台面，背景为柔和的暖调渐变，</span></span>
<span class="line"><span>台面上有柔和的光斑与轻微的景深虚化，画面中央留空，</span></span>
<span class="line"><span>无任何物体，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[固定风格段]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中景，浅景深，平视，</span></span>
<span class="line"><span>影棚布光，主光从左上方 45 度，右侧柔光补光，背景轻微渐变压暗，</span></span>
<span class="line"><span>16:9，高细节</span></span></code></pre></div><p><strong>后期动态</strong>：缓慢推近 + 一道光扫过包装表面 + 轻微景深变化。<strong>不做变形、不做形变过渡</strong>——任何会改变包装形状的效果都可能让文字与 logo 失真。</p><hr><h2 id="参数建议" tabindex="-1">参数建议 <a class="header-anchor" href="#参数建议" aria-label="Permalink to &quot;参数建议&quot;">​</a></h2><table tabindex="0"><thead><tr><th>项</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td>分辨率</td><td>1080p 起</td><td>demo 够用；成片建议 4K</td></tr><tr><td>帧率</td><td>24fps</td><td>与常规广告片一致</td></tr><tr><td>单镜时长</td><td>5s</td><td>剪进片子只用 1.5–2.5s，<strong>留出选择余地</strong></td></tr><tr><td>生成条数</td><td>每镜 4–6 条</td><td>微距与慢动作的废片率偏高，见下</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">关于出片率，去 05 记</p><p>每一镜实际跑了多少条、采用了哪条、废的为什么废，<strong>当场记进 <a href="./05-genlog">05 · 生成日志</a></strong>。</p><p>事后一定记不准——这是<a href="/cases/case-06-kalshi-veo">案例 06</a> 信息量最大的原因，也是这套流程里最容易被跳过的一份。</p></div><h2 id="换工具怎么办" tabindex="-1">换工具怎么办 <a class="header-anchor" href="#换工具怎么办" aria-label="Permalink to &quot;换工具怎么办&quot;">​</a></h2><p>镜头设计与五段式内容不变，只调语法：</p><table tabindex="0"><thead><tr><th>工具</th><th>主要差异</th></tr></thead><tbody><tr><td><strong>Veo 3</strong></td><td>英文效果更好；原生支持音频描述，可把音效写进 Prompt；「首尾帧」改用起止状态的文字描述</td></tr><tr><td><strong>Runway Gen-4</strong></td><td>英文；Motion Brush 可精确指定运动区域，镜头 6 的油滴飞散适合用它</td></tr><tr><td><strong>即梦</strong></td><td>与可灵语法接近，中文直接可用；首尾帧功能相当</td></tr></tbody></table><p><strong>不要改的是</strong>：固定风格段的内容、全部负面词、以及镜头 4 的「油面平静」与镜头 9 的「浅金非深褐」——这三处是内容正确性问题，不是工具差异。</p><hr><p><strong>上一步</strong> ← <a href="./03-storyboard">03 · 分镜</a> ｜ <strong>下一步</strong> → <a href="./05-genlog">05 · 生成日志</a></p>`,31))])}const T=l(c,[["render",m]]);export{P as __pageData,T as default};

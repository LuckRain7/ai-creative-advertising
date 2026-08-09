import{_ as a,o as n,c as t,a2 as p}from"./chunks/framework.CHeM0PsO.js";const g=JSON.parse('{"title":"短视频分镜脚本","description":"","frontmatter":{},"headers":[],"relativePath":"prompts/video-storyboard.md","filePath":"prompts/video-storyboard.md","lastUpdated":1786286917000}'),l={name:"prompts/video-storyboard.md"};function e(o,s,i,r,d,c){return n(),t("div",null,[...s[0]||(s[0]=[p(`<h1 id="短视频分镜脚本" tabindex="-1">短视频分镜脚本 <a class="header-anchor" href="#短视频分镜脚本" aria-label="Permalink to &quot;短视频分镜脚本&quot;">​</a></h1><p>这一篇解决两件事：<strong>怎么让 AI 帮你写分镜表</strong>，以及<strong>怎么把分镜表的每一行翻译成视频生成 Prompt</strong>。</p><p>前置阅读：<a href="/method/storyboard">分镜设计：镜头语言翻译表</a>。</p><hr><h2 id="_01-·-让-ai-生成分镜表" tabindex="-1">01 · 让 AI 生成分镜表 <a class="header-anchor" href="#_01-·-让-ai-生成分镜表" aria-label="Permalink to &quot;01 · 让 AI 生成分镜表&quot;">​</a></h2><p><strong>适用场景</strong> Big Idea 已定，需要把它拆成镜头。 <strong>不适用</strong>：创意还没想清楚时——AI 会给你一个结构工整但没有灵魂的分镜表，看起来很像样，实则空洞。</p><p><strong>可复制 Prompt</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你是一位广告导演。请把下面这个创意拆成可执行的分镜表。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【创意】[一句话 Big Idea]</span></span>
<span class="line"><span>【产品】[产品名与核心卖点]</span></span>
<span class="line"><span>【投放】[平台，例如：抖音信息流]，[比例，例如：9:16 竖屏]，总时长 [15] 秒</span></span>
<span class="line"><span>【目标人群】[具体描述]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>1. 拆成 [6] 个镜头，每镜 2–3 秒</span></span>
<span class="line"><span>2. 前 3 秒必须有异常感或反常识的画面，能让人停止滑动</span></span>
<span class="line"><span>3. 产品首次出现的时间控制在第 [6]–[9] 秒</span></span>
<span class="line"><span>4. 相邻镜头的景别必须不同</span></span>
<span class="line"><span>5. 每个动作必须是单一、缓慢的动作，不要复合动作</span></span>
<span class="line"><span>6. 只写能被拍出来的画面，不要写&quot;她感到温暖&quot;这类内心描述</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出为表格，列包括：</span></span>
<span class="line"><span>镜号 | 时长 | 景别 | 机位 | 主体与动作 | 环境 | 光线 | 运镜</span></span></code></pre></div><p><strong>参数说明</strong></p><table tabindex="0"><thead><tr><th>约束条款</th><th>为什么必须写</th></tr></thead><tbody><tr><td>前 3 秒有异常感</td><td>不写的话 AI 默认给&quot;阳光洒进房间&quot;，必划走</td></tr><tr><td>产品出现时间</td><td>不约束的话 AI 要么第一镜就摆产品，要么到最后才出现</td></tr><tr><td>相邻景别必须不同</td><td>防止一连串中景，画面&quot;不动&quot;</td></tr><tr><td>单一、缓慢的动作</td><td>直接对应视频模型的能力边界</td></tr><tr><td>只写能被拍出来的画面</td><td>AI 很爱写内心戏，而内心戏没法生成</td></tr></tbody></table><p><strong>常见翻车点</strong></p><ul><li><strong>不给约束就要分镜表</strong>，得到的是教科书式的平均值：起承转合工整、没有一个镜头让人记住。<strong>约束越具体，产出越可用。</strong></li><li><strong>AI 写的时长分配不靠谱</strong>。它会写&quot;这个镜头 5 秒&quot;，但实际生成出来的素材时长由模型决定。时长在剪辑阶段控制，分镜表里的时长只是节奏参考。</li><li><strong>直接采用第一版</strong>。让它出两版结构完全不同的分镜（比如一版从产品切入、一版从人物切入），对比着挑，效果好很多。</li></ul><hr><h2 id="_02-·-把一行分镜翻译成视频-prompt" tabindex="-1">02 · 把一行分镜翻译成视频 Prompt <a class="header-anchor" href="#_02-·-把一行分镜翻译成视频-prompt" aria-label="Permalink to &quot;02 · 把一行分镜翻译成视频 Prompt&quot;">​</a></h2><p><strong>适用场景</strong> 分镜表已经有了，逐行生成素材。</p><p><strong>翻译公式</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[主体] + [单一缓慢动作] + [风格包] + [镜头与运镜] + [光影] + [参数]</span></span></code></pre></div><p>其中<strong>风格包</strong>是全片固定的那一段，每个镜头原样粘贴。</p><p><strong>可复制 Prompt</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[主体描述，来自分镜表的&quot;主体&quot;列]，[单一动作，加&quot;缓慢地&quot;]，</span></span>
<span class="line"><span>[环境描述，来自&quot;环境&quot;列]，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>—— 以下为全片风格包，每个镜头保持完全一致 ——</span></span>
<span class="line"><span>[品类] 广告片风格，[色调]，轻微胶片颗粒，电影感，</span></span>
<span class="line"><span>[焦段] 镜头，[景别]，浅景深，[机位]，[运镜]，</span></span>
<span class="line"><span>[光线描述]，</span></span>
<span class="line"><span>竖版 9:16，高细节</span></span>
<span class="line"><span></span></span>
<span class="line"><span>负向：文字、水印、快速运动、变形的手、镜头切换、多个场景</span></span></code></pre></div><p><strong>一个填好的例子</strong></p><p>分镜表里的这一行：</p><table tabindex="0"><thead><tr><th>#</th><th>景别</th><th>机位</th><th>主体与动作</th><th>环境</th><th>光</th><th>运镜</th></tr></thead><tbody><tr><td>3</td><td>中景</td><td>平视</td><td>冲进厨房，打开冰箱，光打在脸上</td><td>小户型厨房</td><td>冰箱内光为主光源</td><td>手持轻晃</td></tr></tbody></table><p>翻译成：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一个二十多岁的年轻人站在昏暗的厨房里，缓慢地拉开冰箱门，</span></span>
<span class="line"><span>冰箱内部的冷白色光线照亮他的脸，小户型公寓厨房，清晨，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>食品广告片风格，冷暖对比色调，轻微胶片颗粒，电影感，</span></span>
<span class="line"><span>35mm 镜头，中景，浅景深，平视机位，轻微手持晃动，</span></span>
<span class="line"><span>冰箱内光为唯一主光源，人物面部被冷光照亮，周围环境保持昏暗，</span></span>
<span class="line"><span>竖版 9:16，高细节</span></span>
<span class="line"><span></span></span>
<span class="line"><span>负向：文字、水印、快速运动、变形的手、镜头切换、多个场景</span></span></code></pre></div><p><strong>参数说明</strong></p><table tabindex="0"><thead><tr><th>负向词</th><th>排除什么问题</th></tr></thead><tbody><tr><td>快速运动</td><td>快速动作会导致肢体扭曲，这是当前视频模型最大的软肋</td></tr><tr><td>镜头切换</td><td>不写的话模型可能在一个片段里自己切几个镜头，剪辑时没法用</td></tr><tr><td>多个场景</td><td>同上，一个 Prompt 只要一个连续镜头</td></tr><tr><td>变形的手</td><td>常见畸变</td></tr></tbody></table><p><strong>常见翻车点</strong></p><ul><li><strong>风格包在镜头之间改了词</strong>。哪怕只改一个形容词，整支片的调性都会飘。<strong>复制粘贴，不要手打。</strong></li><li><strong>动作写复杂了</strong>。「拉开冰箱门，拿出食物，关上门」是三个镜头，不是一个。</li><li><strong>忘了排除&quot;镜头切换&quot;</strong>。生成出一个自带剪辑点的片段，等于废了。</li><li><strong>对时长有预期</strong>。生成时长由模型决定，别指望它精确给你 2.5 秒。多生成，剪辑时裁。</li></ul><hr><h2 id="_03-·-批量生成整组镜头" tabindex="-1">03 · 批量生成整组镜头 <a class="header-anchor" href="#_03-·-批量生成整组镜头" aria-label="Permalink to &quot;03 · 批量生成整组镜头&quot;">​</a></h2><p><strong>适用场景</strong> 分镜表全部翻译完，要一次性把所有镜头的 Prompt 生成出来。</p><p><strong>可复制 Prompt</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>下面是我的分镜表和全片风格包。</span></span>
<span class="line"><span>请按「主体+动作 / 风格包 / 镜头与运镜 / 光影 / 参数」的结构，</span></span>
<span class="line"><span>把每一行翻译成一条独立的视频生成 Prompt。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【风格包】（每条 Prompt 都必须原样包含，一个字都不要改）</span></span>
<span class="line"><span>[粘贴你的风格包]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【分镜表】</span></span>
<span class="line"><span>[粘贴表格]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>1. 每条 Prompt 只描述一个连续镜头，一个单一动作</span></span>
<span class="line"><span>2. 所有动作前加&quot;缓慢地&quot;或&quot;轻微地&quot;</span></span>
<span class="line"><span>3. 每条都带上相同的负向词：文字、水印、快速运动、变形的手、镜头切换、多个场景</span></span>
<span class="line"><span>4. 每条 Prompt 单独用代码块输出，标明镜号</span></span></code></pre></div><p><strong>常见翻车点</strong></p><ul><li><strong>AI 会&quot;优化&quot;你的风格包</strong>。它觉得重复啰嗦，会自作主张换同义词。所以要写死&quot;一个字都不要改&quot;，输出后还要抽查两条比对。</li><li><strong>一次给太多镜头</strong>。超过 8 个镜头，后面几条的质量会下降。分两批。</li></ul><hr><h2 id="生成阶段的工作顺序" tabindex="-1">生成阶段的工作顺序 <a class="header-anchor" href="#生成阶段的工作顺序" aria-label="Permalink to &quot;生成阶段的工作顺序&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">别一个镜头死磕到完美再做下一个</p><p>正确顺序：</p><ol><li><strong>全镜头各生成一版</strong> → 拼起来看整体调性对不对</li><li><strong>调性对了</strong>，再挑质量不达标的单镜头重做</li><li><strong>全部达标后</strong>，关键镜头多生成 2–3 个备选留给剪辑</li></ol><p>先做完整性，再做质量。反过来做，很容易出现&quot;每个镜头都很棒，串起来不像一支片子&quot;。</p></div><h2 id="接着看" tabindex="-1">接着看 <a class="header-anchor" href="#接着看" aria-label="Permalink to &quot;接着看&quot;">​</a></h2><ul><li>镜头语言词表 → <a href="/method/storyboard">分镜设计</a></li><li>完整流程 → <a href="/method/workflow-sop">从 brief 到成片：完整链路 SOP</a></li><li>真实案例 → <a href="/cases/case-01-beverage-tvc">案例 01 · 饮料品牌短 TVC</a></li></ul>`,41)])])}const u=a(l,[["render",e]]);export{g as __pageData,u as default};

import{_ as n,o as a,c as p,a2 as t}from"./chunks/framework.CHeM0PsO.js";const h=JSON.parse('{"title":"广告文案与口播","description":"","frontmatter":{},"headers":[],"relativePath":"prompts/copywriting.md","filePath":"prompts/copywriting.md","lastUpdated":1786503105000}'),l={name:"prompts/copywriting.md"};function e(i,s,o,r,c,d){return a(),p("div",null,[...s[0]||(s[0]=[t(`<h1 id="广告文案与口播" tabindex="-1">广告文案与口播 <a class="header-anchor" href="#广告文案与口播" aria-label="Permalink to &quot;广告文案与口播&quot;">​</a></h1><p>文案是 AI 最早被用起来、也最容易出&quot;平均值&quot;的地方。这一篇的重点不是让 AI 写得多，而是<strong>怎么约束它写得不套路</strong>。</p><hr><h2 id="_01-·-卖点提炼-从产品资料到消费者语言" tabindex="-1">01 · 卖点提炼（从产品资料到消费者语言） <a class="header-anchor" href="#_01-·-卖点提炼-从产品资料到消费者语言" aria-label="Permalink to &quot;01 · 卖点提炼（从产品资料到消费者语言）&quot;">​</a></h2><p><strong>适用场景</strong> 拿到一堆产品参数、企业介绍，需要把它翻译成人话。</p><p><strong>可复制 Prompt</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>下面是一份产品资料。请把它翻译成消费者语言。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【产品资料】</span></span>
<span class="line"><span>[粘贴参数、功能、企业介绍]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【目标人群】</span></span>
<span class="line"><span>[具体描述，越细越好]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>1. 输出格式为三列表：产品事实 | 意味着什么 | 消费者关心的那句话</span></span>
<span class="line"><span>2. &quot;消费者关心的那句话&quot;必须是这个人群会说的口语，不是广告腔</span></span>
<span class="line"><span>3. 不要出现&quot;匠心&quot;&quot;品质&quot;&quot;赋能&quot;&quot;极致&quot;这类词</span></span>
<span class="line"><span>4. 每条不超过 15 个字</span></span>
<span class="line"><span>5. 如果某条产品事实对这个人群其实不重要，直接标注&quot;可舍弃&quot;</span></span></code></pre></div><p><strong>参数说明</strong></p><table tabindex="0"><thead><tr><th>约束</th><th>作用</th></tr></thead><tbody><tr><td>三列结构</td><td>强制 AI 走&quot;事实→推导→表达&quot;的路径，而不是直接抒情</td></tr><tr><td>禁用词表</td><td>这几个词是中文广告文案的重灾区，不禁的话必出现</td></tr><tr><td>15 字上限</td><td>长句给了 AI 堆砌形容词的空间</td></tr><tr><td>允许标注&quot;可舍弃&quot;</td><td>甲方常给一堆无关紧要的卖点，让 AI 帮你筛</td></tr></tbody></table><p><strong>常见翻车点</strong></p><ul><li><strong>不给人群，得到万能话术</strong>。「守护全家健康」适用于任何品类，等于没写。</li><li><strong>禁用词表要按项目更新</strong>。做完一版发现某个词反复出现，就加进禁用列表。这个列表会越来越好用。</li></ul><hr><h2 id="_02-·-slogan-批量生成" tabindex="-1">02 · Slogan 批量生成 <a class="header-anchor" href="#_02-·-slogan-批量生成" aria-label="Permalink to &quot;02 · Slogan 批量生成&quot;">​</a></h2><p><strong>适用场景</strong> Big Idea 已定，需要一句能记住的话。</p><p><strong>可复制 Prompt</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>【Big Idea】[一句话]</span></span>
<span class="line"><span>【产品】[产品名]</span></span>
<span class="line"><span>【人群】[描述]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请写 20 条 slogan，按下面五种类型各 4 条：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A 陈述型：直接说一个事实，不修辞</span></span>
<span class="line"><span>B 对比型：包含一个转折或对立（「不是…而是…」的变体）</span></span>
<span class="line"><span>C 提问型：向消费者提一个他会在心里回答的问题</span></span>
<span class="line"><span>D 命令型：一个动作指令</span></span>
<span class="line"><span>E 双关型：利用词语的多义</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>- 每条不超过 12 个字</span></span>
<span class="line"><span>- 不要押韵为了押韵</span></span>
<span class="line"><span>- 不要出现产品名（除非双关必需）</span></span>
<span class="line"><span>- 20 条之间不能有同义重复</span></span></code></pre></div><p><strong>参数说明</strong></p><p>强制分五种类型，是为了对抗 AI 的<strong>收敛倾向</strong>——不分类的话，20 条里有 15 条是同一种句式的变体。分了类，至少保证结构上的多样性。</p><p><strong>常见翻车点</strong></p><ul><li><strong>让 AI 挑出最好的一条</strong>。它会挑最像广告语的那条，通常也是最套路的。<strong>挑选是人的活。</strong></li><li><strong>一次要 50 条</strong>。质量断崖式下滑，20 条是比较好的量。要更多就换个角度重新问一轮。</li><li><strong>押韵陷阱</strong>。中文 slogan 一押韵就容易滑向顺口溜，牺牲了意思。所以 Prompt 里明确写了不要为押韵而押韵。</li></ul><hr><h2 id="_03-·-口播稿-配音文案" tabindex="-1">03 · 口播稿（配音文案） <a class="header-anchor" href="#_03-·-口播稿-配音文案" aria-label="Permalink to &quot;03 · 口播稿（配音文案）&quot;">​</a></h2><p><strong>适用场景</strong> 短视频旁白、TVC 配音。</p><p><strong>可复制 Prompt</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>为下面这支广告写一段口播稿。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【分镜表】[粘贴，或描述画面顺序]</span></span>
<span class="line"><span>【总时长】[15] 秒</span></span>
<span class="line"><span>【语气】[例如：平静、像朋友随口说的]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>1. 总字数控制在 [55] 字以内（中文口播约每秒 3.5–4 字）</span></span>
<span class="line"><span>2. 和画面互补，不要复述画面里已经看得见的东西</span></span>
<span class="line"><span>3. 用短句，每句不超过 12 字，句子之间可以有停顿</span></span>
<span class="line"><span>4. 开头第一句必须能单独成立，抓住注意力</span></span>
<span class="line"><span>5. 结尾一句是行动指令或品牌名，不超过 8 字</span></span>
<span class="line"><span>6. 不要用书面语，写出来的每一句都要能顺口念出来</span></span>
<span class="line"><span>7. 标注每句对应的镜号</span></span></code></pre></div><p><strong>参数说明</strong></p><table tabindex="0"><thead><tr><th>约束</th><th>为什么</th></tr></thead><tbody><tr><td>每秒 3.5–4 字</td><td>中文口播的实际语速。15 秒最多 60 字，超了就得赶，一赶就难听</td></tr><tr><td>不复述画面</td><td>最常见的问题。画面已经有人在喝咖啡，旁白再说&quot;他端起咖啡&quot;，浪费了</td></tr><tr><td>短句 + 停顿</td><td>长句在听觉媒介里跟不上，且 AI 配音断句会出错</td></tr><tr><td>能顺口念出来</td><td>检验方法很简单：自己念一遍。念着别扭就是不行</td></tr></tbody></table><p><strong>常见翻车点</strong></p><ul><li><strong>字数超了</strong>。写完一定要数。多数人写的口播稿念出来都超时 30%。</li><li><strong>和画面打架</strong>。口播稿和分镜是配合关系，写之前必须先有分镜。</li><li><strong>书面语混进来</strong>。「其」「从而」「以及」这类词在口语里不出现，看到就删。</li><li><strong>AI 配音的断句问题</strong>。生成语音前，在需要停顿的地方手动加逗号或换行，比让 AI 自己判断可靠。</li></ul><hr><h2 id="_04-·-字幕文案" tabindex="-1">04 · 字幕文案 <a class="header-anchor" href="#_04-·-字幕文案" aria-label="Permalink to &quot;04 · 字幕文案&quot;">​</a></h2><p><strong>适用场景</strong> 竖屏视频的屏幕文字。注意：<strong>字幕不等于口播稿的文字版。</strong></p><p><strong>可复制 Prompt</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>下面是这支视频的口播稿和分镜表。请设计屏幕字幕。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【口播稿】[粘贴]</span></span>
<span class="line"><span>【分镜表】[粘贴]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>1. 字幕不是口播稿的照搬，而是提取关键词做视觉强调</span></span>
<span class="line"><span>2. 每屏不超过 8 个字</span></span>
<span class="line"><span>3. 全片字幕总数不超过 [5] 屏</span></span>
<span class="line"><span>4. 标注每屏出现在哪个镜号、大致什么位置（上/中/下）</span></span>
<span class="line"><span>5. 关键数字和卖点必须有字幕（听觉容易漏，视觉能兜住）</span></span>
<span class="line"><span>6. 最后一屏是品牌名或行动指令</span></span></code></pre></div><p><strong>常见翻车点</strong></p><ul><li><strong>字幕太满</strong>。每句话都上字幕，画面变成 PPT。字幕是强调工具，强调一切等于不强调。</li><li><strong>压住画面主体</strong>。位置要避开人脸和产品。竖屏还要避开平台自身的 UI 遮挡区域（底部的评论按钮、头像栏），<strong>具体安全区尺寸以各平台规范为准。</strong></li><li><strong>字号太小</strong>。手机上看，字幕高度建议不低于画面高度的 4%。</li></ul><hr><h2 id="一个通用技巧-让-ai-当批评者" tabindex="-1">一个通用技巧：让 AI 当批评者 <a class="header-anchor" href="#一个通用技巧-让-ai-当批评者" aria-label="Permalink to &quot;一个通用技巧：让 AI 当批评者&quot;">​</a></h2><p>文案写完后，比起让 AI 改，让它挑刺更有价值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>这是我的广告文案：[粘贴]</span></span>
<span class="line"><span>目标人群：[描述]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请扮演三个角色，各自挑出 3 个问题：</span></span>
<span class="line"><span>1. 一个刻薄的甲方（关心：跟我产品有什么关系？）</span></span>
<span class="line"><span>2. 一个目标人群里的真实用户（关心：这跟我有什么关系？）</span></span>
<span class="line"><span>3. 一个法务（关心：有没有夸大宣传、绝对化用语、违规词）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>只挑问题，不要给建议，不要说好话。</span></span></code></pre></div><p>第三个角色特别值得跑一遍——中文广告法对&quot;最&quot;「第一」「国家级」这类绝对化用语和功效宣称有明确限制，AI 写文案时经常无意识地踩线。</p><div class="warning custom-block"><p class="custom-block-title">合规检查不能只靠 AI</p><p>AI 的合规判断不能作为最终依据。正式投放前，涉及功效宣称、比较广告、医疗健康类内容的文案，请走正规的法务或平台审核流程。</p></div><h2 id="接着看" tabindex="-1">接着看 <a class="header-anchor" href="#接着看" aria-label="Permalink to &quot;接着看&quot;">​</a></h2><ul><li>创意怎么定 → <a href="/method/big-idea">Big Idea 与洞察</a></li><li>文案配什么画面 → <a href="/prompts/video-storyboard">短视频分镜脚本</a></li></ul>`,44)])])}const u=n(l,[["render",e]]);export{h as __pageData,u as default};

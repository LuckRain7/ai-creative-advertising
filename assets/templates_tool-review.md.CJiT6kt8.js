import{_ as i,o as a,c as n,a2 as l}from"./chunks/framework.CHeM0PsO.js";const o=JSON.parse('{"title":"工具评测模板","description":"","frontmatter":{},"headers":[],"relativePath":"templates/tool-review.md","filePath":"templates/tool-review.md","lastUpdated":1786291067000}'),h={name:"templates/tool-review.md"};function t(p,s,e,k,E,d){return a(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="工具评测模板" tabindex="-1">工具评测模板 <a class="header-anchor" href="#工具评测模板" aria-label="Permalink to &quot;工具评测模板&quot;">​</a></h1><p>试完一个新工具就写一篇。写完记得回 <a href="/tools/reviews">单工具深度评测</a> 的表格里加一行。</p><h2 id="核心原则" tabindex="-1">核心原则 <a class="header-anchor" href="#核心原则" aria-label="Permalink to &quot;核心原则&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">测「稳不稳」，不测「能不能」</p><p>所有官方演示都能证明工具&quot;能做&quot;某件事。你要回答的是另一个问题：</p><p><strong>做一个 6 镜头的项目，需要生成多少条才能凑齐 6 条可用的？</strong></p><p>这个数字直接决定成本和排期，也是第三方评测几乎从不提供的信息。</p></div><h2 id="骨架" tabindex="-1">骨架 <a class="header-anchor" href="#骨架" aria-label="Permalink to &quot;骨架&quot;">​</a></h2><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">工具名</span><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">] 评测</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**结论先行**</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">一句话——什么场景下值得用，什么场景下别用。</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|---|---|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 类别 | [文案 / 图像 / 视频 / 配音 / 剪辑] |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 评测日期 | YYYY-MM-DD |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 评测版本 | [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">如果有版本号</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 测试场景 | [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">你实际要用它做什么</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 一、提示词服从度</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">测法：写一条含 5 个明确约束的 Prompt，数它执行了几条。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**测试 Prompt**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[粘贴]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| # | 约束 | 是否执行 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|---|---|---|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 1 | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 2 | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 3 | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 4 | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 5 | | |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**得分**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：X / 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 二、出片率</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">测法：同一条 Prompt 生成 10 次，数几条达到可交付标准。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 项 | 值 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|---|---|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 生成次数 | 10 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 可交付 | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 勉强可用（需后期修） | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 废片 | |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**出片率**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：X / 10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 三、一致性</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">测法：同一参考图跑 5 个不同镜头/角度，看主体是否保持。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 镜头 | 主体是否保持 | 备注 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|---|---|---|</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 四、短板暴露</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">故意测它的弱项：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 项 | 表现 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|---|---|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 手部 / 复杂肢体 | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 中文文字 | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 快速运动（视频） | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 复杂多元素场景 | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 精确产品还原 | |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 五、速度与成本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 项 | 值 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|---|---|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 单次生成耗时 | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 单次消耗 | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**达到可交付所需的总消耗**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">最后一行是真正的成本，前两行只是分母。</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 六、商用条款</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 项 | 情况 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|---|---|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 当前档位是否允许商用 | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 是否有标识要求 | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 生成内容的权属 | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 查证日期 | |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⚠️ 条款随时变化，以官网为准。签合同前重新确认。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 结论</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**值得用在**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**不要用在**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**和 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">某个已用工具</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">] 相比**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span></code></pre></div><hr><h2 id="三点说明" tabindex="-1">三点说明 <a class="header-anchor" href="#三点说明" aria-label="Permalink to &quot;三点说明&quot;">​</a></h2><h3 id="固定测试集才有横向可比性" tabindex="-1">固定测试集才有横向可比性 <a class="header-anchor" href="#固定测试集才有横向可比性" aria-label="Permalink to &quot;固定测试集才有横向可比性&quot;">​</a></h3><p>每个工具都跑<strong>同一套</strong>测试 Prompt。换一套测法，得出的分数就没法互相比较。</p><p>建议维护一个自己的固定测试集（3–5 条覆盖你常用场景的 Prompt），所有工具都跑它。跑得越多，这套测试集越值钱。</p><h3 id="「达到可交付所需的总消耗」是唯一真实的成本" tabindex="-1">「达到可交付所需的总消耗」是唯一真实的成本 <a class="header-anchor" href="#「达到可交付所需的总消耗」是唯一真实的成本" aria-label="Permalink to &quot;「达到可交付所需的总消耗」是唯一真实的成本&quot;">​</a></h3><p>单次生成便宜不等于总成本低。一个单次成本高但出片率高的工具，实际可能更省。</p><p>计算方式：<code>单次消耗 ÷ 出片率</code>。出片率 3/10 的工具，实际单条可用素材的成本是标价的 3.3 倍。</p><h3 id="商用条款必须写查证日期" tabindex="-1">商用条款必须写查证日期 <a class="header-anchor" href="#商用条款必须写查证日期" aria-label="Permalink to &quot;商用条款必须写查证日期&quot;">​</a></h3><p>条款变动频繁。<strong>写上查证日期</strong>，半年后看到这篇时你就知道该不该重新核实。</p><hr><h2 id="索引" tabindex="-1">索引 <a class="header-anchor" href="#索引" aria-label="Permalink to &quot;索引&quot;">​</a></h2><p>写完后回到 <a href="/tools/reviews">单工具深度评测</a>，在记录表里加一行。</p>`,19)])])}const g=i(h,[["render",t]]);export{o as __pageData,g as default};

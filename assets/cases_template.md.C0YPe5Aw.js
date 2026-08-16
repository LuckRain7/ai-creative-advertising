import{_ as i,o as a,c as n,a2 as t}from"./chunks/framework.CHeM0PsO.js";const g=JSON.parse('{"title":"拆解模板","description":"","frontmatter":{},"headers":[],"relativePath":"cases/template.md","filePath":"cases/template.md","lastUpdated":1786871523000}'),l={name:"cases/template.md"};function h(e,s,p,d,k,o){return a(),n("div",null,[...s[0]||(s[0]=[t(`<h1 id="拆解模板" tabindex="-1">拆解模板 <a class="header-anchor" href="#拆解模板" aria-label="Permalink to &quot;拆解模板&quot;">​</a></h1><p>所有案例按同一个格式写，四段。统一格式的好处是横向可比——看多了能看出规律。</p><h2 id="四段结构" tabindex="-1">四段结构 <a class="header-anchor" href="#四段结构" aria-label="Permalink to &quot;四段结构&quot;">​</a></h2><table tabindex="0"><thead><tr><th>段</th><th>回答</th><th>重点</th></tr></thead><tbody><tr><td><strong>① 创意点</strong></td><td>说了什么？为什么这么说？</td><td>洞察 → Big Idea 的推导过程</td></tr><tr><td><strong>② 生成链路</strong></td><td>怎么做出来的？</td><td>每一步的输入、工具、输出</td></tr><tr><td><strong>③ 关键 Prompt</strong></td><td>具体敲了什么？</td><td>只放起决定作用的那几条</td></tr><tr><td><strong>④ 可复用套路</strong></td><td>下次能抄什么？</td><td>抽象出来的方法，不是具体内容</td></tr></tbody></table><h2 id="每段写什么" tabindex="-1">每段写什么 <a class="header-anchor" href="#每段写什么" aria-label="Permalink to &quot;每段写什么&quot;">​</a></h2><h3 id="_1-创意点" tabindex="-1">① 创意点 <a class="header-anchor" href="#_1-创意点" aria-label="Permalink to &quot;① 创意点&quot;">​</a></h3><ul><li><strong>背景</strong>：什么产品、什么人群、什么渠道、什么限制</li><li><strong>洞察</strong>：找到的那条心理，一句话</li><li><strong>Big Idea</strong>：一句话</li><li><strong>为什么是它</strong>：淘汰掉的方向以及淘汰的理由</li></ul><div class="tip custom-block"><p class="custom-block-title">淘汰理由比入选理由更值钱</p><p>&quot;为什么否掉 B 方案&quot;记录的是判断标准，下次遇到类似情况能直接复用。而&quot;为什么选 A&quot;往往只是事后合理化。</p></div><h3 id="_2-生成链路" tabindex="-1">② 生成链路 <a class="header-anchor" href="#_2-生成链路" aria-label="Permalink to &quot;② 生成链路&quot;">​</a></h3><p>画出流程，每一步交代四件事：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>步骤 → 输入是什么 → 用什么工具 → 输出是什么</span></span></code></pre></div><p>同时记录三个数字：</p><ul><li><strong>总生成条数 / 最终采用条数</strong>（出片率）</li><li><strong>各环节耗时</strong></li><li><strong>返工点</strong>：哪一步返工了，为什么</li></ul><h3 id="_3-关键-prompt" tabindex="-1">③ 关键 Prompt <a class="header-anchor" href="#_3-关键-prompt" aria-label="Permalink to &quot;③ 关键 Prompt&quot;">​</a></h3><p><strong>只放起决定作用的那几条</strong>，不要把所有 Prompt 都贴上来——贴多了没人看。</p><p>每条按 <a href="/templates/prompt-card">Prompt 卡片格式</a> 写，并额外说明：<strong>它解决了这个项目里的什么具体问题。</strong></p><h3 id="_4-可复用套路" tabindex="-1">④ 可复用套路 <a class="header-anchor" href="#_4-可复用套路" aria-label="Permalink to &quot;④ 可复用套路&quot;">​</a></h3><p>这一段是整篇的价值所在。抽象层级要够高：</p><table tabindex="0"><thead><tr><th>❌ 太具体（不可复用）</th><th>✅ 可复用</th></tr></thead><tbody><tr><td>用了 <code>暗调暖色 + 侧逆光</code></td><td>饮料类产品，把光源放在瓶身后方能让液体透亮，这比调色重要</td></tr><tr><td>第 3 个镜头重做了 8 次</td><td>有液体流动的镜头废片率最高，排期时给它留双倍时间</td></tr><tr><td>slogan 定的是「XXX」</td><td>对比型 slogan 在这个人群里比陈述型更容易过审</td></tr></tbody></table><p>判断标准：**这条经验换个产品、换个客户还成立吗？**成立才写进这一段。</p><h2 id="完整骨架" tabindex="-1">完整骨架 <a class="header-anchor" href="#完整骨架" aria-label="Permalink to &quot;完整骨架&quot;">​</a></h2><p>新建案例文件时，从下面复制：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 案例 NN · [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">项目名</span><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**一句话**</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">这个案例最值得看的一点</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|---|---|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 品类 | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 交付形态 | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 投放渠道 | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 工期 | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 出片率 | 生成 X 条 / 采用 Y 条 |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## ① 创意点</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 背景</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 洞察</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Big Idea</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 淘汰掉的方向与理由</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## ② 生成链路</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 流程</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 数字</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 总生成 / 采用：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 各环节耗时：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 返工点：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## ③ 关键 Prompt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Prompt 1 · [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">解决了什么问题</span><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**适用场景**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**可复制 Prompt**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**参数说明**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**常见翻车点**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## ④ 可复用套路</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 如果重做一次</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">最想改的那一件事</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>最后那一段「如果重做一次」不要省。它是整篇里最诚实的部分。</p>`,24)])])}const c=i(l,[["render",h]]);export{g as __pageData,c as default};

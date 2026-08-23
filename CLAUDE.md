# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 这是什么仓库

一个**纯文档仓库**，不是代码应用。内容是「借助 AI 生成创意广告」的中文知识库，基于 [VitePress](https://vitepress.dev/) 构建并部署到 GitHub Pages（自定义域名 `ai-creative-advertising.ilabubu.com`）。

内容就是产品，Markdown 文件就是工作产物。唯一的"代码"是三处：`docs/.vitepress/`（站点配置与主题）、`.github/workflows/deploy.yml`、`automation/gemini/`（Playwright 采集脚本）。

## 常用命令

```bash
npm run dev      # 本地预览，改 Markdown 热更新（http://localhost:5173）
npm run build    # 构建静态站，同时检查死链
npm run preview  # 预览构建产物（和线上一致）
```

`docs:dev` / `docs:build` / `docs:preview` 是同一组命令的别名。

**关键**：`docs/.vitepress/config.mts` 里 `ignoreDeadLinks: false` —— 任何指向不存在页面的内部链接都会让 `npm run build` 直接失败。这是有意的（宁可本地失败，不上线 404）。报错会指出具体文件与行号。改完链接后先 `npm run build` 验证。

## 目录结构与核心区别

```
docs/
├── .vitepress/          # 站点配置 config.mts（导航/侧边栏/搜索）+ 主题主题色
├── index.md             # 首页
├── guide/               # 入门
├── method/              # 创意方法论
├── prompts/             # Prompt 模板库
├── tools/               # 工具地图（含大量 gemini-*.md）
├── pipelines/           # 实战流水线
├── cases/               # 案例拆解（含逆向拆解）
├── templates/           # 写作模板
└── lab/                 # 作战区 —— 真实客户项目的进行中工作区
specs/                   # 设计文档，不进站点构建
automation/gemini/       # Playwright 批量问答采集，独立于站点
images/                  # gitignore 掉的原始物料备份，不入库
```

**最重要的一个区分**（决定了写作风格，写任何内容前先分清）：

| 板块 | 回答什么 | 写作时机 |
|---|---|---|
| `method/` `prompts/` `tools/` `pipelines/` `cases/` | 该怎么做 / 别人怎么做的 | **事后**提炼、复盘 |
| `lab/` | 这个项目做到哪了、下一步做什么 | **进行中，边做边写** |

`lab/` 里的文件是**工作产物本身，不是对工作的记录**——`01-proposal.md` 就是发给客户的那份提案，写完直接拿去用，不是"提案的总结"。对客文件不能含指向知识库的内部链接（客户点不开 `/cases/...`）。

## 新增/编辑一页的完整步骤

1. 在对应目录新建 `.md`，文件名**英文小写连字符**（如 `perfume-key-visual.md`；`lab/` 内用编号前缀，见下）。
2. 从 `docs/templates/` 复制对应骨架。
3. **必须在 `docs/.vitepress/config.mts` 的 `sidebar` 里加一行链接** —— 否则文件存在但不出现在侧边栏，这是最容易漏的一步。
4. `npm run dev` 本地看，`npm run build` 验死链，再提交。

站点内配图放 `docs/<板块>/assets/`（如 `docs/tools/assets/`），**不要放根目录 `images/`**（那目录已 gitignore）。

## lab/ 作战区的两条硬约束

1. **完全公开，无任何技术兜底。** 历史上有过"dev 可见 / 排除构建 / 不进 git"的三层隔离，已于 2026-08-06 全部移除。**提交即公开、推送即上线、写进去撤不回。** 写之前过一遍 `docs/lab/index.md` 顶部的"什么不写"自查表（客户保密信息、未公开价格条款、未授权素材、对客户的负面评价、拿不准的）。
2. **阶段放行门**：`docs/lab/index.md` 定义了 0–7 阶段与放行条件。**阶段 1（提案）没放行前，不要写分镜和 Prompt** —— 提案方向一变，分镜全废。

`lab/` 文件命名用编号前缀表达阶段，字母后缀表达变体：`00-brief`、`01-proposal`、`02-materials`、`03-storyboard`、`04-prompts`、`05-genlog`；`03a`、`04h`、`04i`、`04j` 是同一阶段的迭代版本。生成日志 `05-genlog` 要当场记（每镜废片数），事后记不准。

## automation/gemini/ —— 采集脚本

用 Playwright 驱动真实 Chrome 对 `gemini.google.com` 批量问答，产出 Gemini 工具文章。

- `login.js`：常驻窗口助你登录，保存会话到 `~/gemini-automation/session`。
- `run.js`：读 `questions.json` → 每条问题开新会话 → 提问 → 等待生成完成 → 抓答案 → 追加到 `results.jsonl` → 汇总到 `results.md`。断点续跑（按 id 去重）、空答案自动重试。
- `probe.js` / `completion-probe.js`：DOM 探针，摸清"生成结束"信号和页面结构。

`questions.json` 的 group（A–G）与 `docs/tools/gemini-*.md` 是一一对应关系——这些文章就是脚本采集答案后整理成的。脚本依赖 Playwright（`automation/gemini/package.json` 独立于根 `package.json`），需要真实登录态，无 headless。

## 部署与 base 路径

push 到 `main` 触发 `.github/workflows/deploy.yml`：`npm ci` → `npm run build` → 写 CNAME `ai-creative-advertising.ilabubu.com` → peaceiris 发布到 `pages` 分支。

注意两处容易误改：
- 站点是**自定义域名**部署，所以 `config.mts` 里 `BASE = '/'`。`README.cn.md` 的路径对照表讲的是"没绑定自定义域名、用 `<用户名>.github.io/<仓库名>`"的情形，二者矛盾——当前线上状态以 `BASE = '/'` + deploy.yml 的 CNAME 为准，改动前先确认域名配置。
- 主题主色是暖橙（`#e8590c`），定义在 `docs/.vitepress/theme/custom.css` 的 `:root` / `.dark` 两组变量里。

## 写作约定

- 全站中文（zh-CN locale，已配好搜索/分页/目录等 UI 文案）。
- 核心写作原则（见 `specs/2026-08-02-knowledge-base-design.md`）：**能抄走的比能读懂的更重要** —— 每篇都要落到可执行动作，Prompt 能直接复制。
- 工具类文章**不写死价格、参数上限、功能开关**（变动太快），只写定位与适用场景，具体数字让读者查官网。
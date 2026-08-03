# AI 创意广告知识库

借助 AI 生成创意广告的方法论、Prompt 模板、工具地图与案例拆解。基于 [VitePress](https://vitepress.dev/) 构建，可直接部署到 GitHub Pages。

## 本地开发

```bash
npm install          # 首次克隆后执行一次

npm run docs:dev     # 本地预览，改 Markdown 自动热更新（默认 http://localhost:5173）
npm run docs:build   # 构建静态站点，同时检查死链
npm run docs:preview # 预览构建产物（和线上一致）
```

## 部署到 GitHub Pages

### ⚠️ 第一步：确认 base 路径

打开 `docs/.vitepress/config.mts`，**第 6 行**：

```ts
const BASE = '/ai-creative-advertising/'
```

这一行必须和你的 GitHub 仓库名一致，**否则线上页面的样式和脚本会全部 404**（表现为：页面能打开，但完全没有排版）。

| 你的仓库 | 这一行应该写 | 站点地址 |
|---|---|---|
| `ai-creative-advertising` | `'/ai-creative-advertising/'` | `https://<用户名>.github.io/ai-creative-advertising/` |
| `其他名字` | `'/其他名字/'` | `https://<用户名>.github.io/其他名字/` |
| `<用户名>.github.io` | `'/'` | `https://<用户名>.github.io/` |

**除此之外没有第二处需要改。**

### 第二步：推送到 GitHub

在 GitHub 上新建一个**空仓库**（不要勾选 "Add a README file"），然后：

```bash
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git branch -M main
git push -u origin main
```

### 第三步：开启 GitHub Pages

1. 进入仓库的 **Settings → Pages**
2. **Source** 选择 **GitHub Actions**（不是 "Deploy from a branch"）
3. 保存

推送后，`.github/workflows/deploy.yml` 会自动构建并发布。在仓库的 **Actions** 标签页可以看到进度，通常 1–2 分钟完成。

之后每次 `git push` 到 `main` 都会自动重新部署。

## 目录结构

```
.
├── .github/workflows/deploy.yml   # GitHub Pages 自动部署
├── specs/                         # 设计文档（不进站点构建）
└── docs/                          # VitePress 内容源
    ├── .vitepress/
    │   ├── config.mts             # 站点配置（导航、侧边栏、搜索）
    │   └── theme/                 # 主题定制（暖橙主色，深浅色适配）
    ├── index.md                   # 首页
    ├── guide/                     # 入门：导读、使用说明、全景
    ├── method/                    # 创意方法论
    ├── prompts/                   # Prompt 模板库
    ├── tools/                     # 工具地图
    ├── cases/                     # 案例拆解
    └── templates/                 # 写作模板
```

## 加一篇新文章

1. 在目标目录新建 `.md` 文件，文件名用英文小写连字符（如 `perfume-key-visual.md`）
2. 从 [写作模板](docs/templates/) 复制对应骨架
3. **在 `docs/.vitepress/config.mts` 的 `sidebar` 里加一行链接** —— 不加这步，文章不会出现在侧边栏
4. `npm run docs:dev` 本地检查
5. `git commit` + `git push`

## 常见问题

**构建失败，提示 dead link**

配置里开了 `ignoreDeadLinks: false`，任何指向不存在页面的内部链接都会让构建失败。这是有意的——宁可本地失败，也不要线上 404。报错信息会指出具体是哪个文件的哪一行。

**线上页面没有样式**

`base` 和仓库名对不上。回到上面的第一步。

**Actions 报错 "Pages site not found"**

Settings → Pages 里的 Source 没选 GitHub Actions。

**「最后更新于」不显示**

它读取的是 git 提交时间，需要文件至少被提交过一次。工作流里已经配置了 `fetch-depth: 0` 来获取完整历史。

## 内容准确性说明

工具相关的价格、参数上限、功能开关等信息变动极快，本站一律不写死具体数字，只写工具的定位与适用场景。**需要具体数据时请以各家官网为准。**

## License

MIT

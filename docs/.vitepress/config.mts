import { defineConfig } from 'vitepress'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// ⚠️ 唯一需要跟着 GitHub 仓库名改的一行。
// 仓库叫 ai-creative-advertising  →  '/ai-creative-advertising/'
// 部署为个人主站 <用户名>.github.io →  '/'
const BASE = '/'

// 判断 argv 而非 NODE_ENV：vitepress preview 跑的是构建产物，行为必须与 build 一致。
const isDev = process.argv.includes('dev')

// 作战区（lab）：真实客户项目的进行中工作区。
// 三层隔离 —— dev 可见 / build 排除 / 不进版本控制。
// 导航与侧边栏配置放在 lab.local.json（已在 .gitignore 中），
// 因为其中包含客户名与项目名，不能出现在仓库源码里。
// 文件不存在时静默跳过，clone 下来的仓库可正常构建。
const LAB_CONFIG = resolve(dirname(fileURLToPath(import.meta.url)), 'lab.local.json')
const lab: { nav?: any[]; sidebar?: Record<string, any> } =
  isDev && existsSync(LAB_CONFIG) ? JSON.parse(readFileSync(LAB_CONFIG, 'utf-8')) : {}

export default defineConfig({
  base: BASE,
  lang: 'zh-CN',
  title: 'AI 创意广告知识库',
  description: '借助 AI 生成创意广告：方法论、Prompt 模板、工具地图与案例拆解',

  // 死链会让构建直接失败，避免线上出现 404
  ignoreDeadLinks: false,

  // 非 dev 一律排除作战区，构建产物中不出现任何客户内容
  srcExclude: isDev ? [] : ['lab/**'],
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#e8590c' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'AI 创意广告知识库' }],
    [
      'meta',
      {
        property: 'og:description',
        content: '借助 AI 生成创意广告：方法论、Prompt 模板、工具地图与案例拆解',
      },
    ],
  ],

  themeConfig: {
    logo: undefined,
    outline: { level: [2, 3], label: '本页目录' },

    nav: [
      { text: '入门', link: '/guide/', activeMatch: '/guide/' },
      { text: '方法论', link: '/method/', activeMatch: '/method/' },
      { text: 'Prompt 库', link: '/prompts/', activeMatch: '/prompts/' },
      { text: '工具地图', link: '/tools/', activeMatch: '/tools/' },
      { text: '实战流水线', link: '/pipelines/', activeMatch: '/pipelines/' },
      { text: '案例拆解', link: '/cases/', activeMatch: '/cases/' },
      ...(lab.nav ?? []),
      { text: '写作模板', link: '/templates/', activeMatch: '/templates/' },
    ],

    sidebar: {
      ...(lab.sidebar ?? {}),
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '知识库导读', link: '/guide/' },
            { text: '怎么用这个知识库', link: '/guide/how-to-use' },
            { text: 'AI 创意广告全景', link: '/guide/landscape' },
          ],
        },
      ],
      '/method/': [
        {
          text: '创意方法论',
          items: [
            { text: '板块总览', link: '/method/' },
            { text: '从 brief 到成片：完整链路 SOP', link: '/method/workflow-sop' },
            { text: '片型图谱：这支片子该长什么样', link: '/method/ad-formats' },
            { text: 'Big Idea 与洞察：AI 的能力边界', link: '/method/big-idea' },
            { text: '分镜设计：镜头语言翻译表', link: '/method/storyboard' },
          ],
        },
        {
          text: '待补充',
          collapsed: false,
          items: [
            { text: '品牌一致性控制', link: '/method/brand-consistency' },
            { text: 'A/B 创意批量测试', link: '/method/ab-testing' },
          ],
        },
      ],
      '/prompts/': [
        {
          text: 'Prompt 模板库',
          items: [
            { text: '板块总览', link: '/prompts/' },
            { text: 'Prompt 结构通法', link: '/prompts/structure' },
            { text: '产品静物 / 电商主图', link: '/prompts/product-still' },
            { text: '短视频分镜脚本', link: '/prompts/video-storyboard' },
            { text: '广告文案与口播', link: '/prompts/copywriting' },
          ],
        },
        {
          text: '待补充',
          collapsed: false,
          items: [
            { text: '人物代言', link: '/prompts/spokesperson' },
            { text: 'UGC 仿真风', link: '/prompts/ugc-style' },
          ],
        },
      ],
      '/tools/': [
        {
          text: '工具地图',
          items: [
            { text: '板块总览', link: '/tools/' },
            { text: '全景对照表', link: '/tools/landscape' },
            { text: '选型决策树', link: '/tools/decision-tree' },
          ],
        },
        {
          text: '待补充',
          collapsed: false,
          items: [{ text: '单工具深度评测', link: '/tools/reviews' }],
        },
      ],
      '/pipelines/': [
        {
          text: '实战流水线',
          items: [
            { text: '板块总览', link: '/pipelines/' },
            { text: 'Codex + Gemini Flow', link: '/pipelines/codex-gemini' },
          ],
        },
      ],
      '/cases/': [
        {
          text: '案例拆解',
          items: [
            { text: '板块总览', link: '/cases/' },
            { text: '拆解模板（先读这篇）', link: '/cases/template' },
            { text: '案例 01 · 饮料品牌短 TVC', link: '/cases/case-01-beverage-tvc' },
            { text: '案例 02 · 电商主图批量生产', link: '/cases/case-02-ecommerce-visual' },
            { text: '案例 03 · 快餐薯条社媒短视频', link: '/cases/case-03-fries-social' },
            { text: '案例 04 · VF 工艺薯条脆', link: '/cases/case-04-vf-fries-crisp' },
            { text: '案例 04 附 · 片型可行性分析', link: '/cases/case-04-fries-crisp-formats' },
            { text: '案例 05 · 乐事薯片 AI 短片（逆向拆解）', link: '/cases/case-05-lays-ai-video' },
            { text: '案例 06 · Kalshi NBA 决赛 AI 广告（逆向拆解）', link: '/cases/case-06-kalshi-veo' },
            { text: '案例 07 · 元气森林 × 分众众小智（逆向拆解）', link: '/cases/case-07-yuanqi-fenzhong' },
            { text: '案例 08 · 蜜雪冰城 × 可灵雪王特效（逆向拆解）', link: '/cases/case-08-mixue-kling' },
          ],
        },
      ],
      '/templates/': [
        {
          text: '写作模板',
          items: [
            { text: '怎么用模板', link: '/templates/' },
            { text: 'Prompt 卡片模板', link: '/templates/prompt-card' },
            { text: '案例拆解模板', link: '/templates/case-study' },
            { text: '工具评测模板', link: '/templates/tool-review' },
          ],
        },
      ],
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询条件',
            displayDetails: '展开详情',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '切换语言',

    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' },
    },

    footer: {
      message: '内容持续迭代中 · 工具相关的价格与参数请以官网为准',
      copyright: 'AI 创意广告知识库',
    },
  },
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "me9rez的博客",
  description: "me9rez的博客",
  lastUpdated: true,
  lang: 'zh-CN',
  base: "/blog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '📒 博客', link: '/blog/' },
      { text: '🎯 进行的工作', link: '/todo' },
      { text: '🛠️ 常用工具', link: '/tool' },
      // { text: '语法示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '博客',
        items: [
          {
            text: 'GIS开发',
            collapsed: true,
            items: [
              {
                text: "数据格式",
                link: "/blog/gis/spec.md"
              },
              {
                text: "数据处理",
                link: "/blog/gis/process.md"
              },
              {
                text: "数据服务",
                link: "/blog/gis/server.md"
              },
              {
                text: "数据可视化",
                link: "/blog/gis/visualization.md"
              },
              {
                text: "数据分析",
                link: "/blog/gis/analyze.md"
              }
            ]
          },
          {
            text: '全栈开发',
            collapsed: true,
            items: [
              {
                text: "前端",
                collapsed: true,
                items: [
                  {
                    text: "基础",
                    link: "/blog/fullstack/frontend/base.md"
                  },
                  {
                    text: "Vue",
                    link: "/blog/fullstack/frontend/vue.md"
                  },
                  {
                    text: "Svelte",
                    link: "/blog/fullstack/frontend/svelte.md"
                  },
                  {
                    text: "Typescript",
                    link: "/blog/fullstack/frontend/typescript.md"
                  },
                  {
                    text: "Wasm",
                    link: "/blog/fullstack/frontend/wasm.md"
                  },
                  {
                    text: "Rust",
                    link: "/blog/fullstack/frontend/rust.md"
                  },
                ]
              },
              {
                text: "后端",
                collapsed: true,
                items: [
                  {
                    text: "Node",
                    link: "/blog/fullstack/backend/node.md"
                  },
                  {
                    text: "Deno",
                    link: "/blog/fullstack/backend/deno.md"
                  },
                  {
                    text: "Hono",
                    link: "/blog/fullstack/backend/hono.md"
                  },
                  {
                    text: "Fastify",
                    link: "/blog/fullstack/backend/fastify.md"
                  },
                  {
                    text: "tRPC",
                    link: "/blog/fullstack/backend/trpc.md"
                  },
                  {
                    text: "Python",
                    link: "/blog/fullstack/backend/python.md"
                  },
                  {
                    text: "C#",
                    link: "/blog/fullstack/backend/csharp.md"
                  },
                  {
                    text: "Golang",
                    link: "/blog/fullstack/backend/golang.md"
                  },
                  {
                    text: "Nginx",
                    link: "/blog/fullstack/backend/nginx.md"
                  },
                ]
              },
              {
                text: "数据库",
                collapsed: true,
                items: [
                  {
                    text: "sqlite",
                    link: "/blog/fullstack/database/sqlite.md"
                  },
                  {
                    text: "PostgreSQL",
                    link: "/blog/fullstack/database/postgresql.md"
                  },
                  {
                    text: "MongoDB",
                    link: "/blog/fullstack/database/mongodb.md"
                  },
                ]
              },
              {
                text: "运维",
                collapsed: true,
                items: [
                  {
                    text: "Docker",
                    link: "/blog/fullstack/devops/docker.md"
                  },
                  {
                    text: "CICD",
                    link: "/blog/fullstack/devops/cicd.md"
                  },
                  {
                    text: "Linux",
                    link: "/blog/fullstack/devops/linux.md"
                  },
                ]
              },
              {
                text: "测试",
                collapsed: true,
                items: [
                  {
                    text: "E2E测试",
                    link: "/blog/fullstack/test/e2e.md"
                  }, {
                    text: "单元测试",
                    link: "/blog/fullstack/test/unit.md"
                  },
                ]
              },
            ]
          },
          {
            text: '桌面端开发',
            collapsed: true,
            items: [
              {
                text: "Electron",
                link: "/blog/desktop/electron/"
              },
              {
                text: "Tauri",
                link: "/blog/desktop/tauri/"
              },
              {
                text: "WebView2",
                link: "/blog/desktop/webview2/"
              },
              {
                text: "Flutter",
                link: "/blog/desktop/flutter/"
              },
            ]
          },
        ]
      },
      {
        text: '语法示例',
        items: [
          { text: 'Markdown语法', link: '/markdown-examples' },
          { text: 'Runtime API', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/me9rez/blog' }
    ]
  }
})

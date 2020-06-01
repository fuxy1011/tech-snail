# tech-snail
蜗牛不牛

## 概要说明

- vuepress
- markdown

## 启动

```
npm i
npm run docs:dev
```

## 详细命令

- 本地运行

```
npm run docs:dev
```

- 编译到部署目录

```
npm run docs:build
```

- 部署到git page目录并提交到远端ß

```
npm run deploy
```

## 目录结构

```
├── dev-docs                // webpack配置
│   ├── .vuepress   		// vuepress配置目录
│   ├── about               // 关于目录
│   ├── assets      		// 资源库目录
│   ├── base      			// 基础知识目录
│   ├── component      		// 组件库
│   ├── neritic-area        // 浅海区
│   ├── deep-sea-area       // 深海区
│   ├── four-leaf-clover    // 四叶草
│   ├── important-base      // 烧脑基础
│   ├── react      	        // react核心概念
│   ├── read-books          // 读书
│   ├── snail               // 蜗牛计划
│   ├── snail-book          // 蜗牛小册子
│   ├── source-analysis     // 源码分析
│   ├── study               // 持续学习，不服就干
│   ├── tech-world          // 技术世界
│   ├── todo-demo           // 实验室
│   └── toolkit             // 工具箱
├── docs                    // 打包输出目录
├── 总结                     // 错误总结目录
├── deploy.sh           	// 部署脚本
├── package.json            // 依赖包配置
└── README.md               // 项目说明
```

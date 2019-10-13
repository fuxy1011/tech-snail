module.exports = {
    dest: 'docs',
    base: '/tech-snail/',
    title: '蜗牛🐌不牛',
    description: '技术方面的沉淀，积累',
    head: [
        // add jquert and fancybox
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
        ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
    ],
    themeConfig: {
        lastUpdated: '上次更新',//string | boolean
        nav: [
            {
	            text: 'Home',
	            link: '/'
        	},
        	{
	            text: 'Base',
	            link: '/base/'
        	},
        	// {
	        //     text: '烧脑基础',
	        //     link: '/important-base/'
        	// },
            {
                text: 'React',
                link: '/react/'
            },
            {
                text: 'Snail',
                items: [
                    {
                        text: '蜗牛小册子',
                        link: '/snail-book/'
                    },
                    // {
                    //     text: '技术广度',
                    //     link: '/tech-world/'
                    // },
                    // {
                    //     text: '源码分析',
                    //     link: '/source-analysis/'
                    // },
                    // {
                    //     text: '实验室',
                    //     link: '/todo-demo/'
                    // },
                    {
                        text: '乌龟计划',
                        link: '/snail/'
                    },
                    {
                        text: '幸运草',
                        link: '/four-leaf-clover/'
                    },
                    // {
                    //     text: '工具箱',
                    //     link: '/toolkit/'
                    // },
                    // {
                    //     text: '组件库',
                    //     link: '/component/'
                    // },
                    // {
                    //     text: '关于我',
                    //     link: '/about/'
                    // }
                ]
            },
        	{
	            text: 'GitHub',
	            link: 'https://github.com/fuxy1011/tech-snail'
        	}
        ],
        sidebarDepth: 1,
        sidebar: {
            '/base/': [{
                title: 'Base',
                collapsable: false,
                children: [
                    '',
                    '/base/js-run-origin.md',
                    '/base/css-box.md',
                    '/base/self-code.md',
                    '/base/http.md',
                    '/base/extends.md',
                    '/base/es6.md',
                    '/base/ajax.md',
                    '/base/prototype.md',
                    '/base/closure.md'
                ]
            }],
            '/snail-book': [{
                title: '蜗牛小册子',
                collapsable: false,
                children: [
                    '/snail-book/1909.md'
                ]
            }],
            '/important-base/': [{
                title: '烧脑基础',
                collapsable: false,
                children: [
                    ''
                ]
            }],
            '/react/': [{
                title: 'React',
                collapsable: false,
                children: [
                    '/react/lifecycle.md',
                    '/react/databind.md'
                ]
            }],
            '/tech-world/': [{
                title: '技术广度',
                collapsable: false,
                children: [
                    ''
                ]
            }],
            '/source-analysis/': [{
                title: '源码分析',
                collapsable: false,
                children: [
                    ''
                ]
            }],
            '/todo-demo/': [{
                title: '实验室',
                collapsable: false,
                children: [
                    ''
                ]
            }],
            '/snail/': [{
                collapsable: false,
                children: [
                    ''
                ]
            }],
            '/toolkit/': [{
                title: '工具箱',
                collapsable: false,
                children: [
                    '',
                    '/toolkit/base-memory.md'
                ]
            }],
            '/read-books/': [{
                title: '读书',
                collapsable: false,
                children: [
                    '',
                    '/read-books/what-life-should-mean-to-you.md'
                ]
            }],
            '/study/': [{
                title: '学习',
                collapsable: false,
                children: [
                    '',
                    '/study/fanwei.md'
                ]
            }],
            '/component/': [{
                title: '组件库',
                collapsable: false,
                children: [
                    ''
                ]
            }],
            '/about/': [{
                title: '关于我',
                collapsable: false,
                children: [
                    ''
                ]
            }]
        }
    },
    plugins: [
        ['vuepress-plugin-baidu-google-analytics', {
          hm: '568d8cc1a88d56015fa25067311d5991',
          ignore_hash: false
        }],
        ['@vuepress/last-updated',{
            transformer: (timestamp, lang) => {
              // 不要忘了安装 moment
              const moment = require('moment')
              moment.locale(lang)
              return moment(timestamp).fromNow()
            }
          }
        ]
    ]
}
module.exports = {
    dest: 'docs',
    base: '/tech-snail/',
    title: '蜗牛🐌不牛',
    description: '技术方面的沉淀，积累',
    themeConfig: {
        nav: [
        	{
	            text: '基础',
	            link: '/base/'
        	},
        	// {
	        //     text: '烧脑基础',
	        //     link: '/important-base/'
        	// },
            // {
            //     text: 'React',
            //     link: '/react/'
            // },
            // {
            //     text: 'snail',
            //     items: [
            //         {
            //             text: '技术广度',
            //             link: '/tech-world/'
            //         },
            //         {
            //             text: '源码分析',
            //             link: '/source-analysis/'
            //         },
            //         {
            //             text: '实验室',
            //             link: '/todo-demo/'
            //         },
            //         {
            //             text: '蜗牛计划',
            //             link: '/snail/'
            //         },
            //         {
            //             text: '工具箱',
            //             link: '/toolkit/'
            //         },
            //         {
            //             text: '组件库',
            //             link: '/component/'
            //         },
            //         {
            //             text: '关于我',
            //             link: '/about/'
            //         }
            //     ]
            // },
        	{
	            text: 'GitHub',
	            link: 'https://github.com/fuxy1011/tech-snail'
        	}
        ],
        sidebarDepth: 1,
        sidebar: {
            '/base/': [{
                title: '基础',
                collapsable: false,
                children: [
                    '',
                    '/base/js-run-origin.md',
                    '/base/css-box.md',
                    '/base/self-code.md',
                    '/base/http.md'
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
                    ''
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
                title: '蜗牛计划',
                collapsable: false,
                children: [
                    ''
                ]
            }],
            '/toolkit/': [{
                title: '工具箱',
                collapsable: false,
                children: [
                    ''
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
    }
}
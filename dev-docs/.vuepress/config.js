module.exports = {
    dest: 'docs',
    base: '/tech-snail/',
    title: '蜗牛🐌不牛',
    description: '技术方面的沉淀，积累',
    themeConfig: {
        nav: [
        	{
	            text: '指南',
	            link: '/guide/'
        	},
        	{
	            text: '配置参考',
	            link: '/config/'
        	},
        	{
	            text: 'GitHub',
	            link: 'https://github.com/fuxy1011/tech-snail'
        	}
        ],
        sidebarDepth: 2,
        sidebar: {
            '/guide/': [{
                title: '指南',
                collapsable: false,
                children: [
                '介绍', 
                '起步', 
                ['配置', 'Explicit link text']]
            }],
            '/config/': [{
                title: '配置参考',
                collapsable: false,
                children: [
                '基本配置', 
                '主题化', 
                ['Markdown', 'Markdown']]
            }]
        }
    }
}
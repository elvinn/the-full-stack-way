const dayjs = require('dayjs')
const blogList = require('./blog')
require('dayjs/locale/zh-cn')

dayjs.locale('zh-cn')

module.exports = {
    base: '/',
    title: 'The Full Stack Way',
    theme: '@vuepress/default',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '计算机基础',
                items: [
                    {
                        text: '数据结构与算法',
                        link: '/data-structure-and-algorithms/'
                    },
                    {
                        text: '操作系统',
                        link: '/operating-system/'
                    },
                    {
                        text: '网络',
                        link: '/network/'
                    }
                ]
            },
            {
                text: 'Web 前端',
                items: [
                    {
                        text: 'HTML&CSS',
                        link: '/html&css/'
                    },
                    {
                        text: 'JavaScript',
                        link: '/javascript/'
                    },
                    {
                        text: '工程化',
                        link: '/engineering/'
                    },
                    {
                        text: 'React',
                        link: '/react/'
                    },
                    {
                        text: 'Vue',
                        link: '/vue/'
                    },
                    { text: '小程序', link: '/mini-program/' }
                ]
            },
            {
                text: 'Node',
                link: '/node/'
            },
            {
                text: '数据库',
                link: '/database/',
                items: [
                    {
                        text: 'Redis',
                        link: '/redis/'
                    }
                ]
            },
            { text: 'Docker', link: '/docker/' },
            {
                text: '工具',
                link: '/tools/'
                // items: [
                //     {
                //         text: 'VSCode',
                //         link: '/vscode/'
                //     },
                //     {
                //         text: 'Mac',
                //         link: '/mac/'
                //     },
                //     {
                //         text: 'Git',
                //         link: '/git/'
                //     }
                // ]
            },
            { text: 'Github', link: 'https://github.com/chhpt/the-full-stack-way' }
        ],
        displayAllHeaders: true,
        lastUpdated: '上次更新',
        sidebar: {
            '/data-structure-and-algorithms/': ['', 'problems', 'array/', 'string/', 'linked-list/'],
            '/docker/': ['', 'intro'],
            '/engineering/': [
                {
                    title: '工程化',
                    collapsable: false,
                    children: ['', 'modular', 'webpack/', 'webpack/webpack_1', 'webpack/webpack_2', 'webpack/loader']
                }
            ],
            '/react/': [
                {
                    title: 'React 基础',
                    collapsable: false,
                    children: ['', 'lifecycle', 'event']
                }
            ],
            '/html&css/': [
                {
                    title: 'HTML',
                    collapsable: false,
                    children: ['', 'dom', 'html5', 'style', 'canvas']
                },
                {
                    title: 'CSS',
                    collapsable: false,
                    children: ['css', 'layout']
                },
                {
                    title: '浏览器',
                    collapsable: false,
                    children: ['painting', 'browser']
                }
            ],
            '/javascript/': [
                {
                    title: '基础',
                    collapsable: false,
                    children: [
                        '',
                        'foundation',
                        'function',
                        'object',
                        'performance',
                        'theory',
                        'test',
                        'patterns',
                        'cors'
                    ]
                },
                {
                    title: '正则表达式',
                    collapsable: false,
                    children: ['reg/']
                },
                {
                    title: 'ES6',
                    collapsable: false,
                    children: ['es6/', 'es6/dev']
                },
                {
                    title: 'TypeScript',
                    collapsable: false,
                    children: ['typescript/', 'typescript/doc']
                },
                {
                    title: '小技巧',
                    collapsable: false,
                    children: ['tips/']
                }
            ],
            // 隐藏小程序
            // '/mini-program/': [
            //     {
            //         title: '小程序',
            //         collapsable: false,
            //         children: ['', 'base', 'mpvue', 'mp', 'cloud']
            //     }
            // ],
            '/network/': ['', 'http', 'security', 'performance'],
            '/node/': [
                {
                    title: 'Node',
                    collapsable: false,
                    children: ['', 'module', 'npm', 'event-loop', 'v8', 'stream']
                },
                {
                    title: 'Koa',
                    collapsable: false,
                    children: ['koa/koa', 'koa/koa-router']
                }
            ],
            '/operating-system/': ['', 'file'],
            '/tools/': ['vscode/', 'vscode/plugin', 'git/', 'mac/']
        }
    },
    plugins: {
        '@vuepress/active-header-links': {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor',
            headerTopOffset: 100
        },
        '@vuepress/medium-zoom': true,
        '@vuepress/container': true,
        '@vuepress/last-updated': {
            transformer: (timestamp) => {
                return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
            }
        }
    }
}

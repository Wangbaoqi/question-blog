module.exports = {
  // 站点配置
  base: '/',
  lang: 'zh-CN',
  title: '前端面试题收集',
  description: '花里胡哨的面试题收集',
  head: [['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/logo/logo.png' }]],


  
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    // logo: 'https://vuejs.org/images/logo.png',

    navbar: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
      },
      {
        text: '前端面试题',
        link: '/frontend/html/',
      },
      {
        text: '前端工程化',
        link: '/toolchain/',
      },
      {
        text: '算法面试题',
        link: '/algorithm/',
      },
      {
        text: '计算机网络',
        link: '/network/',
      },
      {
        text: '前端不好玩',
        link: 'https://www.wangbaoqi.tech',
      },
      {
        text: '算法不好玩',
        link: 'https://www.algo.wangbaoqi.tech',
      },
    ],

    sidebar: {
      '/frontend/': [
        {
          text: 'HTML',
          collapsible: true, // '/frontend/html/README.md', '/guide/getting-started.md'
          children: [
            {
              text: 'Foo',
              link: '/frontend/html/README.md',
            }
          ],
        },
      ],
      '/toolchain/': [
        {
          text: 'Reference',
          collapsible: true,
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
      '/algorithm/': [
        {
          text: '字符串',
          collapsible: true,
          children: ['/guide/README.md', '/guide/getting-started.md'],
        },
        {
          text: '数组',
          collapsible: true,
          children: ['/guide/README.md', '/guide/getting-started.md'],
        },
        {
          text: '栈、队列',
          collapsible: true,
          children: ['/guide/README.md', '/guide/getting-started.md'],
        },
        {
          text: '链表',
          collapsible: true,
          children: ['/guide/README.md', '/guide/getting-started.md'],
        },
        {
          text: '二叉树',
          collapsible: true,
          children: ['/guide/README.md', '/guide/getting-started.md'],
        },
        {
          text: '二分查找',
          collapsible: true,
          children: ['/guide/README.md', '/guide/getting-started.md'],
        },
        {
          text: 'DFS、BFS',
          collapsible: true,
          children: ['/guide/README.md', '/guide/getting-started.md'],
        },
        {
          text: '回溯算法',
          collapsible: true,
          children: ['/guide/README.md', '/guide/getting-started.md'],
        },
        {
          text: '动态规划',
          collapsible: true,
          children: ['/guide/README.md', '/guide/getting-started.md'],
        },
      ],
    },
  },
 
}
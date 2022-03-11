module.exports = {
  // 站点配置
  base: '/',
  lang: 'zh-CN',
  title: '前端面试题收集',
  description: '花里胡哨的面试题收集',
  head: [['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/logo/logo.png' }]],
  dest: 'public',
  
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    darkMode: false,
    navbar: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
      },
      {
        text: '前端面试题',
        link: '/frontend/',
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
          text: '目录',
          link: '/frontend/'
        },
        {
          text: 'HTML',
          collapsible: true,
          children: [
            {
              text: 'Foo',
              link: '/frontend/html/README.md',
            }
          ],
        },
        {
          text: 'CSS',
          collapsible: true,
          children: [
            {
              text: '高度塌陷',
              link: '/frontend/css/high-collapse.md',
            },{
              text: 'margin折叠',
              link: '/frontend/css/margin-collapse.md',
            },{
              text: 'BFC',
              link: '/frontend/css/BFC.md',
            },{
              text: '居中方案',
              link: '/frontend/css/center.md',
            },{
              text: '弹性盒子',
              link: '/frontend/css/flex.md',
            },{
              text: '媒体查询',
              link: '/frontend/css/media.md',
            }
          ],
        },
        {
          text: 'JavaScript',
          collapsible: true,
          children: [
            {
              text: 'Foo',
              link: '/frontend/html/README.md',
            }
          ],
        },
        {
          text: 'JavaScript 手写篇',
          collapsible: true, 
          children: [
            {
              text: '目录',
              link: '/frontend/JavaScriptApi/'
            },
            {
              text: '对象实现篇',
              collapsible: true,
              children: [
                '/frontend/JavaScriptApi/object/create.md',
                '/frontend/JavaScriptApi/object/clone.md',
                '/frontend/JavaScriptApi/object/new.md',
                '/frontend/JavaScriptApi/object/instanceof.md',
                '/frontend/JavaScriptApi/object/inherit.md',
                '/frontend/JavaScriptApi/object/is.md',
                '/frontend/JavaScriptApi/object/proxy.md',

              ],
            },
            {
              text: '函数实现篇',
              collapsible: true,
              children: [
                '/frontend/JavaScriptApi/function/apply_bind_call.md',
                '/frontend/JavaScriptApi/function/curry.md',
                '/frontend/JavaScriptApi/function/compose.md',
                '/frontend/JavaScriptApi/function/pipe.md',
                '/frontend/JavaScriptApi/function/privateVar.md',
              ],
            },
            {
              text: '数组实现篇',
              collapsible: true,
              children: [
                '/frontend/JavaScriptApi/array/indexOf.md',
                '/frontend/JavaScriptApi/array/forEach.md',
                '/frontend/JavaScriptApi/array/some.md',
                '/frontend/JavaScriptApi/array/map.md',
                '/frontend/JavaScriptApi/array/reduce.md',
                '/frontend/JavaScriptApi/array/filter.md',
                '/frontend/JavaScriptApi/array/flat.md',
                '/frontend/JavaScriptApi/array/duplication.md',
                '/frontend/JavaScriptApi/array/union.md',
                '/frontend/JavaScriptApi/array/chaosSort.md',
              ],
            },
            {
              text: 'DOM实现篇',
              collapsible: true,
              children: [
                '/frontend/JavaScriptApi/dom/event.md',
                '/frontend/JavaScriptApi/dom/domSum.md',
                '/frontend/JavaScriptApi/dom/drag.md',
              ],
            },
            {
              text: '异步实现篇',
              collapsible: true,
              children: [
                '/frontend/JavaScriptApi/async/promise.md',
                '/frontend/JavaScriptApi/async/sum_add.md',
                '/frontend/JavaScriptApi/async/setTimeout.md',
                '/frontend/JavaScriptApi/async/throttle.md',
              ],
            },
            {
              text: '请求实现篇',
              collapsible: true,
              children: [
                '/frontend/JavaScriptApi/request/url.md',
                '/frontend/JavaScriptApi/request/ajax.md',
                '/frontend/JavaScriptApi/request/jsonp.md',
                '/frontend/JavaScriptApi/request/http.md',
              ],
            },
            {
              text: '场景实现篇',
              collapsible: true,
              children: [
                '/frontend/JavaScriptApi/scene/lazyImg.md',
                '/frontend/JavaScriptApi/scene/sleep_delay.md',
                '/frontend/JavaScriptApi/scene/lazyMan.md',
                '/frontend/JavaScriptApi/scene/greenLight.md',
                '/frontend/JavaScriptApi/scene/thousand_points.md',
                '/frontend/JavaScriptApi/scene/url_right.md',
                '/frontend/JavaScriptApi/scene/array_tree.md',
                '/frontend/JavaScriptApi/scene/localStorage.md',
                '/frontend/JavaScriptApi/scene/entry.md',
                '/frontend/JavaScriptApi/scene/binary_base64.md',
                '/frontend/JavaScriptApi/scene/data_bind.md',
              ],
            },
          ],
        },
        {
          text: '前端工程化',
          collapsible: true,
          children: [
            {
              text: 'Foo',
              link: '/frontend/toolchain/README.md',
            }
          ],
        },
      ],
      '/algorithm/': [
        {
          text: '目录',
          link: '/algorithm/'
        },
        {
          text: '字符串',
          collapsible: true,
          children: [
            '/algorithm/string/最长回文子串.md',
            '/algorithm/string/无重复字符的最长子串.md',
            '/algorithm/string/最小覆盖子串.md',
          ],
        },
        {
          text: '数组',
          collapsible: true,
          children: [
            '/algorithm/array/nSum问题.md'
          ],
        },
        {
          text: '栈、队列',
          collapsible: true,
          children: ['/guide/README.md', '/guide/getting-started.md'],
        },
        {
          text: '链表',
          collapsible: true,
          children: [
            '/algorithm/linklist/环形链表.md',
            '/algorithm/linklist/反转链表.md',
            '/algorithm/linklist/排序链表.md',
            '/algorithm/linklist/相交链表.md',
            '/algorithm/linklist/合并k个升序链表.md',
            '/algorithm/linklist/K个一组翻转链表.md'
          ],
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
      '/network/': [
        {
          text: '目录',
          link: '/network/'
        },
      ]
    },


    plugins: [
      [
        '@vuepress/plugin-search',
      ],
      [
        '@vuepress/plugin-shiki'
      ],
      [
        '@vuepress/docsearch',
        {
          apiKey: '<API_KEY>',
          indexName: '<INDEX_NAME>',
          locales: {
            '/': {
              placeholder: 'Search Documentation',
            },
            '/zh/': {
              placeholder: '搜索文档',
            },
          },
        },
      ],
    ],
    
  },
 
}
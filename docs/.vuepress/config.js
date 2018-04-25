module.exports = {
  dest: './dist',
  title: 'Hello MT-BLOG',
  description: '12345，上山打老虎。',
  themeConfig: {
    repo: 'TaoXuSheng/vuepress-blog',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: '知乎', link: '/zhihu/' },
      {
        text: '我的项目',
        items: [
          { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
        ]
      }
    ],
    sidebar: {
      '/blog/': [
        '',
      ],
      '/zhihu/': [
        ''
      ]
    }
  }
}

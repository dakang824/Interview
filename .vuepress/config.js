module.exports = {
  title: "前端搬运工",
  description: "我们不生成代码,我们只是代码搬运工.",
  dest: "public",
  base: "/Interview/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "归档",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "更多",
        icon: "reco-message",
        items: [
          {
            text: "每日一题",
            link: "/docs/questions/",
          },
        ],
      },
      {
        text: "联系我",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/dakang824",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/questions/": ["theme", "plugin", "api"],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "前端",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
    logo: "/logo.png",
    search: true,
    mode: "dark",
    subSidebar: "auto",
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "yukang",
    authorAvatar: "https://dakang824.github.io/imgs/folder_a/132.jpg",
    record: "xxxx",
    startYear: "2017",
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: [
          "haruto",
          "blackCat",
          "whiteCat",
          "haru1",
          "haru2",
          "koharu",
          "izumi",
          "shizuku",
          "wanko",
          "miku",
          "z16",
        ],
        clean: false,
        modelStyle: { left: "20px", bottom: "-20px", opacity: "0.9" },
        btnStyle: { left: "155px", bottom: "40px" },
        messageStyle: { left: "68px", bottom: "190px" },
        messages: {
          welcome: "我是lookroot欢迎你的关注 ",
          home: "心里的花，我想要带你回家。",
          theme: "好吧，希望你能喜欢我的其他小伙伴。",
          close: "再见哦",
        },
      },
    ],
    ["cursor-effects"],
  ],
  markdown: {
    lineNumbers: true,
  },
};

import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ffxivmemo/', 
  title: "memo", // サイト全体のタイトル
  description: "",

  themeConfig: {
    // 1. 左側のサイドバーに「攻略メニュー」を表示する設定
    sidebar: [
      {
        text: 'menu',
        items: [
          { text: '🏠 メインページ', link: '/' },
          
          // ↓↓↓ 余計なHTMLタグをすべて消し、シンプルな文字だけにします ↓↓↓
          { text: '絶妖星乱舞', link: '/kefka' }
        ]
      }
    ],

    // 2. 下部の「Next（次のページ）」という英語表記を日本語に変える設定
    docFooter: {
      prev: '前のページ',
      next: '次のページ'
    }
  }
})
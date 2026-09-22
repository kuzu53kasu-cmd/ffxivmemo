import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ffxivmemo/', 
    // ↓↓↓ この1行を追加して保存します ↓↓↓
  cleanUrls: true,
  title: "memo", // サイト全体のタイトル
  description: "",

  themeConfig: {
    // 1. 左側のサイドバーに「攻略メニュー」を表示する設定
    sidebar: [
      {
        text: 'menu',
        items: [
          { text: '🏠 メインページ', link: '/' },
          
          // ↓↓↓ HTMLタグを廃止し、VitePress公式の「icon」指定に書き換えます ↓↓↓
          { 
            text: '絶妖星乱舞', 
            link: '/kefka', // ※VitePress内での内部リンクは頭の /ffxivmemo は不要です
            icon: {
              src: '/icons/kefka.png', // public/icons/kefka.png を指す正しい書き方
              alt: 'ケフカ'
            }
          }
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
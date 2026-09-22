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
          
          { 
            // ↓↓↓ 変更ポイント：src="ffxivmemo/..." と、先頭のスラッシュ「 / 」を消します！ ↓↓↓
            text: '<img src="ffxivmemo/icons/kefka.png" style="width:18px; height:18px; display:inline-block; vertical-align:middle; margin-right:6px;"> 絶妖星乱舞', 
            link: '/kefka' // 内部リンクはこれでOK
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
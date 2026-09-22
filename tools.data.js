import * as cheerio from 'cheerio'

// 掲載するリンク一覧
// title・description・imageは、自動取得できなかったときに使います
const categories = {
  logs: [
    {
        url: 'https://ja.fflogs.com/',
        title: 'FF Logs',
        description: 'logs',
        image: '/ffxivmemo/icons/fflogs.png'
    },
    {
      url: 'https://xivanalysis.com/',
      title: 'XIVAnalysis',
      description: 'アナライズ'
    },
    {
      url: 'https://raalm.com/m-spec/main_menu.html',
      title: 'm-spec',
      description: '上位100人のスキル回し',
      image: '/ffxivmemo/icons/m-spec.png'
    },
    {
      url: 'https://logs.enzyu.com/ja',
      title: 'LogTools',
      description: '絶のDPS統計'
    },
    {
      url: 'https://analyzer.wtfdig.info/',
      title: 'analyzer.wtfdig.info',
      description: 'logsのURL貼り付けてワイプ原因探るやつ',
      image: '/ffxivmemo/icons/wtfdig.png'
    }
  ],
  equipment: [
    {
      url: 'https://xivgear.app/',
      title: 'XIVGear',
      image: '/ffxivmemo/icons/xivgear.png',
      description: '装備シミュ'
    }
  ]
}

// リンク先に書かれた画像URLを整える
function resolveImage(value, baseUrl) {
  if (!value) return ''

  try {
    const url = new URL(value, baseUrl)

    return ['https:', 'http:'].includes(url.protocol)
      ? url.href
      : ''
  } catch {
    return ''
  }
}

// 手動設定した画像は、自分のサイト内の画像にも対応
function resolveFallbackImage(value, baseUrl) {
  if (!value) return ''

  if (value.startsWith('/') && !value.startsWith('//')) {
    return value
  }

  return resolveImage(value, baseUrl)
}

// サイト1件分の情報を取得
async function fetchPreview(item) {
  const url = new URL(item.url)

  if (!['https:', 'http:'].includes(url.protocol)) {
    throw new Error(`HTTP/HTTPSのURLを指定してください: ${item.url}`)
  }

  // 自動取得できなかったときに使う情報
  const fallback = {
    url: url.href,
    title: item.title || url.hostname,
    description: item.description || description || '',
    image: resolveFallbackImage(item.image, url.href),
    site: url.hostname
  }

  try {
    const response = await fetch(url.href, {
      signal: AbortSignal.timeout(10000),
      headers: {
        Accept: 'text/html,application/xhtml+xml'
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const contentType = response.headers.get('content-type') || ''

    if (!/text\/html|application\/xhtml\+xml/i.test(contentType)) {
      throw new Error('HTMLページではありません')
    }

    const buffer = Buffer.from(await response.arrayBuffer())
    const $ = cheerio.loadBuffer(buffer)

    const meta = (selector) =>
      $(selector).first().attr('content')?.trim() || ''

    const title =
      meta('meta[property="og:title"]') ||
      meta('meta[name="twitter:title"]') ||
      $('title').first().text().trim()

    const description =
      meta('meta[property="og:description"]') ||
      meta('meta[name="twitter:description"]') ||
      meta('meta[name="description"]')

    const image =
      meta('meta[property="og:image"]') ||
      meta('meta[name="twitter:image"]')

    // 自動取得した情報を優先し、足りない項目は手動設定で補う
    return {
      ...fallback,
      title: title || fallback.title,
      description: item.description || description || '',
      image:
        resolveImage(image, response.url || url.href) ||
        fallback.image
    }
  } catch (error) {
    console.warn(
      `[OGP] ${url.href}: ${error.message} → 手動設定で表示します`
    )

    return fallback
  }
}

// VitePressがビルド時に実行する
export default {
  async load() {
    const result = {}

    for (const [category, items] of Object.entries(categories)) {
      result[category] = await Promise.all(
        items.map(fetchPreview)
      )
    }

    return result
  }
}
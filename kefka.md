---
layout: doc
---

# 絶妖星乱舞

## 📄 野良募集

:::: details 募集文とか解法リンクとか

```募集文
消化 全部ヤーン
```
<p class="macro-caption">補足：明記はされていないが、「P1は0秒バースト、以降P5まではリキャバ」「P5はスリスタ3塔後にバースト」「P5ミッシング2塔から時計90°」が暗黙の前提となっている。</p>

<div class="macro-spacer"></div>

```ポジション軽減宣言
H2 GC1鼓舞展開陣　GC23イルミコンソレ士気陣
```
<div class="tool-grid">
  <a
    class="tool-card"
    href="https://yan-flash.com/ultimate/yosei-ranbu"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      class="tool-card-preview"
      src="/icons/ya-n.png"
      alt=""
      loading="lazy"
    >
    <span class="tool-card-title">
      ヤーン速報-妖星乱舞
      <span aria-hidden="true">↗</span>
    </span>
    <span class="tool-card-description">
      野良の主流解法はこれ
    </span>
  </a>
  <a
    class="tool-card"
    href="https://analyzer.wtfdig.info/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      class="tool-card-preview"
      src="/icons/wtfdig.png"
      alt=""
      loading="lazy"
    >
    <span class="tool-card-title">
      Analyzer.wtfdig.info
      <span aria-hidden="true">↗</span>
    </span>
    <span class="tool-card-description">
      logsのURL貼り付けてワイプ原因探るやつ
    </span>
  </a>
    <a
    class="tool-card"
    href="https://docs.google.com/spreadsheets/d/1FNLt1Z-Kj8R50swZPgLafs1bjYKDPTir7Q7Q9xqMHOc/edit?gid=2111891566#gid=2111891566"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      class="tool-card-preview"
      src="/icons/keigen.png"
      alt=""
      loading="lazy"
    >
    <span class="tool-card-title">
      絶妖精乱舞-軽減表
      <span aria-hidden="true">↗</span>
    </span>
    <span class="tool-card-description">
      軽減表サンプル
    </span>
  </a>
</div>

::::

---

## <img src="/icons/phase1.png" class="phase-icon" alt=""> P1

::::: details ケフカ

:::: details 学者

::: tip はじめに

タンク強攻撃は、基本的に以下の順で受けることを前提に記載している。<br>
**MTフルバフ → STフルバフ → ST無敵 → MT無敵**<br>
ただし、「MT無敵 → STフルバフ → MTフルバフ → ST無敵」など、変則的になることもある。<br>
**受け方によってヒーラーの動きも変わるため、タンク同士の打ち合わせには耳を傾けておくこと！**

::: danger 特にダメージが痛いギミックは<span class="text-red"><strong>背景を赤色</strong></span>で記載。<br>
:::

<div class="mechanic">
  <div class="mechanic-title">カウント開始～開幕</div>
  <div class="mechanic-description">

カウント残り10秒でMTに鼓舞。<br>
カウント0で着弾するように獄炎法を詠唱し、着弾後すぐに連環計を使用する。続けて、次のタンク強攻撃に備えて陣を設置する。<br>
<strong>転化 → エーテルフローの順に使用しておくと、ファイガ前に妖精が戻ってくるので、その後の動きがスムーズになる。</strong>

  </div>
</div>

<div class="mechanic">
  <div class="mechanic-title">ばりばりルインガ1（タンク強攻撃1）</div>
  <div class="mechanic-description">

強攻撃 → AA → 強攻撃 → AAの順に受ける。<br>
MTフルバフ＋陣＋リプ＋牽制＋PHの単体軽減＋STの短バフがあれば、合計被ダメージは約300,000～350,000。<br>
各攻撃の間に2秒の猶予があるため、基本的にはPHのインスタントヒールやHoTで戻す想定でよい。<br>
PHの単体軽減やSTの短バフが抜けると、MTが適切にバフを使っていても厳しい。<br>
MTが繰り返し落ちるようなら、ログで周囲の軽減が入っているか確認しよう。<br>
<span class="text-red"><strong>アドルはここでは不要！</strong></span><br>

  </div>
</div>

<div class="mechanic  mechanic-danger">
  <div class="mechanic-title">神々の像1</div>
  <div class="mechanic-description">

素受けでファイガ210,000 → 波動砲または塔踏み325,000 → トラップ165,000と続き、<span class="text-red"><strong>合計約700,000ダメージ</strong></span>を受けるギミック。<br>
特に、<span class="text-red"><strong>ファイガから波動砲・塔踏みまでは5秒しか猶予がない</strong></span>ため、慣れないうちは戻し軽減が忙しい。<br>
また、大ダメージを受ける波動砲には牽制・アドルが効かないため、全体軽減で耐える必要がある。<br>

基本的な動きは以下の通り。<br>

<ol class="strategy-steps">
  <li>
    <strong>事前に鼓舞展開</strong>
  </li>
  <li>
    <strong>転化の効果が切れたら、妖精を中央へ移動</strong>
    <span class="step-note">散開・頭割りの移動と重なるため、操作がやや忙しい。</span>
  </li>
  <li>
    <strong>陣を設置し、サモン・セラフィムを使用</strong>
  </li>
  <li>
    <strong>ファイガを受けたら、コンソレ1回目＋イルミ</strong>
    <span class="step-note">イルミは、次の「裁きの光」まで効果が残るように使用する。</span>
  </li>
  <li>
    <strong>波動砲・塔踏みを受けたら、不撓不屈</strong>
  </li>
  <li>
    <strong>トラップを受けたら、コンソレ2回目</strong>
    <span class="step-note">次の「裁きの光」に備えて使用する。</span>
  </li>
</ol>

上記の流れが理想だが、波動砲で落ちるようなら、「神々の像」の詠唱完了直後に疾風怒涛を使用する。<br>
それでもだめなら、手順4のタイミング（ファイガ被弾後）でセラフィズム＋アクセッションを使用し、波動砲を耐えよう。<br>

<p class="mini-tip">
  <span class="mini-tip-label">補足：</span>
  疾風怒涛は、PHが2分軽減（Nセクまたはテンパ）を使うなら不要、使わないなら必要、という基準で判断するとよい。
</p>

<div class="strategy-subheading">タンク・レンジの90秒軽減について</div>
タンク・レンジの90秒軽減は、すべてここに使ってもらおう！<br>
使用タイミングは以下の通り。「神々の像」の詠唱完了から一拍置いて使用すると、波動砲・塔踏みまでギリギリ効果が残る。<br>
<img src="/icons/kami1.png" alt="神々の像1の軽減タイミング" class="strategy-image" />
これより遅れると、「神々の像2」の重力踏みまでにリキャストが戻らないので注意。<br>

  </div>
</div>

<div class="mechanic mechanic-danger">
  <div class="mechanic-title">裁きの光1</div>
  <div class="mechanic-description">

素受けで約300,000ダメージ。<br>
リプ＋アドル＋牽制＋イルミ＋コンソレがあれば、HPが約20,000残る想定。<br>
さらにパッセが入れば、HPが約50,000残る。<br>
アドルもパッセもない場合は、コンソレのバリアだけでは耐えられないため、追加で意気が必須。<br>
<strong>リプ・アドル・牽制は、詠唱完了ギリギリに使用すると、次のタンク強攻撃にも効果が残る。</strong><br>
<span class="text-red"><strong>アドルはここに入れてもらおう！</strong></span><br>
<span class="text-red"><strong>ナイトがいるなら、必ずパッセももらおう！！</strong></span><br>

<p class="mini-tip">
  <span class="mini-tip-label">補足：</span>
  波動砲に陣を使っている場合、ここではリキャストが戻っていないはず。ここで陣を使う場合も、早めに設置しないと、次の重力弾までにリキャストが戻らないので注意。
</p>

  </div>
</div>

<div class="mechanic">
  <div class="mechanic-title">ハイパードライブ1（タンク強攻撃2）</div>
  <div class="mechanic-description">

強攻撃 → AA → 強攻撃 → AA → 強攻撃 → AAの順に受ける。<br>
1発あたりはルインガよりやや弱いが、回数が多いため総ダメージは大きい。<br>
STフルバフ＋リプ＋牽制＋アドル＋PHの単体軽減＋MTの短バフがあれば、合計被ダメージは約300,000～350,000。<br>
各攻撃の間に2秒の猶予があるため、基本的にはPHのインスタントヒールやHoTで戻す想定でよい。<br>
PHの単体軽減やMTの短バフが抜けると、STが適切にバフを使っていても厳しい。<br>
STが繰り返し落ちるようなら、ログで周囲の軽減が入っているか確認しよう。<br>
<strong>リプ・アドル・牽制は、直前の「裁きの光1」の詠唱完了ギリギリに使用すると、このタンク強攻撃にも効果が残る。使用タイミングを意識してもらおう！</strong><br>

  </div>
</div>

<div class="mechanic">
  <div class="mechanic-title">神々の像2</div>
  <div class="mechanic-description">

<div class="checkpoint-heading">
  <span class="checkpoint-number">1</span>
  <span>重力弾1 → 岩石弾1</span>
</div>
素受けで重力弾50,000×4回＋岩石弾20,000、合計約220,000ダメージ。軽減なしでも乱数次第では耐えられるが、陣とバリアは入れておくのが無難。<br>
以下のタイミングでセラフィズムを使用し、次のGCDでアクセッション → 陣＋囁きの順に使用する。陣・囁き・セラフィズムの3つのHoTで、2回目の重力弾までにHPを戻す。<br>
<img src="/icons/kami2.png" alt="神々の像2の軽減タイミング" class="strategy-image" />
間にルインガを挟むため、戻しの時間には余裕がある。ここはHoTに任せ、不撓不屈とフェイブレッシングは2回目の重力弾・岩石弾に残しておこう。<br>
<span class="text-red"><strong>陣はこのタイミングで使っておかないと、後の重力踏みまでにリキャストが戻らないので注意！</strong></span><br>

<div class="checkpoint-heading">
  <span class="checkpoint-number">2</span>
  <span>ばりばりルインガ2（タンク強攻撃3）→ 神々の像からの半面焼き1</span>
</div>
無敵受けなので、タンクケアは基本不要。ただし、STが戦士・暗黒の場合はケアが必要になる。<br>
上述のタイミングでセラフィズムを使っておくと、無詠唱のアクセッションを使いながら半面焼きの安置へ移動できるので楽。<br>
<img src="/icons/kami2-2.png" alt="半面焼きの安置への移動とアクセッションの使用タイミング" class="strategy-image" style="display: block; width: 520px; max-width: 100%; height: auto; margin-left: auto; margin-right: auto;" />

<div class="checkpoint-heading">
  <span class="checkpoint-number">3</span>
  <span>重力弾2 → 岩石弾2 → 神々の像からの半面焼き2</span>
</div>
ここは陣を使えないため、バリアで耐え、不撓不屈とフェイブレッシングで戻す。<br>
岩石弾を受けたら、次のトラップ＋重力踏みに備えて鼓舞展開しておく。<br>
<span class="text-red"><strong>岩石担当の場合、半面焼きの安置へ移動しつつ鼓舞展開する必要があり、タイミングがかなりシビア！迅速魔＋スプリント推奨！</strong></span><br>

<div class="checkpoint-danger">
<div class="checkpoint-heading">
  <span class="checkpoint-number">4</span>
  <span>トラップ＋重力踏み</span>
</div>
素受けでトラップ165,000＋グラビガ65,000×4回、<span class="text-red"><strong>合計約425,000ダメージ！</strong></span><br>
鼓舞展開＋疾風怒涛＋陣で備えよう。周囲の軽減もしっかり入っていれば、3人受けでも余裕を持って耐えられる。<br>
<strong>陣と疾風怒涛は、半面焼きのエフェクトが出た後に使用すると、次の「裁きの光」まで効果が残るのでおすすめ。</strong><br>
<strong>重力踏みが終わるあたりで2分バースト。ここでずれるとP4開幕まで修正できないため、必ず合わせよう！</strong><br>

<div class="strategy-subheading">ヒーラー以外の軽減について</div>
リプ・牽制と、タンク・レンジの90秒軽減はここに使ってもらおう。<br>
トラップを受ける直前か直後に使用してもらえば、重力踏みから「裁きの光」まで効果が残る。<br>
<span class="text-red"><strong>「裁きの光1」でアドルを使っている場合、ここではリキャストが戻っていないので注意！</strong></span><br>
</div>

  </div>
</div>

<div class="mechanic">
  <div class="mechanic-title">裁きの光2</div>
  <div class="mechanic-description">

直前の重力踏みで使った軽減が残っているため、被ダメージはかなり抑えられるはず。<br>
基本的にバリアは不要だが、初回のトライでは様子見で張っておくと安心。<br>

  </div>
</div>

<div class="mechanic">
  <div class="mechanic-title">ハイパードライブ2（タンク強攻撃4）</div>
  <div class="mechanic-description">

P1最後のタンク強攻撃。<br>
無敵受けなので、タンクケアは基本不要。ただし、MTが戦士・暗黒で戻しに不安があるなら、深謀を入れておくと安心。<br>

  </div>
</div>

<div class="mechanic">
  <div class="mechanic-title">ずびずばテレポ</div>
  <div class="mechanic-description">

<div class="checkpoint-heading">
  <span class="checkpoint-number">1</span>
  <span>ずびずばテレポ詠唱 → テレポ設置 → トラップ</span>
</div>
ずびずばテレポの詠唱開始に合わせて、トラップ受けに備えた意気軒高のバリアを張っておく。<br>
<p class="mini-tip">
  <span class="mini-tip-label">補足：</span>
  テレポを設置のたびに約2,000ダメージ受けてバリアが削られるが、気にしなくてよい。
</p>
PHがすでにバリア（Nセクまたはカレス）を張っている場合は、ここでの意気軒高は省略する。<br>


テレポの配置が終わったら、サモン・セラフィム → 陣 → 囁き → イルミの順に使用する。<br>
<p class="mini-tip">
  <span class="mini-tip-label">補足：</span>
  イルミはトラップ受けには間に合わないが、神気～ファイガ用なので問題なし。
</p>
トラップを受けたら、聖母（混乱）または睡魔の神気に備えてコンソレ1回目を使用する。<br>

<div class="checkpoint-heading">
  <span class="checkpoint-number">2</span>
  <span>聖母（混乱）または睡魔の神気</span>
</div>
素受けで約220,000ダメージ。<br>
コンソレ＋陣＋イルミに加えて、PHの軽減（サンサインまたはテンパ）があれば、HPへのダメージは約125,000に抑えられる。<br>
被弾後は、次のファイガに備えてコンソレ2回目を使用する。<br>

<div class="checkpoint-danger">
<div class="checkpoint-heading">
  <span class="checkpoint-number">3</span>
  <span>めらめらファイガ</span>
</div>
素受けで約210,000ダメージ。<br>
以下の通り、コンソレ＋イルミだけでもHPへのダメージは約170,000に抑えられる。<br>
神気で受けたダメージをしっかり戻すことが大事！不安な場合は不撓不屈、意気を使用すること。<br>
<img src="/icons/telepo.png" alt="めらめらファイガの被ダメージと軽減" class="strategy-image" style="display: block; width: 520px; max-width: 100%; height: auto; margin-left: auto; margin-right: auto;" />
</div>

  </div>
</div>

::::

:::: details 竜騎士

::::

:::::

---


## <img src="/icons/phase2.png" class="phase-icon" alt="">  P2

:::: details ゴッドケフカ

::: details 学者
<!-- ここに画像や追加の解説を入れます -->
あ
:::

::: details 竜騎士
あ
<!-- ここに画像や追加の解説を入れます -->

:::

::::

---

## <img src="/icons/phase3.png" class="phase-icon" alt=""> P3

:::: details エクスデス・カオス

::: details 学者

:::

::: details 竜騎士

:::

::::

---

## <img src="/icons/phase4.png" class="phase-icon" alt="">  P4

:::: details おちょくりソウル

::: details 学者

:::

::: details 竜騎士

:::

::::

## <img src="/icons/phase5.png" class="phase-icon" alt=""> P5

:::: details 混沌ケフカ

::: details 学者

:::

::: details 竜騎士

:::

::::
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

タンク強は、基本的に以下の順で受けるのでそれ前提で記載。<br>
**MTフルバフ → STフルバフ → ST無敵 → MT無敵**<br>
ただし、場合によっては「MT無敵 → STフルバフ → MTフルバフ → ST無敵」など、変則的になることもある。<br>
**受け方によってヒーラーの動きも変わるため、タンク同士の打ち合わせには耳を傾けておくこと！**
:::

<div class="mechanic">
  <div class="mechanic-title">カウント開始～開幕</div>
  <div class="mechanic-description">

開幕カウント10秒になったらMTに鼓舞。<br>
0着するように獄炎法詠唱、着弾したら即連環計、後のタンク強のために陣を置く。<br>
**また、先転化→後フローにしておくと、ファイガ前に妖精が返ってきて都合がいい。**

  </div>
</div>

<div class="mechanic">
  <div class="mechanic-title">ばりばりルインガ1(タンク強攻撃1)</div>
  <div class="mechanic-description">

強攻撃→AA→強攻撃→AA<br>
MTフルバフ＋陣＋リプ＋牽制＋PHの単体軽減+STの短バフがあれば、合計被ダメージは約300,000～350,0000(人によって大分差がある、、、)<br>
攻撃の間に2秒の猶予があるため、基本的にはPHのインスタントヒール+HoT等々で戻る想定でよい。<br>

PHの単体軽減、STの短バフが抜けるとMTがちゃんとバフ炊いてても厳しい。<br>
MTが繰り返し落ちるようなら、ログで周囲の軽減の有無を確認すること。<br>
<span class="text-red">**アドルはここには不要！！！**</span><br>


  </div>
</div>

<div class="mechanic">
  <div class="mechanic-title">神々の像1</div>
  <div class="mechanic-description">

素受けでファイガ210,000→波動砲or塔踏み325,000→トラップ165,000=<span class="text-red">**700,000ダメージ！！**</span>の恐ろしいギミック。<br>
特に<span class="text-red">**ファイガ→波動砲or塔踏みの間には5秒しか隙間がない**</span>ので、慣れないうちは大変。<br>
また、痛すぎる波動砲には牽制アドルが効かないので、全体軽減のみで何とかする必要あり。<br>

学者の動きは、<br>
<ol class="strategy-steps">
  <li>
    <strong>事前に鼓舞展開</strong>
  </li>
  <li>
    <strong>転化バフが切れたら、妖精を中央へ移動</strong>
    <span class="step-note">散開・頭割りの移動と重なるため、操作がやや忙しい。</span>
  </li>
  <li>
    <strong>陣を設置し、セラフィムを起動</strong>
  </li>
  <li>
    <strong>ファイガを受けたら、コンソレ1回目＋イルミ</strong>
    <span class="step-note">イルミは次の「裁きの光」まで持たせるイメージで</span>
  </li>
  <li>
    <strong>波動砲を受けたら、不撓不屈</strong>
  </li>
  <li>
    <strong>トラップを受けたら、コンソレ2回目</strong>
    <span class="step-note">次の「裁きの光」に備えて使用する。</span>
  </li>
</ol>
上記の流れが理想だが、波動砲で落ちるようなら、「神々の像」の詠唱完了直後に疾風怒涛を入れておく。<br>
さらに、手順4のタイミング（ファイガ被弾後）でセラフィズム＋アクセッションを使用し、波動砲に備えよう。<br>
<p class="mini-tip">
  <span class="mini-tip-label">補足：</span>
  疾風怒涛は、PHが2分軽減（Nセク or テンパ）を使うなら不要、使わないなら必要、という基準で判断する
</p>


<div class="strategy-subheading">タンク・レンジの90秒軽減について</div>
タンク、レンジの90秒軽減は全部ここに使ってもらおう！<br>
90秒軽減のタイミングは↓　神々の象詠唱完了後一拍おいていれるとギリギリ波動砲＋塔踏みまでもつ。<br>
<img src="/icons/kami1.png" alt="神々の象1の軽減タイミング" class="strategy-image" />
これより遅れると、神々の像2回目のグラビガ踏みまでに軽減のリキャが返ってこない。<br>


  </div>
</div>

<div class="mechanic">
  <div class="mechanic-title">裁きの光1</div>
  <div class="mechanic-description">

素受けで約300,000ダメージ。<br>
リプ＋アドル＋牽制＋イルミ＋コンソレがあれば、HPが約20,000残る想定。<br>
さらにパッセが入れば、約50,000残る。<br>
アドルもパッセもない場合は、コンソレのバリアだけでは耐えられないため、追加で士気が必須。<br>
**リプ、アドル、牽制は詠唱バーギリギリで入れると、次のタンク強にも乗る**<br>
<span class="text-red">アドルはここに入れてもらおう！</span><br>
<span class="text-red">ナイトがいるなら、必ずパッセももらおう！</span><br>
<p class="mini-tip">
  <span class="mini-tip-label">補足：</span>
波動砲に陣使うならここで陣は使えない、、、ハズ。<br>
</p>

  </div>
</div>

<div class="mechanic">
  <div class="mechanic-title">ハイパードライブ1(タンク強攻撃2)</div>
  <div class="mechanic-description">

強攻撃 → AA → 強攻撃 → AA → 強攻撃 → AA<br>
1発あたりはルインガよりやや弱いが、回数が多いため総ダメージは大きい。<br>
STフルバフ＋リプ＋牽制＋アドル＋PHの単体軽減＋MTの短バフがあれば、合計被ダメージは約300,000～350,000。<br>
各攻撃の間に2秒の猶予があるため、基本的にはPHのインスタントヒールやHoTなどで戻す想定でよい。<br>

PHの単体軽減やMTの短バフが抜けると、STが適切にバフを使っていても厳しい。<br>
STが繰り返し落ちるようなら、ログで周囲の軽減が入っているか確認すること。<br>
**リプ・アドル・牽制は、直前の「裁きの光」の詠唱完了ギリギリに入れると、このタンク強攻撃にも効果が残る。使用タイミングを意識してもらおう！**<br>

  </div>
</div>


::::

:::: details 竜騎士

* **散開位置**: タンク・ヒーラーは北側、アタッカーは南側。
* **注意点**: ここの全体攻撃は非常に痛いので、必ず軽減を1枚入れます。

<!-- ここに画像や追加の解説を入れます -->

::::

:::::

---

## <img src="/icons/phase2.png" class="phase-icon" alt="">  P2

:::: details ゴッドケフカ

::: details BH

* **散開位置**: タンク・ヒーラーは北側、アタッカーは南側。
* **注意点**: ここの全体攻撃は非常に痛いので、必ず軽減を1枚入れます。

<!-- ここに画像や追加の解説を入れます -->

:::

::: details 竜騎士

* **散開位置**: タンク・ヒーラーは北側、アタッカーは南側。
* **注意点**: ここの全体攻撃は非常に痛いので、必ず軽減を1枚入れます。

<!-- ここに画像や追加の解説を入れます -->

:::

::::

---

## <img src="/icons/phase3.png" class="phase-icon" alt=""> P3

:::: details エクスデス・カオス

::: details BH

* **散開位置**: タンク・ヒーラーは北側、アタッカーは南側。
* **注意点**: ここの全体攻撃は非常に痛いので、必ず軽減を1枚入れます。

<!-- ここに画像や追加の解説を入れます -->

:::

::: details 竜騎士

* **散開位置**: タンク・ヒーラーは北側、アタッカーは南側。
* **注意点**: ここの全体攻撃は非常に痛いので、必ず軽減を1枚入れます。

<!-- ここに画像や追加の解説を入れます -->

:::

::::
---

## <img src="/icons/phase4.png" class="phase-icon" alt="">  P4

:::: details おちょくりソウル

::: details BH

* **散開位置**: タンク・ヒーラーは北側、アタッカーは南側。
* **注意点**: ここの全体攻撃は非常に痛いので、必ず軽減を1枚入れます。

<!-- ここに画像や追加の解説を入れます -->

:::

::: details 竜騎士

* **散開位置**: タンク・ヒーラーは北側、アタッカーは南側。
* **注意点**: ここの全体攻撃は非常に痛いので、必ず軽減を1枚入れます。

<!-- ここに画像や追加の解説を入れます -->

:::

::::

## <img src="/icons/phase5.png" class="phase-icon" alt=""> P5

:::: details 混沌ケフカ

::: details BH

* **散開位置**: タンク・ヒーラーは北側、アタッカーは南側。
* **注意点**: ここの全体攻撃は非常に痛いので、必ず軽減を1枚入れます。

<!-- ここに画像や追加の解説を入れます -->

:::

::: details 竜騎士

* **散開位置**: タンク・ヒーラーは北側、アタッカーは南側。
* **注意点**: ここの全体攻撃は非常に痛いので、必ず軽減を1枚入れます。

<!-- ここに画像や追加の解説を入れます -->

:::

::::
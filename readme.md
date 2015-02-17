# Rin 3.0

A lean, gulp-based HTML & SASS boilerplate for better front-end coding

<http://sanographix.github.io/rin/>

# Getting Started

### Required Components

- Node.js
    - <http://nodejs.org/>

## Set Up

#### 1) Install gulp:

*Note:* If you have already installed gulp, skip this section.

    $ sudo npm install -g gulp
    $ npm install --save-dev gulp

#### 2) Clone rin:

    $ git clone git@github.com:sanographix/rin.git test-repo
    $ cd test-repo
    $ npm install

#### 3) Run gulp:

    $ gulp

#### 4) :tada:

<hr/>

# Directory

gulp を起動している間は、`sass/`, `js/`, `images/` 以下を監視しています。作業用ファイルは `sass/`, `js/`, `images/` 以下に置いてください。それぞれのファイルは `build/` 以下にコンパイルされた状態で出力されます。
	
	rin/
	┣┳ sass/
	┃┣ js/
	┃┗ images/
	┃
	┗┳ build/
	 ┗┳ css/
	  ┣ js/
	  ┗ images/


# Images

gruntを起動している間は、`images/`フォルダ以下を監視し、画像を自動的に圧縮し`build/images`に追加します。圧縮できるファイルはgif,jpg,png,svgです。

	 
# CSS

Sassをサポートしています。構成は下記のとおりです。

	sass
	┣ style.scss
	┣ core
	┃ ┣ _core.scss // メインで編集するのはこれ
	┃ ┗ _media-queries.scss	 // メディアクエリ用
	┗ lib 
	   ┣ _button.scss // ボタン類
	   ┣ _common.scss // body,aなどベース感のあるスタイル
	   ┣ _normalize.scss // normalize
       ┗ _variable.scss // 色など

## _normalize.scss


[normalize.css](http://necolas.github.io/normalize.css/) です。


## _grid.scss

シンプルなグリッドを作れます。書き方はこんな感じです。

    <div class="l-container">
      <div class="l-row">
        <div class="l-span4">
          span4
        </div>
        <div class="l-span4">
          span4
        </div>
        <div class="l-span4">
          span4
        </div>
      </div>
    </div>

## _media-queries.scss
  
メディアクエリです。Retina ディスプレイ用のスタイルを書く欄と、レスポンシブデザイン用のスタイルを書く欄があります。

Retina ディスプレイ用のスタイルは下記の 3 パターンに出し分けできます。

* Retina ディスプレイ用
	* Retina のデバイス全部に出す
	* Retina かつ iPad 以上のブラウザ幅のとき出す
	* Retina かつ PC で見てるときだけ出す
   

# JS

`js/`以下の`.js`ファイルが、`build/js/scripts.js`に結合・圧縮されて出力されます。

# ローカルサーバー

[BrowserSync](http://www.browsersync.io/)によってローカルサーバーを起動します。デフォルトのURLは <http://localhost:3000/> です。

gulpで`watch`対象のファイルが更新されたとき自動で画面をリロードします。

# Changelog

### 3.0.0 (Feb 15, 2015)

* タスクランナーをgulpに変更
* svgの圧縮に対応
* [BrowserSync](http://www.browsersync.io/)により、ファイルの変更を高速にローカルサーバーに反映
* Compassをやめる
* ベンダープレフィックスの自動付与
* グリッドシステムのclass名をSMACSSライクに変更

# Changelog (2.x)

- 2.xのrinは別のリポジトリにあります
    - <https://github.com/sanographix/rin-html-template>

### 2.0.2 (Nov 29, 2014)

* `:selection`のCSSをやめる
* facebook sdk を新しいやつに

### 2.0.2 (Sep 15, 2014)

* scssの監視に失敗する問題を修正
* `html`に指定してたCSSを削除

### 2.0.1 (Sep 10, 2014)

* 改行コードがUNIXじゃなくてDOSになってたのを修正


### 2.0.0 (Aug 10, 2014)

* lessからSassに移行する
    * 以前のバージョンは <https://github.com/sanographix/rin-less> にあります


# License

### Major components:

* jQuery: MIT/GPL license
* Normalize.css: Public Domain
* html5shiv: MIT/GPL license
* gulp: MIT license

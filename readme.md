# Rin

### A Lean HTML5 & SASS Template For Better Front-end Coding

Rinは、[@sanographix](http://twitter.com/sanographix)がウェブサイト制作時に使っているテンプレートです。

# Getting Started

## Required Components

### Node.js

- <http://nodejs.org/>

### LiveReload

LiveReloadブラウザ拡張を有効にしておいてください

- [for Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
- [for Firefox](https://addons.mozilla.org/ja/firefox/addon/livereload/)

## Set Up

Gruntインストールしてない場合はまずインストールする：

    $ sudo npm install -g grunt-cli

インストールしてる人はここから：

    $ git clone git@github.com:sanographix/rin-html-template.git test
    $ cd test
    $ npm install

- `package.json`に書いてあるプラグインがインストールされます

### gruntを起動する

    $ grunt

### ローカルサーバーをみる

<http://localhost:8000/> にアクセスするとたぶん見れてます

# Images

gruntを起動している間は、`images/`フォルダ以下を監視し、画像を自動的に圧縮し`dist/images`に追加します。圧縮できるファイルはgif,jpg,pngです。  
ディレクトリ構成は下記のとおりです。

	rin-html-template/
	┣┳ images/
	┃┗ オリジナルの画像をimages/以下に入れる
	┗┳ dist/
	 ┗┳ images/
	  ┗ 圧縮済みの画像が自動的に追加される
	 
# CSS

Sass/Compassをサポートしています。構成は下記のとおりです。

	sass
	┣ style.scss
	┣ core
	┃ ┣ _core.scss // メインで編集するのはこれ
	┃ ┗ _media-queries.scss	 
	┗ lib 
	   ┣ _button.scss
	   ┣ _common.scss 
	   ┣ _normalize.scss
       ┗ _variable.scss

## _normalize.scss


[normalize.css](http://necolas.github.io/normalize.css/) です。


## _grid.scss

bootstrap感のあるグリッドを作れます。書き方はこんな感じです。

    <div class="container">
      <div class="row">
        <div class="span4">
          span4
        </div>
        <div class="span4">
          span4
        </div>
        <div class="span4">
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

`js/libs/`以下の`js`ファイルが、`js/scripts.js`に結合されて出力されます。さらにそれを圧縮したjsが`js/scripts.min.js`に出力されます。


# ローカルサーバー

`grunt-contrib-connect`によってローカルサーバーを起動します。デフォルトのURLは <http://localhost:8000/> です。

[LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei/related) に対応しています。拡張をインストールしておくと、Gruntで`watch`対象のファイルが更新されたとき自動でブラウザをリロードします。

# Changelog

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
* grunt: MIT license

# Rin

## A Lean, Basic HTML5 and CSS3 Template

[@sanographix](http://twitter.com/sanographix)がウェブサイト制作時に使っているHTML5の初期テンプレートです。

# Quick start

[ここからダウンロード](https://github.com/sanographix/rin-html-template/archive/master.zip)してください。

# Grunt

Gruntを使ってless,jsのコンパイルと画像圧縮ができます。

### 1. node.jsをインストール

- <http://nodejs.org/>

### 2. gruntをインストール

    sudo npm install -g grunt-cli
    
### 3. プラグインをインストール

    npm install
    
- `package.json`に書いてあるプラグインがインストールされます

### 4. gruntを起動する

    grunt

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

LESSで書いています。構成は下記のとおりです。

	style.less
	┣ _normalize.less
	┣ _mixin.less
	┣ _variable.less
	┗ _media-queries.less


## _normalize.less


[normalize.css](http://necolas.github.io/normalize.css/) です。


## _mixin.less

便利なmixinセットです。使えるクラスは以下の通りです。

### よく使うの

| class | Mixin |
|-------|-----|
|.clearfix|clearfixします|
|.inline-block|`inline-block`のIE7対応版です|
|.replace|テキストを画像置換するときにこれを呼び出すと便利です|
  
  
### ベンダープレフィックスついてる系の

| class | Mixin |
|-------|-----|
|.box-shadow(@x @y @blur @color);|box-shadow: @x @y @blur @color;|
|.box-shadow-inset(@x @y @blur @color); | box-shadow: inset @x @y @blur @color; |
|.text-shadow(@x @y @blur @color);| text-shadow: @x @y @blur @color; |
|.border-radius(@topright, @bottomright, @bottomleft, @topleft);|border-top-right-radius: @topright;<br/>border-bottom-right-radius: @bottomright;<br/>border-bottom-left-radius: @bottomleft;<br/>border-top-left-radius: @topleft; |
|.border-radius(@radius);| border-radius: @radius; |
|.gradient(@color,@start,@stop);| background-color: @color;<br/>background: linear-gradient(top, @start, @stop);|
|.opacity(@opacity);|opacity: @opacity;|
|.ellipsis;|text-overflow: ellipsis;|
|.transition(@duration, @ease);|    transition: all @duration @ease;|
|.transition-duration(@duration);|transition-duration: @duration;|
|.rotation(@deg);|transform: rotate(@deg);|
|.scale(@ratio);|.transform:scale(@ratio);|
|.translate(@x,@y);|.translate(@x, @y);|


## _variable.less
  
サイトで使う色はここに書いておいて、変数から呼び出すと便利です。使い方はこんな感じ。


	body {
	    background: @bg;
	    color: @base;
	}

	a {
	    color: @link;
	    border-color: @border;	
	    &:hover {
	        color: @hover;
	    }
	}


## _grid.less

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

## _media-queries.less
  
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

### 1.5.2 (Aug 09, 2014)

* lessをより細かくファイル分けた

### 1.5.1 (Aug 07, 2014)

* 画像の監視がうまくいってなかったのを修正

### 1.5.0 (Aug 06, 2014)

* jsの結合・圧縮を行なうようにした
* ローカルサーバー起動するようにした

### 1.4.0 (Jul 02, 2014)

* グリッドシステムっぽいの（`_grid.less`）を追加

### 1.3.0 (Jun 25, 2014)

* gruntでlessのコンパイル,画像圧縮できるようにした
* clearfixを[Micro Clearfix](http://nicolasgallagher.com/micro-clearfix-hack/)にした
* Google Analyticsのコードをユニバーサルアナリティクスに
* その他不要な要素の削除


### 1.2.0 (Mar 15, 2014)

* `.btn`をグラデーションじゃなくする
* フォントファミリ指定変更
* normalizeを3.0.0に
* mixinのベンダープレフィックスの削除
* variableの見直し


### 1.1.3 (Feb 21, 2014)

* ソーシャルボタンを body 一番下でまとめて読み込むようにするのをやめた
	* うまく読み込まれないことがあったため

### 1.1.2 (Jan 12, 2014)

* ソーシャルボタンを body 一番下でまとめて読み込むようにした


### 1.1.1 (Dec 07, 2013)

* `text-overflow`のブレフィックスいらなかった

### 1.1 (Dec 02, 2013)

* js を一番下に移動
 
### 1.0 (August 07, 2013)

* より汎用的に使えるよう大幅に変更
	* Twitter Bootstrapを削除
	* Font Awesomeを削除
	* retina.jsを削除
* OGPの整理と追加
* index.html にサンプルの文言を書かない

### 0.3 (December 23, 2012)

* Twitter Bootstrapを追加
* Font Awesomeを追加
* デフォルトフォントをOpen Sansに変更
* index.htmlに適当なテンプレートを書いておく

### 0.2 (December 08, 2012)

* あまり一般的でないオレオレmixinをやめた
    * 他の人がCSS読めなくなるので
* _media-queries.lessにRetina用の記述欄を追加


# License

### Major components:

* jQuery: MIT/GPL license
* Normalize.css: Public Domain
* html5shiv: MIT/GPL license
* grunt: MIT license
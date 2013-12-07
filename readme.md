# Rin

## A Lean, Basic HTML5 and CSS3 Template

[@sanographix](http://twitter.com/sanographix)がウェブサイト制作時に使っているHTML5の初期テンプレートです。

# Quick start

[ここからダウンロード](https://github.com/sanographix/rin-html-template/archive/master.zip)してください。

# CSS

LESSで書いています。style.lessだけをコンパイルすれば良いです。

構成は下記のとおりです。

	style.less
	┣ _normalize.less
	┣ _mixin.less
	┣ _variable.less
	┗ _media-queries.less
	fuck-ie.css（IEにだけ適用したいスタイルはここに書く）

## _normalize.less


[normalize.css](http://necolas.github.io/normalize.css/) です。


## _mixin.less

便利なmixinセットです。

classの(@foo, @bar)に適当な値を入れるとmixinの対応する変数に出力されます。例えばbox-shadowだったら

	.box-shadow(0px,5px,10px,#000);

と書くと

    -moz-box-shadow: 0px 5px 10px #000;
    -webkit-box-shadow: 0px 5px 10px #000;
    box-shadow: 0px 5px 10px #000;

になります。

使えるクラスは以下の通りです。

### よく使うの

| class | Mixin |
|-------|-----|
|.clear;|clear: both;|
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


## _media-queries.less
  
メディアクエリです。Retina ディスプレイ用のスタイルを書く欄と、レスポンシブデザイン用のスタイルを書く欄があります。

Retina ディスプレイ用のスタイルは下記の 3 パターンに出し分けできます。

* Retina ディスプレイ用
	* Retina のデバイス全部に出す
	* Retina かつ iPad 以上のブラウザ幅のとき出す
	* Retina かつ PC で見てるときだけ出す
   

# Changelog

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


## License

### Major components:

* jQuery: MIT/GPL license
* jQuery Easing: BSD license
* Normalize.css: Public Domain
* html5shiv: MIT/GPL license

![](https://raw.github.com/sanographix/html-template/master/raw/template-logo.jpg)
  
  
    
# Basic HTML/CSS/JS template

[@sanographix](http://twitter.com/sanographix)がウェブサイト制作時に使っているHTML5の初期テンプレートです。

なにかありましたら[@sanographix](http://twitter.com/sanographix)まで。

# Quick start

[ここからダウンロード](https://github.com/sanographix/html-template/zipball/master)してください。

# CSS

LESSで書いています。コンパイラは[LESS.app](http://incident57.com/less/)か[Less Parser](http://www.proving-ground.be/less/)が良いと思います。

style.lessだけをコンパイルすれば良いです。


## _mixin.less

便利なmixinセットです。

また、classの(@foo, @bar)に適当な値を入れるとmixinの対応する変数に出力されます。例えばbox-shadowだったら

	.box-shadow(0px,5px,10px,#000);

と書くと

    -moz-box-shadow: 0px 5px 10px #000;
    -webkit-box-shadow: 0px 5px 10px #000;
    box-shadow: 0px 5px 10px #000;

になります。

使えるクラスは以下の通りです。

### Box properties

| class | Mixin |
|-------|-----|
|.clear;|clear: both;|
|.clearfix|clearfix|
|.ellipsis;|text-overflow: ellipsis;|
  
  
### CSS3 properties

各クラスにはベンダープレフィックスも含まれています

| class | Mixin |
|-------|-----|
|.box-shadow(@x @y @blur @color);|box-shadow: @x @y @blur @color;|
|.box-shadow-inset(@x @y @blur @color); | box-shadow: inset @x @y @blur @color; |
|.text-shadow(@x @y @blur @color);| text-shadow: @x @y @blur @color; |
|.border-radius(@topright, @bottomright, @bottomleft, @topleft);|border-top-right-radius: @topright;<br/>border-bottom-right-radius: @bottomright;<br/>border-bottom-left-radius: @bottomleft;<br/>border-top-left-radius: @topleft; |
|.border-radius(@radius);| border-radius: @radius; |
|.gradient(@color,@start,@stop);| background-color: @color;<br/>background: linear-gradient(top, @start, @stop);|
|.opacity(@opacity);|opacity: @opacity;|
|.ms-opacity(@opacity);|filter: alpha(opacity=@opacity);|
|.transition(@duration, @ease);|    transition: all @duration @ease;|
|.transition-duration(@duration);|transition-duration: @duration;|
|.rotation(@deg);|transform: rotate(@deg);|
|.scale(@ratio);|.transform:scale(@ratio);|
|.translate(@x,@y);|.translate(@x, @y);|

  
## _bootstrap.less

[Twitter Boostrap](http://twitter.github.com/bootstrap/)です。

## _font-awesome.less

[Font Awesome](http://fortawesome.github.com/Font-Awesome/)です。


# Changelog

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
* Retina.js: MIT license
* html5shiv: MIT/GPL license
* Twitter Bootstrap: Apache License v2.0
* Font Awesome: CC BY 3.0
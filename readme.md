# Basic HTML/CSS/JS template

[@sanographix](http://twitter.com/sanographix)が使っているHTML5の初期テンプレートです。

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

## Box properties

| class | Mixin |
|-------|-----|
|.center;|text-align: center;<br/>margin: 0 auto;|
|.left;|float: left;|
|.right;|float: right;|
|.nofloat;|float: none;|
|.clear;|clear: both;|
|clearfix|clearfix（http://norisfactory.com/stylesheetlab/000038.php）にあるやつ|
|.block;|display: block;|
|.inline;|display: inline;|
|.inline-block;|display: inline-block;|
|.relative;|position: relative;|
|.absolute;|position: absolute;|
|.static;|position: static;|
|.fixed;|position: fixed;|
|.margin0;|margin: 0;|
|.padding0;|padding: 0;|
|.ellipsis;|text-overflow: ellipsis;|
  

## Text properties

| class | Mixin |
|-------|-----|
|.bold;|font-weight: bold;|
|.normal;|font-style: normal;<br/>font-weight: normal;|
|.thin;|font-weight: 300;|
|.italic;|font-style: italic;|
|.underline;|text-decoration: underline;|
|.nodeco;|text-decoration: none;|
|.textleft;|text-align: left;|
|.textright;|text-align: right;|
|.letter(@spacing);|letter-spacing: @spacing;|
|.font-default;|font-family: 'Helvetica Neue', 'Helvetica', 'Arial', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;|


## List properties

| class | Mixin |
|-------|-----|
|.nolist;|list-style-type: none;|
|.disc;|list-style-type: disc;|
|.circle;|list-style-type: circle;|
  
  
  
## CSS3 properties

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


## License

### Major components:

* jQuery: MIT/GPL license
* jQuery Easing: BSD license
* Modernizr: MIT/BSD license
* Normalize.css: Public Domain
* Retina.js: MIT license
* html5shiv: MIT/GPL license

$(document).ready(function(){

    //ロード or スクロールされると実行
    $(window).on('load scroll', function(){
        //ヘッダーの高さ分スクロールするとクラスを追加
        if ($(window).scrollTop() > 140) {
            $('.js-globalheader').addClass('is-scrolled');
        } else {
            //80px以下だとクラスを削除
            $('.js-globalheader').removeClass('is-scrolled');
        }
    });

    // 外部サイトにはtarget blankする
    $('a').each(function() {
      var a = this;
      if (a.origin !== location.origin) {
        $(a).attr('target', '_blank');
      }
    });
});
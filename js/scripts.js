$(document).ready(function(){
    // 外部サイトにはtarget blankする
    $('a').each(function() {
      var a = this;
      if (a.origin !== location.origin) {
        $(a).attr('target', '_blank');
      }
    });
});
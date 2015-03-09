$(document).ready(function(){
    // Add target="_blank" when user opens external link
    $('a').each(function() {
      var a = this;
      if (a.origin !== location.origin) {
        $(a).attr('target', '_blank');
      }
    });
});
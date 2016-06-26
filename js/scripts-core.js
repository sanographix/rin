// Add target="_blank" when user opens external link
(function() {
  var a = document.querySelectorAll('a');
  for (var i = 0; i < a.length; i++) {
    if (a[i].origin !== location.origin) {
      a[i].setAttribute('target', '_blank');
    }
  }
}());
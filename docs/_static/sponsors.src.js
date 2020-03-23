(function() {
  function pageAd() {
    var h2 = document.querySelector('h2');
    if (!h2) return;

    var div = document.createElement('div');
    div.className = 'fund';
    var s = document.createElement('script');
    s.async = 1;
    s.id = '_carbonads_js';
    s.src = 'https://cdn.carbonads.com/carbon.js?serve=CE7DKK3W&placement=authliborg';
    div.appendChild(s);
    h2.parentNode.insertBefore(div, h2);
  }

  document.addEventListener('DOMContentLoaded', pageAd);
})();

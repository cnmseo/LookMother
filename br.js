var _paq = window._paq = window._paq || [];

_paq.push(['setCustomDimension', 1, location.hostname]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//web.ems.ac/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '1']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.async=true;
  g.onload = function() {
      window.location.href="https://ems.ac/";
  };
  g.src=u+'matomo.js'; 
  s.parentNode.insertBefore(g,s);
})();
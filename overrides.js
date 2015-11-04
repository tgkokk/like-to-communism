(function() {
  function $(selector) {
    return [].slice.call(document.querySelectorAll(selector));
  }

  function checkForLikes() {
    $(".ProfileTweet-action--favorite .IconContainer").forEach(function(el){
      var attribute = el.hasAttribute('title') ? 'title' : 'data-original-title';
      var oldValue = el.getAttribute(attribute);
      var newValue = oldValue.replace(/Like/, 'Communism').replace(/like/, 'communism');
      if (newValue != oldValue) {
        el.setAttribute(attribute, newValue);
      }
    });

    $(".request-favorited-popup").forEach(function(el){
      var textNode = el.childNodes[0];
      if (textNode) {
        var oldValue = textNode.textContent;
        var newValue = oldValue.replace(/Like(s?)/, 'Communism');
        if (newValue != oldValue) {
          textNode.textContent = newValue;
        }
      }
    });
  }

  function tick() {
    checkForLikes();
    window.setTimeout(tick, 5000);
  }

  tick();
})();

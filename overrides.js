(function() {
  function checkForLikes() {
    var tooltips = document.querySelectorAll(".ProfileTweet-action--favorite .IconContainer");

    [].slice.call(tooltips).forEach(function(el){
      var attribute = el.hasAttribute('title') ? 'title' : 'data-original-title';
      var oldValue = el.getAttribute(attribute);
      var newValue = oldValue.replace(/Like/, 'Communism').replace(/like/, 'communism');
      if (newValue != oldValue) {
        el.setAttribute(attribute, newValue);
      }
    });

    var labels = document.querySelectorAll(".request-favorited-popup");

    [].slice.call(labels).forEach(function(el){
      var textNode = el.childNodes[0];
      if (textNode) {
        var oldValue = textNode.textContent;
        var newValue = oldValue.replace(/Likes/, 'Communism');
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

(function() {
  function checkForLikeButtons() {
    var tooltips = document.querySelectorAll(".ProfileTweet-action--favorite .IconContainer");

    [].slice.call(tooltips).forEach(function(el){
      var attribute = el.hasAttribute('title') ? 'title' : 'data-original-title';
      var oldValue = el.getAttribute(attribute);
      var newValue = oldValue.replace(/Like/, 'Communism').replace(/like/, 'communism');
      if (newValue != oldValue) {
        el.setAttribute(attribute, newValue);
      }
    });
  }

  function tick() {
    checkForLikeButtons();
    window.setTimeout(tick, 5000);
  }

  tick();
})();

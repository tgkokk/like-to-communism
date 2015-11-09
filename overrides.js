(function() {
  function $(selector) {
    return [].slice.call(document.querySelectorAll(selector));
  }
  function nationalize(textNode){
    if(!textNode) return;
    var oldValue = textNode.textContent;
    var newValue = oldValue
      .replace(/liked/,"communism");
    if (newValue != oldValue) {
      textNode.textContent = newValue;
    }
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

    // /i/notification page
    $(".stream-item-activity-line-notification").forEach(function(el){
      //iterate over nodes rather than access by index in case twitter's markup changes
      [].filter.call(el.childNodes, function(node){
        return node.nodeType === Node.TEXT_NODE;
      }).forEach(nationalize);
    });
    
    //can't rely on css alone becauese `content` property is not overrideable
    $(".Icon--heartBadge").forEach(function(el){
      el.classList.remove("Icon--heartBadge");
      el.classList.add("Icon--communismBadge");
    });
  }

  function tick() {
    checkForLikes();
    window.setTimeout(tick, 5000);
  }

  tick();
})();

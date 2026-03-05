window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  
(function () {

  function isVisible(el) {
    // Safe visibility check in SL: in DOM, with size, not hidden by styles
    if (!el) return false;
    if (!el.offsetParent && el.offsetParent !== null) return false; // detached
    var style = window.getComputedStyle(el);
    return style && style.visibility !== 'hidden' && style.display !== 'none' && el.clientHeight > 0;
  }

  function getActiveLayerPanel() {
    // Collect all panels that are visible & scrollable, prefer the last one (newest layer)
    var nodes = Array.from(document.querySelectorAll('.scrollarea-area'))
      .filter(function (n) {
        return isVisible(n) && (n.scrollHeight > n.clientHeight);
      });
    return nodes.length ? nodes[nodes.length - 1] : null;
  }

  function setBottom(el) { el.scrollTop = el.scrollHeight; }
  function atBottom(el) { return (el.scrollTop + el.clientHeight) >= (el.scrollHeight - 1); }

  var tries = 0, max = 50, delay = 50;

  function findThenStick() {
    var el = getActiveLayerPanel();

    if (!el) {
      if (++tries < max) return setTimeout(findThenStick, delay); // wait for render
      return;
    }

    setBottom(el);

    // Stick for ~1.6s to override SL's snap-to-top; then stop (so user can scroll)
    var stickMs = 1600, tick = 50, start = Date.now();
    var interval = setInterval(function () {
      if (Date.now() - start > stickMs) return clearInterval(interval);
      if (!atBottom(el)) setBottom(el);
    }, tick);

    // Track late content growth
    var obs = new MutationObserver(function () { setBottom(el); });
    obs.observe(el, { childList: true, subtree: true, characterData: true });
    setTimeout(function(){ obs.disconnect(); }, stickMs);
  }

  // Run now and again slightly later to catch late layout
  findThenStick();
  setTimeout(findThenStick, 300);

})();

}

window.Script2 = function()
{
  

(function () {

  function isVisible(el) {
    // Safe visibility check in SL: in DOM, with size, not hidden by styles
    if (!el) return false;
    if (!el.offsetParent && el.offsetParent !== null) return false; // detached
    var style = window.getComputedStyle(el);
    return style && style.visibility !== 'hidden' && style.display !== 'none' && el.clientHeight > 0;
  }

  function getActiveLayerPanel() {
    // Collect all panels that are visible & scrollable, prefer the last one (newest layer)
    var nodes = Array.from(document.querySelectorAll('.scrollarea-area'))
      .filter(function (n) {
        return isVisible(n) && (n.scrollHeight > n.clientHeight);
      });
    return nodes.length ? nodes[nodes.length - 1] : null;
  }

  function setBottom(el) { el.scrollTop = el.scrollHeight; }
  function atBottom(el) { return (el.scrollTop + el.clientHeight) >= (el.scrollHeight - 1); }

  var tries = 0, max = 50, delay = 50;

  function findThenStick() {
    var el = getActiveLayerPanel();

    if (!el) {
      if (++tries < max) return setTimeout(findThenStick, delay); // wait for render
      return;
    }

    setBottom(el);

    // Stick for ~1.6s to override SL's snap-to-top; then stop (so user can scroll)
    var stickMs = 1600, tick = 50, start = Date.now();
    var interval = setInterval(function () {
      if (Date.now() - start > stickMs) return clearInterval(interval);
      if (!atBottom(el)) setBottom(el);
    }, tick);

    // Track late content growth
    var obs = new MutationObserver(function () { setBottom(el); });
    obs.observe(el, { childList: true, subtree: true, characterData: true });
    setTimeout(function(){ obs.disconnect(); }, stickMs);
  }

  // Run now and again slightly later to catch late layout
  findThenStick();
  setTimeout(findThenStick, 300);

})();

}

window.Script3 = function()
{
  

(function () {

  function isVisible(el) {
    // Safe visibility check in SL: in DOM, with size, not hidden by styles
    if (!el) return false;
    if (!el.offsetParent && el.offsetParent !== null) return false; // detached
    var style = window.getComputedStyle(el);
    return style && style.visibility !== 'hidden' && style.display !== 'none' && el.clientHeight > 0;
  }

  function getActiveLayerPanel() {
    // Collect all panels that are visible & scrollable, prefer the last one (newest layer)
    var nodes = Array.from(document.querySelectorAll('.scrollarea-area'))
      .filter(function (n) {
        return isVisible(n) && (n.scrollHeight > n.clientHeight);
      });
    return nodes.length ? nodes[nodes.length - 1] : null;
  }

  function setBottom(el) { el.scrollTop = el.scrollHeight; }
  function atBottom(el) { return (el.scrollTop + el.clientHeight) >= (el.scrollHeight - 1); }

  var tries = 0, max = 50, delay = 50;

  function findThenStick() {
    var el = getActiveLayerPanel();

    if (!el) {
      if (++tries < max) return setTimeout(findThenStick, delay); // wait for render
      return;
    }

    setBottom(el);

    // Stick for ~1.6s to override SL's snap-to-top; then stop (so user can scroll)
    var stickMs = 1600, tick = 50, start = Date.now();
    var interval = setInterval(function () {
      if (Date.now() - start > stickMs) return clearInterval(interval);
      if (!atBottom(el)) setBottom(el);
    }, tick);

    // Track late content growth
    var obs = new MutationObserver(function () { setBottom(el); });
    obs.observe(el, { childList: true, subtree: true, characterData: true });
    setTimeout(function(){ obs.disconnect(); }, stickMs);
  }

  // Run now and again slightly later to catch late layout
  findThenStick();
  setTimeout(findThenStick, 300);

})();

}

window.Script4 = function()
{
  
(function () {

  function isVisible(el) {
    // Safe visibility check in SL: in DOM, with size, not hidden by styles
    if (!el) return false;
    if (!el.offsetParent && el.offsetParent !== null) return false; // detached
    var style = window.getComputedStyle(el);
    return style && style.visibility !== 'hidden' && style.display !== 'none' && el.clientHeight > 0;
  }

  function getActiveLayerPanel() {
    // Collect all panels that are visible & scrollable, prefer the last one (newest layer)
    var nodes = Array.from(document.querySelectorAll('.scrollarea-area'))
      .filter(function (n) {
        return isVisible(n) && (n.scrollHeight > n.clientHeight);
      });
    return nodes.length ? nodes[nodes.length - 1] : null;
  }

  function setBottom(el) { el.scrollTop = el.scrollHeight; }
  function atBottom(el) { return (el.scrollTop + el.clientHeight) >= (el.scrollHeight - 1); }

  var tries = 0, max = 50, delay = 50;

  function findThenStick() {
    var el = getActiveLayerPanel();

    if (!el) {
      if (++tries < max) return setTimeout(findThenStick, delay); // wait for render
      return;
    }

    setBottom(el);

    // Stick for ~1.6s to override SL's snap-to-top; then stop (so user can scroll)
    var stickMs = 1600, tick = 50, start = Date.now();
    var interval = setInterval(function () {
      if (Date.now() - start > stickMs) return clearInterval(interval);
      if (!atBottom(el)) setBottom(el);
    }, tick);

    // Track late content growth
    var obs = new MutationObserver(function () { setBottom(el); });
    obs.observe(el, { childList: true, subtree: true, characterData: true });
    setTimeout(function(){ obs.disconnect(); }, stickMs);
  }

  // Run now and again slightly later to catch late layout
  findThenStick();
  setTimeout(findThenStick, 300);

})();

}

};

let script = document.createElement('script');
script.src = chrome.runtime.getURL('index.js');
script.onload = function() {
  this.remove();
};
document.head.appendChild(script);
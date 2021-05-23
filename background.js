chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "browser.html";
  chrome.tabs.create({ url: newURL });
});
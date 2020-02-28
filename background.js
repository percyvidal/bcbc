chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  alert('Desbloqueado!')
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    file: 'core.js'
  });
});
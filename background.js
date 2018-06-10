// background.js

// Called when the user clicks on the browser action.
/*
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('clicked');
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});*/
/*
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      for (i in request.message){
          alert("hello");
          console.log(request.message[i]);
      }
});*/

/*
chrome.storage.local.get("count", function(data) {
    if(typeof data.count == "undefined") {
        // That's kind of bad
    } else {
        console.log(data.count);
        chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
        chrome.browserAction.setBadgeText({text:'balaji'});
        
    }
    })
    */


(function hello() {
    //alert("Hello");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
    
    chrome.storage.local.get("count", function(data) {
    if(typeof data.count == "undefined") {
        // That's kind of bad
    } else {
        document.getElementById('linkList').innerHTML="";
        console.log(data.count);
        var list = document.getElementById('linkList');
        chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
        chrome.browserAction.setBadgeText({text: data.count.length.toString()});
        for (i in data.count){
            //Let's clean this up
            
            //https://books.google.co.in/books/content?id=SkLHUiUG4DkC&pg=PR6&img=1&zoom=3&hl=en&sig=ACfU3U3UOiwvfWDwDBBRoOxxVL-jaOSzCA&w=1025
            var link = data.count[i];
            var mainlink = document.createElement('a');
            mainlink.setAttribute('href',link);
            mainlink.setAttribute('download','download');
            var splitvalue = link.split('&');
            var finalPage = splitvalue[1].split('=');
            console.log(splitvalue[1]);
            var entry = document.createElement('li');
            mainlink.innerHTML = finalPage[1];
            entry.appendChild(mainlink);
            list.appendChild(entry);
        }
    }
    });
    setTimeout(hello, 1000);
})();

(function hello() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
    
    chrome.storage.local.get("count", function(data) {
    if(typeof data.count == "undefined") {
    } else {
        document.getElementById('linkList').innerHTML="";
        var list = document.getElementById('linkList');
        chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
        chrome.browserAction.setBadgeText({text: data.count.length.toString()});
        for (i in data.count){
            //Let's clean this up
            var link = data.count[i];
            var mainlink = document.createElement('a');
            mainlink.setAttribute('href',link);
            mainlink.setAttribute('download','download');
            var splitvalue = link.split('&');
            var finalPage = splitvalue[1].split('=');
            console.log(splitvalue[1]);
            var entry = document.createElement('li');
            final = finalPage[1].substring(0,2);
            if(final == 'PP'){
                final = 'Cover Page ';
            }
            else if(final == 'PR'){
                final = 'Preface ';
            }
            else if(final == 'PA'){
                final = 'Page ';
            }
            else if(final == 'PT'){
                final = 'Page ';
            }
            final = final + finalPage[1].substring(2,finalPage[1].length);
            mainlink.innerHTML = final;
            entry.appendChild(mainlink);
            list.appendChild(entry);
        }
    }
    });
    setTimeout(hello, 1000);
})();

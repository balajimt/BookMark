//alert("Hello from your Chrome extension!");
//$("h3").hide();
/*
console.log('balaji');
var resources = window.performance.getEntries();
var list = [];
for (i in resources) {
if(resources[i].name.includes('https://books.google.co.in/books/content?id')){
    console.log(resources[i].name);
    list.push(resources[i].name);
    }
    //console.log(list);
}
console.log(list);
*/

function remove_duplicates(arr) {
    var obj = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    for (var key in obj) {
        ret_arr.push(key);
    }
    return ret_arr;
}
var list=[];
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
        console.log('balaji');
        var resources = window.performance.getEntries();
        for (i in resources) {
            if(resources[i].name.includes('https://books.google.co.in/books/content?id')){
                console.log(resources[i].name);
                list.push(resources[i].name);
            }
        }
    }
    var newlist = remove_duplicates(list);
    chrome.storage.local.set({count: newlist});
    newlist = [];
    list = [];
  }
);

console.log(list);


//https://books.google.co.in/books/content?id


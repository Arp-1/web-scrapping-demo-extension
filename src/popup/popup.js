let scrapping_btn = document.getElementsByTagName('button')[0];

console.log(scrapping_btn);

const setButtonName = () => {
    chrome.storage.sync.get(['isScrappingEnabled'], function(data) {
        console.log(data.isScrappingEnabled);
        if(data.isScrappingEnabled)
            scrapping_btn.innerText = 'Stop Scrapping';
        else
            scrapping_btn.innerText = 'Start Scrapping';
    });
}

setButtonName();

scrapping_btn.onclick = function(element) {
    chrome.storage.sync.get(['isScrappingEnabled'], function(data) {
        chrome.storage.sync.set({'isScrappingEnabled': !data.isScrappingEnabled});
        setButtonName();
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript({
                    file: "src/contentScripts/contentScript.js"
                });
            }
        )
    });
};
chrome.storage.sync.set({'isScrappingEnabled': false});

const selectElement = (event) =>
{
    event.preventDefault();
    event.target.classList.add("_selectedElement");
    let _ht = event.target.clientHeight;
    let _wt = event.target.clientWidth;
}

const tabChangeHandler = ()=>{
    event.preventDefault();
    if(document.hidden)
    {
        window.removeEventListener('mouseover', selectElement);
        window.removeEventListener('mouseout', deSelectElement);
        chrome.storage.sync.set({'isScrappingEnabled' : false});
    }
}

const deSelectElement = (event) =>
{
    event.preventDefault();
    event.target.classList.remove("_selectedElement");
}

const clickHandler = (event) =>
{
    event.preventDefault();
    let coll = window.location.href, obj = {};
    coll = coll.replace(/[\/\\]/g, ':');
    console.log(coll);
    for(prop in event.target)
    {
        if((typeof event.target[prop] === "string" || typeof event.target[prop] === "number" || typeof event.target[prop] === "boolean") && event.target[prop])
            obj[prop] = event.target[prop];
    }
    chrome.runtime.sendMessage({data: obj, collection: coll});
}

var link = document.createElement("link");
link.href = chrome.runtime.getURL("src/contentScripts/contentScript.css");
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);
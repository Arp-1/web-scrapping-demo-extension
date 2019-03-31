chrome.storage.sync.get(['isScrappingEnabled'], (data) => {
        if(data.isScrappingEnabled)
        {
            window.addEventListener('mouseover', selectElement, false);
            window.addEventListener('mouseout', deSelectElement, false);
            window.addEventListener('click', clickHandler, false);
        }
        else
        {
            window.removeEventListener('mouseover', selectElement, false);
            window.removeEventListener('mouseout', deSelectElement, false);
            window.removeEventListener('click', clickHandler, false);
        }
        window.removeEventListener('visibilitychange', tabChangeHandler,false);
        window.addEventListener('visibilitychange', tabChangeHandler, false);
    }
)
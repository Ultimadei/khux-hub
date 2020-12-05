function createBannerElement(name){
    let bannerLineup = document.getElementById("banner-lineup");
    let bannerElement = document.createElement("div");
    let bannerImageElement = document.createElement("img");
   
    // REVIEW WHEN WE SWITCH TO AN API
    bannerImageElement.src = name + ".png";
    bannerImageElement.classList.add("banner-image");

    bannerElement.id = name;
    bannerElement.classList.add("banner-container");

    bannerElement.appendChild(bannerImageElement);
    bannerLineup.appendChild(bannerElement);

    return bannerElement;
}

function updateBannerStopperText(stopperTextElement, stopper, drawsRemaining){
    stopperTextElement.innerText = "Get " + stopper + " in " + drawsRemaining + " draw" + (drawsRemaining > 1 ? "s" : "");
    return stopperTextElement.innerText;
}

function createBannerStopperDisplay(element, stopperData){
    let stopperDisplay = document.createElement("div");
    let stopperText = document.createElement("p");

    stopperDisplay.classList.add("stopper-scroll",  "color-black",  "border-darkcyan",  "border-bevelled");
    stopperText.classList.add("font-PR", "font-white");

    if(stopperData.stopper.length == 1){
        let medalID = stopperData.stopper[0].uniqueMedalID;
        // In this case, we will use the exact name of the medal which can be acquired
        loadMedalInfoFromUniqueID(medalID, function(data){
            let parsedData = JSON.parse(data);
            if(updateBannerStopperText(stopperText, parsedData.variations[medalID].name, stopperData.frequency).length > 48) stopperDisplay.classList.add("scroll-left");
        });
    }

    stopperDisplay.appendChild(stopperText);
    element.appendChild(stopperDisplay);
}

function grabBannerData(){    
    // For now, hardcode the banners. Later we will access them from an API

    window.bannerStopperCount = [];

    loadJSON("banner_blackFriday01.json", function(data){
        parsedData = JSON.parse(data);
        blackFriday01 = createBannerElement("banner_blackFriday01");
        if(parsedData.bannerData.stopperData){
            createBannerStopperDisplay(blackFriday01, parsedData.bannerData.stopperData);
            window.bannerStopperCount["banner_blackFriday01"] = {
                drawsRemainingForMercy: parsedData.bannerData.stopperData.frequency
            }
        }
        blackFriday01.onclick = function(){
            window.performPull(this.id);
        };
    });    
}

appendOnload(window, grabBannerData);
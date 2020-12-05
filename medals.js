function loadMedalInfoFromUniqueID(uniqueMedalID, callback){
    // For now hardcode, later we will send a request to the server

    if(uniqueMedalID == 0){
        loadJSON("medal_SN++KH2Sephiroth.json", callback);
    }
}
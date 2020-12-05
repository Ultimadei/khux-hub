function appendOnload(element, onload){
    let prevOnload = element.onload;
    element.onload = function(){
        if(prevOnload) prevOnload();
        onload();
    }
}

function loadJSON(filename, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', filename, true);

    xobj.onreadystatechange = function() {
        if (xobj.readyState === 4 && xobj.status === 200) {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

window.performPull = function(name){
    console.log(name);
}
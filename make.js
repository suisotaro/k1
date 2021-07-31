var $ = function(id){
  return document.getElementById(id);
}

var make = function(url, shorturl){
  if(url == undefined){
    return "error"
  }
  var geturl = "https://script.google.com/macros/s/AKfycbzQ-y1-v9GIozewAM2ivQ19VJHBxUtrIqT3apm-vrGmt4wJlDbmiVPm_z0FN3DgQtDhsg/exec?url=" + url;
  if(shorturl != undefined){
    geturl += "&shorturl=" + shorturl;
  }
  var xhr = new XMLHttpRequest();
  xhr.open("GET", geturl, false);
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
      return xhr.responseText;
    }
  };
  xhr.send(null);
}

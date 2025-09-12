//function loadJS(FILE_URL, async = true) {
  let scriptEle = document.createElement("script");
  scriptEle.setAttribute("src", FILE_URL);
  scriptEle.setAttribute("type", "text/javascript");
  scriptEle.setAttribute("async", async);
  document.body.appendChild(scriptEle);
  scriptEle.addEventListener("load", () => {
    console.log("Smartcat script successfully invoked");
  });
  scriptEle.addEventListener("error", (ev) => {
    console.log("Smartcat script fail", ev);
  });
}

$(document).ready(function(){
  console.log("Page load");
  loadJS('https://cdn.smartcat-proxy.com/238c0113752847949b92984061222c07/script-v1/__translator.js?hash=c0eb9bbc55605d0e233330d4d09d24b1');
});
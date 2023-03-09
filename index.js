let myWindow;
function openWindow(){
    myWindow = window.open("https://www.google.com","","width=600,height=400");
    myWindow.blur();
}
function closeWindow(){
    myWindow.close();

}
document.getElementById("ScreenWdith").innerHTML = "Screen Width: "+screen.width;
document.getElementById("ScreenHeight").innerHTML = "Screen Height: "+screen.height;
document.getElementById("availHeight").innerHTML = "Available Height: "+screen.availHeight;
document.getElementById("availWdith").innerHTML = "Available Width: "+screen.availWidth;
document.getElementById("winHref").innerHTML = "Href: "+location.href;
document.getElementById("hostname").innerHTML = "HostName: "+location.hostname;
document.getElementById("pathName").innerHTML = "PathName: "+location.pathname;
document.getElementById("protocol").innerHTML = "Protocol: "+location.protocol;
document.getElementById("port").innerHTML = "Port: "+location.port;
document.getElementById("assign").addEventListener('click',()=>{
    window.location.assign("https://www.github.com");
})
document.getElementById("back").addEventListener('click', ()=>{
    history.back();
})
document.getElementById("forward").addEventListener('click', ()=>{
    history.forward();
})

document.getElementById("appName").innerHTML = "App Name: "+ navigator.appName;
document.getElementById("appCodeName").innerHTML = "App Code Name: "+ navigator.appCodeName;
document.getElementById("platform").innerHTML = "Platform: "+ navigator.platform;
document.getElementById("cookieEnabled").innerHTML = "Cookie Enabled: "+ navigator.cookieEnabled;
document.getElementById("product").innerHTML = "Product: " + navigator.product;
document.getElementById("onLine").innerHTML = "onLine: " + navigator.onLine;
document.getElementById("javaEnabled").innerHTML = "Java Enabled:"+navigator.javaEnabled();
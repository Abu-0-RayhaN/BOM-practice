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

function confirming(){
    let a= confirm("Do You Agree?");
    if (a){
        document.getElementById("confirmMessage").innerHTML = "You have agreed."
    } else {
        document.getElementById("confirmMessage").innerHTML = "You have Disagreed."
    }
}
function takingInput(){
    let age =prompt("What is you age? : ","00")
    if (age == null || age == "" || age == "00"){
        document.getElementById("promptMessage").innerHTML ="You haven't given any input"
    }else {
        document.getElementById("promptMessage").innerHTML = "You age is: "+ age;
    }
}
document.getElementById("timeout").addEventListener("click",()=>{
    setTimeout(()=>{
        document.getElementById("timeoutMessage").innerHTML= "I am writing this after 5seconds."
    },5000)
})
let settingTimeInterval = setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("interval").innerHTML = " <br>Clock <br><br>" + d.toLocaleTimeString();
}

function setCookie(cname, cvalue, exdays){
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "Expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires; + ";path=/";
    
}

function getCookie(cname){
    //username=Adil; name=Rayhan; address=cumilla
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i=0; i<ca.length; i++){
        let c= ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if ( c.indexOf(name) == 0){
            return c.substring(name.length)
        }
    }
    return " ";
}

function checkCookie(cname) {
    let a = getCookie(cname);
    if (a != " ") {
     alert("Welcome again " + a);
    } else {
      let name = prompt("Please enter your name:", "");
      if (name != "" && name != null) {
        setCookie(cname, name, 3);
      }
    }
  }
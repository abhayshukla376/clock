setInterval( () => {
 
    d = new Date();

    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    hdeg = 30*hours + minutes/2;
    mdeg = 6*minutes;
    sdeg = 6*seconds;

    hour.style.transform = `rotate(${hdeg}deg)`;
    minute.style.transform = `rotate(${mdeg}deg)`;
    second.style.transform = `rotate(${sdeg}deg)`;
   
    
},1000);

function thememode(){

mode = document.getElementById("theme").checked;

if(mode == false)
{
    document.body.style.backgroundColor = "#000000";
    document.getElementById("minute").style.backgroundColor = "#fff";
    document.getElementById("second").style.backgroundColor = "#fff";
    document.getElementById("point").style.backgroundColor = "#fff";
    document.getElementById("ftxt").style.backgroundColor = "#000000";
    document.getElementById("ftxt").style.color = "#fff";
    document.getElementById("ftxt").style.border = "2px solid #fff";
    document.getElementById("clockcontainer").style.boxShadow = "0 1rem 3rem rgba(255,255,255,.175)";

}
if(mode == true)
{
    document.body.style.backgroundColor = "#fff";
    document.getElementById("minute").style.backgroundColor = "#000000";
    document.getElementById("second").style.backgroundColor = "#000000";
    document.getElementById("point").style.backgroundColor = "#000000";
    document.getElementById("ftxt").style.backgroundColor = "#F8F9FA";
    document.getElementById("ftxt").style.color = "#2196F3";
    document.getElementById("ftxt").style.border = "none";
    document.getElementById("clockcontainer").style.boxShadow = "0 1rem 3rem rgba(0,0,0,.175)";

}
}


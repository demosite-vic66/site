<!--
//=================================================================================================================================
// 
//=================================================================================================================================
function CheckUIElements() {
	var plustop;
	plustop = 310;
	if(document.documentElement.clientHeight < 300)
		plustop = 0;
	var yMenu1From, yMenu1To, yOffset, timeoutNextCheck;
	var wndWidth = parseInt(document.documentElement.clientWidth);
	yMenu1From   = parseInt(document.getElementById('chickmenu').style.top, 10);
	yMenu1To     = parseInt(document.documentElement.scrollTop) + plustop; // 
	timeoutNextCheck = 500;

	if ( yMenu1From != yMenu1To ) 
	{
		yOffset = Math.ceil( Math.abs( yMenu1To - yMenu1From ) / 20 );
		if ( yMenu1To < yMenu1From )
			yOffset = -yOffset;
			mnum= yMenu1From+ yOffset;
		document.getElementById('chickmenu').style.top = mnum+"px";
		timeoutNextCheck = 10;
	}
	//ghostmenu.style.left = 500;
	setTimeout ("CheckUIElements()", timeoutNextCheck);
}

function MovePosition() {
	document.getElementById('chickmenu').style.top = "16px";
	document.getElementById('chickmenu').style.left = "92%"; 
	CheckUIElements();
	return true;
}

//-->

/////////////////////////¿ï³æ

 function switchTag(tag){
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

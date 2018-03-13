function $(id) { return document.getElementById(id); }

function addLoadEvent(func){
var oldonload = window.onload;
if (typeof window.onload != 'function') {
window.onload = func;
} else {
window.onload = function(){
oldonload();
func();
}
}
}

function moveElement(elementID,final_x,final_y,interval) {
if (!document.getElementById) return false;
if (!document.getElementById(elementID)) return false;
var elem = document.getElementById(elementID);
if (elem.movement) {
clearTimeout(elem.movement);
}
if (!elem.style.left) {
elem.style.left = "0px";
}
if (!elem.style.top) {
elem.style.top = "0px";
}
var xpos = parseInt(elem.style.left);
var ypos = parseInt(elem.style.top);
if (xpos == final_x && ypos == final_y) {
return true;
}
if (xpos < final_x) {
var dist = Math.ceil((final_x - xpos)/10);
xpos = xpos + dist;
}
if (xpos > final_x) {
var dist = Math.ceil((xpos - final_x)/10);
xpos = xpos - dist;
}
if (ypos < final_y) {
var dist = Math.ceil((final_y - ypos)/10);
ypos = ypos + dist;
}
if (ypos > final_y) {
var dist = Math.ceil((ypos - final_y)/10);
ypos = ypos - dist;
}
elem.style.left = xpos + "px";
elem.style.top = ypos + "px";
var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
elem.movement = setTimeout(repeat,interval);
}


function classNormal(iFocusBtnID,iFocusTxID){
var iFocusBtns= $(iFocusBtnID).getElementsByTagName('li');
var iFocusTxs = $(iFocusTxID).getElementsByTagName('li');
for(var i=0; i< iFocusBtns.length; i++) {
iFocusBtns[i].className='normal';
iFocusTxs[i].className='normal';
}
}


function classCurrent(iFocusBtnID,iFocusTxID,n){
var iFocusBtns= $(iFocusBtnID).getElementsByTagName('li');
var iFocusTxs = $(iFocusTxID).getElementsByTagName('li');
iFocusBtns[n].className='current';
iFocusTxs[n].className='current';
}

function iFocusChange() {
if(!$('ifocus')) return false;
$('ifocus').onmouseover = function(){atuokey = true};
$('ifocus').onmouseout = function(){atuokey = false};
var iFocusBtns = $('ifocus_btn').getElementsByTagName('li');
var listLength = iFocusBtns.length;
iFocusBtns[0].onmouseover = function() {
moveElement('ifocus_piclist',0,0,5);
classNormal('ifocus_btn','ifocus_tx');
classCurrent('ifocus_btn','ifocus_tx',0);
}
<?php
$movevar=$_REQUEST['mh'];
$imgcount=$_REQUEST['imgcount'];
for($k=1;$k<$imgcount;$k++){	
	$tmp=-($k*$movevar);
echo "
if (listLength>=".($k+1).") {
iFocusBtns[$k].onmouseover = function() {
moveElement('ifocus_piclist',0,$tmp,5);
classNormal('ifocus_btn','ifocus_tx');
classCurrent('ifocus_btn','ifocus_tx',$k);
}\n
}	
";
}//end for
?>
}
setInterval('autoiFocus()',9000);
var atuokey = false;
function autoiFocus() {
if(!$('ifocus')) return false;
if(atuokey) return false;
var focusBtnList = $('ifocus_btn').getElementsByTagName('li');
var listLength = focusBtnList.length;
for(var i=0; i< listLength; i++) {
if (focusBtnList[i].className == 'current') var currentNum = i;
}


<?php 
for($k=0;$k<=$imgcount;$k++){
	echo "var k2=".($k+1).";
	var tmp2=-(k2*$movevar);\n";
	if($k!=$imgcount){
	echo "if (currentNum==".$k." && listLength !=k2 ){
		moveElement('ifocus_piclist',0,tmp2,5);
		classNormal('ifocus_btn','ifocus_tx');
		classCurrent('ifocus_btn','ifocus_tx',".($k+1).");
		}\n";
	}else {
		echo "if (currentNum==".($k-1)."){
			moveElement('ifocus_piclist',0,0,5);
			classNormal('ifocus_btn','ifocus_tx');
			classCurrent('ifocus_btn','ifocus_tx',0);
			}\n";
	}	
}
?>
}
addLoadEvent(iFocusChange);
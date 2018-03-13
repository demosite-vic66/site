function preloader() 
{
     // counter
     var i = 0;
     // create object
     imageObj = new Image();
     // set image list
     images = new Array();
     images[0]="images/bg2.gif"
     images[1]="images/bg.gif"
     // start preloading
     for(i=0; i<=3; i++) 
     {
          imageObj.src=images[i];
     }
} 

function rightclose(){
if (navigator.appName.indexOf("Internet Explorer") != -1) 

document.onmousedown = noSourceExplorer;



function noSourceExplorer()

{

if (event.button == 2 | event.button == 3)

{

alert("歡迎光臨");

}

}
}

		function openform(formname){
			formobj = eval("document."+formname);
			for(a=0;a < formobj.length;a++){
				formobj[a].disabled = false;
			}
		}

function popmsg(msg){//警告對話
	alert(msg);
}

function jumpopen (Open)
{// 顯示跳出視窗
window.open(Open, '', ',location=no,toolbar=no,scrollbars=yes,directories=no,Status=no,copyhistory=no,top=300,left=300,width=350,height=300')
}
function todel (url){
	if(confirm("確定刪除?")){
		location = url;
	}

}
function jumpopen2 (Open,w,h)
{// 顯示跳出視窗
window.open(Open, '', ',location=no,toolbar=no,scrollbars=yes,directories=no,Status=no,copyhistory=no,top=300,left=300,width='+w+',height='+h+'')
}

function gettype1(btvalue ,url) //子頁面值返回母頁面
{alert("ok");
 //這是被呼叫頁面的控制參數
 mystr="dialogwidth=200px;dialogheight=270px;scrollbars=no;center=yes;border=thin;help=no;status=no";
 //strvalue為回傳值時丟給此變數。 第一個參數為(Typelist.php)為被呼叫的頁面。第二個參數則是Modal視窗開啟時會傳遞給他的值。第三個參數只是個控制參數跟A標籤有點像的使用方式。
 
 strvalue=window.showModalDialog(url,"Test測試測試",mystr);
 if (strvalue != "" && strvalue != null && btvalue != null)
 {
   btvalue.value=strvalue;
   window.focus();  //加完日期將焦點移到視窗可避免手動修改日期
 }
}

function getvalue(btvalue ,url){ //抓傳回值
	mystr="dialogwidth=1px;dialogheight=1px;scrollbars=no;center=yes;border=thin;help=no;status=no";
	if(btvalue == ""){
		return window.showModalDialog(url,'回傳',mystr);
	}else{
		btvalue.value = window.showModalDialog(url,'回傳',mystr);
	}
	


}

function dialogpage(id ,url,w,h) //子頁面值返回母頁面
{
 //這是被呼叫頁面的控制參數
 mystr="dialogwidth="+w+"px;dialogheight="+h+"px;scrollbars=no;center=yes;border=thin;help=no;status=no";
 //strvalue為回傳值時丟給此變數。 第一個參數為(Typelist.php)為被呼叫的頁面。第二個參數則是Modal視窗開啟時會傳遞給他的值。第三個參數只是個控制參數跟A標籤有點像的使用方式。
 
 strvalue=window.showModalDialog(url,"回傳",mystr);
 if (strvalue != "" && strvalue != null && id != null)
 {
   id.value=strvalue;
 }
}

//顯示對應到<div id="show"></div>的內容
function ComputeWordNum(){	 	

	var szText = new String(document.form1.content.value);	
	var szTextLen = szText.length;
	if (szTextLen <= 50)
		show3.innerHTML = "(目前字數 : <font color=#6575A3>" + szText.length + "</font>&nbsp;/&nbsp;最多50個中英文字)";
	else
		show3.innerHTML = "(目前字數 : <font color=#B00000>" + szText.length + "</font>&nbsp;/&nbsp;<font color=#B00000>您已超過50字元上限</font>)";

	 setTimeout("ComputeWordNum()", 250); //每0.25秒後在執行一次
}

function citychange() { //城市選鄉鎮
	i = window.document.form1.city.selectedIndex;
	window.document.form1.cityarea.length = cityarea_account[i] - cityarea_account[i-1];
	index = cityarea_account[i-1] + 1;
	window.document.form1.cityarea.options[0].selected=true;
	for (j = 0; j < window.document.form1.cityarea.length; j ++) {
		window.document.form1.cityarea.options[j].value = cityarea[index + j];
		window.document.form1.cityarea.options[j].text = cityarea[index + j];
	}
}

function citychange1() { //鄉鎮選區碼
        var temp='';
	i = window.document.form1.city.selectedIndex;
	window.document.form1.cityarea.length = cityarea_account[i] - cityarea_account[i-1];
	index = cityarea_account[i-1] + 1;
	for (j = 0; j < window.document.form1.cityarea.length; j ++) {
	  if(temp==cityarea[index + j])
		window.document.form1.cityarea.options[j].selected = true;
		window.document.form1.cityarea.options[j].value = cityarea[index + j];
		window.document.form1.cityarea.options[j].text = cityarea[index + j];
	}
}

/***入會驗證開始***/
function checkEmail( id ) {
	
	if(id.indexOf("@") != -1){
		start = id.search("@");
		str = id.substr(start+1); //取@之後字串
		
		if(str == ''){
			bErrorFlag = true;
			cError = cError + "e-mail格式錯誤\n";
			return true;
		}else{
			if(str.indexOf(".") == -1){
				bErrorFlag = true;
				cError = cError + "e-mail格式錯誤\n";
				return true;
			}else{
				start2 = str.search(/\.+/); //比對點
				str2 = str.substr(start2+1); //取.之後字串

				if(str2 == ''){
					bErrorFlag = true;
					cError = cError + "e-mail格式錯誤\n";
					return true;
				}
			
			}
		}
	}else{
			bErrorFlag = true;
			cError = cError + "e-mail格式錯誤\n";
			return true;	
	}
}
function identityError(id){
	var r = identityCheck(id);
	if (r == 1){ 
		bErrorFlag = true;
		cError = cError + "身份證第一個字必須是英文字母\n";
		return true;
	}
	
	if (r == 2){
		bErrorFlag = true;
		cError = cError + "身份證號碼的欄位個數錯誤\n";
		return true;       
	}
	if (r == 3){
		bErrorFlag = true;
		cError = cError + "身份證號碼核驗錯誤\n";
		return true;       
	}
	if (r >= 4){
		bErrorFlag = true;
		cError = cError + "身份證號碼: 第" + (r - 4) + "欄位不是數字\n";
		return true;       
	}
	return false;   
}

function identityCheck(id){
	var Num = new Array(11);
		
	if (id.length != 10) {return 2;}
	Num[0] = id.charCodeAt(0);
	if ((parseInt(Num[0]) < 65) || (parseInt(Num[0]) > 122)){return 1;}
	Num[0] = id.charAt(0);
	
	if ((Num[0] == "A") || (Num[0] == "a")) { Num[0]=1; Num[1] = 0;}
	if ((Num[0] == "B") || (Num[0] == "b")) { Num[0]=1; Num[1] = 1;}
	if ((Num[0] == "C") || (Num[0] == "c")) { Num[0]=1; Num[1] = 2;}
	if ((Num[0] == "D") || (Num[0] == "d")) { Num[0]=1; Num[1] = 3;}
	if ((Num[0] == "E") || (Num[0] == "e")) { Num[0]=1; Num[1] = 4;}
	if ((Num[0] == "F") || (Num[0] == "f")) { Num[0]=1; Num[1] = 5;}
	if ((Num[0] == "G") || (Num[0] == "g")) { Num[0]=1; Num[1] = 6;}
	if ((Num[0] == "H") || (Num[0] == "h")) { Num[0]=1; Num[1] = 7;}
	if ((Num[0] == "I") || (Num[0] == "i")) { Num[0]=3; Num[1] = 4;} 
	if ((Num[0] == "J") || (Num[0] == "j")) { Num[0]=1; Num[1] = 8;}
	if ((Num[0] == "K") || (Num[0] == "k")) { Num[0]=1; Num[1] = 9;}
	if ((Num[0] == "L") || (Num[0] == "l")) { Num[0]=2; Num[1] = 0;}
	if ((Num[0] == "M") || (Num[0] == "m")) { Num[0]=2; Num[1] = 1;}
	if ((Num[0] == "N") || (Num[0] == "n")) { Num[0]=2; Num[1] = 2;}
	if ((Num[0] == "O") || (Num[0] == "o")) { Num[0]=3; Num[1] = 5;} 
	if ((Num[0] == "P") || (Num[0] == "p")) { Num[0]=2; Num[1] = 3;}
	if ((Num[0] == "Q") || (Num[0] == "q")) { Num[0]=2; Num[1] = 4;}
	if ((Num[0] == "R") || (Num[0] == "r")) { Num[0]=2; Num[1] = 5;}
	if ((Num[0] == "S") || (Num[0] == "s")) { Num[0]=2; Num[1] = 6;}
	if ((Num[0] == "T") || (Num[0] == "t")) { Num[0]=2; Num[1] = 7;}
	if ((Num[0] == "U") || (Num[0] == "u")) { Num[0]=2; Num[1] = 8;}
	if ((Num[0] == "V") || (Num[0] == "v")) { Num[0]=2; Num[1] = 9;}
	if ((Num[0] == "W") || (Num[0] == "w")) { Num[0]=3; Num[1] = 2;}
	if ((Num[0] == "X") || (Num[0] == "x")) { Num[0]=3; Num[1] = 0;}
	if ((Num[0] == "Y") || (Num[0] == "y")) { Num[0]=3; Num[1] = 1;}
	if ((Num[0] == "Z") || (Num[0] == "z")) { Num[0]=3; Num[1] = 3;}
	  
	for (i=2;i < 11;i++){
		Num[i] = id.charAt(i-1);
		if (isNaN(Num[i])) {return 4 + i;} 		      
	}
      
	var out = eval(Num[0]) + eval(Num[1])*9 + eval(Num[2])*8 + eval(Num[3])*7 + eval(Num[4])*6 + eval(Num[5])*5 + eval(Num[6])*4 + eval(Num[7])*3 + eval(Num[8])*2 + eval(Num[9]) + eval(Num[10]);
				        
	out = out % 10;

	if (out == 0){
		return 0;
	}else{
		return 3;
	}
}
 
function ConfirmAccount(Account){
	if(Account){
		pattern = /^([a-zA-Z0-9_])+$/;
		result = pattern.test(Account);
		if(!result){
			alert("帳號不能有特殊符號");
		}else{
			AccountUrl = "ConfirmAccount.php?account=" + Account;
			strFeatures = "width=200,height=150,top=200,left=200,scrollbars=no";
			ConfirmAccountWindow = window.open(AccountUrl,'ConfirmAccount',strFeatures);
			ConfirmAccountWindow.focus();
		}
	}else{
		alert("請先輸入帳號");	
	}
}

function checkSpecial(Value,Type,MaxLen,MinLen,ErrorStr){
	if(Value && Type){
		if(Type == 1){
			pattern = /^([a-zA-Z0-9_])+$/;
		}else if(Type == 2){
			pattern = /^([a-zA-Z0-9])+$/;
		}

		value_1 = Value.substr(0,1); //第一字元
		pattern_1 = /^([a-zA-Z])+$/;
		res_1 =pattern_1.test(value_1);

		if(!res_1){
			
			bErrorFlag = true;
			cError = cError + ErrorStr + "第一個字元要為英文\n";
		}else{
		
			result = pattern.test(Value);
			if(!result){
				bErrorFlag = true;
				cError = cError + ErrorStr + "不能有特殊符號\n";
			}else{
				VLen = Value.length;
				if(VLen > MaxLen){
					bErrorFlag = true;
					cError = cError + ErrorStr + "字數過長\n";
				}else if(VLen < MinLen){
					bErrorFlag = true;
					cError = cError + ErrorStr + "字數過短\n";
				}
			}
		}


	}else{
		bErrorFlag = true;
		cError = cError + ErrorStr + "不能為空\n";
	}
}

function checkVacant(Value,ErrorStr){
	if(!Value || Value == ""){
		bErrorFlag = true;
		cError = cError + ErrorStr + "\n";
	}
}

function checkNumber(Value,ErrorStr){
	n = Value.length
	if(Value != ""){
		for(i=0;i<n;i++){
			if(isNaN(Value.charAt(i))){
		    	     bErrorFlag = true;
				cError = cError + "請確定您輸入" +ErrorStr + "都為數字！\n";
				break;
			}
		}
	}
}

function checkPhone(Value,ErrorStr,CType){
	if(!Value || Value == ""){
		bErrorFlag = true;
		cError = cError + "請輸入" +ErrorStr + "！\n";
	}else{
		PLen = Value.length;
		if(CType == 1){
			if(PLen != 10){
				bErrorFlag = true;
				cError = cError + ErrorStr + "字數錯誤！\n";
			}else{
				checkNumber(Value,ErrorStr);
			}
		}else if(CType == 2 || CType == 4){
			if(PLen > 3 || PLen < 2){
				bErrorFlag = true;
				cError = cError + ErrorStr + "字數錯誤！\n";
			}else{
				checkNumber(Value,ErrorStr);
			}
		}else if(CType == 3 || CType == 5){
			if(PLen > 8 || PLen < 6){
				bErrorFlag = true;
				cError = cError + ErrorStr + "字數錯誤！\n";
			}else{
				checkNumber(Value,ErrorStr);
			}
		}
	}
}

function checkPassword(password,password2,ErrorStr){
	if(password != password2){
		bErrorFlag = true;
		cError = cError + ErrorStr + "\n";
	}
}

function checkIMEI(Value){
	n = Value.length;
	if(Value != ""){
		if(n == 15){
			pattern = /^([a-zA-Z0-9])+$/;
			result = pattern.test(Value);
			if(!result){
				bErrorFlag = true;
				cError = cError + "請確定您輸入IMEI全為數字或英文！\n";
			}
		}else{
			bErrorFlag = true;
			cError = cError + "請確定您輸入IMEI字數為15位！\n";
		}
	}else{
		bErrorFlag = true;
		cError = cError + "請確定您輸入IMEI為15位數！\n";
	}
}

function checkFields(theForm){
	cError = "請檢查以下欄位是否錯誤：\n\n";
	bErrorFlag=false;
	pFrrorNum = 0;
	
	checkSpecial(theForm.account.value,1,12,4,"帳號");
	checkSpecial(theForm.pw.value,2,12,4,"密碼");
	checkPassword(theForm.pw.value,theForm.pw2.value,"密碼與確認密碼不符！");
	//checkVacant(theForm.phone_type.value,"請選擇機型！");
	//checkIMEI(theForm.imei.value,"請輸入IMEI！");
	//checkVacant(theForm.buy_day.value,"請選擇購買日期！");
	//checkVacant(theForm.nickname.value,"請輸入暱稱！");
	//checkVacant(theForm.name.value,"請輸入姓名！");
	//checkVacant(theForm.birthday.value,"請輸入生日！");
	//identityError(theForm.ID_card.value);
	//checkPhone(theForm.tel_num.value,"電話1號碼",1);
	//checkPhone(theForm.area_code_d.value,"白天連絡電話（區碼）",2);
	//checkPhone(theForm.phone_num_d.value,"白天連絡電話號碼",3);
	//checkPhone(theForm.area_code_n.value,"晚上連絡電話（區碼）",4);
	//checkPhone(theForm.phone_num_n.value,"晚上連絡電話號碼",5);
	//checkVacant(theForm.city.value,"請選擇縣市別！");
	//checkVacant(theForm.cityarea.value,"請選擇鄉鎮區域！");
	//checkVacant(theForm.area_code.value,"請選擇鄉鎮區碼！");
	//checkVacant(theForm.addr.value,"請輸入地址！");
	checkEmail(theForm.email.value);

	if (bErrorFlag){
    		alert(cError);
    		return false;
  	}else{
		theForm.JavaScriptConfirm.value = "Yes";
    		return true;
  	}
	
}


/***入會驗證結束***/
/***更新驗證開始***/
function checkFields2(theForm){
	cError = "請檢查以下欄位是否錯誤：\n\n";
	bErrorFlag=false;
	pFrrorNum = 0;
	
	checkVacant(theForm.name.value,"請輸入姓名！");
	checkVacant(theForm.birthday.value,"請輸入生日！");
	identityError(theForm.identity.value);
	checkPhone(theForm.mobil_num.value,"手機號碼",1);
	//checkPhone(theForm.area_code_d.value,"白天連絡電話（區碼）",2);
	//checkPhone(theForm.phone_num_d.value,"白天連絡電話號碼",3);
	//checkPhone(theForm.area_code_n.value,"晚上連絡電話（區碼）",4);
	//checkPhone(theForm.phone_num_n.value,"晚上連絡電話號碼",5);
	checkVacant(theForm.city.value,"請選擇縣市別！");
	checkVacant(theForm.cityarea.value,"請選擇鄉鎮區域！");
	checkVacant(theForm.area_code.value,"請選擇鄉鎮區碼！");
	checkVacant(theForm.addr.value,"請輸入地址！");
	checkEmail(theForm.email.value);
	
	if (bErrorFlag){
    		alert(cError);
    		return false;
  	}else{
		theForm.JavaScriptConfirm.value = "Yes";
    		return true;
  	}
	
}

function checkFields3(theForm){
	cError = "請檢查以下欄位是否錯誤：\n\n";
	bErrorFlag=false;
	pFrrorNum = 0;
	
	checkVacant(theForm.phone_type.value,"請選擇機型！");
	checkIMEI(theForm.imei.value,"請輸入IMEI！");
	checkVacant(theForm.buy_day.value,"請選擇購買日期！");
	checkVacant(theForm.name.value,"請輸入姓名！");
	checkVacant(theForm.birthday.value,"請輸入生日！");
	identityError(theForm.ID_card.value);
	checkPhone(theForm.mobil_num.value,"手機號碼",1);
	checkVacant(theForm.city.value,"請選擇縣市別！");
	checkVacant(theForm.cityarea.value,"請選擇鄉鎮區域！");
	checkVacant(theForm.area_code.value,"請選擇鄉鎮區碼！");
	checkVacant(theForm.addr.value,"請輸入地址！");
	checkEmail(theForm.email.value);
	if (bErrorFlag){
    		alert(cError);
    		return false;
  	}else{
		theForm.JavaScriptConfirm.value = "Yes";
    		return true;
  	}
	
}

function checkFamily(theForm){
	cError = "請檢查以下欄位是否錯誤：\n\n";
	bErrorFlag=false;
	pFrrorNum = 0;
	
	if(theForm.course.value == "vq" || theForm.course.value == "sn"){
		checkVacant(theForm.number.value,"請填寫期數");
	}
	
	checkVacant(theForm.date.value,"請選擇日期");
	checkVacant(theForm.name.value,"請填寫家族名稱");

	if (bErrorFlag){
    		alert(cError);
    		return false;
  	}else{
		theForm.JavaScriptConfirm.value = "Yes";
    		return true;
  	}
	
}
/***更新驗證結束***/

/***下拉跳頁開始***/

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_jumpMenuGo(selName,targ,restore){ //v3.0
  var selObj = MM_findObj(selName); if (selObj) MM_jumpMenu(targ,selObj,restore);
}

/***下拉跳頁結束***/

/***秀DIV區塊***/
function get_xy(id){ //抓絕對位置 div或表格...
el = id;

 for (
 var lx=0,ly=0;
 el!=null;
 lx+=el.offsetLeft,
 ly+=el.offsetTop,
 el=el.offsetParent); // 用offsetLeft , offsetTop 循環累加

 return lx+"-"+ly;  //返回 input模式x,y 坐標
}

function show(id,evt,self_id){
	//evt = evt ? evt : (window.event ? window.event : null);
	obj = evt.srcElement ? evt.srcElement : evt.target;

	ImHeight = obj.offsetHeight;
	ImWidth = obj.offsetWidth;
	var xy = get_xy(self_id).split("-");
	var LayerTop = 0;
	var LayerLeft = 0;
	evt_x = parseInt(xy[0])+ parseInt((ImWidth/4));
	evt_y = parseInt(xy[1])+ parseInt(ImHeight)-7;
	if(LayerTop == 0 || LayerLeft == 0){
		document.getElementById(id).style.left = evt_x+"px";
		document.getElementById(id).style.top = evt_y+"px";
	}
/* 舊方法
	ImHeight = event.srcElement.offsetHeight;
	ImWidth = event.srcElement.offsetWidth;
	var LayerTop = 0;
	var LayerLeft = 0;
	NowOffsetX = event.offsetX;//物件本身的相對位置左上座標為(0,0)右下為(max X,max Y)	
	NowOffsetY = event.offsetY;
	NowClientX = event.clientX;//滑鼠在銀幕上的座標
	NowClientY = event.clientY;
	scrolly = document.body.scrollTop;  //Y軸位移量 取絕對位置用的
	scrollx = document.body.scrollLeft;  //X軸位移量 取絕對位置用的

	if(LayerTop == 0 || LayerLeft == 0){
		LayerTop = NowClientY - NowOffsetY + ImHeight - 7 + scrolly;
		LayerLeft = NowClientX + ((ImWidth/2) - NowOffsetX)-30 + scrollx;
		document.getElementById(id).style.top = LayerTop;
		document.getElementById(id).style.left = LayerLeft;
	}*/
	document.getElementById(id).style.visibility = "visible";
}
function showdiv(id){

	document.getElementById(id).style.visibility = "visible";
}

function notshow(id){
	document.getElementById(id).style.visibility = "hidden";
}

function setCheckboxed(theCheckbox){//點選同一列資料 變動check box狀態為true
	if (document.getElementById(theCheckbox)){
		document.getElementById(theCheckbox).checked = true;
	}
}

function setCheckboxColumn(theCheckbox){ //點選同一列資料 變動check box狀態 

    if (document.getElementById(theCheckbox)) {
        document.getElementById(theCheckbox).checked = (document.getElementById(theCheckbox).checked ? false : true);
        if (document.getElementById(theCheckbox + 'r')) {
            document.getElementById(theCheckbox + 'r').checked = document.getElementById(theCheckbox).checked;
        }
    } else {
        if (document.getElementById(theCheckbox + 'r')) {
            document.getElementById(theCheckbox + 'r').checked = (document.getElementById(theCheckbox +'r').checked ? false : true);
            if (document.getElementById(theCheckbox)) {
                document.getElementById(theCheckbox).checked = document.getElementById(theCheckbox + 'r').checked;
            }
        }
    }
}

function chkall(formname,matchstr,check) //全選/全不選
{
    var objForm = document.forms[formname];
    var objLen = objForm.length;
    for (var iCount = 0; iCount < objLen; iCount++)
    {
        if (check)
        {
            if (objForm.elements[iCount].type == "checkbox" )
            {
				if(objForm.elements[iCount].name.match(matchstr)){
					objForm.elements[iCount].checked = true;
				}
            }
        }
        else
        {
            if (objForm.elements[iCount].type == "checkbox")
            {
				if(objForm.elements[iCount].name.match(matchstr)){
					objForm.elements[iCount].checked = false;
				}  
            }
        }
    }
}
/*線上編輯器*/
				var area_name = "";
 
				function edit_tool(id_name){
					area_name = id_name;
					divobj = document.createElement("DIV");
					TEXTAREA_ptr = document.getElementById(area_name);
					TEXTAREA_ptr.focus();
					TEXTAREA_ptr.onblur = callback;
					parentnode = TEXTAREA_ptr.parentNode;
					parentnode.insertBefore(divobj,TEXTAREA_ptr);

					divobj.innerHTML = "<iframe id=\"if1\" src=\"webedit/editor3.html\" width=\"603\" height=\"310\" scrolling='no' onBlur=\"document.getElementById('"+area_name+"').value=if1.Preview.value;\"></iframe>";
					
				}



				function callback(){
						window.if1.document.getElementById("Preview").style.display = "none";
						window.if1.document.getElementById("Preview").value = document.getElementById(area_name).value;
						window.if1.SeePreview();		
				}

/*線上編輯器 在edit_tool('')中填入文字方塊ID並在方塊下面直行即可*/

function loadTab(obj,n){
	var layer;
	eval('layer=\'S'+n+'\'');

	//將 Tab 標籤樣式設成 Blur 型態
	var tabsF=document.getElementById('tabsF').getElementsByTagName('li');
	for (var i=0;i<tabsF.length;i++){
		tabsF[i].setAttribute('id',null);
		eval('document.getElementById(\'S'+(i+1)+'\').style.display=\'none\'')
	}

	//變更分頁標題樣式
	obj.parentNode.setAttribute('id','current');
	document.getElementById(layer).style.display='inline';
	

}



/*JohnWiley*/

function dsort_up(){
  a = document.dsort.elements['dlist[]'].selectedIndex;
  if ( a>0){
    av = get_value(a);
    at = get_text(a);
    b = a-1;
    bv = get_value(b);
    bt = get_text(b);
    document.dsort.elements['dlist[]'].options[a] = new Option(bt,bv);
    document.dsort.elements['dlist[]'].options[b] = new Option(at,av,true,true);
  }

}

function dsort_down(){
  a = document.dsort.elements['dlist[]'].selectedIndex;
  if ( a<(document.dsort.elements['dlist[]'].length-1)){
    av = get_value(a);
    at = get_text(a);
    b = a+1;
    bv = get_value(b);
    bt = get_text(b);
    document.dsort.elements['dlist[]'].options[a] = new Option(bt,bv);
    document.dsort.elements['dlist[]'].options[b] = new Option(at,av,true,true);
  }
}

function dsort_top(){
  a = document.dsort.elements['dlist[]'].selectedIndex;
  if ( a>0){
    av = get_value(a);
    at = get_text(a);
    for (i=a-1;i>=0;i--)
    {
      iv = get_value(i);
      it = get_text(i);
      document.dsort.elements['dlist[]'].options[i+1] = new Option(it,iv);
    }
    document.dsort.elements['dlist[]'].options[0] = new Option(at,av,true,true);
  }
}

function dsort_bottom(){
  a = document.dsort.elements['dlist[]'].selectedIndex;
  l = document.dsort.elements['dlist[]'].length;
  if ( a<(l-1)){
    av = get_value(a);
    at = get_text(a);
    for (i=a+1;i<l;i++){
      iv = get_value(i);
      it = get_text(i);
      document.dsort.elements['dlist[]'].options[i-1] = new Option(it,iv);
    }
    document.dsort.elements['dlist[]'].options[l-1] = new Option(at,av,true,true);
  }
}

function dsort_checkall(){
  a = document.dsort.elements['dlist[]'].length;
  for (i=0;i<a;i++){
    document.dsort.elements['dlist[]'].options[i].selected=true;
  }
  return true;
}

function get_value(idx){
    v = document.dsort.elements['dlist[]'].options[idx].value;
    return v;
}

function get_text(idx){
    t = document.dsort.elements['dlist[]'].options[idx].text;
    return t;
}

function dsort_checkall() {
  a = document.dsort.elements['dlist[]'].length;
  for (i=0;i<a;i++){
    document.dsort.elements['dlist[]'].options[i].selected=true;
  }
  return true;
}

function change_sort(idx){
	v = document.dsort.elements['chgck'].value;
	if(v == '1'){
		if(confirm("此更變尚未儲存，您確定要離開嗎？")==false){
			return false;
		}
	}
	location.href="index.php?_Page=product&mode=manage_sort&categories="+idx;
}

function pop_up_window( href, target, params )
	{
		if( typeof(params) == 'undefined' )
		{
			params = 'width=750,height=550,scrollbars=yes,status=yes,resizable=yes';
		}

		opened = window.open( href, target, params );
		opened.focus();
		if( typeof(openedWindows) == 'undefined' )
		{
			openedWindows = new Array(opened);
		}
		else
		{
			openedWindows.push(opened);
		}

		// Tell the caller there is no need to process href="" :
		return false;
}

		/**樹狀縮放START**/
		function showmenu(id){
      
    		obj = id.firstChild.nextSibling;
    		if(obj != null){
      		while(obj.nodeName != "UL"){
      			obj=obj.nextSibling;
      			if(obj == null)break;
      		}
      
      		if(obj != null){
      			if (obj.style.display=='none'){
      				obj.style.display='';
      			}else{
      				obj.style.display='none';
      			}
      		}
    		}
		}
		/**樹狀縮放END**/

		/**傳送資料到iframe start**/
		function post_to_iframe(form){
        form.target = "ifmSubmit";
        form.submit();

    }
		/**傳送資料到iframe end**/

    function click_cart(){//顯示購物車圖案並取得數量
    	document.getElementById("gocart").style.display="";
      readRequest('mode=get_cartnum','totalcart');
    }

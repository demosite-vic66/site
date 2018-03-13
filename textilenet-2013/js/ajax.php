		var xmlHttp;

		function createXHR(){
			if (window.XMLHttpRequest) { //IE7、Mozilla、Safari、Firefox...
				xmlHttp = new XMLHttpRequest();
				if(xmlHttp.overrideMimeType){
					xmlHttp.overrideMimeType('text/xml');
				}
			}else if (window.ActiveXObject) {//IE6
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			
			if (!xmlHttp) {
				alert('您使用的瀏覽器不支援 XMLHTTP 物件');
				return false;
			}
		}


/*		function readRequest(par_str,sdid,evalstr){
			createXHR();
			eval_str = evalstr;
			sd_id = sdid;
			var url='index.php?_Page=ajax&timeStamp='+new Date().getTime();
			xmlHttp.open('POST',url,true);//POST or GET
			xmlHttp.onreadystatechange=callback;
			xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //for POST
			xmlHttp.send(par_str);
		}
*/
		function callback(){
			if (xmlHttp.readyState==4){
				xml=xmlHttp.responseXML;
				if(xml.childNodes.length == 0 ){ //for ie7 或不能正常解析PHP產生的XML,改抓text在轉xml
					xml=xmlHttp.responseText;
					var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
					xmlDoc.async=false;
					xmlDoc.loadXML(xml);
					xml = xmlDoc;
				}
				insertRow(xml);
			}
		}


		function getNodeContent(xmldoc,key,label) {

			var na=[],va=[],l;
			var outstr='';

			key=(typeof key=='undefined')?getNodeName(xmldoc,false):key;

			for (var i=0;i<xmldoc.getElementsByTagName(key).length;i++){
				var xml=xmldoc.getElementsByTagName(key)[i];
				na=getNodeName(xml,true);

				for (var j=0;j<na.length;j++){
					var xmlk=xml.getElementsByTagName(na[j]);
					for (var k=0;k<xmlk.length;k++){
						l=Math.max(va.length,va.length-1);
						if(typeof label!='undefined'){
							if(typeof xmlk[k].getAttribute(label)!=null && typeof xmlk[k].getAttribute(label)!=''){
								va[l]=[xmlk[k].getAttribute(label),xmlk[k].childNodes[0].nodeValue];
							}else{
								va[l]=[na[j],xmlk[k].childNodes[0].nodeValue];
							}
						}else{
							va[l]=[na[j],xmlk[k].childNodes[0].nodeValue];
						}
						outstr+=va[l]+'\n';
					}
				}
			}

			return va
		}

		function getNodeName(xmldoc,duplicate){

			var d;
			var na=[];

			d=(typeof duplicate=='undefined')?true:duplicate;

			for (var i=0;i<xmldoc.childNodes.length;i++){
				if (xmldoc.childNodes[i].hasChildNodes()){
					na=na.concat(xmldoc.childNodes[i].tagName);
				}
			}

			na=(d)?na:na.unique();

			return na
		}


		function insertRow(xmldoc){
			var na=[],td;
			var q_name ,q_content,q_time ,i =0;

			na=getNodeContent(xmldoc,'newdata');

			if (na.length>0){
				for(j=1;j<=(na.length/1);j++){
						q_content = na[i][1];
						set_innerHTML(document.getElementById(sd_id), q_content);
						if(eval_str != ""){eval(eval_str);}
				}

			}
		}

function set_innerHTML(obj, html) {
    obj.innerHTML = html;
    var scripts = obj.getElementsByTagName("script");
    if (scripts) {
	var cripts=[]
	for (var i = 0; i < scripts.length; i++) {cripts[i]=scripts[i].text.replace(/(^\s*)|(\s*$)/g, "");}
        document.write = function (str) {
            obj.innerHTML += str;
        }
        document.writeln = function (str) {
            obj.innerHTML += str + "<br>";
        }
//取得非腳本html代碼
HTMLcodeWithoutScript=obj.innerHTML.replace(/<script[\s\S]+?<\/script>/igm,"?").split("?")
//obj.innerHTML=HTMLcodeWithoutScript;   
		//向目標元素寫入第一段腳本之前的html內容
		var HTMLstr = "";
		for(var p = 0; p < HTMLcodeWithoutScript.length; p++){
			if(p < HTMLcodeWithoutScript.length-1){
				HTMLstr = HTMLstr + HTMLcodeWithoutScript[p]+"?";
			}else{
				HTMLstr = HTMLstr + HTMLcodeWithoutScript[p];
			}
			
		}

		//obj.innerHTML=HTMLstr;
         for (var i = 0; i < cripts.length; i++) {
            script = cripts[i]
                if (cripts[i].src) {
                    script = document.createElement("script");
                    script.src = cripts[i].src;
                    script.defer = true;
                    script.type =  cripts[i].type;
                    var head = document.getElementsByTagName("head").item(0);
                    head.appendChild(script);
                }
                else if (script.substr(0, 4) == "<!--") {
                    eval(script.substr(4));
                }
                else {
                    eval(script);
                }
//向目標元素寫入每段腳本之后的html內容
//obj.innerHTML+=HTMLcodeWithoutScript[i+1]
        }
    }
}

//以下為傳送資料的函式//


/*		function sendRequest(form_id,par_str){
			createXHR();
			var url='<?=$_GET['url'];?>?ts='+new Date().getTime();
			var str=getFormValue(form_id)+par_str;
			xmlHttp.open('POST',url,true);
			xmlHttp.onreadystatechange=catchXML;
			xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xmlHttp.send(str);
		}
*/
		function catchXML(){
			if (xmlHttp.readyState==4){
				if (xmlHttp.status == 200) {
					sendend();
				}else{
					alert('執行錯誤,代碼:'+xmlHttp.status+'\('+xmlHttp.statusText+'\)');
				}
			}
		}

		function getFormValue(form_id){
			var str='',ft,fv;
			var form = document.getElementById(form_id);

			for (var i=0;i<form.elements.length;i++){
				fv=form.elements[i];
				ft=fv.type.toLowerCase();

				switch(ft){
					case 'select-one':
						str+=fv.name+'='+fv.value+'&';
					break;
					case 'radio':
						if (fv.checked){
							str+=fv.name+'='+fv.value+'&';
						}
					break;
					case 'checkbox':
						if (fv.checked){
							str+=fv.name+'='+fv.value+'&';
						}
					break;
					case 'text':
						str+=fv.name+'='+fv.value+'&';
					break;
					case 'password':
						str+=fv.name+'='+fv.value+'&';
					break;
					case 'hidden':
						str+=fv.name+'='+fv.value+'&';
					break;
					case 'textarea':
						str+=fv.name+'='+fv.value+'&';
					break;
					default:
					break;
				}
			}
			return str.split(/\s/).join('')
		}
		
//開始執行ajax

		var sd_id;
		var eval_str="";
		function readRequest(par_str,sdid,evalstr){
			createXHR();
			eval_str = evalstr;
			sd_id = sdid;
			var url='<?=$_GET['url'].(stristr($_GET['url'],"?")?"&":"?");?>timeStamp='+new Date().getTime();
			xmlHttp.open('POST',url,true);//POST or GET
			xmlHttp.onreadystatechange=callback;
			xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //for POST
			xmlHttp.send(par_str);
		}
		
		function sendRequest(form_id,par_str){
			createXHR();
			var url='<?=$_GET['url'];?>?ts='+new Date().getTime();
			var str=getFormValue(form_id)+par_str;
			xmlHttp.open('POST',url,true);
			xmlHttp.onreadystatechange=catchXML;
			xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xmlHttp.send(str);
		}

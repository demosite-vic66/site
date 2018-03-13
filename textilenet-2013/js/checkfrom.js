//前台
function CheckLogin(form){
	if (form.username.value==""){
		alert("Member ID is not null!");
		form.username.focus();
		form.username.select();
		return false;
	}
	if (form.password.value==""){
		alert("Password is not null !");
		form.password.focus();
		form.password.select();
		return false;
	}
	return true;
}

function  CheckSendpwd(form){
	if (form.username.value==""){
		alert("帳號不得為空 !");
		form.username.focus();
		form.username.select();
		return false;
	}
	if (form.email.value==""){
		alert("Email不得為空!");
		form.email.focus();
		form.email.select();
		return false;
	}
	return true;
}

function CheckRegister(form){
  if(form.name.value==''){
     alert("請輸入全名!");
     form.name.focus();
     form.name.select();
	 return false;
  }
  if(form.company.value==''){
     alert("請輸入公司名稱!");
     form.company.focus();
     form.company.select();
	 return false;
  }
  if(form.address1.value==''){
     alert("請輸入地址 !");
     form.address1.focus();
     form.address1.select();
	 return false;
  }
 if(form.email.value==''){
     alert("請輸入Email !");
     form.email.focus();
     form.email.select();
	 return false;
  }
  if(form.phone.value==''){
     alert("請輸入電話號碼!");
     form.phone.focus()
     form.phone.select();
	 return false;
  }
 if(form.username.value==''){
     alert("請輸入帳號 !");
     form.username.focus();
     form.username.select();
	 return false;
  }
  if(form.username.value.length < 4){
     alert("輸入的帳號須超過四個字元!");
     form.username.focus();
     form.username.select();
	 return false;
  }
  if(form.passwd1.value.length < 4){
     alert("輸入的密碼須超過四個字元!");
     form.passwd1.focus();
     form.passwd1.select();
	 return false;
  }
  if(form.passwd1.value==''){
     alert("請輸入密碼!");
     form.passwd1.focus();
     form.passwd1.select();
	 return false;
  }
  if(form.passwd2.value==''){
     alert("請輸入確認密碼 !");
     form.passwd2.focus();
     form.passwd2.select();
	 return false;
  }
  if(form.passwd2.value != form.passwd1.value){
     alert("確認密碼和原密碼不同 !");
     form.passwd2.focus();
     form.passwd2.select();
	 return false;
  }
     return true;     
}

function CheckChange(form){
  if(form.name.value==''){
     alert("請輸入姓名 !");
     form.name.focus();
     form.name.select();
	 return false;
  }
  if(form.company.value==''){
     alert("請輸入公司名稱!");
     form.company.focus();
     form.company.select();
	 return false;
  }
  if(form.address1.value==''){
     alert("請輸入地址!");
     form.address1.focus();
     form.address1.select();
	 return false;
  }
 if(form.email.value==''){
     alert("請輸入電子郵件!");
     form.email.focus();
     form.email.select();
	 return false;
  }
  if(form.phone.value==''){
     alert("請輸入電話號碼!");
     form.phone.focus()
     form.phone.select();
	 return false;
  }

if((form.oldpasswd.value != '') || (form.passwd1.value != '') || (form.passwd2.value != '')){
  if(form.passwd1.value.length < 4){
	  alert("電話號碼必須超過四個字元!");
	  form.passwd1.focus();
	  form.passwd1.select();
	  return false;
  }
  if(form.oldpasswd.value==''){
     alert("請輸入舊密碼 !");
     form.oldpasswd.focus();
     form.oldpasswd.select();
	 return false;
  }
  if(form.passwd1.value==''){
     alert("請輸入新密碼!");
     form.passwd1.focus();
     form.passwd1.select();
	 return false;
  }
  if(form.passwd2.value==''){
     alert("請輸入新的確認密碼!");
     form.passwd2.focus();
     form.passwd2.select();
	 return false;
  }
  if(form.passwd2.value != form.passwd1.value){
     alert("新的確認密碼和新的密碼不一致，請重新輸入!");
     form.passwd2.focus();
     form.passwd2.select();
	 return false;
  }
}
     return true;     
}


//後台
function CheckMLogin(form){
    if (form.username.value == "" ) {
        alert("管理員帳號不得為空！")
        form.username.select()
        form.username.focus()
        return false;
      }
    if (form.password.value == "" )  {
        alert("管理員密碼不得為空！")
        form.password.select()
        form.password.focus()
        return false;
      }
	  return true;
}

function CheckCatefrm(form){
    if (form.CatNo.value == "" ) {
        alert("產品分類代碼不得為空！")
        form.CatNo.select()
        form.CatNo.focus()
        return false;
      }
    if (form.CatName.value == "" )  {
        alert("產品分類名稱不得為空！")
        form.CatName.select()
        form.CatName.focus()
        return false;
      }
	  return true;
}

function CheckProdfrm(theForm){
	if (theForm.ProdID.value==""){
		alert("產品編號不得為空！");
		theForm.ProdID.focus();
		theForm.ProdID.select();
		return false;
	}
	if (theForm.ProdName.value==""){
		alert("產品名稱不得為空！");
		theForm.ProdName.focus();
		theForm.ProdName.select();
		return false;
	}
	return true;
}

function CheckMRegister(form){
				if(form.Name.value==''){
					alert("會員全名 不得為空！");
					form.Name.focus();
					form.Name.select();
					return false;
				}
				if(form.Company.value==''){
					alert("公司名稱 不得為空！");
					form.Company.focus();
					form.Company.select();
					return false;
				}
				if(form.Type2.checked == true && form.othertype.value==''){
					alert("請輸入其他公司型態！");
					form.othertype.focus();
					form.othertype.select();
					return false;
				}
				 if(form.Type2.checked == false && form.othertype.value !=''){
					alert("請勾選其他公司型態!");
					form.Type2.focus();
					form.Type2.select();
					return false;
				}
				if(form.Address1.value==''){
					alert("住址 不得為空！!");
					form.Address1.focus();
					form.Address1.select();
					return false;
				}
				
				if(form.Email.value==''){
					alert("電子郵件信箱 不得為空！");
					form.Email.focus();
					form.Email.select();
					return false;
				}
				if(form.Tel.value==''){
					alert("電話 不得為空！");
					form.Tel.focus();
					form.Tel.select();
					return false;
				}
				if(form.Newpassword.value != form.Newpassword2.value){
					alert("確認密碼和密碼不同,請重新輸入!");
					form.Newpassword2.focus();
					form.Newpassword2.select();
					return false;
				}
				return true;     
			}

function CheckMProfile(form){
				if(form.PCompany.value==''){
					alert("公司名稱 不得為空！");
					form.PCompany.focus();
					form.PCompany.select();
					return false;
				}
				if(form.PAddress.value==''){
					alert("住址 不得為空！!");
					form.PAddress.focus();
					form.PAddress.select();
					return false;
				}
				if(form.PTel.value==''){
					alert("電話 不得為空！");
					form.PTel.focus();
					form.PTel.select();
					return false;
				}
				if(form.PEmail.value==''){
					alert("電子郵件信箱 不得為空！");
					form.PEmail.focus();
					form.PEmail.select();
					return false;
				}
				if(form.PContactPerson.value==''){
					alert("聯絡人 不得為空！");
					form.PContactPerson.focus();
					form.PContactPerson.select();
					return false;
				}
				if(form.PUrl.value==''){
					alert("網址 不得為空！");
					form.PUrl.focus();
					form.PUrl.select();
					return false;
				}
				if(form.PProfile.value==''){
					alert("公司簡介 不得為空！");
					form.PProfile.focus();
					form.PProfile.select();
					return false;
				}
				return true;     
			}
function CheckMEvent(form){
  if(form.Subject.value==''){
     alert("標題 不得為空！");
     form.Subject.focus();
     form.Subject.select();
	 return false;
  }
   
  if(form.Content.value==''){
     alert("內容 不得為空！");
     form.Content.focus();
     form.Content.select();
	 return false;
  }
     return true;
}


function CheckMEpr(form){
    if (form.Subject.value == "" ) {
        alert("電子報主旨 不得為空！")
        form.Subject.select()
        form.Subject.focus()
        return false;
      }
    if (form.Content.value == "" )  {
        alert("訊息內容 不得為空！")
        form.Content.select()
        form.Content.focus()
        return false;
      }
	  return true;
}

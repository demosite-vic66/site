//�e�x
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
		alert("�b�����o���� !");
		form.username.focus();
		form.username.select();
		return false;
	}
	if (form.email.value==""){
		alert("Email���o����!");
		form.email.focus();
		form.email.select();
		return false;
	}
	return true;
}

function CheckRegister(form){
  if(form.name.value==''){
     alert("�п�J���W!");
     form.name.focus();
     form.name.select();
	 return false;
  }
  if(form.company.value==''){
     alert("�п�J���q�W��!");
     form.company.focus();
     form.company.select();
	 return false;
  }
  if(form.address1.value==''){
     alert("�п�J�a�} !");
     form.address1.focus();
     form.address1.select();
	 return false;
  }
 if(form.email.value==''){
     alert("�п�JEmail !");
     form.email.focus();
     form.email.select();
	 return false;
  }
  if(form.phone.value==''){
     alert("�п�J�q�ܸ��X!");
     form.phone.focus()
     form.phone.select();
	 return false;
  }
 if(form.username.value==''){
     alert("�п�J�b�� !");
     form.username.focus();
     form.username.select();
	 return false;
  }
  if(form.username.value.length < 4){
     alert("��J���b�����W�L�|�Ӧr��!");
     form.username.focus();
     form.username.select();
	 return false;
  }
  if(form.passwd1.value.length < 4){
     alert("��J���K�X���W�L�|�Ӧr��!");
     form.passwd1.focus();
     form.passwd1.select();
	 return false;
  }
  if(form.passwd1.value==''){
     alert("�п�J�K�X!");
     form.passwd1.focus();
     form.passwd1.select();
	 return false;
  }
  if(form.passwd2.value==''){
     alert("�п�J�T�{�K�X !");
     form.passwd2.focus();
     form.passwd2.select();
	 return false;
  }
  if(form.passwd2.value != form.passwd1.value){
     alert("�T�{�K�X�M��K�X���P !");
     form.passwd2.focus();
     form.passwd2.select();
	 return false;
  }
     return true;     
}

function CheckChange(form){
  if(form.name.value==''){
     alert("�п�J�m�W !");
     form.name.focus();
     form.name.select();
	 return false;
  }
  if(form.company.value==''){
     alert("�п�J���q�W��!");
     form.company.focus();
     form.company.select();
	 return false;
  }
  if(form.address1.value==''){
     alert("�п�J�a�}!");
     form.address1.focus();
     form.address1.select();
	 return false;
  }
 if(form.email.value==''){
     alert("�п�J�q�l�l��!");
     form.email.focus();
     form.email.select();
	 return false;
  }
  if(form.phone.value==''){
     alert("�п�J�q�ܸ��X!");
     form.phone.focus()
     form.phone.select();
	 return false;
  }

if((form.oldpasswd.value != '') || (form.passwd1.value != '') || (form.passwd2.value != '')){
  if(form.passwd1.value.length < 4){
	  alert("�q�ܸ��X�����W�L�|�Ӧr��!");
	  form.passwd1.focus();
	  form.passwd1.select();
	  return false;
  }
  if(form.oldpasswd.value==''){
     alert("�п�J�±K�X !");
     form.oldpasswd.focus();
     form.oldpasswd.select();
	 return false;
  }
  if(form.passwd1.value==''){
     alert("�п�J�s�K�X!");
     form.passwd1.focus();
     form.passwd1.select();
	 return false;
  }
  if(form.passwd2.value==''){
     alert("�п�J�s���T�{�K�X!");
     form.passwd2.focus();
     form.passwd2.select();
	 return false;
  }
  if(form.passwd2.value != form.passwd1.value){
     alert("�s���T�{�K�X�M�s���K�X���@�P�A�Э��s��J!");
     form.passwd2.focus();
     form.passwd2.select();
	 return false;
  }
}
     return true;     
}


//��x
function CheckMLogin(form){
    if (form.username.value == "" ) {
        alert("�޲z���b�����o���šI")
        form.username.select()
        form.username.focus()
        return false;
      }
    if (form.password.value == "" )  {
        alert("�޲z���K�X���o���šI")
        form.password.select()
        form.password.focus()
        return false;
      }
	  return true;
}

function CheckCatefrm(form){
    if (form.CatNo.value == "" ) {
        alert("���~�����N�X���o���šI")
        form.CatNo.select()
        form.CatNo.focus()
        return false;
      }
    if (form.CatName.value == "" )  {
        alert("���~�����W�٤��o���šI")
        form.CatName.select()
        form.CatName.focus()
        return false;
      }
	  return true;
}

function CheckProdfrm(theForm){
	if (theForm.ProdID.value==""){
		alert("���~�s�����o���šI");
		theForm.ProdID.focus();
		theForm.ProdID.select();
		return false;
	}
	if (theForm.ProdName.value==""){
		alert("���~�W�٤��o���šI");
		theForm.ProdName.focus();
		theForm.ProdName.select();
		return false;
	}
	return true;
}

function CheckMRegister(form){
				if(form.Name.value==''){
					alert("�|�����W ���o���šI");
					form.Name.focus();
					form.Name.select();
					return false;
				}
				if(form.Company.value==''){
					alert("���q�W�� ���o���šI");
					form.Company.focus();
					form.Company.select();
					return false;
				}
				if(form.Type2.checked == true && form.othertype.value==''){
					alert("�п�J��L���q���A�I");
					form.othertype.focus();
					form.othertype.select();
					return false;
				}
				 if(form.Type2.checked == false && form.othertype.value !=''){
					alert("�ФĿ��L���q���A!");
					form.Type2.focus();
					form.Type2.select();
					return false;
				}
				if(form.Address1.value==''){
					alert("��} ���o���šI!");
					form.Address1.focus();
					form.Address1.select();
					return false;
				}
				
				if(form.Email.value==''){
					alert("�q�l�l��H�c ���o���šI");
					form.Email.focus();
					form.Email.select();
					return false;
				}
				if(form.Tel.value==''){
					alert("�q�� ���o���šI");
					form.Tel.focus();
					form.Tel.select();
					return false;
				}
				if(form.Newpassword.value != form.Newpassword2.value){
					alert("�T�{�K�X�M�K�X���P,�Э��s��J!");
					form.Newpassword2.focus();
					form.Newpassword2.select();
					return false;
				}
				return true;     
			}

function CheckMProfile(form){
				if(form.PCompany.value==''){
					alert("���q�W�� ���o���šI");
					form.PCompany.focus();
					form.PCompany.select();
					return false;
				}
				if(form.PAddress.value==''){
					alert("��} ���o���šI!");
					form.PAddress.focus();
					form.PAddress.select();
					return false;
				}
				if(form.PTel.value==''){
					alert("�q�� ���o���šI");
					form.PTel.focus();
					form.PTel.select();
					return false;
				}
				if(form.PEmail.value==''){
					alert("�q�l�l��H�c ���o���šI");
					form.PEmail.focus();
					form.PEmail.select();
					return false;
				}
				if(form.PContactPerson.value==''){
					alert("�p���H ���o���šI");
					form.PContactPerson.focus();
					form.PContactPerson.select();
					return false;
				}
				if(form.PUrl.value==''){
					alert("���} ���o���šI");
					form.PUrl.focus();
					form.PUrl.select();
					return false;
				}
				if(form.PProfile.value==''){
					alert("���q²�� ���o���šI");
					form.PProfile.focus();
					form.PProfile.select();
					return false;
				}
				return true;     
			}
function CheckMEvent(form){
  if(form.Subject.value==''){
     alert("���D ���o���šI");
     form.Subject.focus();
     form.Subject.select();
	 return false;
  }
   
  if(form.Content.value==''){
     alert("���e ���o���šI");
     form.Content.focus();
     form.Content.select();
	 return false;
  }
     return true;
}


function CheckMEpr(form){
    if (form.Subject.value == "" ) {
        alert("�q�l���D�� ���o���šI")
        form.Subject.select()
        form.Subject.focus()
        return false;
      }
    if (form.Content.value == "" )  {
        alert("�T�����e ���o���šI")
        form.Content.select()
        form.Content.focus()
        return false;
      }
	  return true;
}

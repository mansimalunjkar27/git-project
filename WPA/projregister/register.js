function registration()
{
    var name=document.getElementById("name").value;
    var email=document.getElementById("Email1").value;
    var mobileno=document.getElementById("mobilenumber").value;
    var pwd= document.getElementById("pass1").value;			
    var cpwd= document.getElementById("pass2").value;

    
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{3})+\.)+([a-zA-Z0-9]{3,3})+$/;
    var length=name.length;

            if(name=='')
		{
            alert('Please enter your name');
		}
		else if(!letters.test(name))
		{
            document.getElementById("namespan").innerHTML="** Name field required only alphabet characters";

			
		}
            else if(length==0 || length<5)
            {
                  document.getElementById("namespan").innerHTML="** Name field required more than 5 characters";
                  
            }
            else if(email=='')
		{
                  document.getElementById("namespan");
            document.getElementById("emailspan").innerHTML="** Please enter your user email id";   
		}
		else if (!filter.test(email))
		{
            document.getElementById("emailspan").innerHTML="** Invalid email";   

		}
            else if(mobileno=='')
		{
            document.getElementById("mobile").innerHTML="** Please enter your user Mobile No";   
		}
		else if (mobileno==0 || mobileno.length<10 || mobileno.length>10)
		{
            document.getElementById("mobile").innerHTML="** Invalid Mobile Number";   

		}
            else if(pwd=='')
		{
            document.getElementById("pass1span").innerHTML="** Please enter Password";  
		}
		else if(cpwd=='')
		{
            document.getElementById("pass2span").innerHTML="** Enter Confirm Password"; 
		}
		else if(!pwd_expression.test(pwd))
		{
            document.getElementById("pass1span").innerHTML="** Upper case, Lower case, Special character and<br>Numeric letter are required in Password filed";
		
		}
		else if(pwd != cpwd)
		{
            document.getElementById("pass2span").innerHTML="** Password not Matched";
		
		}
		else if(document.getElementById("pass2").value.length < 6)
		{
            document.getElementById("pass1span").innerHTML="** Password minimum length is 6";
	
		}
		else if(document.getElementById("pass2").value.length > 12)
		{
            document.getElementById("pass1span").innerHTML="** Password max length is 12";
		}
            else
            {				                            
                  alert('Thank You for register Welcome to Coupon Dunia!!');
                  window.location=" ";
                  
            }
}


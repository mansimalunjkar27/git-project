function validform()
{
    var fname=document.getElementById("name").value;
    var mob=document.getElementById("mobile").value;
    var uname=document.getElementById("uname").value;
    
    const data = {
        name:fname,
        username:uname,
        phone:mob
    };
    // console.log(data.name,data.username,data.phone);
    console.log( document.getElementById("demo").innerHTML=data.name + data.username + data.phone);
}

function DownloadJSON()
{
    var fname=document.getElementById("name").value;
    var mob=document.getElementById("mobile").value;
    var uname=document.getElementById("uname").value;
    
    var data=new Array();
    data.push(["fname","mob","uname"]);
    data.push([fname,mob,uname]);
    var info=JSON.stringify(data);
    info=[info];
    var book=new Blob(info,{type:"text/plain;charset=utf-8"});
    var isIE=false||!!document.documentMode;
    if(isIE){
        window.navigator.msSaveBlob(book,'jason.txt');
    }
    else
    {
        var url=window.URL|| window.webkitURL;
        link=url.createObjectURL(book);
        var a=$("<a />");
        a.attr("download","register.txt");
        a.attr("href",link);
        $("body").append(a);
        a[0].click();
        $("body").remove(a);
    }
}

function AjaxPostCalls(){
    const data=new XMLHttpRequest();
    data.open("GET","register.txt",true);
    data.send();
    data.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200)
        {
            document.getElementById('demo').innerHTML=this.responseText;
        }
    };
}

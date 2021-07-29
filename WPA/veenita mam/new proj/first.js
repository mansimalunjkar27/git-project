function addition()
{
    let a=document.getElementById("first").value;
    let b=document.getElementById("second").value;
    let c=parseInt(a)+parseInt(b);
    document.getElementById("result").value=c;
    console.log(c)
}
function subtract()
{
    let a=document.getElementById("first").value;
    let b=document.getElementById("second").value;
    let c=parseInt(a)-parseInt(b);
    document.getElementById("result").value=c;
    console.log(c)
}
function mul()
{
    let a=document.getElementById("first").value;
    let b=document.getElementById("second").value;
    let c=parseInt(a)*parseInt(b);
    document.getElementById("result").value=c;
    console.log(c)
}
function div()
{
    let a=document.getElementById("first").value;
    let b=document.getElementById("second").value;
    let c=parseInt(a)/parseInt(b);
    document.getElementById("result").value=c;
    console.log(c)
}
function clr()
{
    document.getElementById("first").value="";
    document.getElementById("second").value="";
    document.getElementById("result").value="";
}
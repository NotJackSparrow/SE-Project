function validate()
{
    var username=document.getElementById("usrname").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&&password=="user")
    {
        alert("Login Succesfull");
        return false;
    }
    else
    {
        alert("Login Failed");
    }
}
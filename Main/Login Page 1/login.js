function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin" && password=="user")
    {
        alert("Login Succesfull");
        window.location.href= "stats.html";
        return false;
    }
    else
    {
        alert("Login Failed");
    }
}
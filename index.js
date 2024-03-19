function myfunction(){
    var un=document . forms["myform"]["uname"].value;
    var pw=document. forms[ "myform"]["pass"].value;
    if(un== "arushi@email.com" && pw=="123456")
    {
       alert("succesfully login !! ");
       window.location.href="dashborad.html";
    }
    else{
       alert("wrong entry invaild");
     }
    }
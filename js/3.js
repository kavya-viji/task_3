var age = prompt("Enter your age");
var sex = prompt("Enter your sex");
var maritalStatus = prompt("Say yes or no");
if(sex=="female")
{
alert ("Works in urban area only");
}
else if (sex=="male" && age>20 && age<40)
{
alert ("Works anywhere");
}
else if (sex=="male" && age>40 && age<60)
{
alert ("Works in urban area only");
}
else
{
alert ("ERROR");
}
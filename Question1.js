//You are provided with a year. Your task is to evalute whether that year is Leap year or not and print accordingly.

var year=window.prompt("Enter the year:");
if(year%4===0 && year%100!==0 || year%400===0)
{
    console.log("It is a Leap Year");   
}
else
{
    console.log("It is not a leap Year");
}
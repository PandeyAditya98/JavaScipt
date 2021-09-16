var arr=[1,2,3,4,5,6];
var odd=0;
var even=0;
for(i=0;i<arr.length;i++)
{
    if(arr[i]%2===0)
    {
        even+=arr[i];
    }
    else
    {
        odd+=arr[i];
    }
}
console.log("Sum of Even is :" + even);
console.log("Sum of Odd is :" + odd);
function prime(n){
    for(let i=2;i<n;i++)
    {
        if(n%1==0)
        {
           return 0 
        }
    }
    return true
}
for(i=2;i<=100;i++)
{
    if(prime(i))
    {
        console.log(i);
    }
}
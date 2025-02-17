function fabinoseries(n){
    let a=0
    let b=1
    for(i=1;i<=n;i++)
    {
     console.log(a)
     let c=a+b                               
      a=b 
      b=c
       
    }
    
  } 
  
  
  function fabinoseries(n){
    let a=0
    let b=1
   if(n==1)
   {
     console.log(a)
   } 
   else 
   {
     console.log(a)
     console.log(b)
     for(let i=2;i<=n;i++)
     {
       let c=a+b 
       a=b 
       b=c 
       console.log(c)
     }
   }
  }
  for(i=0;i<=100;i++){
    fabinoseries(i)
  }
  
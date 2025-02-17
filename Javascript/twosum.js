n =[2,4,9,7,8]
t =6
 
var twoSum = function(nums, target) {
    for(i=0;i<nums.length;i++)
    {
        for(j=0;j<nums.length;j++)
        {
            if(i==j){
                continue ;
            }
            if(nums[i]+nums[j]==target){
                return [i,j]
            }
        }
    }
 
}
console.log(twoSum(n,t));
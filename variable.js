//variable prac

/*
var
used for old browsers

const 
not change value
not change data type


let
if you can't use const


1480. Running Sum of 1d Array
Easy
Topics
premium lock icon
Companies
Hint
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6



var runningSum = function(nums) {
    let newArray=[];
    for(let index=0;index<nums.length;index++){
        while(){
            nums[index]
        }
    }
};

runningSum([3,1,2,10,1]);



*/



var runningSum = function(nums) {
    let sum=0;
    let array=[];

    nums.map((value)=>{
        sum+=value;
         array.push(sum);
    })
    return array;
};




 runningSum([1,2,3,4]);
 runningSum([1,1,1,1,1]);
 runningSum([3,1,2,10,1]);
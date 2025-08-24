

/*async function createHelloWorld(args) {
    return await HelloWorld();
}

function HelloWorld(){
    console.log("Hello world");
}

createHelloWorld({}); */


/*

function compete(data){
    let count=[];
    

     for(i=0; i<data.length; i++){
        if (data[i]==="a" || data[i]==="e" || data[i]==="i"|| data[i]==="o" || data[i]==="u" ){
           count.push(data[i]);
        }

    }
    return console.log(`The vowels present are ${count} and count length is ${count.length}`);

}


compete("awuor");
compete("regan");

*/

//Write a function removeDuplicates that takes an array of integers and returns a new array with duplicates removed, keeping the original order.

//let  removeDuplicates=(data)=>[...new Set(data)];

/*
let count=[];

function removeDuplicates(value){
for (let index = 0; index < value.length; index++) {
   dupliicateCheck(value[index]);  
}
console.log(count);
}

let dupliicateCheck=(data)=>{

   if(count.length==0){
           count.push(data);
            }

            else{

     let exists=false;

    for (let index = 0; index < count.length; index++) {
                    
             if (data===count[index]) {
                exists=true;
                break;
            }
        }

          if (!exists) {
                count.push(data);
            }

        }

}

removeDuplicates([1, 2, 3, 2, 4, 1, 5]);


//Write a function twoSum that takes an array of integers nums and a target integer target.
The function should return an array of the two indices whose numbers add up to target.
Assume there is exactly one solution, and you may not use the same element twice.
*/

function twoSum(nums, target){
//add the first value to all the remaining numbers in the array
//and if none add up to target move to the next

 for (let index=0; index<nums.length; index++){
        let sum=nums[index]+ nums[displayValues(nums,index++)];
        
        if(sum===target){
         return nums[index]+ nums[displayValues(index)];
        }
      
 }
 

}

let displayValues=(nums,value)=>{
     for (let index=value; index<nums.length; index++){
        return index;
}
}

twoSum([2, 7, 11, 15],9);

twoSum([8, 1, 12, 5],17);
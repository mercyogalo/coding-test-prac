

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
let count=[];
let  removeDuplicates=(data)=>[...new Set(data)];
/*
let removeDuplicates=(data)=>{
     for(let i=0;i<data.length; i++){
     duplicateCheck(data[i]);
    }
    console.log(count);
}
let duplicateCheck=(value)=>{
    for(let i=0;i<count.length;i++){
           if(value!==count[i]) {
            console.log(value);
           return  count.push(value);
           }
        }
}

*/





console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));
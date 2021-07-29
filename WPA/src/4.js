let list=["delhi","calcutta","chennai","mumbai"];

//size of the array
let size=list.length;
console.log(size);

//Access the element from Array
let mycity=list[1];
console.log(mycity);

//Iterate all the element of the list;
for(let i=0;i<list.length;i++)
{
    let localcity=list[i];
    console.log(localcity);
}

console.log("---------------------");
//Iterate all Approach 2 :: for each (advance for loop)
for(let item of list)
{
    console.log(item);
}


//Iterate all approach 3:: using lamda known as arrow function /fat arrow
console.log("----------");
list.forEach((item)=>console.log(item));
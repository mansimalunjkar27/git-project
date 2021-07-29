//let list=[]
//let list=["delhi","calcutta","chennai","mumbai"]
//let list=[{}]
let list=[{id:1,name:"mansi",email:"mansi@gmail.com"},
{id:2,name:"madhuri",email:"madhuri@gmail.com"},
{id:3,name:"sunny",email:"sunny@gmail.com"},
{id:4,name:"mahesh",email:"mahesh@gmail.com"}];

//accessing specific object name
console.log(list[1].name);

//adding new element in the list
list.push({id:4,name:"nisha",email:"nisha@gmail.com"});

list.unshift({id:5,name:"kirti",email:"kirti@gmail.com"});
console.log(list);

list.pop();
console.log(list);

list.shift();
console.log(list);
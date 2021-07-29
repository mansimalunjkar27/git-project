let list=["delhi","calcutta","chennai","mumbai"];
console.log(list.length,list);

//add new city :: list.push()
list.push("pune");
console.log(list.length,list);

//Add new city :: in the beginning :: unshift
list.unshift("lonavala");
console.log(list.length,list);

//smart push:: multiple in one statement
list.push("nashik","kochi");

//smart unshift::in th beginning 
list.unshift("kashmir","jaipur");
console.log(list.length,list);

//As an Assignment :: add  an element in between ? splice method
let std1={id:1,name:"mansi",email:"mansi@gmail.com"};
console.log(std1);
//duplicate reference variable :: this line is not creating new object.
let std2=std1;

//clone :: very important from react
//let std3={is:1,name:"mansi",email:"mansi@gmail.com"};
//... extend behaviour of object
let std3={...std1};
console.log(std3);

let std4={...std1,id:2};
console.log(std4);
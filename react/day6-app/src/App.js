import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

// let [name]=useState("cdac");//string variable
// let [counter]=useState(100);//number variable
// let [active]=useState("true");//boolean
// let [list] = useState(["delhi"]); //array of list
// let [std1] = useState({name:"mansi"});//object literals

let [comment,setComment]=useState("");
let [comment2,setComment2]=useState([]);
let Post=()=>
// {
//   let add = [comment,...comment2];
 
//   alert("you have posted this app :: "+comment);
//   setComment2(add);
//   console.log(add);
//   setComment("");
};
let handleInputChange=(e)=>{
  
  console.log(e.target.value);
  let finalcomment=e.target.value;
  setComment(finalcomment);
}
  return (
    // <div>
    //       <h1 className="bg-primary p-3">learning to declare stateful variable</h1>
    //       <h1>String :: {name}</h1>
    // </div>
    <div>
    <input type="text" placeholder="post here" value={comment} onChange={handleInputChange}></input>
    <button type="button" onClick={Post}>Post</button>
    <div>{comment2.map((item)=>{return <h1>{item}</h1>;})}</div>
    </div>
  );
}

export default App;

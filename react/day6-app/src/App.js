import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

let [name]=useState("cdac");//string variable
let [counter]=useState(100);//number variable
let [active]=useState("true");//boolean
let [list] = useState(["delhi"]); //array of list
let [std1] = useState({name:"mansi"});//object literals

  return (
    <div>
          <h1 className="bg-primary p-3">learning to declare stateful variable</h1>
          <h1>String :: {name}</h1>
    </div>

  );
}

export default App;

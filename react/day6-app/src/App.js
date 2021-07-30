import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() 
{
 let[name,setName] = useState("cdac");
 let[counter,setCounter] = useState(100);
 let[active,setActive] = useState(true);
 let[list,setList] = useState(["delhi","pune","mumbai"]);
 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
 
  return (
    <div>
      <h1>Stateful Continue</h1>
      <h1>Counter :: {counter}</h1>
      <h1>List :: {list}</h1>
    </div>
  );
}

export default App;

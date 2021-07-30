import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() 
{
 let[name] = useState("cdac");
 let[counter] = useState(100);
 let[active] = useState(false);
 let[list] = useState(["delhi","pune","mumbai"]);
 let[std1] = useState({name:"mansi"});

  return (
    <div>
      <h1>learning to declare stateful variable</h1>
      <h1>String :: {name}</h1>
      <h1>Number :: {counter}</h1>
      <h1>Boolean :: {active + ""}</h1>
      <h1>List :: {list}</h1>
      <h1>Object :: {JSON.stringify(std1)}</h1>
      <h1>Objec :: {std1.name} </h1>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {useState} 
function App() {
  const[abc,setList] = useState (["Welcome to page"]);
  const myfunc=()=>{
    const list=["Hello"];

    setList(list);
    console.log(abc);
  }
  return (
    <div class="bgdark">
      <p>Hello</p>
      <input type="button" value="submit" onclick={myfunc}></input>
    
    
    </div>
  );
}


import logo from './logo.svg';
import './App.css';
function App() 
{
  //stateless member
  let counter=100;

  let increment=()=>{
    counter += 1;
  console.log(counter);
  };
  

  return (
    <div>
      <h1>Stateless Does not Update UI</h1>
      {counter}
      <input type="button" value="Increment" onClick={increment}></input>
    </div>
  );
}

export default App;

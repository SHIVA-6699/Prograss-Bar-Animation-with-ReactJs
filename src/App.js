import { useEffect, useState } from 'react';
import './App.css';
import Prograssbar from './components/Prograssbar';
function App() {
  const [value,setValue]=useState(1)
  useEffect(()=>{
    setInterval(()=>{

      setValue((val)=>val+1)
    },100)
  },[])
  return (
    <div className="App">
          <span>Prograssbar</span>
          <Prograssbar value={value}
         
          />
    </div>
  );
}

export default App;

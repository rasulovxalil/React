import './App.css';
import React, {useState} from 'react';
import Data from './Data.json';


function App() {
  const [searchterm,setSearchterm]=useState("");
  return (
    <div className="container">
        <div className='inputContainer'>
          <input
          className='search'
           type="text" 
          placeholder='karakter giriniz'
          onChange={(e)=>setSearchterm(e.target.value)}
    />
    </div>
        <div className='dataContainer'>
        {
          Data.filter((val)=>{
            if(searchterm==""){
              return val;
            }
            else if(val.title.toLocaleLowerCase().includes(searchterm.toLocaleLowerCase())){
              return val;
            }
          }).map((val)=>{
            return(
              <div className='data' key={val.id}>
              <img src={val.image}/>
              <h3>{val.title}</h3>
              <p>{val.Description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

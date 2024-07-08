import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
 
const [QUOTES , setQUOTES] = React.useState('') ; 





 React.useEffect(()=>{

  give_me_more() ; 

 },[])
 

function give_me_more() {



  fetch("https://api.adviceslip.com/advice").then((res)=>{
    res.json().then((rep)=>{
    // const {advice} =  rep.slip.advice ;  
    
    // console.log(advice);
    console.log(rep.slip.advice) ; 
    
    setQUOTES(rep.slip.advice) ; 
    })
    })
    

}


  return (
  
    <>
    
   <center> 
<div className="container">
    <h1>{QUOTES}</h1>  

    <button onClick={give_me_more} >NEXT</button>
    </div>
    </center>
    </>


  
  );
}

export default App;

import React from 'react'
import FormSignup from './components/FormSignup'
import Result from './components/Result'
import bioData from './components/validateInfo'

const allCatData = [...new Set(bioData.map((currElm)=>currElm.catagory)),"ALL"]
const App = () => {
 const[item,setItem] = React.useState(bioData);
 const[input,setInput] = React.useState(allCatData);
 const filterItem=(catagory)=>{
   if(catagory === "ALL"){
     setItem(bioData)
     return;
   }
   const updateItem = bioData.filter((Elm,index)=>{

    return Elm.catagory === catagory;
   })
   setItem(updateItem);
 }
  return (
    <div>
    
    <h1 className='text-center'>Photo Gallary</h1>
     <hr />
   
     <FormSignup  input = {input} filterItem={filterItem}/>  
     <Result className="mt-5" item = {item} /> 
    </div>
  )
}

export default App

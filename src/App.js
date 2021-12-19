import React from 'react'
import Home from './components/Home';
import {Routes,Route,Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Information from './components/Information';
import Contact from './components/Contact';
import './components/styles/temp.css';
import menuData from './components/Menu'

const allData = [...new Set(menuData.map((Elm)=>Elm.catagory)),"All"]
const App = () => {
  const[input,setInput] = React.useState(allData);
  const[catItem,setCatItem] = React.useState(menuData);
  const filterItem=((catagory)=>{
    if(catagory==="All"){
      setCatItem(menuData);
      return;
    }
    const updateItem = menuData.filter((currVal)=>{
      return currVal.catagory === catagory;
    })
    setCatItem(updateItem);

  })
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path = "/*" element={<Navigate to ="/home"/>}/>
    <Route path = "/home" element={<Home/>}/>
    <Route path = "/about" element={<About/>}/>
    <Route path = "/services" element={<Services input={input} catItem={catItem} filterItem={filterItem}/>}/>
    <Route path = "/information" element={<Information/>}/>
    <Route path = "/contact" element={<Contact/>}/>
    </Routes>
  
    </>
  )
}

export default App

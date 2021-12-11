import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import Result from './components/Result';



function App() {
    return (
        <>
        <Navbar/>
        
        <Routes>
        <Route path="/" element={<Navigate to ="/home"/>}/>
        <Route path="/home/*" element={<Home/>}/>
        <Route path="world" element={<p>This is the sub home</p>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/result" element={<Result/>}/>
        
        </Routes>
        
        
        
            
        </>
    )
}

export default App

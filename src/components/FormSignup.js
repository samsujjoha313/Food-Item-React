import React from 'react'


const FormSignup = ({input,filterItem}) => {
  return (
    <>
  <div className="container">
  <div className="content d-flex justify-content-evenly">
 {
  input.map((catagoryItem)=>{
    return <button className='btn btn-primary ' onClick={()=>filterItem(catagoryItem)}>{catagoryItem}</button>
  })
}

  
  
  
  
  </div>
  </div>
      
    </>
  )
}

export default FormSignup

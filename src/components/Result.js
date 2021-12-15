import React from 'react';

function Result({item}) {
  return (
    <>
    <div className="container">
    <div className="row">
    {
      item.map((Elm)=>{
        return(
    <div className="col col-sm-11 col-md-4 col-lg-4">
   <div className="card">
   <div className="card-image"><img src={Elm.image} alt="blank" style={{height:200,width:350}} /></div>
   <div className="card-body">
   <h2>{Elm.title}</h2>
   <h3>{Elm.catagory}</h3>
   
   <p>{Elm.description}</p>
   </div>
   
   </div>    
    </div>  
        )
      })
    }
    </div>
    </div>
    
    </>
  );
}

export default Result;

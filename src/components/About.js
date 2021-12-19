import React from 'react';
import bioData from './Result';
const About = () => {
    const[item,setItem] = React.useState(bioData);
    return (
        <>
        <div className="about-page bg-secondary">
        <div className="container content bg-info">
        
        <h1 className="txt text-center">About Page</h1>
        <hr />
        <div className="hero d-flex">
        <div className="hero1 mt-5">
        <img className="img ml-5" src="images/mobile.jpg" alt="blank" style={{height:300,width:300}} />
        </div>
        <div className="hero2 mt-5">
        <h1>Mobile Phone</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Labore molestias, reprehenderit assumenda doloribus cum et incidunt ratione optio architecto minus.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur similique mollitia quibusdam est dolorem voluptas sapiente, 
        amet natus explicabo eaque voluptate, corrupti quaerat? Minima aliquam, accusamus aperiam vero eligendi magni?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, soluta nostrum modi animi odio ab, laboriosam sed quibusdam exercitationem, possimus adipisci. 
        Tenetur officia in ratione dolorem exercitationem consectetur impedit quisquam.</p>
        </div>
        </div>
        <p></p>
        
        <div className="daffodil mt-5  ">
       <div className="row">
       <div className="col-md-4">
       <div className="cards bg-secondary text-white">
       <h3 className="text-center mt-3"><i className=" mt-2 fas fa-3x fa-mobile"></i></h3>
       <h2 className="text-center">New Version</h2>
       <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur voluptatum, sed enim qui error necessitatibus repellendus rerum praesentium accusamus.</p>
       
       </div>
       </div>
       <div className="col-md-4">
      <div className="cards bg-secondary text-white">
      <h3 className="text-center mt-3"><i className=" mt-2 fas fa-3x fa-mobile"></i></h3>
      <h2 className="text-center">Updated Version</h2>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur voluptatum, sed enim qui error necessitatibus repellendus rerum praesentium accusamus.</p>
      
      </div>
       
       </div>
       <div className="col-md-4">
      <div className="cards bg-secondary text-white">
      <h3 className="text-center mt-3"><i className=" mt-2 fas fa-3x fa-mobile"></i></h3>
      <h2 className="text-center">Android Version</h2>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur voluptatum, sed enim qui error necessitatibus repellendus rerum praesentium accusamus.</p>
      
      </div>
       </div>
       </div>
        </div>
        
        <div className="market-sale mt-5">

        <div className="row">
       {
           item.map((Elm)=>{
               return(
                <div className="col-md-4">
                <div className="card">
                <div className="card-img">
                <img src={Elm.image} alt="blank" style={{height:300,width:350}} />
                </div>
                <div className="card-body">
                <div className="title text-center"><b>{Elm.title}</b></div>
                <div className="desc">{Elm.desc}</div>
                </div>
                </div>
                    
               </div>           
               )
           })
       }
      
        </div>
        </div>




        </div>
        </div>
            
        </>
    )
}

export default About

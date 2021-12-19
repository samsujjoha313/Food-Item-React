import React from 'react'

const Services = ({input,catItem,filterItem}) => {
    return (
        <>
        <div className="service-area bg-secondary">
        <div className="container bg-info">
        <h3 className='text-center '>Service Comparison</h3>
        <div className="service-ratio bg-success">
        <ul>
        <li className='iphone'>Iphone</li>
        <li className='samsung'>Samsung</li>
        <li className='oppo'>Oppo</li>
        <li className='vivo'>Vivo</li>
        <li className='xiomi'>Xiomi</li>
        </ul>
        
        
        </div>


        <div className="btn1 mt-5 d-flex justify-content-between ">

        {
            input.map((catagory)=>{
            return<button className='btn btn-primary btn-outline-warning text-white m-auto'
            onClick={()=>filterItem(catagory)}>{catagory}</button>
        })
    }
        </div>
        
        <div className="sub-div mt-3">
        <div className="row p-5">

        {
            catItem.map((catElm)=>{
                const{title,desc,image,catagory} = catElm;
                return(
                    <div className="col col-md-4 p-1">
                    <div className="card">
                    <div className="img">
                    <img src={image} alt="blank" style={{height:250,width:300}} />
                    </div>
                    <div className="body">
                    <div className="title text-center">{title}</div>
                    <div className="catagory text-center">{catagory}</div>
                    <div className="desc text-center">{desc}</div>
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

export default Services

import React from 'react'

const Home = () => {
    return (
        <>
        <div className="content bg-secondary">
        <div className="container bg-info">
        <h1 className='text-center text-primary'><b>Welcome To My Webpage</b></h1>
        <div className='div d-flex'>
        <div className="div1 mt-5">
        <h2 className='demo1'>Hi! There!!!</h2>
        <h3 className='demo2'>I am <span>Samsujjoha</span></h3>
        <h3 className=' head mt-5'>Front-End Devoloper</h3>
        <p>A career objective is an optional component of resumes that briefly describes the skills, experience and abilities candidates offer. Typically, an applicant adds the career objective at the top of the resume, just below their name and contact information. A general guideline is to limit this to two or three sentences, or approximately two lines of text. 

        Because of the volume of resumes a hiring manager typically receives, they may only spend a few seconds on each. They scan from the top of the page down, so one of the first sections they’ll notice is the career objective. Think of this as your brief, 30-second elevator pitch to a hiring manager.!</p>
       <button className='bg-primary text-white mt-3'> <h4>Learn More <i className="fas fa-arrow-right"></i></h4></button>
        </div>
        <div className="div2 mt-5">
        
        <img className=' rounded-circle' src="images/demo.jpg" alt="blank" style={{height:200,width:200}} />
        </div>
       
        </div>
        
        </div>
        </div>
        
            
        </>
    )
}

export default Home

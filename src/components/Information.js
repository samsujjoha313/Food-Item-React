import React from 'react'
import menuData from './Menu'

const Information = () => {
    return (
        <>
        <div className="information-page bg-secondary">
        <div className="container bg-info">
        <h3 className='text-center'><b>Information Page</b></h3>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={menuData[6].image} className="d-block w-100" alt="..." style={{height:500,width:300}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>SamSung Galaxy</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={menuData[3].image} className="d-block w-100" alt="blank" style={{height:500,width:300}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Iphone Pro 13</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={menuData[2].image} className="d-block w-100" alt="blank" style={{height:500,width:300}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Iphone pro 13 Lite</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        
        </div>
        
        </div>
            
        </>
    )
}

export default Information

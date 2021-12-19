import React from 'react'

const Contact = () => {
    return (
        <>
        <div className="contact-page bg-secondary">
        <div className="container bg-info">

        <h3 className='text-center'><b>This is the Contact Page</b></h3>

        <div className="contact-area mt-5">
        <div className="row">

        <div className="col-md-4">
        <div className="icon">
        <i class="fas fa-3x fa-envelope"></i>
        </div>
        <div className="title"><h2>Email</h2></div>
       
        <div className="name">
        <p>samsujjoha313@gmail.com</p>
        </div>
        </div>

        <div className="col-md-4">
        <div className="icon">
        <i class="fas fa-3x fa-phone-square-alt"></i>
        </div>
        <div className="title"><h2>Phone</h2></div>
       
        <div className="name">
        <p>01780641280</p>
        </div>
        </div>

        <div className="col-md-4">
        <div className="icon ml-5">
        <i className="  fas fa-3x fa-map-marker-alt"></i>
        </div>
        <div className="title"><h2>Address</h2></div>
       
        <div className="name">
        <p>83/2,Monipuri para,Tejgoam,Dhaka</p>
        </div>
        </div>

        </div>
        </div>
       
      <div className="contact-main-div mt-5 d-flex justify-content-around bg-secondary">
      <div className="pera1 mt-5">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7303.851148427214!2d90.38024121531373!3d23.750033302971243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639911989410!5m2!1sen!2sbd"
      style={{width:650, height:450,border:0, allowfullscreen:"", loading:"lazy"}} >Map</iframe>
      
      </div>
      <div className="pera2 mt-5">
      <input type="text" name='username' placeholder='Username' /><br />
      <input type="email" name='email' placeholder='Email' /><br />
      <textarea name="text" id="text" cols="30" rows="10">Message:</textarea><br />
      
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Submit
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Your form is successfully submitted!!!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div>
      
      
      </div>  





        </div>

        </div>
           
        </>
    )
}

export default Contact

import React from 'react'
import Fade from "react-reveal/Fade";

export default function form() {
  return (
    <>

<div className="cont ">
<h1>contect me...</h1>
    <Fade left distance="20%" duration={900}>
        <form action="https://formsubmit.co/6eb11bb6c338881c6cbdb0764791e4a5" method='POST' >
    
      <div className="mb-3">
  <label for="name" className="form-label " >Name</label>
      <input type="text" className="form-control Name " name='name' id="name" placeholder="your name"/>

  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control email" name='email' id="exampleFormControlInput1" placeholder="name@example.com"/>

  <label for="subject" className="form-label">Subject</label>
  <input type="text" className="form-control subject" name='subject' id="subject" placeholder="subject"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control message " name='message' id="exampleFormControlTextarea1" rows="3" placeholder='text your message'></textarea>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </Fade>
</div>
    </>
    
  )
}

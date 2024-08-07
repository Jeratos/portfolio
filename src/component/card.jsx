import React from 'react'

export default function card(props) {
  return (
   <>
   <div className="card crd" style={{width: '18rem',display:"inline-block"}}>
<img src={props.image} className="card-img-top" alt="Image"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>

  

    <a href={props.link} target='_blank' className="btn btn-primary">Go to link</a>
  </div>
</div>
   </>
  )
}

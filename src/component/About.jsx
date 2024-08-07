import React from 'react'
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <>

    <div className="desc ">

        <h1 className='aboutHeader'>About Me</h1>
        <Fade top>
        <p className="pr1 pr">
       <strong>Hello!  I'm Ayush Singh Chouhan</strong>, a passionate Front-End Web Developer with a strong foundation in <strong>HTML, CSS, JavaScript, and React.</strong> I have experience working with the<strong> Bootstrap framework </strong>to create responsive and visually appealing web interfaces.
        </p>
        <p className="pr2 pr">Currently, I'm expanding my skill set into backend development with <strong> Node.js and exploring databases like MongoDB.</strong> My ultimate goal is to become a <strong>MERN Stack Developer, </strong>proficient in both front-end and back-end technologies.</p>
    <p className="pr3 pr">In addition to my core skills, I have a basic understanding of PHP and JSP, which helps me appreciate different approaches to web development.</p>
    <p className="pr4 pr">
    I'm excited about building innovative web applications and continually learning new technologies to enhance my abilities
    </p>
    <p className="pr5 pr">
    <strong> Feel free to explore my projects and reach out if you'd like to connect!</strong>
    </p>
        </Fade>
    </div>
    </>
  )
}

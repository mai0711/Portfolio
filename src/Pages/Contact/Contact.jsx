import React from 'react'
import "./Contact.css"
import mail from "../../Images/logo/mail.png"
import phone from "../../Images/logo/telephone.png"
import github from "../../Images/logo/github.png"




export default function Contact() {

  const emailAddress = process.env.REACT_APP_EMAIL
  const phoneNumber = process.env.REACT_APP_PHONE

  const openEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const githubLink = () => {
    window.open('https://github.com/mai0711', '_blank');
  };

  return (
    <div className='contact' id='contact'>
      <h1>Contact</h1>
        <ul className="contactImg">
          <li><img src={mail} alt='HTML' onClick={openEmail}/></li>
          <li><a href={`tel:${phoneNumber}`}><img src={phone} alt='HTML' className='phone'/></a></li>
          <li><img src={github} alt='HTML' className='github' onClick={githubLink} /></li>
        </ul>
    </div>
  )
}

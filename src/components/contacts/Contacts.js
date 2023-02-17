import React from 'react'
import walogo from  "../../images/walogo.png"
import iglogo from  "../../images/iglogo.png"
import facebooklogo from  "../../images/facebooklogo.png"
import githublogo from  "../../images/githublogo.png"
import "./style-contacts.css"

export default function Contacts() {
  return (
    <div className='contacts' id='contacts'>
        <h1>CONTACT ME HERE!</h1>
        <div>
            <a  href="https://www.instagram.com/abdrhmn.rmdhn/" target={'_blank'} rel="noreferrer" ><img className='logo' src={iglogo} alt="" /></a>
            <a  href="https://wa.me/62895384791064" target={'_blank'} rel="noreferrer" ><img className='logo' src={walogo} alt="" /></a>
            <a  href="https://web.facebook.com/profile.php?id=100013336002306" target={'_blank'} rel="noreferrer" ><img className='logo' src={facebooklogo} alt="" /></a>
            <a  href="https://github.com/ram1455" target={'_blank'} rel="noreferrer" ><img className='logo' src={githublogo} alt="" /></a>
        </div>
    </div>
  )
}

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
            <a  href="" target={'_blank'} rel="noreferrer" ><img className='logo' src={iglogo} alt="" /></a>
            <a  href="" target={'_blank'} rel="noreferrer" ><img className='logo' src={walogo} alt="" /></a>
            <a  href="" target={'_blank'} rel="noreferrer" ><img className='logo' src={facebooklogo} alt="" /></a>
            <a  href="" target={'_blank'} rel="noreferrer" ><img className='logo' src={githublogo} alt="" /></a>
        </div>
    </div>
  )
}

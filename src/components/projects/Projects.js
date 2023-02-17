import React from 'react'
import "./style-projects.css"

import countryGallery from "../../images/Screenshot_276.png"
import memeGenerator from "../../images/Screenshot_261.png"
import helmetShop from "../../images/Screenshot_277.png"


export default function Projects() {
  return (
    <div className='projects'>
    <h1 className='title'>MY PROJECTS</h1>

        <div className="project meme-generator">
            <h1 className='title-project'>MEME GENERATOR</h1>
            <h3 className='tools'>ReactJS - Javascript - CSS3</h3>
            <div className='project_content'>
            <a href="https://meme-generator-one-eta.vercel.app/" target={"_blank"}>
                <img className='project-image' src={memeGenerator} alt="" />
            </a>
            </div>
        </div>
        <div className="project countries-gallery">
            <h1 className='title-project'>COUNTRIES GALLERY</h1>
            <h3 className='tools'>ReactJS - Javascript - CSS3</h3>
            <div className='project_content'>
            <a href=" https://countries-gallery.vercel.app/" target={"_blank"}>
            <img className='project-image' src={countryGallery} alt="" />
            </a>
            </div>
        </div>
        
        <div className='project' >
            <h1 className='title-project'>HELMET SHOP</h1>
            <h3 className='tools'>ReactJS - Javascript - CSS3</h3>
            <div className='project_content'>
            <a href="https://helmet-shop-tng.vercel.app/" target={"_blank"}>
                <img className='project-image' src={helmetShop} alt="" />
            </a>
            </div>
        </div>
    </div>
  )
}

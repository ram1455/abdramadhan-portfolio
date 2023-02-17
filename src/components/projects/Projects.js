import React from 'react'
import "./style-projects.css"

import countryGallery from "../../images/Screenshot_276.png"
import memeGenerator from "../../images/Screenshot_261.png"
import helmetShop from "../../images/Screenshot_277.png"


export default function Projects() {
  return (
    <div className='projects'>
    <h1 className='title-projects'>MY PROJECTS</h1>

        <div className="project meme-generator">
            <div className='project_content'>
            <h1>MEME GENERATOR</h1>
            <h3>ReactJS - Javascript - CSS3</h3>
            <a href="https://meme-generator-one-eta.vercel.app/" target={"_blank"}>
                <img className='project-image' src={memeGenerator} alt="" />
            </a>
            <p className='project-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, explicabo?</p>
            </div>
        </div>
        <div className="project countries-gallery">
            <div className='project_content'>
            <h1>MEME GENERATOR</h1>
            <h3>ReactJS - Javascript - CSS3</h3>
            <a href=" https://countries-gallery.vercel.app/" target={"_blank"}>
            <img className='project-image' src={countryGallery} alt="" />
            </a>
            <p className='project-description'>Website yang menghasilkan gambar setiap 
            tombol klik dan memunculkan teks otomatis 
            pada bagian atas dan bawah sesuai
            apa yang user ketikan, gambar memes ini
            berasal dari jenis memes “top and bottom
            text” memes.</p>
            </div>
        </div>
        
        <div className='helmet-shop project' >
            <h1>HELMET SHOP</h1>
            <h3>ReactJS - Javascript - CSS3</h3>
            <div className='project_content'>
            <a href="https://helmet-shop-tng.vercel.app/" target={"_blank"}>
                <img className='project-image' src={helmetShop} alt="" />
            </a>
            <p className='project-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, explicabo?</p>
            </div>
        </div>
    </div>
  )
}

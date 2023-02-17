import React from 'react'
import "./style.css"
// import me from "../../images/IMG20220616011443.jpg"


export default function Hero() {
  return (
    <header>
      <div className='hero'>
            <div className='profile-photo-container'/>
            <div className='biodata-container'>
              <div className='biodata'>
                <p className='biodata-name'>ABDURRAHMAN RAMADHAN PT</p>
                <p className='biodata-career'>Front End Developer - Design Graphic</p>
              </div>
            </div>
      </div>

              <div className="intro-container">
                <p className='intro-hello'>Hello World!</p>
                <p className='intro-sentences'>Fresh graduated SMA yang bermotivasi tinggi untuk menjadi <b>Front End Developer</b> dan berkeinginan untuk terus berkembang di dunia <b>Web Developer</b>.</p>

                <p className='intro-sentences'>Rasa penasaran saya terhadap Web Development saat SMA, malah memunculkan motivasi untuk mempelajari lebih dalam. Mulai dari belajar otodidak, mengikuti komunitas, courses, dan telah melalui pelatihan di Eduwork selama 5 bulan dan menguasai MERN Stack, membuat diri saya lebih semangat dan yakin dengan jalur karier yang saya pilih.</p>
              </div>
    </header>
  )
}

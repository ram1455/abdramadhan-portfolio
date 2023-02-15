import React from 'react'
// import Hero from '../hero/Hero'
import "./style.css"

import html from "../../images/html.png"
import css from "../../images/css.png"
import js from "../../images/javascript.png"
import mongodb from "../../images/mongodb.png"
import express from "../../images/express.png"
import reactjs from "../../images/reactjs.png"
import nodejs from "../../images/nodejs.png"
import coreldraw from "../../images/coreldraw.png"

export default function Main() {
  return (
    <main>
      <h1 className='myskills'>MY SKILLS</h1>
      <div className='skills-container'>
        <div className="skills-logo">
          <img src={html} alt="" />
          <h1 className='skills-name'>HTML</h1>
        </div>

        <div className="skills-logo">
          <img src={css}  alt="" />
          <h1  className='skills-name'>CSS</h1>
        </div>

        <div className="skills-logo">
          <img src={js}  alt="" />
          <h1  className='skills-name'>JS</h1>
        </div>

        <div className="skills-logo">
          <img src={mongodb}  alt="" />
          <h1  className='skills-name'>MongoDB</h1>
        </div>

        <div className="skills-logo">
          <img src={express}  alt="" />
          <h1  className='skills-name'>ExpressJS</h1>
        </div>

        <div className="skills-logo">
          <img src={reactjs}  alt="" />
          <h1  className='skills-name'>ReactJS</h1>
        </div>

        <div className="skills-logo">
          <img src={nodejs}  alt="" />
          <h1  className='skills-name'>NodeJS</h1>
        </div>

        <div className="skills-logo">
          <img src={coreldraw}  alt="" />
          <h1  className='skills-name'>CorelDraw</h1>
        </div>
      </div>
    </main>
  )
}







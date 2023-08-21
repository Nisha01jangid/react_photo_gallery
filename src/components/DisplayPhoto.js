import React from 'react'
import './styles.css'
import image1 from './1.png';
import google_play from './google-play-badge.png';
import cat_icon from './cat.png'

const DisplayPhoto = (props) => {
  return (
    <>
   <div className="image_container">
            <div class="left_container">
            <div>
            <img id="image1" src={cat_icon} alt="image1" className='icon'/>
            </div>
            <h1>
                This is the {props.content} photo of a photo gallery 
            </h1> 

            <p>
                This is the {props.content} photo of a photo gallery This is the {props.content} photo of a photo gallery
                This is the {props.content} photo of a photo gallery This is the {props.content} photo of a photo gallery
                This is the {props.content} photo of a photo gallery
            </p>
            <div className='bottom_div'>
            <img id="image1" src={google_play} alt="google" className='photo'/>
            <img id="image1" src={google_play} alt="google" className='photo'/>
            </div>
            </div>
            <div class="right_container">
                <img id="image1" src={props.source} alt="image1" />
            </div>

    </div>
    </>
  )
}

export default DisplayPhoto

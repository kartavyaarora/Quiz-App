import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { QuizContext } from '../Context/QuizHolder'
import { TextField } from '@mui/material'
import "../index.css"
import Typewriter from 'typewriter-effect';


export default function Start(){

    const { setStart } = useContext(QuizContext)
  
    return (
    <>
        <div className='quiz flex justify-center items-center mt-5'>Lets Take a&nbsp;
        <Typewriter
            options={{
            strings: ['Quiz..',' Test..'],
            autoStart: true,
            loop: true,
        }}/>
        </div>
        <div className='flex justify-center items-center mt-5'>
            <div id="wrapper" onClick={() => setStart(true)}>
                <Link className='my-super-cool-btn'>
                    <div class="dots-container">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                    <span>Go!</span>
                </Link>
            </div>
        </div>
    </>
    )
}

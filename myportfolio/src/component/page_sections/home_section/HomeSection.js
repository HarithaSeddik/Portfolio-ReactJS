import React from 'react'
import './HomeSection.css'
import Typical from 'react-typical'
import backgroundPic from '../../../images/homeImage.jpeg'
const HomeSection = () => {
    const textArray =[
        'a Software Developer',
        'a Web Developer',
        'a Mobile Developer',
        'an Engineer'
]
    const TypingAnimation =  React.memo(()=>{
        return <Typical
        loop={Infinity}
        wrapper="b"
        steps={
            [   
                'a Software Developer',
                1200, 
                'a Web Developer',
                1200, 
                'a Mobile Developer',
                1200,
                'an Engineer',
                1200,
                
            ]
        }
       />
      } ); // this line prevent re rendering

    return (
        <>
            <div  className='sectionContainer'>
            <img src = {backgroundPic} className='sectionBG'/>
            <div className ='textDiv'>
                <h1> Hi, I am Haritha, </h1>
                <p className='specialText'> 
                I'm{' '}
                    <div className='animatedText'>
                     <TypingAnimation/>
                    </div>
                    </p>   
            </div>

            <ul className='socialLinksUL'>
                <li>
                    <a href="https://www.linkedin.com/in/harithaseddik/" target='_blank'><i class="fab fa-linkedin-in icon"></i></a>
                    </li>
                <li>
                    <a href="https://github.com/HarithaSeddik" target='_blank' ><i class="fab fa-github icon"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/harithaakkad/" target='_blank'>
                    <i class="fab fa-instagram icon"></i>    </a>
                </li>
                
            </ul>
            </div>

            
        </>
    )
}

export default HomeSection

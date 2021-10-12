import React, {useState, useRef} from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import { useEffect } from 'react/cjs/react.development';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".navbarContainer .textContainer ul li");
    const navbarContainer =  document.querySelectorAll(".navbarContainer");

    const [showBackground, setShowBackground] = useState(false)
    
    const aboutRef = useRef();

    const bodyElement = document.getElementsByTagName("BODY")[0];
    const htmlElement = document.getElementsByTagName("HTML")[0];
    const handleClick = () => {
        bodyElement.style.scrollSnapType='none'
        htmlElement.style.scrollSnapType='none'
    }

    useEffect(() => {
        const handleScroll = (e) => {   
            
            if (window.scrollY >= 0 && window.scrollY <= window.innerHeight / 2) {
                setShowBackground(false)
            } else {
                
                setShowBackground(true)
            }
            let current = ''
            sections.forEach( (section)=> {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= (sectionTop- 0.1*sectionTop) && window.scrollY <= ( sectionTop + sectionHeight ) ){
                    // console.log(sectionTop, sectionHeight)
                    current = section.getAttribute('id')
                    // console.log(current)
                }
            })
            navLi.forEach((li) => {
                li.classList.remove("active");
                if (li.classList.contains(current)) {
                  li.classList.add("active");
                }
              });
        }

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, [showBackground])


    return (
       
         <div className={showBackground?'navbarContainer--active':'navbarContainer'}> 
                {/* {console.log(showBackground)} */}
            <div className={showBackground?'textContainer--active':'textContainer'}>
                <ul className='textList'>
                    <Link onClick={handleClick} smooth to='home'>
                        <li className='home'>  Home </li>
                    </Link>
                    <Link onClick={handleClick} smooth to='aboutMe'>
                        <li className='aboutMe'>  About Me </li>
                    </Link>  
                    <Link onClick={handleClick} smooth to='experiences'>
                        <li className='experiences'>  Experience </li>
                    </Link>  
                    <Link onClick={handleClick} smooth to='skills'>
                        <li className='skills'>  Skills </li>
                    </Link>
                    <Link onClick={handleClick} smooth to='contact'>
                        <li className='contact'>  Contact </li>
                    </Link>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar

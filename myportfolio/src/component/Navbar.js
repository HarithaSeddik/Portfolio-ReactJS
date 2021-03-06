import React, {useState, useRef} from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import { useEffect } from 'react/cjs/react.development';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {

    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".navbarContainer .textContainer ul li");
    const navbarContainer =  document.querySelectorAll(".navbarContainer");
    // const [showBackground, setShowBackground] = useState(false)

    // const [showBackground, setShowBackground] = useState(false)
    
    const aboutRef = useRef();

    const bodyElement = document.getElementsByTagName("BODY")[0];
    const htmlElement = document.getElementsByTagName("HTML")[0];
    const handleClick = () => {
        bodyElement.style.scrollSnapType='none'
        htmlElement.style.scrollSnapType='none'
    }

    // useEffect(() => {
    //     function handleScroll() {
    //       if (window.scrollY >= 0 && window.scrollY <= window.innerHeight / 2) {
    //         setShowBackground(false)
            
    //     } else {
    //         setShowBackground(true)
    //     }
    
    //     }
    //     window.addEventListener("scroll", handleScroll, { passive: true });
    //     return () => window.removeEventListener("scroll", handleScroll);
    //   }, [showBackground]);


    return (
       
         <div className={props.showBackground?'navbarContainer--active':'navbarContainer'}> 
                {/* {console.log(props.showBackground)} */}
            <div className={props.showBackground?'textContainer--active':'textContainer'}>
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

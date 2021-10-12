import React, {useState, useRef} from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import { useEffect } from 'react/cjs/react.development';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const [showBackground, setShowBackground] = useState(false)
    const handleClick = () => {
        console.log('clicky clicky')
    }


    return (
        // <div 
        // className={setShowBackground?'navbarContainer':'navbarContainer--active'}
        // >
         <div className={showBackground?'navbarContainer--active':'navbarContainer'}> 
                {/* {console.log(showBackground)} */}
            <div className={showBackground?'textContainer--active':'textContainer'}>
                <ul className='textList'>
                    <Link onClick={handleClick} smooth to='home'>
                        <li className='home'>  Home </li>
                    </Link>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar

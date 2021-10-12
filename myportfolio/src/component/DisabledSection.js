import React from 'react'
import { Typography } from '@material-ui/core'
import './DisabledSection.css'
const DisabledSection = () => {
    return (
        <div className='disabledSectionContainer'>
            <div className='messageContainer'>
            <p> Sorry :( Currently only available on bigger screens!</p>
            </div>
        </div>
    )
}

export default DisabledSection

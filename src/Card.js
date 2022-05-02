import React, { useState, useEffect} from 'react';
import { ReactComponent as Button} from '../src/assets/icon-dice.svg';
import { ReactComponent as MobileDivider } from '../src/assets/pattern-divider-mobile.svg';
import { ReactComponent as DesktopDivider } from '../src/assets/pattern-divider-desktop.svg';

import { StyledCard } from './styled/Card.styled';

export default function Card () {
    // setting state
    const [advice, setAdvice] = useState({
        id: 1,
        text: ''
    }); 

    // bool value that toggles when the button is clicked
    const [toggle, setToggle] = useState(true); 

    // function to pull in advice from the API
    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then((result) => {
            setAdvice(prevAdvice => {
                return {
                    ...prevAdvice,
                    id: result.slip.id,
                    text: result.slip.advice
                }
            })
        })
    }, [toggle])

    // function to change the value of toggle
    function handleClick () {
        setToggle(prevToggle => !prevToggle);
    }

    return (
        <StyledCard>
            <div className='content-wrapper'>
                <h4>ADVICE #{advice.id}</h4>
                <p>“{advice.text}”</p>
                <MobileDivider className='mobile-divider'/>
                <DesktopDivider className='desktop-divider'/>
                <div className='button-wrapper' onClick={handleClick} role='button'>
                    <Button />
                </div>
            </div>
        </StyledCard>
    )
}
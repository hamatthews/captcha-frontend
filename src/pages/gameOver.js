import {useState, useRef, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import '../styles/menu.css';

export default function GameOver({level}) {
    const navigate = useNavigate();

    const [displayOn, setDisplayOn] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => setDisplayOn(true));
    }, [])

    const displayClass = displayOn ? 'display-on' : '';
    const submittedClass = submitted ? 'submitted' : '';

    const switchPage = path => {
        setDisplayOn(false);
        setTimeout(() => navigate(path), 600);
    }

    const submitScore = e => {
        if (e.type === 'click' || e.code === 'Enter') {
            if (!submitted && inputRef.current.value.trim()) {
                setSubmitted(true);
    
                fetch("https://captcha-backend.onrender.com/scoreboard/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({name: inputRef.current.value.trim(), level})
                })    
            }
            else if (!submitted) {
                inputRef.current.style.outline = '3px solid red';
                inputRef.current.focus();
            }    
        }

    }

    return (
        <div className='menu'>
            <div className={`menu-content ${displayClass}`}>
                <div className='menu-title-wrapper'>
                    <img src='/arrow-wheel.svg'/>
                    <h1>You got to Level {level}!</h1>
                </div>
                <input className={`name-entry ${submittedClass}`} ref={inputRef} maxlength='12' placeholder='Enter your name' onKeyDown={submitScore}/>
                <button className={`submit-button ${submittedClass}`} onClick={submitScore}>Submit Score</button>
                <button className='new-game-button' onClick={() => switchPage('/game')}>New Game</button>
                <button className='menu-button' onClick={() => switchPage('/menu')}>Main Menu</button>
            </div>
            <div className={`menu-flash ${displayClass}`}></div>

        </div>
    )
}
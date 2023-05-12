import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import '../styles/menu.css';

export default function Leaderboard() {
    const navigate = useNavigate();

    const [displayOn, setDisplayOn] = useState(false);
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/scoreboard/")
        .then(res => res.json())
        .then(data => setLeaders(data.sort((a,b) => b.level - a.level)))

        setTimeout(() => setDisplayOn(true));
    }, [])

    const displayClass = displayOn ? 'display-on' : '';

    const changePage = path => {
        setDisplayOn(false);
        setTimeout(() => navigate(path), 600);
    }

    return (
        <div className='leaderboard menu'>
            <div className={`menu-content ${displayClass}`}>
                <div className='menu-title-wrapper'>
                    <img src='/arrow-wheel.svg'/>
                    <h1>Leaderboard</h1>
                </div>
                <div className='score-column'>{
                    leaders.map((e,i) => <div className='score-entry' key={`score-${i}`}>
                        <div>{e.name}</div>
                        <div>Level {e.level}</div>
                    </div>)
                }</div>
                <button className='motivation-button' onClick={() => changePage('/menu')}>Main Menu</button>
            </div>
            <div className={`menu-flash ${displayClass}`}></div>
        </div>
    )
}
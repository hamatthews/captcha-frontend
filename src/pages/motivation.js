import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import '../styles/menu.css';

export default function Motivation() {
    const navigate = useNavigate();

    const [displayOn, setDisplayOn] = useState(false);
    const [quote, setQuote] = useState({content: '', author: '', index: null});

    const generateQuote = () => {
        fetch('https://api.quotable.io/search/quotes?query=human humanity')
        .then(res => res.json())
        .then(data => {
            let index = Math.floor(Math.random()*data.results.length);

            setQuote(prevQuote => {
                if (index === prevQuote.index) {
                    if (index === data.length - 1) {
                        index = 0;
                    }
                    else index++;
                }

                const {content, author} = data.results[index];
                return {content, author, index}
            });
        });
    }

    useEffect(() => {
        setTimeout(() => setDisplayOn(true));
        generateQuote();
    }, [])

    const displayClass = displayOn ? 'display-on' : '';

    const changePage = path => {
        setDisplayOn(false);
        setTimeout(() => navigate(path), 600);
    }
    


    return (
        <div className='motivation menu'>
            <div className={`menu-content ${displayClass}`}>
                <div className='menu-title-wrapper'>
                    <img src='/arrow-wheel.svg'/>
                    <h1>Quotes About Being Human</h1>
                </div>
                <div className='quote-block'>
                    <p>{quote.content}</p>
                    <p className='author-name'>- {quote.author}</p>
                </div>
                <button className='new-quote-button' onClick={generateQuote}>New Quote</button>
                <button className='menu-button' onClick={() => changePage('/menu')}>Main Menu</button>
            </div>
            <div className={`menu-flash ${displayClass}`}></div>
        </div>
    )
}
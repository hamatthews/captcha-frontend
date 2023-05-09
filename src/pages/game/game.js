import CaptchaBlock from '../../components/captchaBlock/captchaBlock';
import './game.css';

export default function Game() {
    return (
        <div className='game-content'>
            <CaptchaBlock />
        </div>
    )
}

// maybe add motivational quotes about what it means to be human

/*
We don't need to authentication, but we should have the opening
screen prompt you to enter a username and password
(whatever you enter, it will tell you your password is wrong, and then will show you the checkbox)
*/
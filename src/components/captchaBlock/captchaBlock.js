import {useState, useRef, useEffect} from 'react';

import CaptchaImage from './captchaImage';

import './captchaBlock.css';

export default function CaptchaBlock() {

    const [imageType, setImageType] = useState('crosswalk');
    const [imageList, setImageList] = useState(Array(9).fill().map(() => ({url: '', clicked: false, type: 'crosswalk'})));
    const [gridHeight, setGridHeight] = useState();
    const gridRef = useRef(null);

    useEffect(() => {
        if (gridRef.current && gridHeight !== gridRef.current.clientWidth) {
            setGridHeight(gridRef.current.clientWidth);
        }    
    })

    const clickVerify = () => {
        const correct = imageList.every(e => {
            if ((e.clicked && e.type === imageType)
            || !e.clicked && e.type !== imageType) {
                return true;
            }
            else return false;
        })
    
        console.log(correct);    
    }

    return (
        <div className='captcha-block'>
            <div className='captcha-banner'>
                <p>Select all images with</p>
                <h1>{imageType}</h1>
                <p>Click verify once there are none left.</p>
            </div>
            <div className='captcha-image-grid' ref={gridRef} style={{height: gridHeight}}>
                {imageList.map((e,i) => <CaptchaImage index={i} {...{imageList, setImageList}} key={'image-' + i}/>)}
            </div>
            <div className='captcha-footer'>
                <button className='verify-button' onClick={clickVerify}>VERIFY</button>
            </div>
        </div>
    )
}
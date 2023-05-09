export default function CaptchaImage({index, imageList, setImageList}) {
    const imageClick = () => {
        setImageList(prevImageList => {
            const arr = [...prevImageList];
            arr[index].clicked = !arr[index].clicked;
            return arr;
        })
    }

    const clickedClass = imageList[index].clicked ? 'clicked' : '';
    
    return (<div className={`captcha-image ${clickedClass}`} style={{backgroundImage: imageList[index].url}} onClick={imageClick}/>)
}
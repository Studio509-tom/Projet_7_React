import styled from "styled-components"
import './slideshow.css'
import { useState } from "react"
import {useParams} from "react-router-dom";


const BackgroundStyled = styled.div`
    justify-content: space-between;

    .background-slide{
        background : url(${props => props.cover});
        background-position: top -1160px right 0px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`

function Slideshow(props) {

    const [isCover, setIsCover] = useState(0);

    //Condition si il n'y a qu'une photo
    if (props.cover.length === 1) {
        return (
            <BackgroundStyled cover={props.cover[isCover]} className='parent-slide'>
                <div className='background-slide'></div>
                <div className="position">
                    <p>{isCover + 1}/{(props.cover).length}</p>
                </div>
            </BackgroundStyled>
        )
    }
    else {
        return (
            <BackgroundStyled cover={props.cover[isCover]} className='parent-slide'>
                <button onClick={() => props.cover[isCover - 1] === undefined ? setIsCover((props.cover).length - 1) : setIsCover(isCover - 1)} className="buttonArrow arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>
                <div className='background-slide'></div>
                <button onClick={() => props.cover[isCover + 1] === undefined ? setIsCover(0) : setIsCover(isCover + 1)} className="buttonArrow arrowRight"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button>
                <div className="position">
                    <p>{isCover + 1}/{(props.cover).length}</p>
                </div>
            </BackgroundStyled>
        )
    }

}
export default Slideshow

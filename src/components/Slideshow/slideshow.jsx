import styled from "styled-components"
import './slideshow.css'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid'
import { useState } from "react"
import {useParams} from "react-router-dom";

fontawesome.library.add(faChevronLeft);
fontawesome.library.add(faChevronRight);

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
                <button onClick={() => props.cover[isCover - 1] === undefined ? setIsCover((props.cover).length - 1) : setIsCover(isCover - 1)} className="buttonArrow arrowLeft"><FontAwesomeIcon className="Arrow" icon="fa-solid fa-chevron-left" /></button>
                <div className='background-slide'></div>
                <button onClick={() => props.cover[isCover + 1] === undefined ? setIsCover(0) : setIsCover(isCover + 1)} className="buttonArrow arrowRight"><FontAwesomeIcon className="Arrow" icon="fa-solid fa-chevron-right" /></button>
                <div className="position">
                    <p>{isCover + 1}/{(props.cover).length}</p>
                </div>
            </BackgroundStyled>
        )
    }

}
export default Slideshow

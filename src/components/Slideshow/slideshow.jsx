import styled from "styled-components"
import './slideshow.css'

const BackgroundStyled = styled.div`
    .background-banner{
        background : url(${props => props.cover});
        background-position: top -1160px right 0px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`
function Slideshow(props){
    console.log(props.cover.length)
    for (let i = 0 ; i < props.cover.length; i++){
        console.log(i)
    }
    return(
        <BackgroundStyled cover={props.cover} className='parent-slide'>
            <button className="leftArrow"></button>
            <div className='background-slide'></div>
            <button className="rightArrow"></button>
        </BackgroundStyled>
    )
}
export default Slideshow
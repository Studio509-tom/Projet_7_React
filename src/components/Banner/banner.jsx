import React from 'react'
import styled from 'styled-components'
import './banner.css'

const BackgroundStyled = styled.div`
    .background-banner{
        background : url(${props => props.cover});
        background-position: top -1160px right 0px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`

//!Banniere 
function Banner(props) {
    console.log(props.title)
    return (
        <BackgroundStyled cover={props.cover} className='parent-banner'>
            <div className='background-banner'></div>
            <h1 className='title-banner'>{props.title}</h1>
        </BackgroundStyled>
    )
}

export default Banner
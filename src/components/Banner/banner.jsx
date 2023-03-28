import React from 'react'
import styled from 'styled-components'
import './banner.css'
import Background from '../../assets/montain.jpg' 

const BackgroundStyled = styled.div`
    .background-banner{
        background : ${props => props.title ? "url('../../assets/banner.jpg')" : process.env.PUBLIC_URL + Background};
    }
`
// function test()  {
//     if(props.title){
//         const BackgroundStyled = styled.div`
//         .background-banner{
//             background:${props =>props.cover};
//         }
//         `
//     }
// }

//!Banniere 
function Banner(props) {
    console.log(props.title)
    return (
        <BackgroundStyled title={props.title} className='parent-banner'>
            <div className='background-banner'></div>
            <h1 className='title-banner'>{props.title}</h1>
        </BackgroundStyled>
    )
}

export default Banner
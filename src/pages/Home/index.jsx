import styled from 'styled-components'
// import colors from '../../utils/style/colors'
import Banner from '../../assets/banner.jpg'

const HomeParent = styled.div`
    max-width : 90%;
    margin:auto;
`
const StyledBanner = styled.div`
    border-radius: 25px;
    margin: auto;
    height: 250px;
    width: 100%;
    background-image : ${Banner};
    background-position: 50%, 50%;
    
`

// const StyledImage = styled.img`
//     width : 100%;
//     height: auto;
//     margin-top: -70%;
//     opacity : 0.65;
   
// `

const TitleHome = styled.h1`
    font-family: 'Montserrat', sans-serif;
    color :#FFFFFF;
    font-size : 48px;
    font-weight: 900;
    
`
function Home() {
    return(
        <HomeParent>
            <StyledBanner>
                {/* <StyledImage src={Banner} alt="image d'une falaise"/> */}
                <TitleHome>Chez vous, partout et ailleurs</TitleHome>
                
            </StyledBanner>
            <div>
                <div>
                    <img src='#' alt='logement'/>
                    <p></p>
                </div>
            </div>
        </HomeParent>
    )
}

export default Home
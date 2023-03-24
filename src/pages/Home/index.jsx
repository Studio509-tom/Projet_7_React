import styled from 'styled-components'
// import colors from '../../utils/style/colors'
import Banner from '../../assets/banner.jpg'

const HomeParent = styled.div`
    max-width : 90%;
    margin:auto;
`
const StyledBanner = styled.div`
    overflow: hidden;
    border-radius: 25px;
    margin: auto;
    height: 250px;
    width: 100%;
    background-color : #000000;
    
`

const StyledImage = styled.img`
    width : 100%;
    height: auto;
    margin-top: -70%;
    
    opacity : 0.7;
   
`

const TitleHome = styled.h1`
    color : white;
    font-size : 48px;
    text-align : center;
    align-item: center;
    
`
function Home() {
    return(
        <HomeParent>
            <StyledBanner>
                <TitleHome>Chez vous, partout et ailleurs</TitleHome>
                <StyledImage src={Banner} alt="image d'une falaise"/>
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
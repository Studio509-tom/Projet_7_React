import styled from 'styled-components'
import Banner from '../../components/Banner/banner'
import Background from '../../assets/montain.jpg'

const HomeParent = styled.div`
    max-width : 90%;
    margin:auto;
`
//!Page A Propos
function Info() {
    return (
        <HomeParent>
            <Banner cover={Background}/>
            
        </HomeParent>
    )
}

export default Info
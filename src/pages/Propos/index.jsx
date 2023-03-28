import styled from 'styled-components'
import Banner from '../../components/Banner/banner'
import Card from '../../components/Card/card'


const HomeParent = styled.div`
    max-width : 90%;
    margin:auto;
`
//!Page A Propos
function Info() {
    return (
        <HomeParent>
            <Banner />
            <Card />
        </HomeParent>
    )
}

export default Info
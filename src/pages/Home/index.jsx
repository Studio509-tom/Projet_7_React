import styled from 'styled-components'
import Banner from '../../components/Banner/banner'
import Card from '../../components/Card/card'
import Footer from '../../components/Footer/footer'

const HomeParent = styled.div`
    max-width : 90%;
    margin:auto;
`

function Home() {
    return (
        <HomeParent>
            <Banner />
            <Card />
            <Footer />
        </HomeParent>
    )
}

export default Home
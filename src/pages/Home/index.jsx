import styled from 'styled-components'
import Banner from '../../components/Banner/banner'
import Card from '../../components/Card/card'


const HomeParent = styled.div`
    max-width : 90%;
    margin:auto;
`
// !Page d'accueil
function Home() {
    return (
        <HomeParent>
            <Banner title="Chez vous, partout et ailleurs" cover="url('../../assets/banner.jpg')"/>
            <Card />
        </HomeParent>
    )
}

export default Home
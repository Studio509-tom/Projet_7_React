import styled from 'styled-components'
import Banner from '../../components/Banner/banner'
import Card from '../../components/Card/card'
import Background from '../../assets/banner.jpg'

const HomeParent = styled.div`
    max-width : 90%;
    margin:auto;
`
// !Page d'accueil
function Home() {
    return (
        <HomeParent>
            <Banner title="Chez vous, partout et ailleurs" cover={Background}/>
            <Card />
        </HomeParent>
    )
}

export default Home
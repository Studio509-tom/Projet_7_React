import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Banner from '../../components/Banner/banner'
import Card from '../../components/Card/card'
import Background from '../../assets/banner.jpg'
import './index.css'

const HomeParent = styled.div`
    max-width : 90%;
    margin:auto;
`
// !Page d'accueil
function Home() {
    return (
        
            <HomeParent>
                <div className='banner-home'>
                    <Banner title="Chez vous, partout et ailleurs" cover={Background}/>
                </div>
                <Card />
            </HomeParent>
    )
}

export default Home
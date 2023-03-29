import styled from 'styled-components'
import Banner from '../../components/Banner/banner'
import Background from '../../assets/montain.jpg'
import Collapse from '../../components/Collapse/collapse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import color from '../../styles/color'
import AllText from '../../Data/About.json'

const HomeParent = styled.div`
    max-width : 90%;
    margin:auto;
`
const DescStyled = styled.div`
    background-color: ${color.secondary};
    padding : 15px ;
`
for (var data of AllText){
    console.log(data)
    var CollapsePropos = {
    title: data.title,
    description:<p className='collapse-description'>TATA</p>
}
    
}

//!Page A Propos
function Info() {
    return (
        <HomeParent>
            <Banner cover={Background}/>
            <Collapse params={CollapsePropos.description} title={CollapsePropos.title} />
        </HomeParent>
    )
}




export default Info
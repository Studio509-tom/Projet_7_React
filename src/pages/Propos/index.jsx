import styled from 'styled-components'
import Banner from '../../components/Banner/banner'
import Background from '../../assets/montain.jpg'
import Collapse from '../../components/Collapse/collapse'
import AllText from '../../Data/About.json'

const HomeParent = styled.div`
    max-width : 90%;
    margin:auto;
`




//!Page A Propos
function Info() {
    var collapses = []
    for (let i = 0; i < AllText.length ;i++){
        var description = <p className='collapse-description'>{AllText[i].description}</p>
        collapses.push(<Collapse params={description} title={AllText[i].title}/>)
    } 
    
    return (
        <HomeParent>
            <Banner cover={Background}/>
            {collapses}
        </HomeParent>
    )
}




export default Info
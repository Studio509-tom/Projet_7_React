import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from "../../assets/logo.svg"
import colors from '../../utils/styles/color'

const NavParent = styled.div`
    display : flex;
    align-items : center;
    justify-content: space-between;
    padding : 40px 100px;
`


const StyledLink = styled(Link)`
    font-size: 24px ;
    color : ${colors.primary};
    padding: 15px;
`
function Header(){
    return(
        <NavParent>
            <img src={Logo} alt="logo"></img>
            <nav>
                <StyledLink  to="/">Accueil</StyledLink>
                <StyledLink  to="/">A Propos</StyledLink>
            </nav>
        </NavParent>
    )

}

export default Header
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from "../../assets/logo.svg"
import colors from '../../styles/color'
import './header.css'

const StyledLink = styled(Link)`
    font-size: 24px ;
    color : ${colors.primary};
    padding: 15px;
`
function Header() {
    return (
        <div className='nav-bar'>
            <img src={Logo} alt="logo"></img>
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/">A Propos</StyledLink>
            </nav>
        </div>
    )

}

export default Header
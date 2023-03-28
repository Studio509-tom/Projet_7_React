import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from "../../assets/logo.svg"
import colors from '../../styles/color'
import './header.css'

const StyledLink = styled(Link)`
    font-family: 'Montserrat',sans-serif;
    font-weight: 900;
    font-size: 24px ;
    color : ${colors.primary};
    padding: 15px;
    :hover{
        text-decoration: underline;
    }
`

function Header() {
    return (
        <div className='nav-bar'>
            <img src={Logo} alt="logo"></img>
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/information">A Propos</StyledLink>
            </nav>
        </div>
    )

}

export default Header
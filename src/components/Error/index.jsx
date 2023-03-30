import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/color'
import './error.css'

const StyledLink = styled(Link)`
    text-decoration:underline;
    cursor: pointer;
    color:${colors.primary};
`
//!Page d'Erreur en cas de mauvais lien 
function Error() {
    return (
        <div className='error'>
            <div className='container-error'>
                <h1 className='title-error'>404</h1>
                <p className='text-error'>Oups ! La page que vous demandez n'existe pas.</p>
            </div>
            <div className='redirect-error'>
                <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
            </div>
        </div>
    )
}

export default Error
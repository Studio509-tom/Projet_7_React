import React, { useState } from 'react';
import './collapse.css'
import color from '../../styles/color'
import styled from 'styled-components';
// import fontawesome from '@fortawesome/fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronUp } from '@fortawesome/fontawesome-free-solid'

// fontawesome.library.add(faChevronUp);

const DescStyled = styled.div`
            background-color: ${color.secondary};
            padding : 15px ;
        `

//! Collapse qui utilise un état pour s'ouvrir et se fermé
function Collapse({ params, title }) {
    const [isOpen, setIsOpen] = useState(false)
    // console.log(isOpen)
    return isOpen ? (
        <section className='collapse-container'>
            <article className='collapse' >
                <div className='collapse-title' onClick={() => setIsOpen(false)}>
                    <h3>{title}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
                </div>
                <DescStyled >
                    {params}
                </DescStyled>
            </article>

        </section>
    ) : (
        <section className='collapse-container'>
            <article className='collapse' >
                <div className='collapse-title' onClick={() => setIsOpen(true)}>
                    <h3>{title}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                </div>
            </article>

        </section>
    )
}

export default Collapse
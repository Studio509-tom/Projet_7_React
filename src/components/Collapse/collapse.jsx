import React, { useState } from 'react';
import './collapse.css'
import color from '../../styles/color'
import styled from 'styled-components';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faChevronUp);

const DescStyled = styled.div`
            background-color: ${color.secondary};
            padding : 15px ;
        `

//! Collapse qui utilise un état pour s'ouvrir et se fermé
function Collapse({params, title}) {
    const [isOpen , setIsOpen] = useState(false)
    // console.log(isOpen)
    return isOpen ? (
        <section className='collapse-container'>
            <article className='collapse' >
                <div className='collapse-title' onClick={() => setIsOpen (false)}>
                    <h3>{title}</h3>
                    <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
                </div>
                <DescStyled >
                    {params}
                </DescStyled>
            </article>

        </section>
    ) : (
        <section className='collapse-container'>
            <article className='collapse' >
                <div className='collapse-title' onClick={() => setIsOpen (true)}>
                    <h3>{title}</h3>
                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                </div>
            </article>

        </section>
    )
}

export default Collapse
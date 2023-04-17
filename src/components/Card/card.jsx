import { Link } from 'react-router-dom';
import './card.css'
const logementAll = require('../../Data/data.json');//Récupération de tout les appartement 

//!Affichage pour chaque appartement 
const logements = logementAll.map((logement) =>
    
        <article className='product' key={logement.id}>
            <Link to={logement.id}>
                <img className="image-product" src={logement.cover} alt="logement" />
                <h2>{logement.title}</h2>
            </Link>
        </article>
    
)

//!Affichage de tout les appartement 
function Card() {
    return (
        <section className='product-container'>
            <div className='product-home'>
                {logements}
            </div>
        </section>
    )
}

export default Card
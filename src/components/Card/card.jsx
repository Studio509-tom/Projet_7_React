import './card.css'
const logementAll = require('../../Data/data.json');//Récupération de tout les appartement 
//!Affichage pour chaque appartement 
const logements = logementAll.map((logement) =>
    <a href='/' key={logement.id}>
        <article className='product' >
            <img className="image-product" src={logement.cover} alt="logement" />
            <h2>{logement.title}</h2>
        </article>
    </a>
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
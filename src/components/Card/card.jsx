import './card.css'
const logementAll = require('../../Data/data.json');
const logements = logementAll.map((logement) => 
    <a href='/' >    
        <article className='product' key={logement.title}>
            <img class="image-product" src={logement.cover} alt="logement"/>
            <h2>{logement.title}</h2>
        </article>
</a>    
)

function Card() {
    return(
        <section className='product-container'>
            <div className='product-home'>
                {logements}
            </div>
        </section>
    )
}

export default Card
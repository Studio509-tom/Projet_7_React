import Slideshow from "../../components/Slideshow/slideshow";
import Data from "../../Data/data.json";
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid'
import Collapse from '../../components/Collapse/collapse'
import './index.css'

fontawesome.library.add(faStar);


function Product() {
    //Récupération de l'id dans l'url
    const link = (window.location).href;
    var id = link.substring(link.lastIndexOf('/') + 1);

    for (let i = 0; i < Data.length; i++) {
        //Si l'id correspond
        if (Data[i].id === id) {
            var slidePicture = Data[i].pictures; // Image du slider
            var title = Data[i].title;// Titre
            var location = Data[i].location; // Localisation
            var tags = Data[i].tags.map((tag) => // Tag de l'annonce
                <div>
                    <p className="tags">{tag}</p> 
                </div>)
            var name = Data[i].host.name // Nom de la personne qui poste l'annonce
            var pictureProfile = Data[i].host.picture // Image de la personne qui poste l'annonce
            var rating = Data[i].rating // Note de la personne 
            var starRating = []
            for (let j = 0; j < rating; j++) { //Affichage du nombre d'étoile coloré en fonction de la note de la personne
                starRating.push(<FontAwesomeIcon className="star-rating" icon="fa-solid fa-star" style={{ color: "#ff6060", }} />)
            }
            var ratingNone = 5 - rating ;
            for (let k = 0 ; k < ratingNone ; k++){ //Affichage des étoiles grisé 
                starRating.push(<FontAwesomeIcon className="star-rating" icon="fa-solid fa-star" style={{color: "#e3e3e3",}} />)
            }
            //Collapse
            var description = <p className='collapse-description'>{Data[i].description}</p>
            var stuff =Data[i].equipments.map((element, index) => {
                return (<p className='collapse-description' key={"equip-"+index.toString()}>{element}</p>)})
        
        }
    }
        
    
    return (
        <div id="product"> 
            <Slideshow cover={slidePicture} />
            <div className="product-id-container">
                <div className="product-main"> 
                    <h1 className="product-title">{title}</h1>
                    <p className="product-location">{location}</p>
                    <div className="product-tags">
                        {tags}
                    </div>
                </div>
                <div className="product-profile">
                    <div className="profile">
                        <p className="profile-name">{name}</p>
                        <img className="profile-image" src={pictureProfile} alt="phto de profile" />
                    </div>
                    <div className="rating">
                        {starRating}
                    </div>
                </div>
            </div>
            <div className="product-collapse">
                <Collapse className="collapse-element" params={description} title="Description"/>
                <Collapse className="collapse-element" params={stuff} title="Equipements"/>
            </div>
            

        </div>
    )
}
export default Product;
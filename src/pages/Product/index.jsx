import {
    Redirect,
} from "react-router-dom";
import Slideshow from "../../components/Slideshow/slideshow.jsx";
import Data from "../../Data/data.json";
import { useParams } from "react-router-dom";
import Collapse from '../../components/Collapse/collapse'

import './index.css'




function Product() {
    //Récupération de l'id 
   
    const { id } = useParams()
    let errorId = true;
    for (let i = 0; i < Data.length; i++) {
        //Si l'id correspond
        if (Data[i].id === id) {
            errorId = false;
            var slidePicture = Data[i].pictures; // Image du slider
            var title = Data[i].title;// Titre
            var location = Data[i].location; // Localisation
            var tags = Data[i].tags.map((tag, index) => {// Tag de l'annonce
                return (<div>
                    <p className="tags" key={"tag-" + index.toString()} >{tag}</p>
                </div>)
            })
            var name = Data[i].host.name // Nom de la personne qui poste l'annonce
            var pictureProfile = Data[i].host.picture // Image de la personne qui poste l'annonce
            var rating = Data[i].rating // Note de la personne 
            //Affichage dynamique des étoiles de notes
            var starRating = []
            for (let j = 0; j < rating; j++) { //Affichage du nombre d'étoile coloré en fonction de la note de la personne
                starRating.push(<svg className="svg-color-pink" xmlns="http://www.w3.org/2000/svg" key={"icone-" + j.toString()} viewBox="0 0 576 512" style={{color : "#F6060",}}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>)
            }
            var ratingNone = 5 - rating;
            for (let k = 0; k < ratingNone; k++) { //Affichage des étoiles grisé 
                starRating.push(<svg className="svg-grise" xmlns="http://www.w3.org/2000/svg" key={"icone-" + k.toString()} viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>)
            }

            //Collapse
            var description = <p className='collapse-description'>{Data[i].description}</p>
            var stuff = Data[i].equipments.map((element, index) => {
                return (<p className='collapse-description' key={"equip-" + index.toString()}>{element}</p>)
            })

        }

    }

    if (errorId) {
        return <Redirect to="/error" />;
    }

    return (
        <div id="product">
            <Slideshow cover={slidePicture} />
            <div className="product-id-container">
                <div className="product-main">
                    <h1 className="product-title">{title}</h1>
                    <p className="product-location">{location}</p>
                    <section className="product-tags">
                        {tags}
                    </section>
                </div>
                <div className="product-profile">
                    <section className="profile">
                        <p className="profile-name">{name}</p>
                        <img className="profile-image" src={pictureProfile} alt="phto de profile" />
                    </section>
                    <section className="rating">
                        {starRating}
                    </section>
                </div>
            </div>
            <div className="product-collapse">
                <Collapse className="collapse-element" params={description} title="Description" />
                <Collapse className="collapse-element" params={stuff} title="Equipements" />
            </div>


        </div>
    )
}
export default Product;
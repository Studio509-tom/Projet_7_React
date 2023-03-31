import Slideshow from "../../components/Slideshow/slideshow";
import Data from "../../Data/data.json";
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faStar);


function Product() {
    //Récupération de l'id dans l'url
    const link = (window.location).href;
    var id = link.substring(link.lastIndexOf('/') + 1);

    for (let i = 0; i < Data.length; i++) {
        //Si l'id correspond
        if (Data[i].id === id) {
            // console.log(Data[i])
            var slidePicture = Data[i].pictures;
            var title = Data[i].title;
            var location = Data[i].location
            var tags = Data[i].tags.map((tag) =>
                <div>
                    <p>{tag}</p>
                </div>)
            var name = Data[i].host.name
            var pictureProfile = Data[i].host.picture
            var rating = Data[i].rating
            var starRating =[]
            for(let j = 0 ; j< rating; j++){
                starRating.push(<FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#ff6060",}} />)
            }
        }
    }
    return (
        <div>
            <Slideshow cover={slidePicture} />
            <div>
                <h1>{title}</h1>
                <p>{location}</p>
                <div>
                    {tags}
                </div>
            </div>
            <div>
                <div>
                    <p>{name}</p>
                    <img src={pictureProfile} alt="phto de profile" />
                </div>
                <div>
                    {starRating}
                </div>
            </div>


        </div>
    )
}
export default Product;
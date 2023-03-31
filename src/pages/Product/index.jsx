import Slideshow from "../../components/Slideshow/slideshow";
import Data from "../../Data/data.json";

function Product() {
    const link = (window.location).href;
    var id = link.substring(link.lastIndexOf('/') + 1);
    // console.log(id)
    
    for (let i = 0 ; i < Data.length; i++){
        if(Data[i].id === id){
            // console.log(Data[i])
            var slidePicture = Data[i].pictures
            console.log(slidePicture)
        }
    }
    
    return(
        <div>
            <Slideshow cover={slidePicture}/>
        </div>
    )
}
export default Product;
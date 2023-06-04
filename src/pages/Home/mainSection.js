import HomeContent from "./homeContent";
import image  from "../../assets/images/woomen.png"


export default function MainSection (){
    return(
        <div className="mainSection d-flex">
            <HomeContent/>
            <div className="mainImage">
               <img src={image} alt=""/>
            </div>
        </div>
   )
}
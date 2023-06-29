import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";

export default function HomeContent (){
    const {t} = useTranslation()
    return(
    <>   
        <div className="title">     
                <h1 dangerouslySetInnerHTML={{ __html: t("homeSection.title")}} />
                <p dangerouslySetInnerHTML={{ __html: t("homeSection.text")}} />
            <div className="title_buttons d-flex">
                <Button style={{backgroundColor: "white", color: "#56CCF2", border: "2px solid #56CCF2"}} 
                        link={'/doctors'}
                        text={t("homeSection.buttons.button1")}/>
                <Button style={{}} 
                        link={"/"}
                        text={t("homeSection.buttons.button2")}/>
            </div>
            
        </div>
        
    </>)
}
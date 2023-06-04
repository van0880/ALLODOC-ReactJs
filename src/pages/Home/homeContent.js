import { useContext } from "react";
import Button from "../../components/Button/Button";
import { TranslateContext } from "../../contexts/TranslateContext";

export default function HomeContent (){
    const context = useContext(TranslateContext)
    const data = context[0].homeSection[0]
    const buttons = context[0].homeSection[1]
    const lang = context[1]

    return(
    <>   
        <div className="title">     
                <h1 dangerouslySetInnerHTML={{ __html: data.title[lang]}} />
                <p dangerouslySetInnerHTML={{ __html: data.text[lang]}} />
            <div className="title_buttons d-flex">
                <Button style={{backgroundColor: "white", color: "#56CCF2", border: "2px solid #56CCF2"}} 
                        link={'/doctors'}
                        text={buttons.button1[lang]}/>
                <Button style={{}} 
                        link={"/"}
                        text={buttons.button2[lang]}/>
            </div>
            
        </div>
        
    </>)
}
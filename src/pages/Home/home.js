import { useContext} from "react";
import { TranslateContext } from "../../contexts/TranslateContext";

import './home.css'
import NoteSection from "./noteArticle";
import Button from "../../components/Button/Button";
import DoctorsList from "../../components/DoctosList/DoctorsList";
import MainSection from "./mainSection";

export default function Home() {
    const context = useContext(TranslateContext)
    const note = context[0].note
    const lang = context[1]
    const doctors = context[0].results
    const filterButtons = context[0].filterButtons
 
    return (
        <main>
            <div className="container">
                <MainSection/>
                <NoteSection data={note} lang={lang}/>
                <div className="text-center">
                    <Button link="/notes" text={note.noteButton[lang]} style={{color: "#4F4F4F", fontWeight: "400"}} />
                </div>
                <DoctorsList data={doctors} filterButtons={filterButtons} lang={lang}/>
            </div>
        </main>
    );
}


import { useContext} from "react";
import { TranslateContext } from "../../contexts/TranslateContext";

import './home.css'
import NoteSection from "./NoteArticle";
import Button from "../../components/Button/Button";
import DoctorsList from "../../components/DoctorsList/DoctorsList";
import MainSection from "./MainSection";

export default function Home() {
    const context = useContext(TranslateContext)
    const lang = context[1]
    const {note, results, filterButtons} = context[0]
 
    return (
        <main>
            <div className="container">
                <MainSection/>
                <NoteSection data={note} lang={lang}/>
                <div className="text-center">
                    <Button link="/notes" text={note.noteButton[lang]} style={{color: "#4F4F4F", fontWeight: "400"}} />
                </div>
                <DoctorsList data={results} filterButtons={filterButtons} lang={lang}/>
            </div>
        </main>
    );
}


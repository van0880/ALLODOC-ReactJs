import { useCallback,  useContext,  useEffect, useState } from "react"
import DoctorContent from "./DoctorContent"
import { TranslateContext } from "../../contexts/TranslateContext"
import { useDispatch, useSelector } from "react-redux"

export default function DoctorsList({ filterButtons, lang }) {
    const context = useContext(TranslateContext)
    const data = context[0].results
    const [activeButton, setActive] = useState(0)
    const dispatch = useDispatch()
    const clickHandler = useCallback((obj, number) => {
        dispatch(obj)
        setActive(number)
    }, [])
   

    useEffect(()=>{ 
        if (data){
            dispatch({
                type: "init",
                payload: data,
            }) 
        }
    },[data])
   
    const doctors = useSelector((state)=>{
        return state.docReducer.filtered
    })

    return (
        <div className="noteList">
            <div className="btn">
                <button onClick={() => { clickHandler({ type: "upcoming", payload: 1 }, 1) }}
                    className={activeButton === 1 ? "activeBtn" : null}>
                    {filterButtons.button1[lang]}
                </button>
                <button onClick={() => { clickHandler({ type: "passed", payload: 1 }, 2) }}
                    className={activeButton === 2 ? "activeBtn" : null}>
                    {filterButtons.button2[lang]}
                </button>
                <button onClick={() => { clickHandler({ type: "canceled", payload: 1 }, 3) }}
                    className={activeButton === 3 ? "activeBtn" : null}>
                    {filterButtons.button3[lang]}
                </button>
            </div>
            <div className="list">
                {
                    doctors.map((elem) => {
                        return <DoctorContent key={elem.id} doctor={elem} lang={lang} />
                    })
                }
            </div>
        </div>
    )
}
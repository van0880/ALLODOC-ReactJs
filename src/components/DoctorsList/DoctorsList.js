import { useCallback,  useContext,  useEffect,  useReducer, useState } from "react"
import DoctorContent from "./DoctorContent"
import { TranslateContext } from "../../contexts/TranslateContext"

const reducer = function (state, action) {
    const { type, payload } = action

    switch (type) {
        case "upcoming":
            return {
                ...state,
                filtered: state.all.filter((item)=>{
                    return new Date(item.near_date) < new Date() && item.near_date !== null
                })
            }
        case "passed":
            return {
                ...state,
                filtered: state.all.filter((item)=>{
                    return new Date(item.near_date) > new Date() && item.near_date !== null
                })
            }
        case "canceled":
            return {
                ...state,
                filtered: state.all.filter(item=>item.near_date === null)
            }
        case "init":
            return {
                    all: payload,
                    filtered: payload
                }
        default:
            return null
    }
}
export default function DoctorsList({ filterButtons, lang }) {
    const context = useContext(TranslateContext)
    const data = context[0].results
    const [activeButton, setActive] = useState(0)
    const clickHandler = useCallback((obj, number) => {
        dispatch(obj)
        setActive(number)
    }, [])

    const [state, dispatch] = useReducer(reducer, {all: [], filtered:[]})

    useEffect(()=>{
        if (data){
            dispatch({
                type: "init",
                payload: data,
            }) 
        }
    },[data])
    console.log(state)

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
                    state.filtered.map((elem) => {
                        return <DoctorContent key={elem.id} doctor={elem} lang={lang} />
                    })
                }
            </div>
        </div>
    )
}
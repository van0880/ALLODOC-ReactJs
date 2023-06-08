import { useContext } from "react"
import { TranslateContext } from "../../contexts/TranslateContext"
import Button from "../../components/Button/Button"
import BalanceHistory from "./BalanceHistory"
import './balance.css'

export default function Balance() {
    const context = useContext(TranslateContext)
    const titleText = context[0].balanceTitle
    const buttons = context[0].balanceButtons
    const data = context[0].balance
    const lang = context[1]
    return (
        <main>
            <div className="balance">
                <div className="container">
                    <h3 className="title">{titleText.title[lang]}</h3>
                    <div className="d-flex balanceTitle">
                        <h2>1058,68 &#8381;</h2>
                        <Button text={titleText.button[lang]} style={{ fontSize: "14px", padding: "13px 110px" }} />
                    </div>
                    <h5>{titleText.history[lang]}</h5>
                    <div className="btn balanceBtn">
                        <button>
                            {buttons.month[lang]}
                        </button>
                        <button>
                            {buttons.today[lang]}
                        </button>
                        <button>
                            {buttons.allTime[lang]}
                        </button>
                    </div>
                    <div className="allBalance">
                        {
                            data.map((elem, i) => {
                                return <BalanceHistory key={i} data={elem} lang={lang} />
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
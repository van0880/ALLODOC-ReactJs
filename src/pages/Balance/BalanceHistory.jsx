import { useTranslation } from "react-i18next"

export default function BalanceHistory({ data, i }) {
    const {t} = useTranslation()
    return (
        <div className="flex-between">
            <img src={data.img} alt="" />
            <span>{data.date}</span>
            <p>{t(`balanceData.${i}.status`)}</p>
            <h3 style={{ color: data.money > 0 ? "#219653" : "#EB5757" }}>
                {data.money > 0 ? "+" + data.money : data.money} &#8381;
            </h3>
        </div>
        
    )
}


export default function BalanceHistory({ data, lang }) {

    return (
        <div className="flex-between">
            <img src={data.img} alt="" />
            <span>{data.date}</span>
            <p>{data.status[lang]}</p>
            <h3 style={{ color: data.money > 0 ? "#EB5757" : "#219653" }}>
                {data.money > 0 ? "+" + data.money : data.money} &#8381;
            </h3>
        </div>
        
    )
}


import DoctorContent from "./DoctorContent"
import { useSelector } from "react-redux"
import { DoctorSelectors } from "../../store/selectors"
import FilteredButtons from "./FilteredButtons"

export default function DoctorsList({data}) {
    const doctors = useSelector(DoctorSelectors.filteredDoctors)
    return (
        <div className="noteList">
            <FilteredButtons data={data} />
            <div className="list">
                {
                    doctors.map((elem, i) => {
                        return <DoctorContent key={elem.id} doctor={elem} i={i} />
                    })
                }
            </div>
        </div>
    )
}
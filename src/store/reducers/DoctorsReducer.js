import { DoctorTypes } from "../types";

const init_state_docs = {all: [], filtered: []}


export default function DoctorsReducer(state = init_state_docs, action) {
    const { type, payload } = action
    switch (type) {
        case DoctorTypes.UPCOMING:
            return {
                ...state,
                filtered: state.all.filter((item) => {
                    return new Date(item.near_date) < new Date() && item.near_date !== null
                })
            }
        case DoctorTypes.PASSED:
            return {
                ...state,
                filtered: state.all.filter((item) => {
                    return new Date(item.near_date) > new Date() && item.near_date !== null
                })
            }
        case DoctorTypes.CANCELED:
            return {
                ...state,
                filtered: state.all.filter(item => item.near_date === null)
            }
        case DoctorTypes.INIT:
            return {
                all: payload,
                filtered: payload
            }
        default :
            return state

    }

}


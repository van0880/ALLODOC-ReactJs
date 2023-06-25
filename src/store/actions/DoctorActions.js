import { CANCELED, INIT, PASSED, UPCOMING } from "../types/DoctorTypes";

const upcomingDoctor = (payload)=>{
    return {
        type: UPCOMING,
        payload
    }
}
const passedDoctor = (payload)=>{
    return {
        type: PASSED,
        payload
    }
}
const canceledDoctor = (payload)=>{
    return {
        type: CANCELED,
        payload
    }
}
const initDoctor = (payload)=>{
    return {
        type: INIT,
        payload
    }
}

export {
    upcomingDoctor,
    passedDoctor,
    canceledDoctor,
    initDoctor
}
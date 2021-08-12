import axios from "axios"
import {GET_TRAINERS} from '../types'
import moment from "moment";

export const get_trainers = () => (dispatch) => {
    axios.get("http://127.0.0.1:8000/api/get_trainers")
    .then((res)=>{
        dispatch({
            type: GET_TRAINERS,
            payload: res.data
        });
    })
}
// export const get_hours = (date,trainer) => {
//     let data = {
//         "date": date,
//         "user": trainer
//     }
//     return axios.post("http://127.0.0.1:8000/api/training_by_day",data)  
//     .then(res => res.data)
//     .catch(err=> console.log("error"))
    
// }
export async function get_hours(date,trainer){
    let data = {
        "date": date,
        "user": trainer
    }
    return axios.post("http://127.0.0.1:8000/api/training_by_day",data)
    .then(response => {return response.data})
       
}
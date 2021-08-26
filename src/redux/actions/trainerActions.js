import axios from "axios"
import {GET_ALL_TRANSFORMATIONS, GET_PACKAGES, GET_THREETRANSFORMATIONS, GET_TRAINERS,ADD_EVENT_TO_PLAN} from '../types'
import moment from "moment";

export const get_trainers = () => (dispatch) => {
    axios.get("http://127.0.0.1:8000/api/get_trainers_with_image")
    .then((res)=>{
        dispatch({
            type: GET_TRAINERS,
            payload: res.data
        });
    })
}

export const get_packages = () => (dispatch) => {
    axios.get('http://127.0.0.1:8000/api/get_packages')
    .then((res)=>{
        dispatch({
            type: GET_PACKAGES,
            payload: res.data
        })
    })
}
export const get_threetransformations = () => (dispatch) => {
    axios.get('http://127.0.0.1:8000/api/get_three_transformations')
    .then((res)=>{
        dispatch({
            type: GET_THREETRANSFORMATIONS,
            payload: res.data
            
        })
    })
}

export const add_event_to_plan = (data) => (dispatch) =>{
    axios.post('http://127.0.0.1:8000/api/add_event_to_plan',data)
    .then((res)=>{
        alert("Na maila otrzymałeś potwierdzenie rezerwacji treningu")
        dispatch({
            type: ADD_EVENT_TO_PLAN
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const get_all_transformations = (path) => (dispatch) => {
    if(path === undefined){
        axios.get('http://127.0.0.1:8000/api/get_all_transformations?page=1')
        .then((res)=>{
            dispatch({
                type: GET_ALL_TRANSFORMATIONS,
                payload: res.data,
                next: res.data.next,
                previous: res.data.previous
            })
        })
    }else{ 
        axios.get(`${path}`)
        .then((res)=>{
            dispatch({
                type: GET_ALL_TRANSFORMATIONS,
                payload: res.data,
                next: res.data.next,
                previous: res.data.previous
            })
        })
    }
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
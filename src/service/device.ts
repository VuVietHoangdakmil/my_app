import axios from "axios";
import { API_DEVICE,API_DEVICE_PRARAM_ID } from "../util/configText";
import formatDefault from "../util/formatReponse";
import {ResBodyDevice}from "../database/Divice"
const getDevice = async()=>{
    const res = await axios.get(API_DEVICE);
    return formatDefault(res);
}
const AddDevice = (bodyRes:ResBodyDevice)=>{
    const res =  axios.post(API_DEVICE, bodyRes);
    return res
}
const UpdateDevice = (id:string, bodyRes:ResBodyDevice)=>{
    delete bodyRes.id
    const res =  axios.patch(API_DEVICE_PRARAM_ID(id), bodyRes);
    return res
}

export {getDevice,AddDevice,UpdateDevice}
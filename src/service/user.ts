import axios from "axios"
import { API_USER } from "../util/configText"
import formatDefault from "../util/formatReponse"
const getUser = async()=>{
  const res = await axios.get(API_USER)
  return formatDefault(res)
}
export {getUser}
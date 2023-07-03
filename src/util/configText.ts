const root = "https://quanlyxephang-591f7-default-rtdb.firebaseio.com/API"
export const API_USER = `${root}/users.json`
export const API_DEVICE=`${root}/divices.json`
export const API_DEVICE_PRARAM_ID :(id:string)=> string
 = (id)=> `${root}/divices/${id}.json`


// text
export const ADD_FORM = "addForm"
export const UPDATE_FORM = "updateForm"
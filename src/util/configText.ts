const root = "https://quanlyxephang-591f7-default-rtdb.firebaseio.com/API";
export const API_USER = `${root}/users.json`;
export const API_DEVICE = `${root}/divices.json`;
export const API_SERVICE = `${root}/services.json`;
export const API_SERVICE_DETAIL = `${root}/servicesDetail.json`;
export const API_DEVICE_PRARAM_ID: (id: string) => string = (id) =>
  `${root}/divices/${id}.json`;
export const API_SERVICE_PRARAM_ID: (id: string) => string = (id) =>
  `${root}/services/${id}.json`;

// text
export const ADD_FORM = "addForm";
export const UPDATE_FORM = "updateForm";
export const SEARCH_DEVICES = "searchDevices";
export const SEARCH_SERVERS = "searchServers";
export const STATUS_DONE = 1
export const STATUS_IN_PROGRESS =2
export const STATUS_ABSENT = 0
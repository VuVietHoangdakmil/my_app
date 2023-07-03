import React from 'react';
import { ADD_FORM } from '../../util/configText';
import FormDevice from '../../components/Form/FormDevice';
import LayoutContent from "../../components/layOut/layOutContent";
const Device: React.FC= ()=>{
    return(<LayoutContent 
    title='Quản Lý Thiết Bị'  
    Content={<FormDevice type={ADD_FORM}/>}/>)
}
export default Device;
import React from 'react';
import Searchs from '../../components/filters/search';
import ListDivice from '../../components/tables/ListDivice';
import LayoutContent from "../../components/layOut/layOutContent";
import BtnLinks from '../../components/buttons/remoteBtnAddtoLinks';
import {Router} from "../../Customrouter"
const Device: React.FC= ()=>{
    return(<LayoutContent 
    title='Danh Sách Thiết Bị' 
    Search={<Searchs/>} 
    Content={<ListDivice/>}
    BtnLinks={<BtnLinks name='Thêm Thiết Bị '  
    path={Router.Device.Add.pathName}/>}
    />
    )
}
export default Device;
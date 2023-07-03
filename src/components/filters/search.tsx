import React from "react";
import SelectFilter from "../remoteSelect/SelectFilter";
import { useAppDispatch,useAppSelector } from "../../redux/app/hook";
import { ChangeFilterActive } from "../../redux/fetures/device/diviceSlice";
const Searchs : React.FC=()=>{
  const data=[
    {label:"Tất Cả", value:"All"},
    {label:"Hoạt động", value:true},
    {label:"Ngưng Hoạt động", value:false},
  ]
  const dispath = useAppDispatch()
  const{ValueFilterActive} = useAppSelector(state=>state.deviceReducer)
    return<>
     {/* <p className="keyword">Từ khóa</p>
            <div className="find__input">
              <form>
                <input className="input" value="Nhập từ khóa" type="search" />
              </form>
            </div> */}
            <SelectFilter 
            label="Trạng thái hoạt động" 
            innitTialValue={ValueFilterActive} 
            options={data}
            onChange={(e:any)=>{dispath(ChangeFilterActive(e))}}
            />
    </>
}
export default Searchs
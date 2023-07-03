import {Select,Form} from "antd"
import React from "react"

type Options = {
    label: string
    value: string|boolean
   
}
type Props = {
   
    innitTialValue:string|boolean
    label:string
    options:Options[]
    onChange:any
}
const SelectFilter:React.FC<Props> = ({innitTialValue, label,options,onChange})=>{
    const onChangeFC =(e:any)=>{
        onChange(e)
    }
    return<Form.Item
            labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}
            label={ label}
            >
             <Select value={innitTialValue} options={options} onChange={onChangeFC}/>
            </Form.Item>
} 
export default SelectFilter

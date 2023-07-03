import React from 'react';

type  Propschild= {
  type: string
}

type Props ={
    title?:string
    Search?:React.ReactElement
    Content : React.ReactElement
    BtnLinks?: React.ReactElement
}
const Layout: React.FC<Props> =({title,Search,Content,BtnLinks})=>{
    return(
    <div className="table">
          <div className="table_top">
            <p className="list" style={{marginBottom:"16px"}}>{title}</p>
            <div className="find">
            {BtnLinks && BtnLinks} 
            {Search && Search}
            
            </div>
          </div>
          
          {Content}
                  
      </div>)
}
export default Layout
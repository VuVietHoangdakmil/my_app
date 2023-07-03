import { Routes, Route, Link, Navigate, useNavigate,useLocation } from "react-router-dom";
import React,{useEffect} from "react";
import Login from "./pages/auth/login";
import ForgotPass from "./pages/auth/forgotPass";
import ConfirmPassword from "./pages/auth/confirmPassword";
import ProfileInfo from "./pages/auth/profileInfo/ProfileInfo";
import RoleManage from "./pages/roleManagement/RoleManage";
import Addrole from "./pages/roleManagement/Addrole";
import Userlog from "./pages/userLog/Userlog";
import Listacc from "./pages/userManagement/Listacc";
import Addacc from "./pages/userManagement/Addacc";
import Report from "./pages/report/Report";
import ManagerNum from "./pages/ornumber/ManagerNum";
import NewNumber from "./pages/ornumber/NewNumber";
import DashboardDay from "./pages/dashboard/DashboardDay";
import DashboardWeek from "./pages/dashboard/DashboardWeek";
import DashboardMonth from "./pages/dashboard/DashboardMonth";
import LayoutMain from "../src/components/layOut/LayoutMain"
import DeviceList from "./pages/Device/List";
import DeviceAdd from "./pages/Device/Add";
import DeviceEdit from "./pages/Device/Edit";
import DeviceDetail from"./pages/Device/Detail";
import { ConfigProvider } from 'antd'
import './firebase/config/config'
import {useAppSelector} from "./redux/app/hook"
import {Router} from "./Customrouter"
function App() {
  const navigator = useNavigate()
  const {key,pathname} = useLocation()
  const {isLogin}  = useAppSelector(state=>state.LoginReducer)

  useEffect(()=>{
    if(!isLogin && pathname !== "/ForgotPass"){
      navigator('/Login')
    }
  },[isLogin,key])
  return (
    <ConfigProvider
          theme={{
            components: {
              Menu: {
                colorPrimary: '#0E7490',
              },
              Layout: {
                colorBgBody: '#FFFFFF',
                colorPrimary: '#0E7490',
              },
              Tooltip: {
                colorBgTextHover: '#0E7490',
              },
              // Button:{
              //   colorPrimary: '#ff9138',
              // }
            },
            token: {
              colorPrimary: '#ff9138',
              fontFamily: 'Roboto',
            },
          }}
        >
        
    <div className="App">
        
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />
         <Route path="/Menu" element={<LayoutMain/>} >
             <Route path="/Menu/DashboarDay" element={<DashboardDay />} />
             <Route path={Router.Device.List.pathName} element={<DeviceList/>} />
             <Route path={Router.Device.Add.pathName} element={<DeviceAdd/>} />
             <Route path={Router.Device.Edit.pathName} element={<DeviceEdit/>} />
             <Route path={Router.Device.Detail.pathName} element={<DeviceDetail/>} />
        </Route>
        
         <Route path="/ForgotPass" element={<ForgotPass />} />
        <Route path="/ConfirmPassword" element={<ConfirmPassword />} />
        <Route path="/ProfileInfo" element={<ProfileInfo />} />
        <Route path="/RoleManage" element={<RoleManage />} />
        <Route path="/Addrole" element={<Addrole />} />
        <Route path="/Userlog" element={<Userlog />} />
        <Route path="/Listacc" element={<Listacc />} />
        <Route path="/Addacc" element={<Addacc />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/ManagerNum" element={<ManagerNum />} />
        <Route path="/NewNumber" element={<NewNumber />} />
        <Route path="/DashboarDay" element={<DashboardDay />} />
        <Route path="/DashboarWeek" element={<DashboardWeek />} />
        <Route path="/DashboarMonth" element={<DashboardMonth />} />
      </Routes>
    </div>
    
     </ConfigProvider>
  );
}
export default App;

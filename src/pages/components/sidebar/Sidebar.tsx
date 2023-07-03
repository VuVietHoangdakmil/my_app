import React from "react";
import logo_Alta from "../../../assets/logoAlta.png";
import "./Sidebar.css";
import { Link } from "react-router-dom";
// icon sidebar
import dashboard from "./iconSidebar/dashboard.png";
import device from "./iconSidebar/device.png";
import service from "./iconSidebar/service.png";
import ordinal_number from "./iconSidebar/ordinal_number.png";
import report from "./iconSidebar/report.png";
import setting from "./iconSidebar/setting.png";
import btnlogout from "./iconSidebar/btn-logout.png";
import icondot from "./iconSidebar/icondot.png";
import { useAppDispatch } from "../../../redux/app/hook";
import  {singOut} from "../../../redux/fetures/login/loginSilce"
function Sidebar() {
  const dispatch = useAppDispatch();
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo_Alta} alt="" />
      </div>
      <div className="sidebar__menu">
        <ul className="sidebar__menu--list">
          <li>
            <div className="sidebar__icon">
              <img src={dashboard} alt="" />
            </div>
            <p className="sidebar__title">
              <Link to="/Menu/DashboarDay" className="btn-loginn">
                Dashboard
              </Link>
            </p>
          </li>
          <li>
            <div className="sidebar__icon">
              <img src={device} alt="" />
            </div>
             <Link to="/Menu/Device/List" className="btn-loginn">
              Thiết bị
              </Link>
           
          </li>
          <li>
            <div className="sidebar__icon">
              <img src={service} alt="" />
            </div>
            <p className="sidebar__title">Dịch vụ</p>
          </li>
          <li>
            <div className="sidebar__icon">
              <img src={ordinal_number} alt="" />
            </div>
            <p className="sidebar__title">
              <Link to="/ManagerNum" className="btn-loginn">
                Cấp số
              </Link>
            </p>
          </li>
          <li>
            <div className="sidebar__icon">
              <img src={report} alt="" />
            </div>
            <p className="sidebar__title">
              <Link to="/Report" className="btn-loginn">
                Báo cáo
              </Link>
            </p>
          </li>
          <li>
            <div className="sidebar__icon--left">
              <img src={setting} alt="" />
            </div>
            <p className="sidebar__title">Cài đặt hệ thống</p>
            <div className="sidebar__icon--left">
              <img src={icondot} alt="" />
            </div>
          </li>
        </ul>
      </div>
      <div className="sidebar__btn--logout" onClick={()=>{
          dispatch(singOut())
        }}>
        <div className="sidebar__btn--logout_icon">
          <img src={btnlogout} alt="" />
        </div>
        <div className="sidebar__btn--logout_title" >
           Đăng xuất
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

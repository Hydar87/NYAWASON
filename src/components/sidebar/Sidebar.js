import "./Sidebar.css";
import avatar from "../../assets/avatar.png";

const Sidebar = ({ sidebarOpen, openSidebar }) => {
    return (
        <div className = {sidebarOpen? "sidebar-responsive" : ""} id = "sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={avatar} alt="avatar"/>
                    <h1>Codersbite</h1>
                </div>
                <i className="fa fa-times" id="sidebarIcon" onClick = {()=> openSidebar()}></i>

            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2>MANAGE</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">Admin management</a>

            </div>
            <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Company management</a>
        </div>
        <div className="sidebar__link">
            <i className="fa fa-wrench"></i>
            <a href="#">Empoloyee management</a>
        </div>
        <div className="sidebar__link">
            <i className="fa fa-archive"></i>
            <a href="#">Warehouse</a>
            </div>
            <div className = "sidebar__link">
                <i className="fa fa-handshake-o"></i>
                <a href="#">Contacts</a>
            </div>
            <h2>LEAVE</h2>
            <div className = "sidebar__link">
                <i className="fa fa-question"></i>
                <a href="#">Requests</a>
                </div>

                <div className = "sidebar__link">
                <i className="fa fa-sign-out"></i>
                <a href="#">leave policy</a>
                </div>
                <div className = "sidebar__link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="#">Special Day</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-files-o"></i>
                    <a href="#">Apply for leave</a>
                </div>

                <h2>PAYROLL</h2>
                <div className="sidebar__link">
                    <i className="fa fa-cc-money"></i>
                    <a href="#">Payroll</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-driefcase"></i>
                    <a href="#">Paygrade</a>
                </div>

                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">log out</a>
                    
               </div>

        </div>

        </div>
    )
}

export default Sidebar;
/*
import { useState } from "react";

const App = ()=> {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = ()=>{
      setSidebarOpen(true);
  }

  const closeSidebar = ()=>{
    setSidebarOpen(false)
  }
  return (
    <div className="container">
      < navbar sidebarOpen = {sidebarOpen} openSidebar = {openSidebar} />
      <h1>My dashboard</h1>
    </div>
  );
}

export default App;

*/

import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./main/Main";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <Sidebar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      
    </div>
  );
};

export default App;

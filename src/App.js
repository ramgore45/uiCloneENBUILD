import { useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [darkMode,setDarkMode] = useState(false)

  function toggle(){
    setDarkMode(!darkMode)
  }

  return (
    <div  className={`${darkMode ? "dark " : ""}`}>
      <div className="flex h-fit relative">
        <div className="min-w-[17%] h-screen fixed bg-white dark:bg-neutral-800 dark:text-neutral-300 transition duration-300">
          <Sidebar/>
        </div>
        <div className="w-fit h-full absolute left-[17%]">
          <Navbar darkMode={darkMode}/>
          <Home toggle={toggle} darkMode={darkMode}/>
        </div>
      </div>
    </div>
  );
}

export default App;

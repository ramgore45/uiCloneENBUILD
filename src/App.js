import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div >
      <div className="flex h-fit relative">
        <div className="w-[17%] h-screen fixed ">
          <Sidebar/>
        </div>
        <div className="w-[83%] h-full absolute left-[17%]">
          <Navbar/>
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;

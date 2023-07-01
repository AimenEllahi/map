import logo from "./logo.svg";
import "./App.css";
import DisplayPoints from "./Components/DisplayPoints";
import SearchBar from "./Components/SearchBar";
import Sidebar from "./Components/SideBar";
import HoverInfo from "./Components/HoverInfo";

function App() {
  return (
    <>
      <SearchBar />
      <div className='App'>
      <Sidebar />
      <DisplayPoints />
      </div>
      {/* <HoverInfo /> */}
    </>
  
  );
}

export default App;

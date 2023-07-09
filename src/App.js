import logo from "./logo.svg";
import "./App.css";
import DisplayPoints from "./Components/DisplayPoints";
import SearchBar from "./Components/SearchBar";
import Sidebar from "./Components/SideBar";
import ExpandedInfo from "./Components/ExpandedInfo";

function App() {
  return (
    <>
      <SearchBar />
      <div className='App'>
      <Sidebar />
      <DisplayPoints />
      </div>
   
    </>
  
  );
}

export default App;

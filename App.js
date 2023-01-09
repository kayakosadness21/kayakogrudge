import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
    //  Cấu hình lắp đặt đường link route  
function App() {
  return ( 
    <BrowserRouter >
    <div> 
      <Navbar />
      <Header/> 
      </div>  
      {/* Đường link tới các đường dân homepage, danh sách và chỗ ở */}
      <Routes>   
        <Route path="/" element={<Home/>}/>     
        <Route path="/hotels" element={<List/>}/>   
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>   
  );
}

export default App;

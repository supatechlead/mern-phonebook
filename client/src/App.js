import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneBookList from "./Components/PhoneBookList";
import PhoneBookAdd from "./Components/PhoneBookAdd";
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/add-phone" element={<PhoneBookAdd/>}/>
        <Route exact path="/" element={<PhoneBookList/>}/>
        
      </Routes>
    </BrowserRouter>
  )
  }

export default App;

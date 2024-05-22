import './App.css'
import Menu from './menu.jsx';
import Home from './home.jsx';
import {
  BrowserRouter,Routes,Route
} from "react-router-dom";
import Sine from './sineup/sine.jsx';
import Sell from './sell/sell.jsx';

export default function App() {
  const title={
    0: {
      name: "login", 
      action: "/", 
    },
    1: {
      red: "", 
      blue: "", 
    }, 
  }
  return (
    <main>
     <Menu/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sineup" element={<Sine title={JSON.stringify(title)}/>}/>
          <Route path="/sell" element={<Sell/>}/>
        </Routes>
      </BrowserRouter>
     
    
    </main>
  )
}

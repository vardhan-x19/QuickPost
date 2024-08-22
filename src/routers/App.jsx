
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Comp/Header';
import Footer from '../Comp/Footer';
import SideBar from '../Comp/SideBar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css'
import Fetch from "../Comp/Fetch";

function App() {
  let[items,setItems]=useState("Home");
  return (
    <>
     <div className='app-container'>
      <div></div>

     <SideBar setItems={setItems} item={items}></SideBar>
     <div className='content'>
     <Header className='header'></Header>
     <Fetch></Fetch>
     <Outlet></Outlet>
     <Footer></Footer>
     </div>
    </div>
    </>
  )
}

export default App

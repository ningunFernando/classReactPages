import { Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import ContentPage from "../pages/ContentPage"

const AppRouter = () => {
  return <>
  <Navbar/>
  <Routes>
        <Route path = "/*" element = {<HomePage/>}/> 
        <Route path = "/home" element = {<HomePage/>}/> 
        <Route path = "/about" element = {<AboutPage/>}/> 
        <Route path = "/Content" element = {<ContentPage/>}/> 

  </Routes>
  </>
}

export default AppRouter

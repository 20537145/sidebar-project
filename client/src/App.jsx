import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NavLayout from "./components/NavLayout";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import Register from "./pages/Register";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import { FAQ } from "./pages/FAQ";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Help from "./pages/Help";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Projects from "./pages/Projects";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<SideBar/>}>
  {/* <Route path="/" element={<NavLayout/>} > */}
    <Route index element={<Home/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='profile' element={<Profile/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="FAQ" element={<FAQ/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="courses" element={<Courses/>}/>
    <Route path="help" element={<Help/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="settings" element={<Settings/>}/>
    <Route path="projects" element={<Projects/>}/>
  </Route>
  // </Route>
))
function App() {
  return <>
  <RouterProvider router={router} />
  </>;
}

export default App;

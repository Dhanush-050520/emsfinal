
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
import Empdetails from "./Empdetails";
import Addemp from "./Addemp";
import Logout from "./Logout";
import Edited from "./Edited";
import View from "./View";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="empdetails" element={<Empdetails />} />
            <Route path="addemp" element={<Addemp />} />
            <Route path="logout" element={<Logout />} />
            <Route path="empdetails/edit/:id" element={<Edited/>}/>
            <Route path="empdetails/view/:id" element={<View/>}/>
           
          </Route>
          <Route path="/logout" element={<Logout/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

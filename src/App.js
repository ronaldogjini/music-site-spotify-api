import "./App.css";

import { BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";

import Navbar from "./components/Nav/Navbar";
import RouteSwitcher from "./utils/RouteSwitcher";

import { tokenAction } from "./store/actions";
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(tokenAction())
  }, []);

  return (
    <div className="App bg-gray-100 ">
      <BrowserRouter>
        <Navbar />
        <RouteSwitcher />
      </BrowserRouter>
    </div>
  );
}

export default App;




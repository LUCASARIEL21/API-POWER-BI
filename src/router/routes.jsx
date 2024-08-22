import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp;

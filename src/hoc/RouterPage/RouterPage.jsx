import React from 'react';
import {Outlet,Route, Routes} from "react-router-dom";



const RouterPage = ({path, data}) => {
  return (
    <Routes  element={<Outlet/>}>
      <Route index element={<PageMain data={data} /> }/>
    </Routes>
  );
};

export default RouterPage;

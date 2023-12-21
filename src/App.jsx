import React from 'react';
import MainPage from "./Page/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import {listLink} from './Data/ListLink/ListLink'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainPage listLink={listLink}/>}/>
      </Routes>
    </div>
  );
};

export default App;

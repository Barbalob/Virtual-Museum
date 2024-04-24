import React from 'react';
import { useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Main from './Page/Main';
import Page1 from './Page/Page1';
import Page2 from './Page/Page2';
import Bibliography from './Page/Bibliography';
import PageMain from './Page/PageMain';
import { Test_of_Faith } from './data/Test_of_Faith/Test_of_Faith';

import RouterPage from './hoc/RouterPage/RouterPage';
import ScrollTop from './hoc/ScrollTop/ScrollTop';

const App = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);


  return (
    <>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bibliography/ru" element={<Bibliography type='ru'/>} />
        <Route path="/bibliography/gb" element={<Bibliography type='gb'/>} />
        <Route path='/test-of-faith' element={<Outlet/>}>
          <Route index element={<PageMain data={Test_of_Faith} /> }/>
          <Route path=':type/:id' element={<Page1  data={Test_of_Faith}/> }/>
          <Route path=':type/:id/:subid' element={<Page2 data={Test_of_Faith}/> }/>
        </Route>
      </Routes>

      {/* <PageMain /> */}
      {/* */}
      {/* <Main />
      <Page2 type='Россия'/>
      <Bibliography type='Россия '/> */}
    </>
  );
};

export default App;

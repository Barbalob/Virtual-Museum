import React from 'react';
import { useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Main from './Page/Main';
import Page1 from './Page/Page1';
import Page2 from './Page/Page2';
import AboutUs from './Page/AboutUs';
import Bibliography from './Page/Bibliography';
import PageMain from './Page/PageMain';
import { Test_of_Faith } from './data/Test_of_Faith/Test_of_Faith';
import { Borders_and_Repr } from './data/Borders_and_Repr/Borders_and_Repr';
import { Subjugation_of_nature} from './data/Subjugation_of_nature/Subjugation_of_nature';
import { Birth_of_the_State} from './data/Birth_of_the_State/Birth_of_the_State';
import { Eradication_of_vices} from './data/Eradication_of_vices/Eradication_of_vices';
import { Understanding_life_and_death} from './data/Understanding_life_and_death/Understanding_life_and_death';
import { Raising_a_new_Man} from './data/Raising_a_new_Man/Raising_a_new_Man';
import { Empire_Building} from './data/Empire_Building/Empire_Building';

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
        <Route path="/about" element={<AboutUs />} />
        <Route path="/bibliography/ru" element={<Bibliography type='ru'/>} />
        <Route path="/bibliography/gb" element={<Bibliography type='gb'/>} />
        <Route path='/test-of-faith' element={<Outlet/>}>
          <Route index element={<PageMain data={Test_of_Faith} /> }/>
          <Route path=':type/:id' element={<Page1  data={Test_of_Faith}/> }/>
          <Route path=':type/:id/:subid' element={<Page2 data={Test_of_Faith}/> }/>
        </Route>
        <Route path='/space-life-knowledge' element={<Outlet/>}>
          <Route index element={<PageMain data={Borders_and_Repr} /> }/>
          <Route path=':type/:id' element={<Page1  data={Borders_and_Repr}/> }/>
          <Route path=':type/:id/:subid' element={<Page2 data={Borders_and_Repr}/> }/>
        </Route>
        <Route path='/subjugation-of-nature' element={<Outlet/>}>
          <Route index element={<PageMain data={Subjugation_of_nature} /> }/>
          <Route path=':type/:id' element={<Page1  data={Subjugation_of_nature}/> }/>
          <Route path=':type/:id/:subid' element={<Page2 data={Subjugation_of_nature}/> }/>
        </Route>
        <Route path='/birth-of-the-state' element={<Outlet/>}>
          <Route index element={<PageMain data={Birth_of_the_State} /> }/>
          <Route path=':type/:id' element={<Page1  data={Birth_of_the_State}/> }/>
          <Route path=':type/:id/:subid' element={<Page2 data={Birth_of_the_State}/> }/>
        </Route>
        <Route path='/eradication-of-vices' element={<Outlet/>}>
          <Route index element={<PageMain data={Eradication_of_vices} /> }/>
          <Route path=':type/:id' element={<Page1  data={Eradication_of_vices}/> }/>
          <Route path=':type/:id/:subid' element={<Page2 data={Eradication_of_vices}/> }/>
        </Route>
        <Route path='/understanding-life-and-death' element={<Outlet/>}>
          <Route index element={<PageMain data={Understanding_life_and_death} /> }/>
          <Route path=':type/:id' element={<Page1  data={Understanding_life_and_death}/> }/>
          <Route path=':type/:id/:subid' element={<Page2 data={Understanding_life_and_death}/> }/>
        </Route>
        <Route path='raising-a-new-man' element={<Outlet/>}>
          <Route index element={<PageMain data={Raising_a_new_Man} /> }/>
          <Route path=':type/:id' element={<Page1  data={Raising_a_new_Man}/> }/>
          <Route path=':type/:id/:subid' element={<Page2 data={Raising_a_new_Man}/> }/>
        </Route>
        <Route path='empire-building' element={<Outlet/>}>
          <Route index element={<PageMain data={Empire_Building} /> }/>
          <Route path=':type/:id' element={<Page1  data={Empire_Building}/> }/>
          <Route path=':type/:id/:subid' element={<Page2 data={Empire_Building}/> }/>
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

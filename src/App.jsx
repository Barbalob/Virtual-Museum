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
  const bibliographyList = [
    'Анисимов Е. В. Петр Великий. Личность и реформы. СПб. : Питер, 2009.',
    'Баталов А. Л., Беляев Л. А. Сакральное пространство средневековой Москвы. М. : Дизайн. Информация. Картография, 2010.',
    'Богданов А. П. Московская публицистика последней четверти XVII века. М. : Ин-т российской истории РАН, 2001.',
    'Бугров К. Д., Киселев М. А. Естественное право и добродетель. Интеграция европейского влияния в российскую политическую культуру XVIII в. Екатеринбург : Изд-во Урал. ун-та : Университет. изд-во, 2016.',
    'Валькова О. А. Штурмуя цитадель науки. М. : Новое лит. обозрение, 2018.',
    'Вишленкова Е. А. Визуальное имперское народоведение, или «Увидеть русского дано не каждому». М. : Новое лит. обозрение, 2011.',
    'Воскресенский Н. А. Петр Великий как законодатель. Исследование законодательного процесса в России в эпоху реформ первой четверти XVIII века / науч. ред. и вступ. ст. Д. О. Серова. М. : Новое лит. обозрение, 2017.',
    'Границы и маркеры социальной стратификации России XVII–XX вв.: векторы исследования / под ред. Д. А. Редина. СПб. : Алетейя, 2018.',
    'Елеонская А. С. Русская ораторская проза в литературном процессе XVII века. М. : Наука, 1990.',
    'Живов В. М. Из церковной истории времен Петра Великого: Исследование и материалы. М. : Новое лит. обозрение, 2004.',
    'Журавель О. Д. Литературное творчество старообрядцев XVIII – начала XXI в.: темы, проблемы, поэтика. Новосибирск : Изд-во СО РАН, 2012.',
    'Из истории русской культуры. Т. 3 (XVII – начало XVIII века). 2-е изд. М. : Языки русской культуры, 2000.',
    'Кивельсон В. Картографии царства: Земля и ее значения в России XVII века. М. : Новое лит. обозрение, 2012.',
    'Киселев М. А., Кочегаров К. А., Лазарев Я. Л. Патроны, слуги и друзья. Русско-украинские неформальные связи и управление Гетманщиной в 1700–1760-х гг. Исследование и источники. Екатеринбург : Изд-во Урал. ун-та, 2022.',
  ]

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
        <Route path="/bibliography/ru" element={<Bibliography bibliographyList={bibliographyList} type='ru'/>} />
        <Route path="/bibliography/gb" element={<Bibliography bibliographyList={bibliographyList}  type='gb'/>} />
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

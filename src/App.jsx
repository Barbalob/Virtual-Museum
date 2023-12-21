import React from 'react';
import MainPage from "./Page/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import SpaceLifeKnowledge from "./Page/SpaceLifeKnowledge/SpaceLifeKnowledge";
import Cards from "./Page/Cards/Cards";
import SectionScreen from "./Page/SectionScreen/SectionScreen";
import {listLink} from './Data/ListLink/ListLink'
import RouterPage from "./hoc/RouterPage/RouterPage";
import {spaceLifeKnowledge} from "./Data/spaceLifeKnowledge/spaceLifeKnowledge";
import {test} from "./Data/Test/Test";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainPage listLink={listLink}/>}/>
      </Routes>

      <RouterPage data={spaceLifeKnowledge}/>
      <RouterPage data={test}/>
    </div>
  );
};

export default App;

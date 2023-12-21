import React from 'react';
import {Route, Routes} from "react-router-dom";
import SpaceLifeKnowledge from "../../Page/SpaceLifeKnowledge/SpaceLifeKnowledge";
import SectionScreen from "../../Page/SectionScreen/SectionScreen";
import {listLink} from "../../Data/ListLink/ListLink";
import {sectionsScreenPage} from "../../Data/spaceLifeKnowledge/sectionsScreenPage";
import Cards from "../../Page/Cards/Cards";

const RouterPage = (props) => {
  const head = '/' + props.data.href
  console.log(head)
  return (
    <Routes>
      <Route path={head} element={<SpaceLifeKnowledge listLink={listLink} head={head} data={props.data.mainPage}/>}/>
      <Route path={head+'/sections-screen'} element={<SectionScreen listLink={listLink} head={head} data={props.data.sectionsScreenPage}/>}/>
      <Route path={head + '/cards'} element={<Cards  head={head} data={props.data.sectionsScreenPage}/>}/>
    </Routes>
  );
};

export default RouterPage;

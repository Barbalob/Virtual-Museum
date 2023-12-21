import {listSubsectionRu} from "./listSubsectionRu";
import {listSubsectionEn} from "./listSubsectionEn";

export const sectionsScreenPage = {
  title:'test',
  subTitle:'test',
  ru:{
    srcImg:'./assets/emblems/emblem1.png',
    titleImg:'Герб Российской Империи',
    description:'Lorem ipsum',
    listSubsection: listSubsectionRu
  },
  en:{
    srcImg:'./assets/emblems/emblem2.png',
    titleImg:'Герб Британской Империи',
    description:'Lorem',
    listSubsection: listSubsectionEn
  }
}

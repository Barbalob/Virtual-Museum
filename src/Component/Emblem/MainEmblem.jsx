import React from 'react';


const MainEmblem = (props) => {

  const listEmblem = props.data
    ? props.data
    :
    [
      {src:'./assets/emblems/emblem1.png', text:'Герб Российской Империи'},
      {src:'./assets/emblems/emblem2.png', text:'Герб Британской Империи'},
    ]

  let mainCls;
  let wrapperCls;
  let imgCls;
  let textCls;

  if (props.type==='main'){
    mainCls = 'main__emblem'
    wrapperCls = 'emblem-wrapper'
    imgCls = 'emblem-img'
    textCls = 'emblem-text'
  }
  else {
    mainCls = 'choiceStat'
    wrapperCls = 'emblem-wrapper-2'
    imgCls = 'emblem-img-2'
    textCls = 'emblem-text-2'
  }

  return (
    <div className={mainCls}>
      <div className={wrapperCls}>
        {listEmblem.map((el,index)=>
          (
            <figure key={index}>
              <img className={imgCls} src={el.src} alt=""/>
              <figcaption className={textCls}>
                {el.text}
              </figcaption>
            </figure>
          )
        )}
      </div>
    </div>
  );
};

export default MainEmblem;

import {ActiveRouter} from './ActiveRouter';
import {routerList} from './router-list';
export class Router{
  constructor(selector) {
    if (!selector){
      throw new Error('Not selector')
    }

    this.selector = selector

    this.changePageHandler =  this.changePageHandler.bind(this)
    ActiveRouter.navigate('main-page')
    this.init()
  }

  init(){
    window.addEventListener('hashchange', this.changePageHandler)
    this.changePageHandler()
  }

  changePageHandler(){
    const app = document.querySelector(this.selector)

    switch(ActiveRouter.path) {
        case 'main-page':
            app.innerHTML = routerList['main-page']
            break
      
        case 'space-life-knowledge':
            app.innerHTML = routerList['space-life-knowledge']
            break
        case 'section-screen-rus':
            app.innerHTML = routerList['section-screen-rus']
            break
        case 'section-screen-en':
            app.innerHTML = routerList['section-screen-en']
            break
        case 'cards-rus':
            app.innerHTML = routerList['cards-rus']
            break
        case 'cards-en':
            app.innerHTML = routerList['cards-en']
            break
            
            
      
        default:
            app.innerHTML = routerList['main-page']
            break
    }
    window.scroll(0, 0);


    console.log(ActiveRouter.path);
    
  }

  destroy(){
    window.removeEventListener('hashchange', this.changePageHandler)
  }
}

import style from '../styles/Home.module.css'
import {Toolbar} from '../components/toolbar'
import Footer from '../components/footer';

export default function Home() {

  return (
    
          <div className='page-conatiner'>
          <Toolbar/>
            <div className={style.main}>
              <h1>App de Notícias </h1>
              <p>sua única loja para os artigos de notícias</p>
              <Footer/> 
            </div>
          </div>
  );
}


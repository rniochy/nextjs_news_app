import {useRouter} from 'next/router'
import style from '../styles/Toolbar.module.css'

export  const Toolbar = () => {
    const router  = useRouter();
    
    return (
        <div className={style.main}>
            <div onClick={()=>router.push('/') }>Home</div>

            <div onClick={()=>router.push('/feed/1') }> Feed </div>

            <div onClick={()=>router.push('/eom')}>EDM</div>
            
            <div onClick={()=> window.location.href = 'https://www.github.com/rniochy'}>Github</div>
        </div>
    );

}


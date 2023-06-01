import style from '../Styles/banner.module.css'
import imgg from '../pngwing.com.png'
 export default function(){
    return(<div className={style.main}>
        <img src={imgg} alt='logo'/>
        <h1>Tv shows</h1>
    </div>)
 }
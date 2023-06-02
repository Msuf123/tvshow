import { useNavigate } from 'react-router-dom'
import style from '../Styles/options.module.css'
import { useEffect } from 'react';

export default function Options(props) {
   // console.log(props)
    const navigate=useNavigate()
    
    const handleClick = (event, key) => {
        
        //console.log('key index: ', key);
        props.setId(key)
        navigate('/info')
        
      };
    return (
        <div className={style.main}>
            {props.res.map((i,key)=>{
        
        // const img=`${props.res[props.res.indexOf(i)].show.image.medium}`
        
         return(<div className={style.cards} key={props.res.indexOf(i)}>
         <img src={props.res[props.res.indexOf(i)].show.image.medium}></img>
        <div className={style.footer}>

         <h3>Name:{props.res[props.res.indexOf(i)].show.name}</h3>
         <div className={style.extra}>
         <h5>{props.res[props.res.indexOf(i)].show.language}</h5>
         <h5>Rating:{props.res[props.res.indexOf(i)].show.rating.average?props.res[props.res.indexOf(i)].show.rating.average:" ?"}</h5>
         </div>
         <button   
         onClick={event => handleClick(event, key)}>Watch</button>
        
         </div>
     </div>)
            })}
            
            

        </div>
    )
}
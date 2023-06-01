import { useNavigate } from 'react-router-dom'
import style from '../Styles/info.module.css'
import { useState } from 'react'

export default function Info(props){
    
    const navigate=useNavigate()
    const imgg=`${props.res[props.id].show.image.medium}`
    function change(){
        navigate('/info/book')
    }
    const data=props.res[props.id].show.summary
    return (
        <div className={style.main}>
         <div className={style.header}>
         <div className={style.text} tabIndex={1} onClick={()=>{navigate('/')}}>
            <span>&larr;</span></div>
         </div>
         <div className={style.info}>
            <div className={style.image}>
            <img src={imgg}></img>
            </div>
            
              <div className={style.detail}>
<h1>{props.res[props.id].show.name}</h1>

             <div dangerouslySetInnerHTML={{__html: data}} className={style.para}></div>
             <div className={style.extra}>
             <h3>Country:{props.res[props.id].show.network.country.name}</h3>
             <h3>Schedule:{props.res[props.id].show.schedule.time}</h3>
             <div className={style.days}>
             {props.res[props.id].show.schedule.days.map((i)=>{
                return(
                    <div className={style.ans}>
                      <h3>{i}</h3>
                    </div>
                )
             })}
             </div>
             </div>
              <button onClick={change}>Watch</button>
              </div>
         </div>
         
        </div>
    )
}
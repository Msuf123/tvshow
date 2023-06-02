import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import {useRef, useState} from 'react';
import style from '../Styles/popup.module.css'
export default function (props){
    const navigate=useNavigate()
    const [emailError, setEmailError] = useState('')
    const [ans,setAns]=useState('')
    
    const validateEmail = (e) => {
      var email = e.target.value
    
      if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
        setAns(email)
      } else {
        setEmailError('Enter valid Email!')
      }
    };
    return(
        <div className={style.main}>
            <div className={style.header}>
                <span tabIndex={2} onClick={()=>{navigate('./')}}>&#10005;</span>
            </div>
         <h1>Booked for:{}</h1>
         <div className={style.inputt}>
         <span>Enter Email: </span><input type="text" id="userEmail" 
        onChange={(e) => validateEmail(e)}></input> <br />
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
        </div>
        <button className={style.footerr} onClick={()=>{
            
           sessionStorage.setItem('email',ans);
            alert(sessionStorage.getItem('email'))
        }}>
        Submit
        </button>
        </div>
    )
}
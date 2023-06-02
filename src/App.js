import Banner from './Components/Banner';
import Skeleton from './Components/Skeleton';
import './App.css';
import Popup from './Components/Popup'
import { useEffect, useState } from 'react';
import Options from './Components/Option';
import Info from './Components/Info';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const[res,setRes]=useState('');
  const[id,setId]=useState()
  useEffect(()=>{
    fetch('https://api.tvmaze.com/search/shows?q=all').then((a)=>{
      if(a.ok){
       // console.log('done')
        return a.json()
      }
      else{
        throw Error('An error occured')
      }
    }).then((res)=>{
      //console.log(res)
      setRes(res)
    })
  },[])







  return (
  <BrowserRouter>
    <Routes>
      <Route  exact path='/' element={<div className='mainn'>
    <Banner/>
    {res?<Options res={res} setId={setId}/>:<Skeleton/>}
    </div>}></Route>
      <Route  exact path='/info' element={<Info res={res} id={id}/>}>
      <Route exact path='book' element={<Popup/>}></Route>
      </Route>
      
      </Routes>
      <Popup/>
    </BrowserRouter>
    
    
  );
}


export default App;

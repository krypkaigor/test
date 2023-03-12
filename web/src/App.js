import React, { useState } from "react"
import User from './Components/User.jsx'
import Image from './Components/Image';
import {Route, Routes} from "react-router";
import { Link } from 'react-router-dom';

const App = () =>  {
const [name,setName]=useState('')
const [image,setImage]=useState('')


const FirstHandler=(e)=>{
setName(e.target.value)
}
const SecondHandler=(e)=>{
  setImage(e.target.value)
}

    return (
        <div>
            <Routes>
                <Route path="/image" element={ <Image lastname={name}/>}/>
                <Route path="/user" element={   <User name={image} />}/>
            </Routes>


            <Link to="/image">image</Link>
            <br/>
            <Link to="/user">user</Link>

            <br/>
        <input onChange={FirstHandler} value={name} placeholder="NAME"/>
      
        <input onChange={SecondHandler} value={image} placeholder="IMAGE"/>

        <div>
            <button onClick={()=>{
              alert('Name:'+name+' Image:'+image)
              setImage('')
              setName('')
            }} >Click</button>
            <button onClick={()=>{alert('нопка клікнута')}}>New button</button>
        </div>
        </div>
    );
}


export default App;

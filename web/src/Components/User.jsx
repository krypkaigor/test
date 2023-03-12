import React, {useState} from "react";
import S from './Styles.module.css'

const User = (props) => {
    const [name,setName]=useState('')

    const [lastname,setLastname]=useState('')

    const [imgSrc,setImgSrc]=useState('')

    const [UserArray,setUserArray]=useState([])


    const ArrayHandler=()=>{
        setUserArray([...UserArray,{name:name,lastname:lastname,imgSrc:imgSrc}])
    }
console.log(UserArray)
    return (
        <div className={S.content}>
            <div>
                <input onChange={(e)=>{setName(e.target.value)}} value={name}/>
            </div>
            <div>
                <input onChange={(e)=>{setLastname(e.target.value)}} value={lastname}/>
            </div>
            <div>
                <input onChange={(e)=>{setImgSrc(e.target.value)}} value={imgSrc}/>
            </div>
            <div>
                <button onClick={ArrayHandler}>Add user</button>
            </div>


            {UserArray.map(u=><div>
                <img src={`${u.imgSrc}`}/>
                <div>{u.name}</div>
            <div>{u.lastname}</div>
            </div>)}

        </div>
    );
}
export default User;
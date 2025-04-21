
import { useState } from 'react'
import { Button, Grid, List, TextField } from '@mui/material'
import { Margin, PaddingRounded } from '@mui/icons-material'
import {ListItem, 
  ListItemText, 
  InputBase, 
  Checkbox} from '@mui/material'
//shoeHide 컴포넌트 만들기
//버튼이 있다. '숨기기' , '보이기' 변경
// Hello, REact 
//버튼 누르면 문장이 보였다 안보였다.
let Exam= () =>{
  const[ isVisible , setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  }
  let [sentense,setSentense] = useState("Hello, React");
  /*let [hide,setHide] = useState("숨기기");
  let handleClick = () =>{
    if(hide=="숨기기"){
      setSentense("");
      setHide("보이기");
    }else if(hide=="보이기"){
      setSentense("Hello, React");
      setHide("숨기기");
    }
  }*/
  return(
    <div>
      <h1 id="p_id">
        {isVisible && sentense}
      </h1>
      <button onClick={toggleVisibility} >
        {isVisible ? '숨기기' : '보이기'}
      </button>
    </div>
  )
} 

//컴포넌트 명 sol1
export const Sol1 = () =>{
  
  const [eating, setEating]= useState(['초콜릿','사탕']);
  const [value, setValue]= useState("");

  const inputHandler = (e) =>{
    setValue(e.target.value);
  }
  const clickHandler = () =>{
    setEating(prev => [value,...prev]);
    
  }

  return(
    <div>

    <input  onChange={inputHandler}/>

    <button onClick={clickHandler}>추가</button>
    <ul>
      {eating.map((item,idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
    </div>
    
  )

}

export {Exam}
export default Sol1;
import {useEffect, useRef,useState} from 'react'
//useRef() 훅
//변경 가능한 객체 하나를 생성
//반환된 객체는 {current : 값}형태이고, 컴포넌트의 전체 생명주기동안
//같은 객체를 유지한다.

//const refContainer = useRef(0);
//const refCOntainer = {current : 0};

//주요 특징 
//1. 값 저장
//렌더링 사이에 값을 저장해두고 싶을 때 사용한다.
//값이 바뀌어도 리렌더링을 발생시키지 않는다. 

//2. DOM접근
//jsx로 작성한 요소를 ref속성으로 연결해주면, 해당 DOM노드에
//직접 접근 할 수 있다

export const Counter_ref = () =>{
  const countRef = useRef(0);
  const onClick = () =>{
    countRef.current+=1;
    console.log(`현재 카운트 : ${countRef.current}`)
  }
  return(
    <div>
      <h1>{countRef.current}</h1>
      <button onClick={onClick}>증가</button>
      <h1></h1>
    </div>
  )
}

//DOM 접근 예시
export const InputFocus =()=>{
  //inputEl = {current:<input ref={inputEl} placeholder='여기에 입력하기'/>};
  const inputEl = useRef(null);

  useEffect(()=>{
    //화면이 렌더링되면 input 태그에
    //focus를 줘서 바로  입력하게 하고싶다.
    inputEl.current.focus();
  },[])

  return(
    <div>
      <input ref={inputEl} placeholder='여기에 입력하기'/>
    </div>
  )
}

//InputSample 
//이름과 닉네임을 입력하는 필드를 만들기
//이름과 닉네임을 입력하면 밑에 띄우기 
//초기화 버튼, 버튼 누를시 이름 입력 필드에 포커스가 가게 만들기
export const InputSample =()=>{
  const [name,setName] = useState();
  const [nickName,setNickName] = useState();
  const inputName = useRef(null);
 
 
  const changeName =(e)=>{
    setName(e.target.value)
  }
  const changeNickName =(e)=>{
    setNickName(e.target.value)
  }
  const reset=()=>{
    inputName.current.focus();
    setName("");
    setNickName("");
  }
  useEffect(()=>{
    inputName.current.focus();
  },[])
  return(
    <div>
      <input 
        onChange={changeName} 
        placeholder='이름입력'  
        ref={inputName} 
        value={name}/>
      <input 
        onChange={changeNickName} 
        placeholder='닉네임입력'
        value={nickName}  />
      <br/>
      이름 : {name} / 닉네임 : {nickName}
      <br/>
      <button  onClick={reset}>초기화</button>
    </div>
  )
}
//InputSameple
//이름과 닉네임을 입력하는 필드를 만든다.
//이름과 닉네임을 입력하면 밑에 띄운다.
//초기화 버튼을 만들고 버튼을 누를시 이름 입력필드에 포커스가 가도록
//만들기

// export const InputSample = () => {
//   const [inputs, setInputs] = useState({name:"",nickname:""});

//   const nameRef = useRef(null);
        //구조분해할당
//   const {name, nickname} = inputs;

//   const onChange = (e) => {
//            대괄호 달아줘야, name과 Nickname이 둘 다 넘어감
//       const {value , name} = e.target;
//       console.log(`name: ${name}, value : ${value}`);
//       setInputs({
//           ...inputs,
//           [name]:value,
//       })
//   }

//   const onReset = () => {
//       setInputs({
//           name:"",
//           nickname:"",
//       })
//       nameRef.current.focus();
//   }

//   return(
//       <div>
//           <input
//               name="name"
//               placeholder='이름을 작성해주세요'
//               onChange={onChange}
//               value={name}
//               ref={nameRef}
//           />
//           <input
//               name="nickname"
//               placeholder='닉네임을 작성해주세요'
//               onChange={onChange}
//               value={nickname}
//           />
//           <button onClick={onReset}>초기화</button>
//           <div>
//               <b>값:</b>
//               {name}({nickname})
//           </div>
//       </div>
//   )
// }

//숫자를 증가시키면서 이전값과 현재값을 화면에 표시하는 예제
//컴포넌트 아님
const usePrevious = (value) => {
  const prevRef = useRef();
  useEffect(()=>{
    prevRef.current = value; //최신 벨류 저장
  },[value])
  return prevRef.current
}

export const PreviousValue = () => {
  const [count,setCount] =useState(0);
  const prevCount = usePrevious(count); //이전값을 저장
  
  return(
    <div>
      <h2>현재값 : {count} </h2>
      <h3>이전값 : {prevCount!== undefined ? prevCount  :'없음'} </h3>
      <button 
        onClick={()=>setCount(c=>c+1)}>
        증가({count})
      </button>
    </div>
  )
}




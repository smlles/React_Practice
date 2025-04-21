import React, {useState, useEffect} from 'react'

const TimerFunction = () =>{
  const [time, setTime] =useState(0);
//useEffect(()=>{},[]);
//함수형 컴포넌트에서 컴포넌트가 렌더링되거나, 
// 특정 state값이 바뀌었을 때 처리하고 싶은 내용을 자동으로 수행하는 훅
//첫번째 인자 : useEffect가 호출되었을 때 처리하고 싶은 내용
//두번째 인자 : 의존성 배열 
//생략하면 매 렌더링마다 실행, 빈 배열은 한번만 실행
//값을 하나 이상 넣으면,그 값이 바뀔 때  마다 실행

useEffect(() =>{

  //setInterval() : 일정 시간 간격으로 지정된 함수를 반복적으로 실행
  const timer = setInterval(()=>{
    setTime((prev)=>prev+1);
  },1000);

  //클린업
  return() => {clearInterval(timer)};
  
},[time]);

  return(
    <div>
      <h1>Timer : {time}  second </h1>
    </div>
  )
}

//외부에서 데이터를 불러와 화면에서 출력하는 예제
//fetch() 함수 사용하기
//fetch() : 브라우저가 제공하는 네트워크 요청 인터페이스

export const UserList = () => {
  const [users,setUsers] =useState([]); //유저 데이터를 담기위한 상태
  const [loading,setLoading] = useState(true);//로딩상태
  const [error,setError] = useState(null);//에러상태


 //화면이 나왔을 때, 유저목록이 이미 보여야한다.
  useEffect(() => {
    //async : 이 함수를 비동기함수로 만들겠다.
    //비동기처리 : 특정 작업이 완료되기를 기다리면서도
    //다른 작업을 실행 할 수 있는 방식 
    //await : 비동기 함수에서만 쓸 수 있다.
    //await이 붙은 함수가 종료될 때 까지 비동기 함수는 잠깐 멈춘다.
    const fetchUsers = async () => {
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        //fetch()를 실행하고 나면 promise객체를 준다
        //통신이 잘 되었으면 true, 아니면 false
        if(!response.ok){
          throw new Error(`HTTP 오류! 상태 : ${response.status}`)
        }
        //통신에 문제가 없었다.
        const data = await response.json();
        setUsers(data);
      }catch (err) {
        setError(err);
      }finally{
        setLoading(false);
      }
    }

    fetchUsers();

  },[]);//

  if(loading){
    return <div>로딩 중...</div>
  }

  if(error){
    return <div>에러발생 : {error.message}</div>
  }

  return(
    <div>
      <h2>사용자 목록</h2>
      <ul>
        {users.map(user=>(
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  )
}
//count 컴포넌트 만들기

export const Count = () =>{
  
  const [click,setClick] = useState(0);
  const [render,setRender] = useState(0);
 
   const btClick = () =>{
    setClick(click+1)
   }
  useEffect(()=>{
        setRender(render+1)
      console.log(`${render}렌더링 완료`)
  },[click])

  return(
    <div>
      <h2>Count : {click}</h2>
      <h2>랜더링 횟수 : {render}</h2>
      <button onClick={btClick}>클릭</button>
    </div>
  )
}
export default TimerFunction;
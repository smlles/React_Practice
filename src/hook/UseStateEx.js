import React from 'react';
import { useState } from 'react'

//useState 훅을 사용하려면 import를 해야한다.

//컴포넌트 생성하기
//하나의 파일에 하나의 컴포넌트만 만들 수도 있지만
//여러개의 컴포넌트를 정의 할 수도 있다.
let Counter = (props) => {
  //hook은  함수형 컴포넌트 안에서만 사용 할 수 있다.
  //useState()는 상태값과 상태값을 바꾸는 함수 두가지를 요소로 갖는 배열을 반환한다.

  //반환된 배열을 구조분해 할당을 통해 받는다.

  //매개변수로 넘어온 값은 읽기 전용
  //매개변수로 읽어온 값을 변경하려면 state로 관리해야한다
  let [count, setCount] = useState(props.count);
 /* let handleClick = () => {
    setCount(count+1);
  }*/
  //console.log(props.count);
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={/*handleClick*/  () => setCount(count+1) }>up</button>
    </div>
  )
}
//컴포넌트를 외부에서 import 하기 위해서는 반드시 export를 선언해야한다.
export default Counter; 
//모듈당 한개만 허용 import할 때 {} 안해도 됨 이름 마음대로 지정 가능

//export {Counter};
//named export
//모듈 당 여러개를 내보낼 수 있다.
//import 할 때도 export 할 때 쓰던 이름을 {}안에 정확히 맞춰 써야한다
//as를 써서 별칭을 붙힐 수는 있다.


import { useState } from 'react';
import './App.css';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코드 추천','강남 우동 맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그입니다</h4>
      </div>
      
      <button  onClick={()=>{
        const copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순 정렬</button>

      <button onClick={ ()=>{
        const copy = [...글제목];
        copy[0] = '여자 코드 추천';
        글제목변경(copy);
      }}>클릭!</button>

      <div className='list'>
          <h4>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉 + 1)} }>❤️</span> {따봉}</h4>
          <p>6월 14일 발행</p>
      </div>
      <div className='list'>
          <h4>{글제목[1]}</h4>
          <p>6월 14일 발행</p>
      </div>
      <div className='list'>
          <h4>{글제목[2]}</h4>
          <p>6월 14일 발행</p>
      </div>

      <Modal />
    </div>
  );
}

{/* 모달창 */}
function Modal(){
  return (
  <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;

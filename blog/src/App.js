import { useState } from 'react';
import './App.css';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코드 추천','강남 우동 맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [title,setTitle] = useState(0);

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

    {
      글제목.map((e,i)=>{
        return (
          <div className='list'>
            <h4 onClick={()=>{setModal(true); setTitle(i)}}>{글제목[i]}</h4>
            <p>6월 14일 발행</p>
          </div>
        )
      })
    }

    { modal === true ? <Modal title={title} 글제목={글제목} /> : null}
      
    </div>
  );
}

{/* 모달창 */}
function Modal(props){
  return (
  <div className='modal'>
    <h4>{props.글제목[props.title]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;

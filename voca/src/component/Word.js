import { useState } from "react"

export default function Word({ word }) {
    //뜻보기 구현 state활용
    const [isShow, setShow] = useState(false);

    // 체크박스 off 구현
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleDone() {
        setIsDone(!isDone);
    }

    function toggleShow(){
        setShow(!isShow);
    }

    //뜻 보기 버튼을 누르면 isShow의 값이 true값으로 변환
  
    return (
        <tr className={isDone ? "off" : ""}>
        <td>
            <input type="checkbox" checked={isDone}
            onChange={() => toggleDone()}></input>
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
            <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
            <button className="btn_del">삭제</button>
        </td>
    </tr>
    )
}
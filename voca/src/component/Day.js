import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { useParams } from "react-router-dom";
import dummy from "../db/data.json";

export default function Day() {
    
    //params로 들어오는 값은 문자이기 때문에 숫자로 바꾸는 과정이 필요함
    const {day} = useParams();
    const wordList = dummy.words.filter(word => (
        word.day === Number(day)
    )) 

    return <>
    <h2> Day {day}</h2>
    <table>
        <tbody>
            {wordList.map(word => (
                <tr key={word.id}>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>{word.eng}</td>
                    <td>{word.kor}</td>
                    <td>
                        <button>뜻 보기</button>
                        <button class="btn_del">삭제</button>
                    </td>
                </tr>

            ))}
        </tbody> 
    </table>
    </>;
}
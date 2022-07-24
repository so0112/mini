import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Day() {
    
    //params로 들어오는 값은 문자이기 때문에 숫자로 바꾸는 과정이 필요함
    const {day} = useParams();
    const [word, setWords] = useState([]);
    // const wordList = dummy.words.filter(word => (
    //     word.day === Number(day)
    // )) 

    useEffect(() => {
        fetch(`http://localhost:3000/words?day=${day}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setWords(data);
        })
    }, [day]);

    

    return <>
    <h2> Day {day}</h2>
    <table>
        <tbody>
            {word.map(word => (
               <Word word={word} key={word.id}/>
            ))}
        </tbody> 
    </table>
    </>;
}
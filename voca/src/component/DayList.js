// 더미 데이터 불러오기

import { useEffect, useState } from "react"
import {Link} from "react-router-dom"


export default function DayList() {
    const [days, setDays] = useState([]);

    //useEffect 상태값이 바뀌고 렌더링 되었을 때 동작하는 함수
    // useEffect(() => {console.log("change")})

    useEffect(() => {
        fetch("http://localhost:3000/days")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setDays(data);
        });
    }, []);

    return (
    <ul className="list_day">
       {days.map(day => (
        <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
       ))} 
    </ul>
    )
}
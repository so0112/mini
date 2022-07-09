import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          {/* 필요한 것 : 잘못된 URL로 이동시 EmptyPage 나오게 만들기 */}
        </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;

import Hello from './component/Hello'; 
import Welcome from './component/Welcome';
import "./component/Hello.css"
import './App.css';
import styles from "./App.module.css"

function App() {
  return <div className="App">
    <Hello />
    <div className={styles.box}>App</div>
    </div>;
}

export default App;

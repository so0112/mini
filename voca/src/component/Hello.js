import World from "./World";
import styles from "./Hello.module.css"
export default function Hello() {
  return (
    <div>
      <h1
      style={{
        color: "#f00",
        borderRight: "12px solid #000",
        marginBottom: "50px",
        opacity:0.5,
      }
      }>Hello</h1>
      <div className={styles.box}> 모듈 css</div>
      <World />
    </div>
  );
}

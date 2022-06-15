import logo from './logo.svg';
import './App.css';




const Article = (props) => {
  return (
  <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
);}

const Headers = (props) => {
  console.log(props)
  return (
  <headers>
  <h1><a href="/" onClick = {(event) => {
    event.preventDefault(); // 기본동작 방지 클릭해도 변화 x
    props.onChangeMode();
  }}>{props.title}</a></h1>
</headers>
);}


const Nav = (props) => {
  const lis = []

  for(let i = 0; i < props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id = {t.id} href={'/read/' + t.id} onClick={(event) =>{
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
      </li>)
  }

  return (
  <nav>
  <ol>
   {lis}
  </ol>
</nav>
);}

const App = () => {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ]
  return (
    <div>
      <Headers title="REACT" onChangeMode={() => {
        alert('Header');
      }}/>
      <Nav topics={topics} onChangeMode={(id) =>{
        alert(id);
      }}/>
      <Article title="Welcome" body="Hello, WEB"/>
    </div>
  );}

export default App;

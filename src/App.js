import logo from './logo.svg';
import './App.css';

function Hearder(props) {
  return  <header>
        <h1><a href="/" onClick={(event)=>{
            event.preventDefault();
            props.onChangeMode();
        }}>{props.title}</a></h1>
      </header>
}

function Nav(props) {
  const lis=[]
  for (let i=0; i<props.topic.length; i++){
    let t = props.topic[i]
    lis.push(<li key={t.id}>
      <a id={t.id} href={"/read/"+t.id} onClick={event=>{
          event.preventDefault();
          props.onChangeMode(event.target.id);
      }}>{t.title}</a>
      </li>)
  }
  return <nav>
        <ol>
          {lis}
        </ol>
      </nav>
}

function Article() {
  return <article>
  <h2>Welcome!</h2>
  hello web2
</article>
}

function App() {
  const mode = 'WELCOME'
  const topics = [
    {'id':1, 'title':'html', 'body':'html is...'},
    {'id':2, 'title':'css', 'body':'css is...'},
    {'id':3, 'title':'java script', 'body':'java script is...'}
  ]
  
  let content = null;
  if (mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode === 'READ'){
    content = <Article title="Read" body="Hello, Read"></Article>
  }

  return (
    <div >
      <Hearder title="WEB" onChangeMode={()=>{
        alert('Header');
      }}></Hearder>

      <Nav topic={topics} onChangeMode={(id)=>{
        alert(id);
      }}></Nav>

      {content}
      {/* <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">js</a></li>
        </ol>
      </nav> */}

      {/* <article>
        <h2>Welcome!</h2>
        hello web2
      </article> */}
    </div>
  );
}

export default App;

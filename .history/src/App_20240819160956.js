import logo from "./logo.svg";
import "./App.css";

//테스트

function Article(e) {
  return (
    <article>
      <h2>{e.title}</h2>
      {e.body}
    </article>
  );
}

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function App() {
  const mode = "WELCOME";
  const topics = [
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "javascript", body: "javascript is..." },
  ];
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web" />;
  } else if (mode === "READ") {
    content = <Article title="READ" body="Hello, READ" />;
  }
  return (
    <div className="App">
      <Header
        title="REACT"
        onChangeMode={() => {
          alert("Header");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      />
    </div>
  );
}

export default App;

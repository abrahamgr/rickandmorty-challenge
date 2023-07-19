import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>Characters</h3>
      <ul>
        <li className="character">
          <img src="https://rickandmortyapi.com/api/character/avatar/15.jpeg" />
          <span>Summer Smith</span>
          <div className="buttons-container">
            <div className="buttons">
              <button>Up</button>
              <button>Down</button>
            </div>
          </div>
        </li>
        <li className="character selected">
          <img src="https://rickandmortyapi.com/api/character/avatar/15.jpeg" />
          <span>Summer Smith</span>
          <div className="buttons-container">
            <div className="buttons">
              <button>Up</button>
              <button>Down</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;


import "./styles02.css"



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p>hello, react is on!</p>

          <div class="plant01">
            <img src="/photos/plant01.png" alt="your plant" />
          </div>

          <div class="water-bar">
            <div class="water-level" id="waterLevel"></div>
          </div>
      </header>
    </div>
  );
}

export default App;

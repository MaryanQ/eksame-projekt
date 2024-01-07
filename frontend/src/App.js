import { browserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <browserRouter>
        <Routes>
          <Route path="/" element />
        </Routes>
      </browserRouter>
    </div>
  );
}

export default App;

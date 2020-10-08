import React from 'react';
import './App.css';
import SelectWordsLesson from "./Components/Lessons/SelectWordsLesson";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Spanish/English language learning app
        </p>
      </header>
      <div>
        <SelectWordsLesson/>
      </div>
    </div>
  );
}

export default App;

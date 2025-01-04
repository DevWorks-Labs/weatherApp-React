import React from 'react';

const api = {
  key: "f32c03b111a1009d325b99f3ce1443fc",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className='search-bar' 
            placeholder='search...'
          />
        </div>
      </main>

    </div>
  );
}

export default App;

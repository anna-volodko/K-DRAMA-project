// import logo from './logo.svg';

import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <header className="nav">
        <p className="logo">K-DRAMATIC</p>
        <ul className="main_nav">
         <li className="nav_item">HOME</li>
         <li className="nav_item">EXPLORE</li>
         <li className="nav_item">PROFILE</li>
        </ul>
      </header>
      <main>
        <div className="about">
          <h1 className="site_name">K-DRAMATIC</h1>
          <p className="goal">
            Your Daily Dose of Emotions from the Best K-Dramas.
          </p>
        </div>
        <input type="text" className="search_input" />
        <button className="search_button">Search</button>
      </main>
    </div>
  );
}

export default App;

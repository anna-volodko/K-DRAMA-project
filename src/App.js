// import logo from './logo.svg';
//STYLES
import "./styles/main.scss";
//PAGES
import Hero from "./pages/Hero";

function App() {
  return (
    <div className="page_wrapper">
    <header>
      <div className="navigation container">
        <div className="logo">
          <a href="#" className="logo_link">
            <img className="star" src="./assets/dots.svg" alt="" />
            <p className="logo_text">K-DRAMATIC</p>
          </a>
        </div>
        <div className="main_nav">
          <a href="#" className="nav_item">Movies</a>
          <a href="#" className="nav_item">Shows</a>
          <a href="#" className="nav_item">About Us</a>
          <a href="#" className="nav_button">
            <img src="./assets/search_icon.svg" alt="" className="icon_search" />
            Go to Search
          </a>
          <a href="#" className="nav_button">Sign Up</a>
        </div>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
    <Hero></Hero>
    <section className="movies container">
      <h1>Movies</h1>
      <h2>Trending now</h2>
      <div className="movie_trending"></div>
      <h2>Top 10</h2>
      <div className="movie_top"></div>
    </section>
    <section className="shows container">
      <h1>Shows</h1>
      <h2>Trending now</h2>
      <div className="shows_trending"></div>
      <h2>Top 10</h2>
      <div className="shows_top"></div>
    </section>
    <section className="signup container">
      <div className="signup_text">
        <h3>Start your free trial today!</h3>
        <p className="smaller_text">
          This is a clear and concise call to action that encourages users to
          sign up for a free trial of K-DRAMATIC.
        </p>
      </div>
      <button className="signup_button">Sign Up</button>
    </section>
  </div>
  );
}

export default App;

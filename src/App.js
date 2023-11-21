//STYLES
import "./styles/main.scss";
//PAGES
import Hero from "./pages/Hero";
import MainSliders from "./pages/MainSliders"
import Footer from "./pages/Footer"
import DramaSearch from "./pages/DramaSearch";

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
    <MainSliders></MainSliders>
    <DramaSearch></DramaSearch>
    <section className="signup container">
      <div className="signup_text">
        <h3>Save and discover new korean media with K-DRAMATIC</h3>
        <p className="smaller_text">
          Add your favorite movies and shows to the list to rewatch them later.
        </p>
      </div>
      <button className="signup_button">Check favorites</button>
    </section>
    <Footer></Footer>
  </div>
  );
}

export default App;

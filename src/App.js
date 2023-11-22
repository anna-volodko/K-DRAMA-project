//STYLES
import "./styles/main.scss";
//PAGES
import Hero from "./pages/Hero";
import MainSliders from "./pages/MainSliders"
import Footer from "./pages/Footer"
import DramaSearch from "./pages/DramaSearch";
import Header from "./pages/Header"

function App() {
  return (
    <div className="page_wrapper">
    <Header/>
    <Hero/>
    <MainSliders/>
    <DramaSearch/>
    <section className="signup container">
      <div className="signup_text">
        <h3>Save and discover new korean media with K-DRAMATIC</h3>
        <p className="smaller_text">
          Add your favorite movies and shows to the list to rewatch them later.
        </p>
      </div>
      <button className="signup_button">Go to watchlist</button>
    </section>
    <Footer/>
  </div>
  );
}

export default App;

//STYLES
import "./styles/main.scss";
//PAGES
import Hero from "./components/Hero";
import MainSliders from "./components/MainSliders";
import Footer from "./components/Footer";
import DramaSearch from "./components/DramaSearch";
import Header from "./components/Header";
import TrialSection from "./components/TrialSection";


function App() {
  return (
    <div className="page_wrapper">
        <Header />
        <Hero />
        <MainSliders/>
        <DramaSearch/>
        <TrialSection />
        <Footer />
    </div>
  );
}

export default App;

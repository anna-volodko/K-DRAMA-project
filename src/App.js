//STYLES
import "./styles/main.scss";
//PAGES
import Hero from "./pages/Hero";
import MainSliders from "./pages/MainSliders";
import Footer from "./pages/Footer";
import DramaSearch from "./pages/DramaSearch";
import Header from "./pages/Header";
import TrialSection from "./pages/TrialSection";


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

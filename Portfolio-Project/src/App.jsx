import "./App.css";
// import Header from "./Components/Header/Header"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./Components/Header/AboutMe";
import Skills from "./Components/Header/Skills";
import Portfolio from "./Components/Header/Portfolio";
import Education from "./Components/Header/Education";
import Footer from "./Components/Footer/Footer"
import ContactMe from "./Components/Header/ContactMe";
import Header from "./Components/Header/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/AboutMe" element={<AboutMe />}></Route>
        <Route exact path="/Skills" element={<Skills />}></Route>
        <Route exact path="/Portfolio" element={<Portfolio />}></Route>
        <Route exact path="/Education" element={<Education />}></Route>
        <Route exact path="/ContactMe" element={<ContactMe />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

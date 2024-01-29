import "./index.css";
import NavBar from "./componenants/NavBar/NavBar";
import {
  About,
  Hero,
  Footer,
  Skills,
  Resume,
  Contact,
  Projects,
} from "./containers";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

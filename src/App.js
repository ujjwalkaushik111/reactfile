import "./App.css";
import Hero1 from "./components/Hero1";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import UpcomingProjects from "./components/UpcomingProjects";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div>
      <MyNav />
      <Hero1 />
      <UpcomingProjects />
      <Services />
      <Projects />
      <About />
    </div>
  );
}

export default App;

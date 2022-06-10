import Navbar from './components/default/Navbar.js';
import './App.css';

function App() {
  return (
    <div className="content">
      <Navbar />
      <div className="landing-container">
        <div className="landing-text">
          <span className="text-top">&mdash; Welcome to &mdash;</span>
          <span className="text-bottom">Sigourney Area Development Corporation</span>
        </div>
        <div className="landing-side-container">

        </div>
      </div>
    </div>
  );
}

export default App;
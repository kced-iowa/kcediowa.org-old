import Navbar from './components/default/Navbar.js';
import { Link } from 'react-router-dom';
import './App.css';

// icon imports
import { HiArrowCircleDown } from 'react-icons/hi';

function App() {

  const submitHandler = () => {
    alert('Search query');
  }


  // declare ad images - replace with api sooner or later
  const adImage0 = 'https://upload.wikimedia.org/wikipedia/commons/6/62/Solid_red.svg';
  const adImage1 = 'https://upload.wikimedia.org/wikipedia/commons/2/29/Solid_green.svg';
  const adImage2 = 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Solid_blue.svg';

  // declare ad links - replace with api sooner or later
  const adLink0 = 'https://google.com/'
  const adLink1 = 'https://google.com/'
  const adLink2 = 'https://google.com/'

  return (
    <div>
      <Navbar />
      <div className="landing">
        <div className="landing-text">
          <span className="landing-text-top">&mdash; Welcome To &mdash;</span>
          <span className="landing-text-bottom">Sigourney Area Development Corporation</span>
        </div>
        <div className="side-container">
          <div className="coupling-container">
            <div className="search">
              <form onSubmit={submitHandler}>
                <input type="text" className="search-input" placeholder="Search something incredible..." />
              </form>
            </div>
            <div className="ads">
              <a href={adLink0} target="_blank" rel="noopener noreferrer">
                <img alt="blablablabla" src={adImage0}></img>
              </a>
              <a href={adLink1} target="_blank" rel="noopener noreferrer">
                <img alt="blablablabla" src={adImage1}></img>
              </a>
              <a href={adLink2} target="_blank" rel="noopener noreferrer">
                <img alt="blablablabla" src={adImage2}></img>
              </a>
            </div>
          </div>
          <div className="links">
            <span className="link-title">Quick Links</span>
            <div className="link-spacer" />
            <div className="link-container">
              <div className="link">
                <Link to="/">
                  <div className="link-icon">
                    <><HiArrowCircleDown /></>
                  </div>
                  <span>Placeholder</span>
                </Link>
              </div>
              <div className="link">
                <Link to="/">
                  <div className="link-icon">
                    <><HiArrowCircleDown /></>
                  </div>
                  <span>Placeholder</span>
                </Link>
              </div>
              <div className="link">
                <Link to="/">
                  <div className="link-icon">
                    <><HiArrowCircleDown /></>
                  </div>
                  <span>Placeholder</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
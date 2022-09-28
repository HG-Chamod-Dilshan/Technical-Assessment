import landing from './img/landing_page.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="wrapeer">
        <div>Imagine if</div>
        <div className="snapchat">Snapchat</div>
        <div>had events.</div>
      </div>
      </header>
      <div className="sub-heading">
      Easily host and share events with your friends across any social media.
      </div>
      <img src={landing} alt="landing page"/>
      <button className="primary-button"><span className="button-text">🎉 Create my event</span></button>
    </div>
  );
}

export default App;

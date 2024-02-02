import './App.css';
import AboutSystem from './AboutSystem';

const App = () => {
  return (
    <div className="main_content">
      <h1>This is 404.</h1>
      <p>Something went wrong.</p>
      <br />
      <AboutSystem />
      <br />
      <p>
        We dare not redirect the server so that we can check for server
        anomalies.
      </p>
      <div className="link-image-container">
        <p>
          <a href="https://www.synthia-liz.com">Here</a>is a link to the home
          page
        </p>
        <RandomMacchan />
      </div>
    </div>
  );
};

const RandomMacchan = () => {
  const macchanArray = [
    //まっきん
    'https://raw.buntin.xyz/まっきん/sutozeromakkinSucare.png',
    'https://raw.buntin.xyz/まっきん/macsaikoukawaii.png',
  ];
  const randomMacchan =
    macchanArray[Math.floor(Math.random() * macchanArray.length)];
  return <img id="macchan" src={randomMacchan} alt="404" />;
};

export default App;

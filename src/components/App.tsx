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
          <a href="https://buntin.tech">Here</a>is a link to the home page
        </p>
        <RandomMacchan />
      </div>
    </div>
  );
};

const RandomMacchan = () => {
  const macchanArray = [
    'https://raw.buntin.xyz/%E3%81%BE%E3%81%A3%E3%81%8D%E3%82%93/sutozeromakkinSucare.png',
    'https://raw.buntin.xyz/%E3%81%BE%E3%81%A3%E3%81%8D%E3%82%93/macsaikoukawaii.png',
  ];
  const randomMacchan =
    macchanArray[Math.floor(Math.random() * macchanArray.length)];
  return <img id="macchan" src={randomMacchan} alt="404" />;
};

export default App;

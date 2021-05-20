import HeaderLogo from './components/HeaderLogo';
import HeroMobile from './components/Hero'
import ComingSoon from './components/ComingSoon';
import EmailField from './components/EmailField';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
          <HeaderLogo></HeaderLogo>
          <HeroMobile></HeroMobile>
          <ComingSoon></ComingSoon>
          <EmailField></EmailField>
      </header>
    </div>
  );
}

export default App;

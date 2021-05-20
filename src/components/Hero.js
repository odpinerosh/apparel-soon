import HeroMob from '../images/hero-mobile.jpg';
import HeroDsk from '../images/hero-desktop.jpg';
import './Hero.css';

function HeroMobile() {
  return (
    <div className="hero-mobile">
      <img src={HeroMob} alt="Portrait" />
    </div>
  );
}

export default HeroMobile;

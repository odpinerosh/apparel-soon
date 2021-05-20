import HeroMob from '../images/hero-mobile.jpg';
import HeroDsk from '../images/hero-desktop.jpg';
import './Hero.css';

function HeroMobile() {
  return (
    <div>
      <img src={HeroMob} className="hero-mobile" alt="Portrait" />
    </div>
  );
}

export default HeroMobile;

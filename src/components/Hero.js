import HeroMob from '../images/hero-mobile.jpg';
import HeroDsk from '../images/hero-desktop.jpg';
import './Hero.css';

function HeroMobile() {
  return (
    <div className="hero-mobile">
      <picture>
        <source srcSet={HeroDsk} media="(min-width: 720px)" />
        <img src={HeroMob} alt="Portrait" />
      </picture>
    </div>
  );
}
/**/
export default HeroMobile;

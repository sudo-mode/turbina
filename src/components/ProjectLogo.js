import './ProjectLogo.css';
import logo from '../images/turbina.svg';

function ProjectLogo () {
  return (
    <h1 className="title">
      <img className="title__logo" src={logo} alt="Логотип Турбина"/>
    </h1>
  )
}

export default ProjectLogo;

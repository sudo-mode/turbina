import './ProjectLogo.css';
import './Blur.css';
import logo from '../images/turbina.svg';
import cn from 'classnames';

function ProjectLogo({ isPlayerExtend, isMobile }) {
  
  const titleStyle = cn("title", { "blur": isPlayerExtend && isMobile })

  return (
    <h1
      className={titleStyle}
    >
      <img
        className="title__logo"
        src={logo}
        alt="Логотип Турбина" />
    </h1>
  )
}

export default ProjectLogo;

import { useRef, useEffect } from 'react';
import './ProjectLogo.css';
import './Blur.css';
import logo from '../images/turbina.svg';
import cn from 'classnames';
import transformElement from '../utils/transformElement';
import throttle from '../utils/throttle';

function ProjectLogo({ isPlayerExtend, isMobile, isLandscape }) {
  const projectLogoRef = useRef();
  const titleStyle = cn("title", { "blur": isPlayerExtend && (isMobile || isLandscape)})

  // вызываем эффект смещения логотипа в сторону позиции указателя  
  useEffect(() => {
    window.addEventListener('mousemove',
      (e) => throttle(transformElement(e, projectLogoRef.current, 'skew')), 50);
    return () => window.removeEventListener('mousemove', transformElement);
  }, []);

  return (
    <h1
      className={titleStyle}
    >
      <img        
        ref={projectLogoRef} 
        className="title__logo"
        src={logo}
        alt="Логотип Турбина" />
    </h1>
  )
}

export default ProjectLogo;

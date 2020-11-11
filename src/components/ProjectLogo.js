import cn from 'classnames';
import './ProjectLogo.css';
import logo from '../images/turbina.svg';

function ProjectLogo ({ isMobile, isPlayerExtend }) {
  return (
    <h1
    className={cn('title', { 'title_mobile-extended-player': isPlayerExtend && isMobile })}
    // style={{
    //   position: `${isMobile & isPlayerExtend ? 'fixed' : 'absolute'}`,
    //   paddingLeft: `${isMobile & isPlayerExtend ? '25px' : '12px'}`,
    //   paddingRight: `${isMobile & isPlayerExtend ? '25px' : '12px'}`,
    //   opacity: `${isMobile & isPlayerExtend ? '.7' : '1'}`}}
    // style={isMobile && isPlayerExtend && {
    //   position: 'fixed',
    //   paddingLeft: `${25}px`,
    //   paddingRight: `${25}px`
    // }}
    >
      <img 
      className="title__logo"
      src={logo}
      alt="Логотип Турбина"/>
    </h1>
  )
}

export default ProjectLogo;

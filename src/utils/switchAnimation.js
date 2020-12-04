import cn from 'classnames';
import './switchAnimation.css';

function cnWithSwitchAnimation(className, initial) {
  return cn(className, {
    'switchAnimation': initial,
    'switchAnimation2': !initial
  })
}

export default cnWithSwitchAnimation;

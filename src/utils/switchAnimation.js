import cn from 'classnames';

function cnWithSwitchAnimation(className, initial) {
  return cn(className, {
    'switchAnimation': initial,
    'switchAnimation2': !initial
  })
}

export default cnWithSwitchAnimation;

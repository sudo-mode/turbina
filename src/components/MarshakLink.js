import './MarshakLink.css';

import cn from 'classnames';

import { marshakLink } from '../configs/links';
import MarshakLogo from './svg/MarshakLogo'

function MarshakLink({ className }) {
  return (
    <a
      className={
        cn("marshak-link", className)
      }
      href={marshakLink}
      target="_blank"
      rel="noreferrer"
    >
      <MarshakLogo />
    </a>
  );
}

export default MarshakLink;

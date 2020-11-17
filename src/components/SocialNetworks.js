import './SocialNetworks.css';
import cn from 'classnames';
import { socialNetworks } from '../configs/links';

function SocialNetworks ({ className }) {
  return (
    <ul className={cn('social-networks', {className: className})}>
      {socialNetworks.map((item) => (
        <li className="social-networks__item" key={item.name}>
          <a
            className="social-networks__link"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            <item.IconElement className={item.className} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialNetworks;

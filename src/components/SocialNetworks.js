import './SocialNetworks.css';
import FacebookIcon from './svg/FacebookIcon';
import InstagramIcon from './svg/InstagramIcon';
import VkontakteIcon from './svg/VkontakteIcon';

function SocialNetworks () {
  return (
    <ul className="social-networks">
      <li><InstagramIcon /> <FacebookIcon /> <VkontakteIcon /></li>
    </ul>
  )
}

export default SocialNetworks;

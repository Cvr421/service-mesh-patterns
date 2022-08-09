import React from "react";
import { NavStyleWrapper } from "../sections/navbar.style";
import pattern from "../assets/images/brand/SVG/service-mesh-patterns-side.svg";
import layer5img from "../assets/images/layer5-white-bg.png";
import five from '../assets/images/brand/SVG/Layer5/L.svg';

const Navbar = () => {
  return (
    <NavStyleWrapper>
      <img className="pattern" src={pattern} alt="pattern" />
      <div className="text">Book Chapters</div>
      <div className="text">Patterns In-Action</div>
      <div className="text">Meet the Authors</div>
      <div className="text">About 
      <svg width="74" height="13" viewBox="0 0 74 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.89183 0.5H0.50177V12.4478H11.8291V10.059H2.89183V0.5Z" fill="#3C494F"/>
      <path d="M17.8081 0.5L13.0292 12.4478H15.7544L19.0031 4.08509L21.318 10.059H17.3469L16.4551 12.4478H24.977L20.1969 0.5H17.8081Z" fill="#3C494F"/>
      <path d="M28.3493 4.68261L25.363 0.5H22.3754L27.1543 7.66891V12.4478H29.5443V7.66891L34.3232 0.5H31.3738L28.3493 4.68261Z" fill="#3C494F"/>
      <path d="M35.3539 2.38173V2.89006V5.27885V8.19381V12.4478H46.6799V10.059H37.7439V8.19381V7.66891H44.6096V5.27885H37.7439V2.89006H46.6799V0.5H35.3539V2.38173Z" fill="#3C494F"/>
      <path d="M50.5606 2.77795H56.6861V5.26356H51.2231L51.246 7.54151H52.8857L57.2173 12.4478H60.168L55.8363 7.54151H57.5269C57.7706 7.54168 58.012 7.49382 58.2372 7.40068C58.4624 7.30753 58.667 7.17092 58.8394 6.99865C59.0118 6.82639 59.1486 6.62184 59.2419 6.3967C59.3352 6.17156 59.3832 5.93024 59.3832 5.68654V2.35625C59.3832 2.11238 59.3351 1.87089 59.2418 1.6456C59.1484 1.42031 59.0115 1.21562 58.839 1.04323C58.6665 0.870847 58.4618 0.734143 58.2364 0.640933C58.011 0.547723 57.7695 0.499833 57.5257 0.5H48.2253V12.4478H50.6154L50.5606 2.77795Z" fill="#3C494F"/>
      <path d="M73.5719 0.550903H68.867V2.81739H73.5719V0.550903Z" fill="#00B39F"/>
      <path d="M74 8.18617V7.25231C74 6.17066 73.0904 5.29414 71.9692 5.29414H64.3761V4.67114H61.5962V7.34659H71.2201V8.18362L74 8.18617Z" fill="#00B39F"/>
      <path d="M64.3761 3.93088V2.81739H68.0988V0.550903H61.5962V3.93088H64.3761Z" fill="#00D3A9"/>
      <path d="M71.2201 8.91492V10.2335H67.4974V12.5H72.0839C72.5819 12.5079 73.0627 12.3179 73.4209 11.9719C73.7791 11.6259 73.9855 11.1519 73.9949 10.654V8.91492H71.2201Z" fill="#00D3A9"/>
      <path d="M64.1531 9.03589V10.2335H66.7292V12.5H63.4167C62.9187 12.5078 62.4379 12.3179 62.0797 11.9718C61.7215 11.6258 61.5151 11.1519 61.5057 10.6539V9.03589H64.1531Z" fill="#00B39F"/>
      </svg>
      </div>
      <div className="button"><span className="label">Get it Now</span></div>
    </NavStyleWrapper>
  );
};

export default Navbar;
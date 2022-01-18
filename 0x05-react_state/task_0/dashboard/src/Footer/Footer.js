import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

const Footer = () => {
  return (
    <div className="footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
  );
}

export default Footer;

import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';

const Footer = ({ className }) => {
	return (
		<div className={className}>
			<p>
				Copyright {getFullYear()} - {getFooterCopy(true)}
			</p>
		</div>
	);
};

export default Footer;

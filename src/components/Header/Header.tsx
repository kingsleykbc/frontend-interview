import React from 'react';
import LogoSvg from '../../ui/LogoSvg/Logo.svg';
import styles from './Header.module.css';

export type HeaderPropsType = {
	className?: string;
};

const Header = ({ className }: HeaderPropsType) => {
	return (
		<div data-testid='header' className={styles.Header}>
			<LogoSvg className={styles.logo} />
			<h1>Application Portal</h1>
		</div>
	);
};

export default Header;

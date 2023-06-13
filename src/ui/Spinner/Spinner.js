import React from 'react';
import styles from './Spinner.module.css';

export function Spinner({ width = 50 }) {
	return <div data-testid='spinner' style={{ width, height: width }} className={styles.Spinner} />;
}

export default Spinner;

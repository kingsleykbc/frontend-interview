import React from 'react';
import styles from './Spinner.module.css';

export interface SpinnerPropsType {
	width?: number;
}

export function Spinner({ width = 50 }: SpinnerPropsType) {
	return <div data-testid='spinner' style={{ width, height: width }} className={styles.Spinner} />;
}

export default Spinner;

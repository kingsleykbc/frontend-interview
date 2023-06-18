import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

export interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}

export const Button = ({ className, ...buttonProps }: ButtonPropsType) => {
	return <button className={cn(styles.button, className)} {...buttonProps} />;
};

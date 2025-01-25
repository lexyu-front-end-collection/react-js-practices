import { ReactNode } from 'react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	title?: string;
	loading?: boolean;
	preventBackdropClick?: boolean;
	zIndex?: string;
	width?: string;
}

interface CountdownConfirmProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title?: string;
	message?: string;
	confirmText?: string;
	cancelText?: string;
	type?: 'warning' | 'info' | 'error';
	seconds?: number;
	width?: string;
}

export type {
	ModalProps,
	CountdownConfirmProps
};
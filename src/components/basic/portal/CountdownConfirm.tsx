import { CountdownConfirmProps } from "@/types/modal";
import { useState, useEffect, useCallback } from "react";
import Modal from "@/components/basic/portal/Modal";
import { AlertTriangle } from "lucide-react";

function CountdownConfirm({
	isOpen,
	onClose,
	onConfirm,
	title = '確認',
	message = '確定要執行此操作?',
	confirmText = '確定',
	cancelText = '取消',
	type = 'warning',
	seconds,
	width = 'max-w-xs'
}: CountdownConfirmProps) {
	const [countdown, setCountdown] = useState<number>(seconds ?? 0);
	const [timerId, setTimerId] = useState<NodeJS.Timeout>();

	const clearCountdown = useCallback(() => {
		if (timerId) {
			clearInterval(timerId);
			setTimerId(undefined);
		}
	}, [timerId]);

	useEffect(() => {
		if (!isOpen || !seconds) return;

		setCountdown(seconds);
		const timer = setInterval(() => {
			setCountdown(prev => {
				if (prev <= 1) {
					clearInterval(timer);
					onConfirm();
					onClose();
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		setTimerId(timer);
		return () => {
			clearInterval(timer);
		};
	}, [isOpen, seconds, onConfirm, onClose]);

	const handleClose = () => {
		clearCountdown();
		onClose();
	};

	const isDisabled = Boolean(seconds && countdown === 0);

	return (
		<Modal
			isOpen={isOpen}
			onClose={handleClose}
			title={title}
			preventBackdropClick={false}
			zIndex="z-[60]"
			width={width}
		>
			<div className="flex items-start">
				{type === 'warning' && (
					<AlertTriangle className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" />
				)}
				<div>
					<p className="text-gray-600">{message}</p>
					{seconds && countdown > 0 && (
						<p className="mt-2 text-sm text-gray-500">
							{countdown} 秒後自動執行 (ESC可取消)
						</p>
					)}
					{seconds && countdown === 0 && (
						<p className="mt-2 text-sm text-gray-500">執行中...</p>
					)}
				</div>
			</div>
			<div className="mt-6 flex justify-end gap-3">
				<button
					onClick={handleClose}
					disabled={isDisabled}
					className="px-4 py-2 text-gray-700 hover:text-gray-800 disabled:opacity-50"
				>
					{cancelText}
				</button>
				<button
					onClick={() => {
						clearCountdown();
						onConfirm();
						onClose();
					}}
					disabled={isDisabled}
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
				>
					{confirmText}
				</button>
			</div>
		</Modal>
	);
}

export default CountdownConfirm;
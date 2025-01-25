import { ModalProps } from "@/types/modal";
import ModalPortal from "@/components/basic/portal/ModalPortal";
import { Loader, X } from "lucide-react";

function Modal({
	isOpen,
	onClose,
	children,
	title,
	loading = false,
	preventBackdropClick = false,
	zIndex = "z-50",
	width = "max-w-md",
}: ModalProps) {

	if (!isOpen) return null;

	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget && !preventBackdropClick) {
			onClose();
		}
	};

	return (
		<ModalPortal>
			<div
				className={`fixed inset-0 ${zIndex} transition-opacity`}
				aria-modal="true"
				role="dialog"
			>
				<div
					className="fixed inset-0 bg-black/50 transition-opacity"
					onClick={handleBackdropClick}
				/>
				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4">
						<div className={`relative w-full ${width} transform rounded-lg
						 bg-white p-6 shadow-xl transition-all`}
						>
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-black text-lg font-medium">{title}</h3>
								{!preventBackdropClick && (
									<button
										onClick={onClose}
										className="text-gray-400 hover:text-gray-500"
										aria-label="Close modal"
									>
										<X className="h-5 w-5" />
									</button>
								)}
							</div>

							{loading ? (
								<div className="flex justify-center py-8">
									<Loader className="h-8 w-8 animate-spin text-blue-500" />
								</div>
							) : (
								children
							)}
						</div>
					</div>
				</div>
			</div>
		</ModalPortal>
	);
};

export default Modal;


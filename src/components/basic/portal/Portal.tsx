import { useEffect, useState } from 'react';
import Modal from '@/components/basic/portal/Modal';
import CountdownConfirm from '@/components/basic/portal/CountdownConfirm';

function Portal() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleAction = async (): Promise<void> => {
		setIsLoading(true);
		await new Promise(resolve => setTimeout(resolve, 3000));
		setIsLoading(false);
		setIsModalOpen(false);
	};

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsModalOpen(false);
				setIsConfirmOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, []);


	return (
		<div className="p-6 space-y-4">
			<button
				onClick={() => setIsModalOpen(true)}
				className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
			>
				開啟 Modal
			</button>

			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title="操作確認"
				loading={isLoading}
			>
				<div className="space-y-4">
					<p className="text-gray-600">
						Modal 範例，展示了以下功能:
					</p>
					<ul className="list-disc list-inside space-y-2 text-gray-600">
						<li>動態創建/移除 Portal 容器</li>
						<li>鍵盤事件 (ESC關閉)</li>
						<li>防止body捲動</li>
						<li>加載狀態</li>
						<li>多層級 Modal</li>
					</ul>
					<div className="pt-4">
						<button
							onClick={() => setIsConfirmOpen(true)}
							className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
						>
							開啟確認對話框
						</button>
					</div>
				</div>
			</Modal>

			<CountdownConfirm
				isOpen={isConfirmOpen}
				onClose={() => setIsConfirmOpen(false)}
				onConfirm={handleAction}
				seconds={3}
				message="3秒後自動執行,或點擊立即執行"
			/>
		</div>
	);
};

export default Portal;
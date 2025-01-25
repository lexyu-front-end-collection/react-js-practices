export default function Footer() {
	return (
		<footer className="bg-white border-t mt-auto">
			<div className="container mx-auto px-4 py-6">
				<div className="flex justify-between items-center">
					<p className="text-gray-600">© 2024 Your Company. All rights reserved.</p>
					<div className="space-x-4">
						<a href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</a>
						<a href="/terms" className="text-gray-600 hover:text-gray-900">Terms</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
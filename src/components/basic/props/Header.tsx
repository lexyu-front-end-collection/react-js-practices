export default function Header() {
	return (
		<header className="bg-white shadow">
			<nav className="container mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<h1 className="text-xl font-bold text-black">Logo</h1>
						<div className="ml-10 flex space-x-4">
							<a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
							<a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
							<a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
						</div>
					</div>
					<div>
						<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
							Login
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
}
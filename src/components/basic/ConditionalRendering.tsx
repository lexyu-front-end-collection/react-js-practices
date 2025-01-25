import { useState } from 'react'

type User = {
	name: string
	isAdmin: boolean
}

export default function ConditionalDemo() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [user, setUser] = useState<User | null>(null)
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	const handleLogin = () => {
		setIsLoggedIn(true)
		setUser({ name: 'John Doe', isAdmin: true })
	}

	const handleLogout = () => {
		setIsLoggedIn(false)
		setUser(null)
	}

	return (
		<div className="container mx-auto h-screen grid place-items-center bg-[#1e1e1e]">
			<div className="p-6 mx-auto bg-green-200 rounded-xl shadow-md items-center justify-center">
				{/* IF-ELSE */}
				{isLoggedIn ? (
					<button
						onClick={handleLogout}
						className="bg-red-500 text-black px-4 py-2 rounded hover:bg-red-600"
					>
						登出
					</button>
				) : (
					<button
						onClick={handleLogin}
						className="bg-blue-500 text-gray-200 px-4 py-2 rounded hover:bg-blue-600"
					>
						登入
					</button>
				)}

				{/* AND運算 */}
				{user && (
					<div className="mt-4 p-4 bg-gray-300 rounded">
						<p className="text-gray-900">Welcome, {user.name}</p>
						{/* 巢狀條件 */}
						{user.isAdmin && (
							<span className="inline-block bg-yellow-200 px-2 rounded text-sm text-black">Admin</span>
						)}
					</div>
				)}

				{/* Switch Case模式 */}
				<div className="mt-4">
					<select
						value={theme}
						onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
						className="border rounded p-1 text-black"
					>
						<option value="light">Light</option>
						<option value="dark">Dark</option>
					</select>

					<div className="mt-2">
						{{
							'light': <div className="bg-gray-100 p-2 rounded text-gray-900">淺色主題</div>,
							'dark': <div className="bg-gray-800 text-gray-200 p-2 rounded">深色主題</div>
						}[theme]}
					</div>
				</div>
			</div>
		</div>
	)
}
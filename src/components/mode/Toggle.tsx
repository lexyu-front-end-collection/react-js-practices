import { Moon, Sun } from "lucide-react"
import { Button } from '@/components/ui/button'
import { useTheme } from "@/components/mode/ThemeProvider"

export function Toggle() {
	const { theme, setTheme } = useTheme()

	return (
		<div className="flex items-end justify-end">
			{theme !== "light" && (
				<Button variant="outline" onClick={() => setTheme("light")}
					className="h-10 w-10 rounded-full"
				>
					<Sun className="h-5 w-5" />
				</Button>
			)}
			{theme !== "dark" && (
				<Button variant="outline" onClick={() => setTheme("dark")}
					className="h-10 w-10 rounded-full"
				>
					<Moon className="h-5 w-5" />
				</Button>
			)}
		</div>
	)
}
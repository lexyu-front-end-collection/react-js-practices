export function debounce<T extends (...args: any[]) => any>(
	cb: T,
	delay = 1000
): (...args: Parameters<T>) => void {
	let timeout: ReturnType<typeof setTimeout>

	return (...args: Parameters<T>) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			cb(...args)
		}, delay)
	}
}

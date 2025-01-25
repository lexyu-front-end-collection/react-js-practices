// @ts-ignore
function throttle<T extends (...args: any[]) => any>(
	cb: T,
	delay = 1000
): (...args: Parameters<T>) => void {
	// 控制是否應該等待的標記
	let shouldWait = false
	// 等待執行時的參數暫存
	let waitingArgs: Parameters<T> | null = null

	// 處理等待時間結束後的邏輯
	const timeoutFunc = () => {
		if (waitingArgs == null) {
			// 如果沒有等待的參數，重設等待狀態
			shouldWait = false
		} else {
			// 有等待的參數，執行 callback 並安排下一次執行
			cb(...waitingArgs)
			waitingArgs = null
			setTimeout(timeoutFunc, delay)
		}
	}

	// 返回節流後的函數
	return (...args: Parameters<T>) => {
		if (shouldWait) {
			// 在等待期間，只儲存最新的參數
			waitingArgs = args
			return
		}

		// 不在等待期間，直接執行
		cb(...args)
		shouldWait = true
		setTimeout(timeoutFunc, delay)
	}
}
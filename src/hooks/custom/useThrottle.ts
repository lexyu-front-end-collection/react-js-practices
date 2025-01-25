import { useRef, useCallback } from "react";

/**
 * useState + useEffect + useRef
 */
// function useThrottle<T>(value: T, delay = 1000)

/**
 * useRef
 */
function useThrottle(cb: () => void, delay: number) {
	const lastRun = useRef(Date.now());

	return useCallback(function () {
		if (Date.now() - lastRun.current >= delay) {
			cb();
			lastRun.current = Date.now();
		}
	}, [cb, delay]);
}

export default useThrottle;
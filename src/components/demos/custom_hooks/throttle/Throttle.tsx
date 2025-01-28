import { useEffect, useState } from "react";
// import useThrottle from "@/hooks/custom/useThrottle";
import { useCharacters } from "@/hooks/custom/useCharacters";
import { Character } from "@/types/debounce_throttle";

function Throttle() {
	const [page, setPage] = useState(1)
	const [calls, setCalls] = useState(0);
	// const [position, setPosition] = useState(0);
	const [allCharacters, setAllCharacters] = useState<Character[]>([])

	const { data, error, isError, isLoading, isFetching, isSuccess } = useCharacters({ page: page }, undefined);
	console.log("throttle : ", data, error, isError, isLoading, isFetching);
	console.log("calls : ", calls);

	useEffect(() => {
		if (isSuccess) {
			setCalls(prev => prev + 1);
		}
	}, [isSuccess]);

	useEffect(() => {
		if (data?.results) {
			setAllCharacters(prev => [...prev, ...data.results]);
		}
	}, [data]);

	// removable
	// const throttledSetPosition = useThrottle(() => {
	// 	const scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);
	// 	setPosition(Math.round(scrollPosition * 100));
	// }, 200);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					if (!isLoading && !isFetching && data?.info.next) {
						setPage((prev) => prev + 1);
					}
				}
			},
			{
				threshold: 0.9,
			}
		);

		const sentinel = document.getElementById('scroll-sentinel');
		if (sentinel) observer.observe(sentinel);

		// window.addEventListener('scroll', throttledSetPosition); // removable
		return () => {
			observer.disconnect();
			// window.removeEventListener('scroll', throttledSetPosition); // removable
		};
	}, [
		// throttledSetPosition // removable
		, isLoading
		, isFetching
		, data?.info.next
	]);

	return (

		<div>
			<div className="sticky top-0">
				<p className="text-xl">Calls: {calls}</p>
				<button
					className="my-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
					onClick={() => setCalls(0)}
				>
					Reset calls
				</button>
				<p className="text-xl">Position: {""}%</p>
			</div>

			<div className="max-w-[300px] mx-auto grid grid-cols-1 gap-4">
				{
					allCharacters?.map((c) => {
						return (
							<div key={c.id} className="">
								<img src={c.image} className="border border-cyan-200 rounded-3xl" />
								<p className="text-sm text-center">{c.name}</p>
							</div>
						)
					})
				}
			</div>
			<div id="scroll-sentinel" className="h-[5px]" />
		</div>
	)
}

export default Throttle;
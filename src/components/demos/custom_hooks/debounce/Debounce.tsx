import { useState } from "react";
import useDebounce from "@/hooks/custom/useDebounce";
import { useCharacters } from "@/hooks/custom/useCharacters";

function Debounce() {
	const [name, setName] = useState("");
	const [calls, setCalls] = useState(0);

	const debouncedValue = useDebounce(name, 750);
	const { data, error, isError } = useCharacters(debouncedValue, setCalls);
	console.log(data, error, isError);


	return (
		<>
			<input placeholder="Search Name"
				className="w-1/3 text-black font-extrabold"
				onChange={(e) => setName(e.target.value)} />
			<h2 className="font-bold text-2xl">
				The API has been called {calls} {calls === 1 ? "time" : "times"}
			</h2>

			<p className="text-xl">
				Name: {name}
			</p>
			<p className="text-xl">
				debouncedValue: {debouncedValue}
			</p>

			{
				isError ? <p className="text-red-500 text-2xl">{error.message}</p>
					: (
						<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
							{
								data?.results.map((c) => {
									return (
										<div key={c.id} className="">
											<img src={c.image} className="border border-cyan-200 rounded-3xl" />
											<p className="text-sm text-center">{c.name}</p>
										</div>
									)
								})
							}
						</div>
					)
			}

		</>
	)
}

export default Debounce;
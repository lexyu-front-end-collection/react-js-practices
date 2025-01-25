import { Character } from "@/types/debounce_throttle";

function qs(params: Record<string, string>) {
	return Object.keys(params)
		.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
		.join('&');
}

export async function fetchCharacters(
	name: string,
	setCalls?: React.Dispatch<React.SetStateAction<number>>
): Promise<{ results: Character[] }> {
	const response = await fetch(`https://rickandmortyapi.com/api/character?${qs({ name })}`);
	if (setCalls) setCalls(prev => prev + 1);

	if (!response.ok) {
		const errorBody = await response.json();
		throw new Error(`Error: ${response.status} ${JSON.stringify(errorBody)}`);
	}

	const data = await response.json();
	return data;
}



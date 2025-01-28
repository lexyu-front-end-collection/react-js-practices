import { QueryParams, RickAndMortyResponse } from "@/types/debounce_throttle";

function qs(params: Partial<Record<keyof QueryParams, string | number>>) {
	const validParams = Object.entries(params)
		.filter(([_, value]) => value !== undefined && value !== '')
		.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

	return new URLSearchParams(validParams).toString();
}

export async function fetchCharacters(
	params: QueryParams,
	setCalls?: React.Dispatch<React.SetStateAction<number>>
): Promise<RickAndMortyResponse> {
	const response = await fetch(`https://rickandmortyapi.com/api/character?${qs(params)}`);
	if (setCalls) setCalls(prev => prev + 1);

	if (!response.ok) {
		const errorBody = await response.json();
		throw new Error(`Error: ${response.status} ${JSON.stringify(errorBody)}`);
	}

	const data: RickAndMortyResponse = await response.json();
	return data;
}



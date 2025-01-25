import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '@/apis/fetchCharacters';
import { Character } from '@/types/debounce_throttle';

export const useCharacters = (
	name: string,
	setCalls?: React.Dispatch<React.SetStateAction<number>>
) => {
	return useQuery<{ results: Character[] }>({
		queryKey: ['characters', { name }],
		queryFn: () => fetchCharacters(name, setCalls),
	});
};
import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '@/apis/fetchCharacters';
import { QueryParams } from '@/types/debounce_throttle';

export const useCharacters = (
	params: QueryParams,
	setCalls?: React.Dispatch<React.SetStateAction<number>>
) => {
	return useQuery({
		queryKey: ['characters', { ...params }],
		queryFn: () => fetchCharacters(params, setCalls),
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		staleTime: 5 * 1000,
	});
};
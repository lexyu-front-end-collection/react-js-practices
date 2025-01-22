import { useQuery } from '@tanstack/react-query';
import { fetchComments } from '@/apis/fetchComments';

export const useComments = (id) => {
    return useQuery({
        queryKey: ['comments', { id }],
        queryFn: () => fetchComments(id),
        enabled: id > 0,
    });
};
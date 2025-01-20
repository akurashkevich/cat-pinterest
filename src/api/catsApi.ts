const CATS_API_URL = 'https://api.thecatapi.com/v1/images/search';

export const fetchCats = async ({ pageParam }: {pageParam: number}) => {
    const token = import.meta.env.VITE_API_KEY;
    const response = await fetch(`${CATS_API_URL}?limit=24&page=${pageParam}`, {
        headers: {
            'x-api-key': `${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch cats');
    }

    return response.json();
};
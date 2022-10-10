export const useFetchConfig = () => {
	const config = useRuntimeConfig();
	// console.log(config);
	return { baseURL: config.public.apiBase };
};

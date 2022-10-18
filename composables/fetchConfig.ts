export const useFetchConfig = () => {
  const config = useRuntimeConfig()
  return {
    config: { baseURL: config.public.apiBase },
    host: <string>config.public.host,
  }
}

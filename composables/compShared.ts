export const useCompSharedData = () => {
  interface CompCommonProps {
    compData: any
    id: string
  }

  const { compData, id } = defineProps<CompCommonProps>()
  const { host } = useFetchConfig()

  return { compData, id, host }
}

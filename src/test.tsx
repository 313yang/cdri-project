import { useQuery, useQueryClient, queryOptions } from '@tanstack/react-query'
// ...

const options = queryOptions<any>({
  queryKey: ['delay'],
  queryFn: async () => (await fetch('https://api.heropy.dev/v0/delay?t=1000')).json(),
  staleTime: 1000 * 10
})

export default function DelayedData() {
  const queryClient = useQueryClient()
  const { data, isStale } = useQuery(options)
  
  async function fetchData() {
    const data = await queryClient.fetchQuery(options)
    console.log(data) // 캐시된 데이터 or 새로 가져온 데이터
  }
  return (
    <>
      <div>{data?.time}</div>
      <div>데이터가 상했나요?: {JSON.stringify(isStale)}</div>
      <button onClick={fetchData}>데이터 가져오기!</button>
    </>
  )
}
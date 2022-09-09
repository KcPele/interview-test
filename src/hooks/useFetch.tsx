import { useQuery } from "@tanstack/react-query"

const useFetch = () => {
  const { isLoading, error, data } = useQuery(['graphData'], () =>
  fetch('http://test.api.mainstack.io/').then(res =>
    res.json()
  )
)

  
  return {

    isLoading,
    data,
    error
  }
}

export default useFetch
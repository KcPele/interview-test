import { useCallback } from "react"
const useFetch = () => {

    const getData =  useCallback(async () => {
          let response = await fetch('http://test.api.mainstack.io/')
          return await response.json()
    }, [])
  
  return {
    getData
  }
}

export default useFetch
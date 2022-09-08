
const useFetch = () => {

    const getData = async () => {
          let response = await fetch('http://test.api.mainstack.io/')
          return await response.json()
    }
  
  return {
    getData
  }
}

export default useFetch
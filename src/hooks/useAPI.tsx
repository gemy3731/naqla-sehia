import { useState } from "react"
import baseurl from "../data/baseUrl"


const useAPI = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const GET = async (endpoint: string) => {
        setLoading(true)
    try {
        const response = await fetch(baseurl + endpoint)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setLoading(false)
        return data
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
        return null
      }
    }
  return {GET, loading}
}

export default useAPI
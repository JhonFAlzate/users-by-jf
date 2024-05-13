import axios from "axios"
import { useState } from "react"



const useCrud = (path) => {
  
    const [response, setResponse] = useState()
    const BASE_URL = 'https://users-crud.academlo.tech'

    const getApi = () => {
        const url = `${BASE_URL}${path}`
        axios.get(url)
        
            .then(res =>  {
                console.log(res.data)
                setResponse(res.data)
             })
            .catch (err => console.log(err))
     }

     const postApi = (data) => {
        const url = `${BASE_URL}${path}`
        axios.post(url, data)

            .then(res => {
                
                setResponse([...response, res.data])
            })

            .catch (err => console.log(err))
     }

     const deleteApi = (id) => {
        const url = `${BASE_URL}${path}${id}/`
        axios.delete(url)
        .then(res => {
            
            setResponse(response.filter(e => e.id !== id))
            
        })

        .catch (err => console.log(err))

     }
    const updateApi = (id, data) => {
        const url = `${BASE_URL}${path}${id}/`
        axios.patch(url, data)
        .then(res => {
            
            setResponse(response.map(e => e.id === id ? res.data : e))
        })

        .catch (err => console.log(err))


    }

    return[response, getApi, postApi, deleteApi, updateApi]
  
}

export default useCrud
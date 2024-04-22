import axios from "axios"
import { useState } from "react"

const useCrud = (base) => {
    const [apiData, setApiData] = useState()
    const [isLogin, setIsloading] = useState(true)
    const [hasError, setHasError] = useState(false)

    //Leer
    const getApi = (path) => {
        const url = `${base}${path}/`
        axios.get(url)
            .then(res => setApiData(res.data))
            .catch(err => console.log(err))
            .finally(() => setIsloading(false))
    }

    //Crear
    const postApi = (path, data) => {
        const url = `${base}${path}/`
        axios.post(url, data)
            .then(res => {/*spread operator*/
                setApiData([...apiData, res.data])
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    //Eliminar
    const deleteApi = (path, id) => {
        const url = `${base}${path}/${id}/`
        axios.delete(url)
            .then(() => {
                setApiData(apiData.filter((user) =>
                    user.id !== id
                ))
                console.log('Delete success')
            })
            .catch(err => console.log(err))
    }

    //Actualizar
    const patchApi = (path, data, id) => {
        const url = `${base}${path}/${id}/`
        axios.patch(url, data)
            .then(res => {
                setApiData(apiData.map((user) =>
                    user.id === id ? res.data : user
                ))
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return [apiData, isLogin, getApi, postApi, deleteApi, patchApi]

}

export default useCrud
import { useState } from 'react'
import { GET_TODO_ITEMS } from '../../constants';
import { fetcher } from '../../utils/axiosInstance'

const useDetail = () => {
    const [details, setDetails] = useState([])
    const [isLoading, setIsLoading] = useState(false);


    const getListItemTodo = async () => {
        setIsLoading(true)
        try {
            const res = await fetcher.get(GET_TODO_ITEMS)
            if (res) {
                setDetails(res?.data?.data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        getListItemTodo, details, isLoading
    )
}

export default useDetail
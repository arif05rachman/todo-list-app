import { useState } from 'react'
import { CREATE_ACTIVITY, DELETE_ACTIVITY, GET_ALL_ACTIVITY } from '../../constants'
import { fetcher } from '../../utils/axiosInstance'

const useDashboard = () => {
    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getListActivity = async () => {
        setIsLoading(true)
        try {
            const res = await fetcher.get(GET_ALL_ACTIVITY)
            if (res) {
                setActivities(res?.data?.data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const createActivity = async () => {
        setIsLoading(true)
        const payload = {
            title: 'New Activity',
            email: 'mafifsolahudin@gmail.com'
        }
        try {
            await fetcher.post(CREATE_ACTIVITY, payload)
            getListActivity()
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const deleteActivity = async (id) => {
        setIsLoading(true)
        try {
            await fetcher.delete(`https://todo.api.devcode.gethired.id/activity-groups:${id}`)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        getListActivity,
        activities,
        isLoading,
        createActivity,
        deleteActivity
    }

}

export default useDashboard
import { useState } from "react"
import { CREATE_ACTIVITY, DELETE_ACTIVITY, GET_ALL_ACTIVITY } from "../../constants"
import { fetcher } from "../../utils/axiosInstance"

const useDashboard = () => {
    const [activities, setActivities] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [activity, setActivity] = useState("")
    const [modalInfo, setModalInfo] = useState(false)

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
            title: "New Activity",
            email: "mafifsolahudin@gmail.com"
        }
        try {
            const res = await fetcher.post(CREATE_ACTIVITY, payload)
            if (res) {
                getListActivity()
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const deleteActivity = async () => {
        setIsLoading(true)
        try {
            const res = await fetcher.delete(DELETE_ACTIVITY(activity.id))
            if (res) {
                setShowModal(false)
                setActivity({})
                setModalInfo(true)
                getListActivity()
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDelete = (value) => {
        setShowModal(true)
        setActivity(value)
    }

    const handleCancelDelete = () => {
        setShowModal(false)
        setActivity({})
    }

    return {
        getListActivity,
        activities,
        isLoading,
        showModal,
        activity,
        modalInfo,
        setModalInfo,
        handleDelete,
        handleCancelDelete,
        createActivity,
        deleteActivity
    }
}

export default useDashboard

import React, { useEffect, useState } from "react"
import Button from "../../components/Button"
import Card from "../../components/Card"
import emptyDashboardImage from "../../assets/image/activity-empty-state.svg"
import useDashboard from "./useDashboard"
import dayJs from "dayjs"
import Loading from "../../components/Loading"
import ModalDelete from "../../components/Modal/ModalDelete"
import ModalInformation from "../../components/Modal/ModalInformation"

const Dashboard = () => {
    const {
        getListActivity,
        createActivity,
        handleCancelDelete,
        deleteActivity,
        showModal,
        handleDelete,
        activity,
        activities,
        isLoading,
        modalInfo,
        setModalInfo
    } = useDashboard()
    useEffect(() => {
        getListActivity()
    }, [])

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className='container'>
                    <div style={{ margin: "43px 0 55px" }} className='flex flex-row justify-between'>
                        <h1 data-cy='activity-title' className='text-4xl font-bold'>
                            Activity
                        </h1>
                        <Button dataCy='activity-add-button' text='Tambah' onClick={createActivity} />
                    </div>
                    {activities?.length ? (
                        <div className='dasboard-content w-full'>
                            <div className='row flex flex-wrap gap-5 '>
                                {activities.map((item) => {
                                    return (
                                        <Card
                                            key={item.id}
                                            title={item.title}
                                            handleClickDelete={() => handleDelete(item)}
                                            date={dayJs(item.date).format("DD MMMM YYYY")}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className='flex items-center w-full'>
                            <img
                                style={{ margin: "0 auto" }}
                                className='align-middle'
                                src={emptyDashboardImage}
                                alt='empty-dashboard-image'
                            />
                        </div>
                    )}
                </div>
            )}
            <div data-cy='modal-delete'>
                {showModal && (
                    <ModalDelete
                        actionCancelDelete={handleCancelDelete}
                        actionDelete={deleteActivity}
                        text='activity'
                        activity={activity}
                    />
                )}
            </div>
            <div data-cy='modal-information'>
                {modalInfo && (
                    <ModalInformation
                        modalInfo={modalInfo}
                        setModalInfo={setModalInfo}
                        text='activity berhasil dihapus'
                    />
                )}
            </div>
        </>
    )
}

export default Dashboard

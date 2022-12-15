import React from "react"
import modalDeleteIcon from "../../../assets/image/modal-delete-icon.svg"

const ModalDelete = ({ activity, text, actionDelete, actionCancelDelete }) => {
    return (
        <>
            <div
                data-cy='todo-modal-delete'
                className='justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none'
            >
                <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                    <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-[490px] bg-white outline-none focus:outline-none'>
                        <div className='flex items-center p-5 rounded-t'>
                            <img
                                data-cy='modal-delete-icon'
                                style={{ margin: "0 auto" }}
                                className='items-center'
                                src={modalDeleteIcon}
                                alt='modal-delete-icon'
                            />
                            <h4 data-cy='modal-delete-title'></h4>
                        </div>
                        <div className='relative p-6 flex-auto text-center'>
                            <p className='my-4 text-[#111] text-lg leading-relaxed'>
                                Apakah anda yakin menghapus {text} <span>{activity.name}</span>?
                            </p>
                        </div>
                        <div className='flex items-center justify-center p-6 rounded-b gap-16'>
                            <button
                                data-cy='modal-delete-cancel-button'
                                style={{ padding: "13px 14px", borderRadius: "45px", width: "150px", height: "54px" }}
                                className='text-[#4a4a4a] bg-[#f4f4f4] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                type='button'
                                onClick={actionCancelDelete}
                            >
                                Batal
                            </button>
                            <button
                                data-cy='activity-item-delete-button'
                                // data-cy='modal-delete-confirm-button'
                                style={{ padding: "13px 14px", borderRadius: "45px", width: "150px", height: "54px" }}
                                className='bg-danger text-white font-semibold text-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                type='button'
                                onClick={actionDelete}
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
    )
}

export default ModalDelete

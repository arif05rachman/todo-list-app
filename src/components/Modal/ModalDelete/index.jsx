import React from "react";
import modalDeleteIcon from '../../../assets/image/modal-delete-icon.svg'

const ModalDelete = ({ text, name }) => {
    return (
        <>
            <div
                data-cy='modal-delete'
                className="justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center p-5 rounded-t">
                            <img style={{ margin: '0 auto' }} className="items-center" src={modalDeleteIcon} alt="modal-delete-icon" />
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto text-center">
                            <p className="my-4 text-[#111] text-lg leading-relaxed">
                                Apakah anda yakin menghapus {text} <span>{name}</span>?
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-center p-6 rounded-b gap-16">
                            <button
                                style={{ padding: '13px 14px', borderRadius: '45px', width: '150px', height: '54px' }}
                                className="text-[#4a4a4a] bg-[#f4f4f4] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Batal
                            </button>
                            <button
                                style={{ padding: '13px 14px', borderRadius: '45px', width: '150px', height: '54px' }}
                                className="bg-danger text-white font-semibold text-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default ModalDelete
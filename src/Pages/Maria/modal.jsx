import React from "react";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-10 mt-24 bg-transparent justify-center items-center">
            <div className="bg-[#4A235A] border-2 border-[#F4D03F] rounded-lg p-3 max-w-sm mx-auto">
                <div className="modal-body">
                    <h5 className="text-lg font-bold">Start a Conversation</h5>
                    <p className="mt-2">Press the microphone button and start speaking when prompted.</p>
                    <hr className="my-4" />
                    <h5 className="text-lg font-bold">Finish the conversation</h5>
                    <p className="mt-2">To end the conversation say “BYE” and press the microphone button again to deactivate it.</p>
                </div>
                <div className="mt-4 flex justify-end">
                    <button onClick={onClose} className="px-4 font-bold py-2 bg-[#F4D03F] text-white rounded hover:bg-yellow-600">
                        Got It
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
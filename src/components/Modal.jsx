import { Button } from '@material-tailwind/react';
import React, { useEffect } from 'react';

const Modal = ({ onClose, modal }) => {
    const { thanks, close } = modal
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50" onClick={onClose}>
            <div className="bg-white p-6 rounded-md flex flex-col m-16" onClick={handleModalClick}>
                <p className="text-lg font-semibold mb-4 text-center">{thanks}</p>
                <Button className="mt-4" onClick={onClose} >
                    {close}
                </Button>
            </div>
        </div>
    );
};

export default Modal;

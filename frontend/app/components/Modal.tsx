// frontend/app/components/Modal.tsx
import { Dialog, DialogTitle } from '@headlessui/react';
import { FiX } from 'react-icons/fi';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => (
  <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="fixed inset-0 bg-black opacity-30" />
      <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-full p-6 mx-auto border border-borderColor">
        <div className="flex justify-between items-center">
          <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
          <button onClick={onClose} className="text-secondaryText hover:text-primaryText">
            <FiX />
          </button>
        </div>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  </Dialog>
);

export default Modal;

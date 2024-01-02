'use client';

import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Modal } from './Modal';

export const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        className='btn btn-primary w-full'
        onClick={() => setModalOpen(!modalOpen)}
      >
        Add new Task <AiOutlinePlus className='ml-2' size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

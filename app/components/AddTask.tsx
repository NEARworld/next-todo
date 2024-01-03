'use client';

import { FormEventHandler, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Modal } from './Modal';
import { addTodo } from '@/app/pages/api/api';
import { useRouter } from 'next/navigation';

export const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>('');
  const router = useRouter();

  const handleSubmitNewTask: FormEventHandler = (e) => {
    e.preventDefault();
    addTodo(newTaskValue);
    setNewTaskValue('');
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        className='btn btn-primary w-full'
        onClick={() => setModalOpen(!modalOpen)}
      >
        Add new Task <AiOutlinePlus className='ml-2' size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTask}>
          <h3 className='font-bold text-lg'>Add new task</h3>
          <div className='modal-action'>
            <input
              type='text'
              value={newTaskValue}
              placeholder='Type here'
              className='input input-bordered w-full'
              onChange={(e) => setNewTaskValue(e.target.value)}
            />
            <button className='btn btn-primary'>submit</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

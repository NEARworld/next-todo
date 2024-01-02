'use client';

import { Task as TaskType } from '@/types/tasks';
import { FC, FormEventHandler, useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Modal } from './Modal';
import { editTodo } from '@/api';

type Props = {
  task: TaskType;
};

export const Task: FC<Props> = ({ task }) => {
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState('');

  const handleSubmitEditTodo: FormEventHandler = (e) => {
    e.preventDefault();
    editTodo({ id: task.id, text: taskToEdit });
    setTaskToEdit('');
    setModalEditOpen(false);
  };

  return (
    <tr key={task.id}>
      <td>{task.id}</td>
      <td>{task.text}</td>
      <td className='flex gap-3'>
        <FiEdit
          onClick={() => setModalEditOpen(!modalEditOpen)}
          className='text-blue-500 cursor-pointer'
          size={25}
        />
        <Modal modalOpen={modalEditOpen} setModalOpen={setModalEditOpen}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className='font-bold text-lg'>edit task</h3>
            <div className='modal-action'>
              <input
                type='text'
                value={taskToEdit}
                placeholder='Type here'
                className='input input-bordered w-full'
                onChange={(e) => setTaskToEdit(e.target.value)}
              />
              <button className='btn btn-primary'>submit</button>
            </div>
          </form>
        </Modal>
        <FiTrash2 className='text-red-500 cursor-pointer' size={25} />
      </td>
    </tr>
  );
};

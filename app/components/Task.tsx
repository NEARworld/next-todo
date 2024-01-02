'use client';

import { Task as TaskType } from '@/types/tasks';
import { FC, FormEventHandler, useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Modal } from './Modal';
import { deleteTodo, editTodo } from '@/api';
import { useRouter } from 'next/navigation';

type Props = {
  task: TaskType;
};

export const Task: FC<Props> = ({ task }) => {
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState('');
  const router = useRouter();

  const handleSubmitEditTodo: FormEventHandler = (e) => {
    e.preventDefault();
    editTodo({ id: task.id, text: taskToEdit });
    setTaskToEdit('');
    setModalEditOpen(false);
    router.refresh();
  };

  const handleDeleteTodo = () => {
    deleteTodo(task.id);
    setModalDeleteOpen(false);
    router.refresh();
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
        <FiTrash2
          onClick={() => setModalDeleteOpen(!modalDeleteOpen)}
          className='text-red-500 cursor-pointer'
          size={25}
        />
        <Modal modalOpen={modalDeleteOpen} setModalOpen={setModalDeleteOpen}>
          <h3 className='font-bold text-lg'>
            Are you sure, you want to delete this task?
          </h3>
          <div className='modal-action'>
            <button className='btn' onClick={() => handleDeleteTodo()}>
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

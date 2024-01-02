import { Task as TaskType } from '@/types/tasks';
import { FC } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

type Props = {
  task: TaskType;
};

export const Task: FC<Props> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.id}</td>
      <td>{task.text}</td>
      <td className='flex gap-3'>
        <FiEdit className='text-blue-500 cursor-pointer' size={25} />
        <FiTrash2 className='text-red-500 cursor-pointer' size={25} />
      </td>
    </tr>
  );
};

import { FC } from 'react';
import { Task as TaskType } from '@/types/tasks';
import { Task } from './Task';

type Props = {
  tasks: TaskType[];
};

export const TodoList: FC<Props> = ({ tasks }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>id</th>
            <th>task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

import { Task as TaskType } from '@/types/tasks';
import { FC } from 'react';

type Props = {
  task: TaskType;
};

export const Task: FC<Props> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.id}</td>
      <td>{task.text}</td>
    </tr>
  );
};

import { getAllTodos } from '@/app/pages/api/api';
import { AddTask } from './components/AddTask';
import { TodoList } from './components/TodoList';

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Next Todo App</h1>
        <AddTask />
        <TodoList tasks={tasks} />
      </div>
    </main>
  );
}

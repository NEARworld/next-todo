'use server';

import { PrismaClient } from '@prisma/client';
import { Task } from './types/tasks';

const prisma = new PrismaClient();

export const getAllTodos = async () => {
  return await prisma.todo.findMany({ orderBy: { id: 'asc' } });
};

export const addTodo = async (text: string) => {
  await prisma.todo.create({ data: { text } });
};

export const editTodo = async (todo: Task): Promise<Task> => {
  const editedTodo = await prisma.todo.update({
    where: {
      id: todo.id,
    },
    data: {
      text: todo.text,
    },
  });

  return editedTodo;
};

export const deleteTodo = async (id: number) => {
  await prisma.todo.delete({ where: { id } });
};

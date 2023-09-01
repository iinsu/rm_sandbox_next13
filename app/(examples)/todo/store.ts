import { create } from "zustand";

export type TodoType = {
  id?: number;
  text?: string;
};

type TodoListProps = {
  todoList: TodoType[];
  addTodo: (newTodo: TodoType) => void;
  deleteTodo: (TodoItem: TodoType) => void;
};

export const useListStore = create<TodoListProps>((set) => ({
  todoList: [],
  // Todo 추가
  addTodo: (newTodo) =>
    set((props) => {
      return { todoList: [...props.todoList, newTodo] };
    }),

  // Todo 제거
  deleteTodo: (todo) => {
    set((props) => {
      const filteredList = props.todoList.filter((item) => item.id !== todo.id);
      return { todoList: filteredList };
    });
  },
}));

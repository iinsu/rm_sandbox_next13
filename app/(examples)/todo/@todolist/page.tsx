"use client";

import { useListStore } from "../store";
import { TodoType } from "../store";
const buttnStyle = `
  ml-3
  hover:text-red-500
`;

const TodoListPage = () => {
  const { todoList, deleteTodo } = useListStore();
  const handleClick = (el: TodoType) => {
    deleteTodo(el);
  };

  return (
    <>
      <h3>Todo List</h3>
      <hr />
      <ul>
        {todoList?.map((el) => (
          <li key={el.id}>
            <span>{el.text}</span>
            <button className={buttnStyle} onClick={() => handleClick(el)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoListPage;

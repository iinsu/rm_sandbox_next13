"use client";

import { Controller, useForm } from "react-hook-form";

import { useListStore } from "../store";

interface InputDataProps {
  todo?: string;
}

const TodoInputPage = () => {
  const { control, handleSubmit } = useForm();
  const { addTodo, todoList } = useListStore();
  const handleAddTodo = (data: InputDataProps) => {
    addTodo({ id: todoList.length, text: data.todo });
  };

  return (
    <>
      <h3>Todo Input</h3>
      <hr />
      <form onSubmit={handleSubmit(handleAddTodo)}>
        <Controller
          control={control}
          name="todo"
          render={({ field }) => (
            <input onChange={field.onChange} className="border" />
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default TodoInputPage;
